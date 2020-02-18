# react360-multi-surface

### React360 Created on 2/17/2020

## Description
First React360 app with multi-surface screen.
Followed [react-360 MultiRoot](https://github.com/facebook/react-360/tree/master/Samples/MultiRoot) tutorial.


## Installation
1. Clone this repo:
```
$ git clone https://github.com/misakimichy/react360-multi-surface.git
```

2. Install npm:

```
$ npm install
```

3. Get APIKey to follow [Poly API Guide](https://developers.google.com/poly/develop/api), and copy and paste the apiKey in line 7 of `index.js`
```
  Store.initialize('Paste-Api-Key-Here')
```
  
  __If you going to save this project, create a `environment.js` file in the root directory instead__

```
  export default ApiKey = 'Paste-Api-Key-Here'
  
  // Then `index.js` line 7 should look like this
  Store.initialize(ApiKey)
```

4. Run the project:
```
$ npm run start 
```

5. Open the application in localhost


## Known Bugs
- No known bugs at this time

## Support and contact details
I welcome any feedbacks and questions to misaki.koonce@gmail.com

## Technologies Used
React360

## License
Copyright © 2020 under the MIT License
