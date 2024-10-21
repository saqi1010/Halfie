#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <Firebase.h>
#import <UserNotifications/UserNotifications.h>
#import <RNCPushNotificationIOS.h>
#import <GoogleMaps/GoogleMaps.h>
#import <RNGestureHandler.h>
#import <RNGoogleSignin/RNGoogleSignin.h> 

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // Configure Firebase
  if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }

  // Provide your Google Maps API key
  [GMSServices provideAPIKey:@"AIzaSyDfo9xOT15oGYnrYqQL_Beq9avku_IBl5M"];
  
  // Initialize the gesture handler root view
//  [RNGestureHandlerMouse class]; // Initialize gesture handler

  self.moduleName = @"Halfie"; // Set the module name
  self.initialProps = @{}; // Set any initial properties if needed

  // Request permission for notifications
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  center.delegate = self; // Set the delegate to self

  [center requestAuthorizationWithOptions:(UNAuthorizationOptionAlert + UNAuthorizationOptionSound + UNAuthorizationOptionBadge)
    completionHandler:^(BOOL granted, NSError * _Nullable error) {
      // Handle permission granted or error
      if (granted) {
        NSLog(@"Notification permission granted.");
      } else {
        NSLog(@"Notification permission denied: %@", error.localizedDescription);
      }
  }];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// This method is called when a notification is delivered to a foreground app.
- (void)userNotificationCenter:(UNUserNotificationCenter *)center 
       willPresentNotification:(UNNotification *)notification 
         withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler {
  completionHandler(UNNotificationPresentationOptionAlert + UNNotificationPresentationOptionSound);
}

// This method is called when a user interacts with a notification
- (void)userNotificationCenter:(UNUserNotificationCenter *)center 
       didReceiveNotificationResponse:(UNNotificationResponse *)response 
       withCompletionHandler:(void (^)(void))completionHandler {
  completionHandler();
}

//// Add the following method to handle the Google Sign-In URL
//- (BOOL)application:(UIApplication *)app
//               openURL:(NSURL *)url
//               options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
//    return [RNGoogleSignin application:app openURL:url options:options];
//}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
