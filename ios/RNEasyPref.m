
#import "RNEasyPref.h"

@implementation RNEasyPref

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(set:(NSString*)key value:(id)value
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    [[NSUserDefaults standardUserDefaults] setObject:value forKey:key];
}

RCT_EXPORT_METHOD(get:(NSString*)key
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    id value = [[NSUserDefaults standardUserDefaults] objectForKey:key];
    resolve(value);
}

@end
  
