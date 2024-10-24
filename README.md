# EzyMetrics Backend

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your environment variables in a `.env` file:
   - `MONGODB_URI`: MongoDB connection string
   - `EMAIL_USER`: Your email for alerts
   - `EMAIL_PASS`: Your email password
   - `ALERT_THRESHOLD`: Lead threshold for email alerts
4. Run `npm start` to start the server.
5. Endpoints:
   - `/api/fetch-data`: Fetch and store dummy data.
   - `/api/report?type=csv`: Generate CSV report.
   - `/api/report?type=pdf`: Generate PDF report.
