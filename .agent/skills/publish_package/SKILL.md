---
name: publish_package
description: Automates the process of fetching the latest version, incrementing it, building, and publishing the package to npm.
---

# Publish Package Workflow

This skill guides you through the process of updating and publishing the package.

## Steps

### 1. Get Package Information
First, determine the package name from `package.json`.
- Read `package.json` to find the `name` property.

### 2. Check Published Version
Find the currently published version to ensure we increment correctly.
- Run `npm view <package_name> version` to get the latest published version.
- If the command fails (e.g., package not published), assume version `0.0.0` or use the version currently in `package.json`.

### 3. Increment Version
Calculate the next version number.
- Parse the version string (e.g., "0.0.28").
- Increment the patch version (the last number) by 1 (e.g., "0.0.29").
- *Note: If the user specifically requested a minor or major bump, adjust accordingly, otherwise default to patch.*

### 4. Update package.json
Update the `version` field in `package.json` with the new version.
- Use `replace_file_content` to update the file.

### 5. Build Package
Run the build script to ensure the code is ready for publishing.
- Run `npm run build`.
- **CRITICAL**: If this command fails, **STOP** and report the error to the user. Do not proceed to publish.

### 6. Publish Package
If the build was successful, publish the package.
- Run `npm publish`.
- Ensure you handle any authentication prompts or errors if they arise (though usually `.npmrc` handles this).

### 7. Final Verification
- Notify the user of the success and the new published version.
