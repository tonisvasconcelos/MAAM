# Deployment Guide - BJJ Management System

This guide explains how to deploy the BJJ Management System to GitHub Pages so other users can access it.

## 🚀 Quick Deployment (Recommended)

### Option 1: Automatic Deployment with GitHub Actions

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial BJJ Management System setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository: https://github.com/tonisvasconcelos/MAAM
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy when you push to main branch

3. **Access your app**:
   - Your app will be available at: `https://tonisvasconcelos.github.io/MAAM/`
   - It may take a few minutes for the first deployment

### Option 2: Manual Deployment

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select **Deploy from a branch**
   - Choose **gh-pages** branch
   - Select **/ (root)** folder

## 🔧 Configuration Details

### Vite Configuration
The app is configured with:
- **Base path**: `/MAAM/` (matches your repository name)
- **Hash routing**: Used for GitHub Pages compatibility
- **Build output**: `dist/` folder

### GitHub Actions Workflow
Located at `.github/workflows/deploy.yml`:
- Triggers on push to main/master branch
- Builds the project automatically
- Deploys to GitHub Pages
- Uses Node.js 18 and npm

## 🌐 Access URLs

Once deployed, your app will be accessible at:
- **Main URL**: https://tonisvasconcelos.github.io/MAAM/
- **Direct links**:
  - Dashboard: https://tonisvasconcelos.github.io/MAAM/#/
  - Students: https://tonisvasconcelos.github.io/MAAM/#/students
  - Teachers: https://tonisvasconcelos.github.io/MAAM/#/teachers

## 🔄 Updating the App

To update the deployed app:

1. **Make your changes** locally
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   git push origin main
   ```
3. **GitHub Actions will automatically deploy** the changes
4. **Wait 2-3 minutes** for the deployment to complete

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error on refresh**:
   - This is normal with GitHub Pages
   - Use the navigation menu instead of refreshing
   - Hash routing handles this automatically

2. **Assets not loading**:
   - Check that the base path is set to `/MAAM/`
   - Ensure all assets are in the `dist/` folder

3. **Deployment fails**:
   - Check GitHub Actions tab for error logs
   - Ensure all dependencies are in package.json
   - Verify the build completes locally first

### Testing Locally with GitHub Pages Settings:

```bash
# Test with GitHub Pages base path
npm run preview:github
```

## 📱 Features Available Online

Once deployed, users can access:
- ✅ **Dashboard** with statistics
- ✅ **Language switching** (EN/PT)
- ✅ **Students management** (fully functional)
- ✅ **Responsive design** on all devices
- ✅ **Form validation** and error handling
- 📋 **Other modules** (showing "coming soon" placeholders)

## 🔐 Security Notes

- The app uses client-side data storage (mock data)
- No sensitive information is stored
- All data is local to the user's browser
- Ready for backend integration when needed

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify the repository settings
3. Test locally with `npm run preview:github`
4. Check the browser console for errors

Your BJJ Management System will be accessible to all users worldwide once deployed! 🥋
