import projectPath from "path";
const iosAppPath = projectPath.join(process.cwd(), "app/MyRNDemoApp.app");
export const config = {

    runner: 'local',
    
    specs: [
        './test/specs/**/*.js'
    ],
    
    exclude: [
      
    ],
    maxInstances: 1,
    capabilities: [{
        "platformName": "IOS",
        "appium:deviceName": "iPhone 14 Pro Max",
        "appium:platformVersion": "16.4",
        "appium:automationName": "XCUItest",
        "appium:app": iosAppPath,
      }],
   port:4723,
   path:'/wd/hub',
    logLevel: 'warn',
    
    bail: 0,
    
    baseUrl: 'http://localhost',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['appium'],
    
    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
   
}
