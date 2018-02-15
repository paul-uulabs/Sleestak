SleeStak 1.0
============

Drupal 8 + Foundation + Backbone Example


Overview
========

Interested in setting up a headless Drupal 8 web app built on Foundation and Backbone? ... or maybe you just want an app part of your Drupal 8 install. Either way, this is a quick example / very slim starter kit to get you rolling. It includes a simple web app and an example service module all working together to get you started.


Installation
============

After you grab this repo do the following to get started:

1. Install Drupal and put the "app" folder in the Drupal root directory. This is your core app with Foundation and Backbone. 
2. Put the "app_service" folder (the demo module) in the modules directory.
3. Install the REST UI module (optional but recommended!). (https://www.drupal.org/project/restui)
4. Log into the Drupal admin and enable all the modules under "Web Services" (
HAL, HTTP Basic Authentication, REST UI, RESTful Web Services, Serialization )
5. Enable the "APP API" module under "Other".
6. Once the modules have been installed, navigate to admin/config/services/rest
(Configuration > Web Services > REST through the administration panel) and enable whatever services you may want to use. Default configuration is fine for this demo.
7. Go to your base url /app subdirectory and the app should load! It will render a drop down with nodes on your site. (If you have a lot of nodes in your Drupal install, you might want to tweak the service module example module.)
8. You can get to work modifying the app by navigating to the app directory in your terminal.

```
> npm install
> gulp
```

The files you want to work with are probably in the scss and js/src/app folders.

Once again, this is only intended to be a very simple example to help you get started with a Drupal 8 + Foundation + Backbone set up. Have fun!




