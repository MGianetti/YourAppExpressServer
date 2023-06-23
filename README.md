# YourAppExpressServer

This is the backend repository for the YourApp application. It uses the Express.js framework and Sequelize for ORM.

## Overview

The repository contains models for various aspects of the application including:
- `Client`
- `Product`
- `Professional`
- `Service`

These models have been implemented with 'soft delete' functionality for data safety and recoverability.

## Repository Structure

- `Client.constants.js` & `Client.js`: Contains constants and main model for Client entity.
- `Product.constants.js` & `Product.js`: Contains constants and main model for Product entity.
- `Professional.constants.js` & `Professional.js`: Contains constants and main model for Professional entity.
- `Service.constants.js` & `Service.js`: Contains constants and main model for Service entity.

All the files follow a clear naming convention for easier navigation.

## Recent Changes

- The models' files have been renamed according to a better convention for easier understanding and maintenance.
- The models have been updated with a 'soft delete' feature, providing an improved strategy for handling deletions of data.

## Setup and Running

To run this server, first ensure you have Node.js and npm installed.

Then, install the necessary dependencies:

```npm install```

To start the server in development mode, use the script:

```npm run dev```

## Contributions

This project is currently maintained by Mateus Gianetti de Jesus. Contributions are welcome. Please make sure to update tests as appropriate.

## Contact
For any queries, feel free to reach me out at `mateusgianetti1996@gmail.com`.

