# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

| File or Folder | Purpose                              |
| -------------- | ------------------------------------ |
| `db/`          | your domain models and data go here  |
| `srv/`         | your service models and code go here |
| `package.json` | project metadata and configuration   |
| `readme.md`    | this getting started guide           |

## Prerequisite

1. You need to create a Job Scheduling Service instance called **jobscheduler** on SAP BTP Subaccount
   or, if you have an existing instance, you need to properly edit mta.yaml file

2. After cloning this repo, create **.env** file on root folder and enter this variable

`EMAIL_USER`=_write mail sender_
`EMAIL_PASSWORD`=_write password for mail sender_
`EMAIL_RECIPIENT`=_write mail reciver_

## Next Steps

- Install dependencies: `npm i`
- Login to CF: `cf login`
- Build: `mbt build`
- Deploy: `deploy mta_archives/bookshop_sample_1.0.0.mtar`
- Check if service keys exist for db and auth service: `cf service-keys SERVICE_INSTANCE_NAME`
- Create service keys if necessary: `cf create-service-key SERVICE_INSTANCE_NAME SERVICE_INSTANCE_KEY`
- Binding to service instances: `cds bind -2 SERVICE_INSTANCE_NAME:SERVICE_INSTANCE_KEY`
- Check if file .cdsrc-private.json has been created after service binding
- Start: `cds watch --profile hybrid`

## Tips

1. If an error like

_Async operation for service binding between app ".." and service instance "jobscheduler" failed with "10009 CF-UnableToPerform bind could not be completed: Service broker error: Service broker jobscheduler-broker failed with: No xsuaa service instance bound to the application. Please bind xsuaa service instance to the application before binding jobscheduler service instance_

occured, please delete reference to jobscheduler on mta.yaml file, proceed with build and deploy. Insert again job scheduler reference on mta.yaml, build and deploy again.

2. If an error like

_username and password not accepted when using nodemailer_

occured during call handleNotification() action, please refer to this link: https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer
and create App password for gmail account
