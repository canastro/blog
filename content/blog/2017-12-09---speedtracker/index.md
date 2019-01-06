---
path: "/2017-12-09---speedtracker"
title: SpeedTracker - Periodic Performance Tests
tags: ["performance"]
draft: false
date: "2017-12-09T22:00:00.000Z"
---

Are you tired of checking WebPageTest if your website's performance is still top notch after a couple of weeks of development? No worries, SpeedTracker will keep an eye for you!

# What is SpeedTracker?
It runs on top of [WebPageTest](https://www.webpagetest.org/) and makes periodic performance tests on your website and shows a visualisation of how the various performance metrics evolve over time.

# How to set it up?
It's pretty simple, fork the original repo, tweak some configurations and enable the repo to be served as a GitHub page.

Check the installation / configuration steps here: https://speedtracker.org/docs.

# Highlighted Features
### Multiple configurations
You don't need a instance of SpeedTracker per project, you can have multiple profiles.
One default profile should be defined, this will be the one loaded by default when you access the main page. Other profiles will be available under a dropdown on top right corner.

You can leverage this feature to configure multiple applications or even have multiple configurations for a single application.

SpeedTracker uses webpagetest-api node module to communicate with WebPageTest, check their [options](https://github.com/marcelduran/webpagetest-api#options) to understand which configurations can you set, a simple example would be to have different Connectivity configurations (e.g. Cable vs 3G) or different locations.

### Lighthouse report
> [Lighthouse](https://developers.google.com/web/tools/lighthouse/) analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.

To use Lighthouse, use one of the following settings as the location parameter on your profile:

```
Dulles_Linux:Chrome
Dulles_MotoG4:Chrome
Dulles_MotoG:Chrome
```

For example:
```
parameters:
  connectivity: "Cable"
  location: "Dulles_Linux:Chrome"
  runs: 1
  url: "https://canastro.github.io/blog/"
```

### Define budgets and alerts
Define limits that you find acceptable and get alerted if they are exceeded.

Configure your [alert](https://speedtracker.org/docs#alerts) configurations in the **speedtracker.yml** file. An alert is identified by an id (e.g. emailAlert), such id will be used in the budget to refer to which alert should be triggered.
```yml
alerts:
  emailAlert:
    type: "email"
    recipients: ["recipient@gmail.com"]
  slackAlert:
    type: 'slack'
    hookUrl: 'p0o9o8i7u6y5t4r3e2w1q'
    channel: '#speedtracker'
    username: 'SpeedTracker'
    iconEmoji: ':grimacing:
```

Configure your [budgets](https://speedtracker.org/docs#budgets) in your profile file and reference which alerts should be triggered if the budget limits are exceeded.

```yml
budgets:
  -
    metric: TTFB
    max: 600
    alerts: ["emailAlert"]
  -
    metric: firstPaint
    max: 2000
    alerts: ["emailAlert", "slackAlert"]
```

For a list of possible metrics: Check [SpeedTracker Source Code](https://github.com/speedtracker/speedtracker-api/blob/master/lib/SpeedTracker.js#L18-L37)

# Resources
* [WebPageTest](https://www.webpagetest.org/)
* [SpeedTracker](https://speedtracker.org)
* [SpeedTracker's GitHub](https://github.com/speedtracker/speedtracker)
* [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* [Configure Lighthouse](https://speedtracker.org/blog/using-lighthouse/)
* [My Personal SpeedTracker Repo](https://github.com/canastro/speedtracker)
