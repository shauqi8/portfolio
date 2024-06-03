# portfolio
Step 1: Upload Your Website Files
Clone the Repository Locally:
Open your terminal or command prompt and run the following command to clone the repository to your local machine:
git clone https://github.com/your-username/portfolio.git

Copy Your Website Files:
Copy all your website files (index.html, styles.css, scripts.js, and images) into the cloned repository directory.

Commit and Push Your Changes:
Navigate to your repository directory in the terminal and run the following commands:
git add .
git commit -m "Initial commit of portfolio website"
git push origin main

Step 2: Enable GitHub Pages
Go to Repository Settings:
Navigate to your repository on GitHub.

Click on the "Settings" tab.
Scroll down to the "GitHub Pages" section.
Configure GitHub Pages:

Under "Source", select the branch you want to use (main or master) and the / (root) folder.
Click "Save".
Get Your GitHub Pages URL:
After saving, you will see a URL like https://your-username.github.io/portfolio/. This is your live website URL.

Step 3: Connect Your Custom Domain
Configure Custom Domain in GitHub:
In the same "GitHub Pages" section of your repository settings, enter your custom domain (labq1.cloud) (in my project the labq1.cloud is my custom domain. in the "Custom domain" field.
Click "Save".

Set Up DNS Records in Hostinger: ( I use hostinger for my domain provider )
Log in to your Hostinger account.
Go to the "Domains" section and find your domain (labq1.cloud).
Click on "DNS Zone" to manage your DNS records.
Add the following DNS records:

Type	Name	Value
A	@	185.199.108.153
A	@	185.199.109.153
A	@	185.199.110.153
A	@	185.199.111.153
CNAME	www	your-username.github.io
Verify DNS Configuration:
It may take some time for DNS changes to propagate. You can check the status of your DNS propagation using tools like DNS Checker.

Step 4: Verify Your Website
After the DNS changes have propagated, your website should be accessible at http://labq1.cloud. You can verify it by opening the URL in your browser.


Summary of Steps
Create a GitHub repository and upload your website files.
Enable GitHub Pages in your repository settings.
Configure your custom domain in GitHub Pages settings.
Set up the necessary DNS records in your Hostinger account.
Verify your website at your custom domain.
