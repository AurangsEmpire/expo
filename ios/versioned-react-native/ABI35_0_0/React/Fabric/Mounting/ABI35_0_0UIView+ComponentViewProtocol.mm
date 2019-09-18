/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "ABI35_0_0UIView+ComponentViewProtocol.h"

#import <ReactABI35_0_0/ABI35_0_0RCTAssert.h>
#import "ABI35_0_0RCTConversions.h"

using namespace facebook::ReactABI35_0_0;

@implementation UIView (ComponentViewProtocol)

- (void)mountChildComponentView:(UIView<ABI35_0_0RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [self insertSubview:childComponentView atIndex:index];
}

- (void)unmountChildComponentView:(UIView<ABI35_0_0RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  ABI35_0_0RCTAssert(childComponentView.superview == self, @"Attempt to unmount improperly mounted component view.");
  [childComponentView removeFromSuperview];
}

- (void)updateProps:(SharedProps)props oldProps:(SharedProps)oldProps
{
  // Default implementation does nothing.
}

- (void)updateEventEmitter:(SharedEventEmitter)eventEmitter
{
  // Default implementation does nothing.
}

- (void)updateLocalData:(SharedLocalData)localData oldLocalData:(SharedLocalData)oldLocalData
{
  // Default implementation does nothing.
}

- (void)updateLayoutMetrics:(LayoutMetrics)layoutMetrics oldLayoutMetrics:(LayoutMetrics)oldLayoutMetrics
{
  if (layoutMetrics.frame != oldLayoutMetrics.frame) {
    self.frame = ABI35_0_0RCTCGRectFromRect(layoutMetrics.frame);
  }

  if (layoutMetrics.layoutDirection != oldLayoutMetrics.layoutDirection) {
    self.semanticContentAttribute = layoutMetrics.layoutDirection == LayoutDirection::RightToLeft
        ? UISemanticContentAttributeForceRightToLeft
        : UISemanticContentAttributeForceLeftToRight;
  }

  if (layoutMetrics.displayType != oldLayoutMetrics.displayType) {
    self.hidden = layoutMetrics.displayType == DisplayType::None;
  }
}

- (void)prepareForRecycle
{
  // Default implementation does nothing.
}

@end
