# MSAL Example


## FOSS Licenses
Be aware that this repository contains copies of the following FOSS software components:

| Source                                                                                                           | Proprietor | License |
| ---------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| [MSAL Tutorial](https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-nodejs-webapp-msal) | Microsoft  | MIT     |

## Description

This is a sample project where you can simply use Microsoft account to login to any webpage.

It is changed to keep only the required steps. The original documentation from Microsoft can be found [here](https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-nodejs-webapp-msal).

To run the project you need to do the following steps

1. Clone the project

1. add `.env` file with the following variables in the root directory

```
CLOUD_INSTANCE=https://login.microsoftonline.com/ # cloud instance string should end with a trailing slash

TENANT_ID="corptb.onmicrosoft.com" # your tenant id

CLIENT_ID="" # applications client id, can be found on AAD

CLIENT_SECRET="" # your client secret, can be generated in AAD

REDIRECT_URI=http://localhost:3000/auth/redirect

POST_LOGOUT_REDIRECT_URI=http://localhost:3000

EXPRESS_SESSION_SECRET="" # just a random string

```
3. run `npm install`
   
4. run `npm start`
   
5. goto the [localhost:3000](http://localhost:3000)