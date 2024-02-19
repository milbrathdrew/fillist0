import { google } from 'googleapis';
import { getSession } from 'next-auth/react'; // Assuming you're using next-auth

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Load the user's session and credentials
      const session = await getSession({ req });
      console.log('Session:', session); // Log the session object

      if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Assuming the session object has the tokens
      const { accessToken, refreshToken } = session;

      // Check if accessToken and refreshToken are available
      if (!accessToken || !refreshToken) {
        console.error('Access token or refresh token is missing');
        return res.status(401).json({ error: 'Access token or refresh token is missing' });
      }

      // Create an OAuth2 client with the credentials
      const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
      );

      // Set the OAuth2 client credentials
      oauth2Client.setCredentials({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      // Create a Gmail client with the authorized OAuth2 client
      const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

      // Fetch the emails from the "Sent" folder
      const response = await gmail.users.messages.list({
        userId: 'me',
        labelIds: ['SENT'],
      });

      // Process the response and send the emails back to the client
      res.status(200).json(response.data);
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}