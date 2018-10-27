# Friend Finder

## Contents
- [Link to Live Site](#link-to-live-site)
- [Requirements](#requirements)
  - [Live Version](#live-version)
  - [Local Version](#local-version)
- [Description](#description)
- [Tools Used](#tools-used)
- [How to Use](#how-to-use)
  - [Live Setup](#live-setup)
  - [Local Setup](#local-setup)
    - [Using the VM Provided](#using-the-vm-provided)
    - [Not Using the VM Provided](#not-using-the-vm-provided)
- [Resources](#resources)

## Link to Live Site
You can visit the site live [here](https://friend-finder-mason-h.herokuapp.com/ "Live Site")

## Requirements
### Live Version
- None, the app is deployed to heroku
### Local Version
- If you want to run the app locally
  - [Nodejs](https://nodejs.org/en/download/ "Install Node")

## Description
This application is used to make use of an express server deployed on heroku.

## Tools used
- Javascript
- Jquery
- [NPM](https://www.npmjs.com/ "NPM's website")
  - [body-parser](https://www.npmjs.com/package/body-parser "Body-Parser's NPM page")
  - [express](https://www.npmjs.com/package/express "Express' NPM page")
  - [path](https://www.npmjs.com/package/path "Path's NPM page")
- [Node](https://nodejs.org/en/ "Node's website")
- [Heroku](https://dashboard.heroku.com "Herokus website")

## How to Use
### Live Setup
You can visit the site live [here](https://friend-finder-mason-h.herokuapp.com/ "Live Site")

### Local Setup
#### Using the VM Provided
1. If you are new to using VM's check the Ubuntu Vagrant Shell's README found [here](https://github.com/switch120/ubuntu-vagrant-shell)
2. Clone this repo onto your computer
3. Navigate to the VM in your CLI and run `vagrant up`
4. Run `vagrant ssh`
5. Navigate into the code folder
6. Run `npm install`
7. Navigate into the app folder
8. Run `node server.js`

#### Not Using the VM Provided
1. Clone this repo onto your computer
2. Move the contents of the code folder, the package.json file, and the package-lock.json file to your preferred VM or locally
3. Install the dependencies
4. run `server.js`

## Resources
[googlefonts](https://fonts.google.com/ "GoogleFont's webpage")

[materialize](https://materializecss.com/ "Materialize's webpage")

[shareicon](https://www.shareicon.net/ "Shareicon's webpage")

[svgbackgrounds](https://www.svgbackgrounds.com "SVGBackground's webpage")