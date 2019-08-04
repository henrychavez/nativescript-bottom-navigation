declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class AnimationUtils {
						public static class: java.lang.Class<com.google.android.material.animation.AnimationUtils>;
						public static LINEAR_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public static FAST_OUT_SLOW_IN_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public static FAST_OUT_LINEAR_IN_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public static LINEAR_OUT_SLOW_IN_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public static DECELERATE_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public constructor();
						public static lerp(param0: number, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class AnimatorSetCompat {
						public static class: java.lang.Class<com.google.android.material.animation.AnimatorSetCompat>;
						public constructor();
						public static playTogether(param0: globalAndroid.animation.AnimatorSet, param1: java.util.List<globalAndroid.animation.Animator>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class ArgbEvaluatorCompat extends globalAndroid.animation.TypeEvaluator<java.lang.Integer> {
						public static class: java.lang.Class<com.google.android.material.animation.ArgbEvaluatorCompat>;
						public static getInstance(): com.google.android.material.animation.ArgbEvaluatorCompat;
						public evaluate(param0: number, param1: java.lang.Integer, param2: java.lang.Integer): java.lang.Integer;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class ChildrenAlphaProperty extends globalAndroid.util.Property<globalAndroid.view.ViewGroup,java.lang.Float> {
						public static class: java.lang.Class<com.google.android.material.animation.ChildrenAlphaProperty>;
						public static CHILDREN_ALPHA: globalAndroid.util.Property<globalAndroid.view.ViewGroup,java.lang.Float>;
						public set(param0: globalAndroid.view.ViewGroup, param1: java.lang.Float): void;
						public get(param0: globalAndroid.view.ViewGroup): java.lang.Float;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class DrawableAlphaProperty extends globalAndroid.util.Property<globalAndroid.graphics.drawable.Drawable,java.lang.Integer> {
						public static class: java.lang.Class<com.google.android.material.animation.DrawableAlphaProperty>;
						public static DRAWABLE_ALPHA_COMPAT: globalAndroid.util.Property<globalAndroid.graphics.drawable.Drawable,java.lang.Integer>;
						public get(param0: globalAndroid.graphics.drawable.Drawable): java.lang.Integer;
						public set(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class ImageMatrixProperty extends globalAndroid.util.Property<globalAndroid.widget.ImageView,globalAndroid.graphics.Matrix> {
						public static class: java.lang.Class<com.google.android.material.animation.ImageMatrixProperty>;
						public constructor();
						public get(param0: globalAndroid.widget.ImageView): globalAndroid.graphics.Matrix;
						public set(param0: globalAndroid.widget.ImageView, param1: globalAndroid.graphics.Matrix): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class MatrixEvaluator extends globalAndroid.animation.TypeEvaluator<globalAndroid.graphics.Matrix> {
						public static class: java.lang.Class<com.google.android.material.animation.MatrixEvaluator>;
						public constructor();
						public evaluate(param0: number, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.Matrix): globalAndroid.graphics.Matrix;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class MotionSpec {
						public static class: java.lang.Class<com.google.android.material.animation.MotionSpec>;
						public constructor();
						public getTiming(param0: string): com.google.android.material.animation.MotionTiming;
						public static createFromResource(param0: globalAndroid.content.Context, param1: number): com.google.android.material.animation.MotionSpec;
						public setTiming(param0: string, param1: com.google.android.material.animation.MotionTiming): void;
						public getAnimator(param0: string, param1: globalAndroid.view.View, param2: globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>): globalAndroid.animation.ObjectAnimator;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public setPropertyValues(param0: string, param1: native.Array<globalAndroid.animation.PropertyValuesHolder>): void;
						public getPropertyValues(param0: string): native.Array<globalAndroid.animation.PropertyValuesHolder>;
						public toString(): string;
						public getTotalDuration(): number;
						public hasPropertyValues(param0: string): boolean;
						public static createFromAttribute(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray, param2: number): com.google.android.material.animation.MotionSpec;
						public hasTiming(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class MotionTiming {
						public static class: java.lang.Class<com.google.android.material.animation.MotionTiming>;
						public getDelay(): number;
						public getInterpolator(): globalAndroid.animation.TimeInterpolator;
						public constructor(param0: number, param1: number, param2: globalAndroid.animation.TimeInterpolator);
						public apply(param0: globalAndroid.animation.Animator): void;
						public getDuration(): number;
						public getRepeatCount(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getRepeatMode(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class Positioning {
						public static class: java.lang.Class<com.google.android.material.animation.Positioning>;
						public gravity: number;
						public xAdjustment: number;
						public yAdjustment: number;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class TransformationListener<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.animation.TransformationListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.material.animation.TransformationListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTranslationChanged(param0: T): void;
							onScaleChanged(param0: T): void;
						});
						public constructor();
						public onTranslationChanged(param0: T): void;
						public onScaleChanged(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class AppBarLayout {
						public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public setStatusBarForeground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setVisibility(param0: number): void;
						public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): com.google.android.material.appbar.AppBarLayout.LayoutParams;
						public addOnOffsetChangedListener(param0: com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<any>): void;
						public setElevation(param0: number): void;
						public setLiftOnScroll(param0: boolean): void;
						/** @deprecated */
						public setTargetElevation(param0: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public drawableStateChanged(): void;
						public isLiftOnScroll(): boolean;
						public setStatusBarForegroundResource(param0: number): void;
						public setExpanded(param0: boolean, param1: boolean): void;
						public removeOnOffsetChangedListener(param0: com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<any>): void;
						public setOrientation(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public getLiftOnScrollTargetViewId(): number;
						public getMinimumHeightForVisibleOverlappingContent(): number;
						public getTotalScrollRange(): number;
						public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
						/** @deprecated */
						public getTargetElevation(): number;
						public onDetachedFromWindow(): void;
						public setStatusBarForegroundColor(param0: number): void;
						public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
						public setLiftOnScrollTargetViewId(param0: number): void;
						public generateDefaultLayoutParams(): com.google.android.material.appbar.AppBarLayout.LayoutParams;
						public generateLayoutParams(param0: globalAndroid.util.AttributeSet): com.google.android.material.appbar.AppBarLayout.LayoutParams;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public removeOnOffsetChangedListener(param0: com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener): void;
						public onCreateDrawableState(param0: number): native.Array<number>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public addOnOffsetChangedListener(param0: com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener): void;
						public setLifted(param0: boolean): boolean;
						public getStatusBarForeground(): globalAndroid.graphics.drawable.Drawable;
						public setExpanded(param0: boolean): void;
						public setLiftable(param0: boolean): boolean;
					}
					export module AppBarLayout {
						export class BaseBehavior<T>  extends com.google.android.material.appbar.HeaderBehavior<any> {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseBehavior<any>>;
							public constructor();
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
							public onNestedPreScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: native.Array<number>, param6: number): void;
							public onStopNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number): void;
							public onSaveInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any): globalAndroid.os.Parcelable;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setDragCallback(param0: com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback<any>): void;
							public onMeasureChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number, param3: number, param4: number, param5: number): boolean;
							public onRestoreInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.os.Parcelable): void;
							public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number, param5: number): boolean;
							public onNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: number, param7: number, param8: native.Array<number>): void;
						}
						export module BaseBehavior {
							export abstract class BaseDragCallback<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback<any>>;
								public canDrag(param0: T): boolean;
								public constructor();
							}
							export class SavedState {
								public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseBehavior.SavedState>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.appbar.AppBarLayout.BaseBehavior.SavedState>;
								public constructor(param0: globalAndroid.os.Parcelable);
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
							}
						}
						export class BaseOnOffsetChangedListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<any>>;
							/**
							 * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$BaseOnOffsetChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onOffsetChanged(param0: T, param1: number): void;
							});
							public constructor();
							public onOffsetChanged(param0: T, param1: number): void;
						}
						export class Behavior extends com.google.android.material.appbar.AppBarLayout.BaseBehavior<com.google.android.material.appbar.AppBarLayout> {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.Behavior>;
							public constructor();
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
						export module Behavior {
							export abstract class DragCallback extends com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback<com.google.android.material.appbar.AppBarLayout> {
								public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.Behavior.DragCallback>;
								public constructor();
							}
						}
						export class LayoutParams {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.LayoutParams>;
							public static SCROLL_FLAG_NO_SCROLL: number;
							public static SCROLL_FLAG_SCROLL: number;
							public static SCROLL_FLAG_EXIT_UNTIL_COLLAPSED: number;
							public static SCROLL_FLAG_ENTER_ALWAYS: number;
							public static SCROLL_FLAG_ENTER_ALWAYS_COLLAPSED: number;
							public static SCROLL_FLAG_SNAP: number;
							public static SCROLL_FLAG_SNAP_MARGINS: number;
							public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
							public getScrollInterpolator(): globalAndroid.view.animation.Interpolator;
							public setScrollFlags(param0: number): void;
							public getScrollFlags(): number;
							public constructor(param0: number, param1: number, param2: number);
							public constructor(param0: globalAndroid.widget.LinearLayout.LayoutParams);
							public constructor(param0: number, param1: number);
							public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: com.google.android.material.appbar.AppBarLayout.LayoutParams);
							public setScrollInterpolator(param0: globalAndroid.view.animation.Interpolator): void;
						}
						export module LayoutParams {
							export class ScrollFlags {
								public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.LayoutParams.ScrollFlags>;
								/**
								 * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$LayoutParams$ScrollFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
						}
						export class OnOffsetChangedListener extends com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<com.google.android.material.appbar.AppBarLayout> {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$OnOffsetChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
								onOffsetChanged(param0: any, param1: number): void;
							});
							public constructor();
							public onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
							public onOffsetChanged(param0: any, param1: number): void;
						}
						export class ScrollingViewBehavior extends com.google.android.material.appbar.HeaderScrollingViewBehavior {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.ScrollingViewBehavior>;
							public constructor();
							public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
							public onDependentViewChanged(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
							public onRequestChildRectangleOnScreen(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect, param3: boolean): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class CollapsingToolbarLayout {
						public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout>;
						public setStatusBarScrimResource(param0: number): void;
						public getScrimVisibleHeightTrigger(): number;
						public constructor(param0: globalAndroid.content.Context);
						public drawChild(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.view.View, param2: number): boolean;
						public isTitleEnabled(): boolean;
						public getScrimAnimationDuration(): number;
						public setExpandedTitleGravity(param0: number): void;
						public setExpandedTitleMarginTop(param0: number): void;
						public setCollapsedTitleTextColor(param0: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setCollapsedTitleTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setExpandedTitleMarginStart(param0: number): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public setCollapsedTitleTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setCollapsedTitleTextAppearance(param0: number): void;
						public setStatusBarScrimColor(param0: number): void;
						public onMeasure(param0: number, param1: number): void;
						public setExpandedTitleMargin(param0: number, param1: number, param2: number, param3: number): void;
						public setCollapsedTitleGravity(param0: number): void;
						public setContentScrim(param0: globalAndroid.graphics.drawable.Drawable): void;
						public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
						public getExpandedTitleMarginBottom(): number;
						public setTitleEnabled(param0: boolean): void;
						public setContentScrimResource(param0: number): void;
						public setTitle(param0: string): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setStatusBarScrim(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setScrimsShown(param0: boolean, param1: boolean): void;
						public setExpandedTitleTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setScrimAnimationDuration(param0: number): void;
						public getExpandedTitleMarginTop(): number;
						public setVisibility(param0: number): void;
						public onAttachedToWindow(): void;
						public setExpandedTitleMarginEnd(param0: number): void;
						public drawableStateChanged(): void;
						public getExpandedTitleMarginEnd(): number;
						public setExpandedTitleMarginBottom(param0: number): void;
						public setContentScrimColor(param0: number): void;
						public getContentScrim(): globalAndroid.graphics.drawable.Drawable;
						public setScrimVisibleHeightTrigger(param0: number): void;
						public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.widget.FrameLayout.LayoutParams;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getCollapsedTitleGravity(): number;
						public getExpandedTitleTypeface(): globalAndroid.graphics.Typeface;
						public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
						public onDetachedFromWindow(): void;
						public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.widget.FrameLayout.LayoutParams;
						public getCollapsedTitleTypeface(): globalAndroid.graphics.Typeface;
						public getTitle(): string;
						public setScrimsShown(param0: boolean): void;
						public getExpandedTitleMarginStart(): number;
						public generateDefaultLayoutParams(): com.google.android.material.appbar.CollapsingToolbarLayout.LayoutParams;
						public getExpandedTitleGravity(): number;
						public setExpandedTitleTypeface(param0: globalAndroid.graphics.Typeface): void;
						public getStatusBarScrim(): globalAndroid.graphics.drawable.Drawable;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setExpandedTitleColor(param0: number): void;
						public setExpandedTitleTextAppearance(param0: number): void;
					}
					export module CollapsingToolbarLayout {
						export class LayoutParams {
							public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout.LayoutParams>;
							public static COLLAPSE_MODE_OFF: number;
							public static COLLAPSE_MODE_PIN: number;
							public static COLLAPSE_MODE_PARALLAX: number;
							public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
							public constructor(param0: number, param1: number, param2: number);
							public setCollapseMode(param0: number): void;
							public constructor(param0: number, param1: number);
							public getCollapseMode(): number;
							public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
							public getParallaxMultiplier(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setParallaxMultiplier(param0: number): void;
							public constructor(param0: globalAndroid.widget.FrameLayout.LayoutParams);
						}
						export class OffsetUpdateListener extends com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener {
							public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout.OffsetUpdateListener>;
							public onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
							public onOffsetChanged(param0: any, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export abstract class HeaderBehavior<V>  extends com.google.android.material.appbar.ViewOffsetBehavior<any> {
						public static class: java.lang.Class<com.google.android.material.appbar.HeaderBehavior<any>>;
						public constructor();
						public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
					}
					export module HeaderBehavior {
						export class FlingRunnable {
							public static class: java.lang.Class<com.google.android.material.appbar.HeaderBehavior.FlingRunnable>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export abstract class HeaderScrollingViewBehavior extends com.google.android.material.appbar.ViewOffsetBehavior<globalAndroid.view.View> {
						public static class: java.lang.Class<com.google.android.material.appbar.HeaderScrollingViewBehavior>;
						public onMeasureChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: number, param3: number, param4: number, param5: number): boolean;
						public layoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): void;
						public constructor();
						public shouldHeaderOverlapScrollingChild(): boolean;
						public layoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: number): void;
						public setOverlayTop(param0: number): void;
						public getOverlayTop(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class MaterialToolbar {
						public static class: java.lang.Class<com.google.android.material.appbar.MaterialToolbar>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setElevation(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class ViewOffsetBehavior<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
						public static class: java.lang.Class<com.google.android.material.appbar.ViewOffsetBehavior<any>>;
						public layoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): void;
						public setHorizontalOffsetEnabled(param0: boolean): void;
						public constructor();
						public isVerticalOffsetEnabled(): boolean;
						public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
						public setTopAndBottomOffset(param0: number): boolean;
						public setLeftAndRightOffset(param0: number): boolean;
						public getLeftAndRightOffset(): number;
						public isHorizontalOffsetEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getTopAndBottomOffset(): number;
						public setVerticalOffsetEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class ViewOffsetHelper {
						public static class: java.lang.Class<com.google.android.material.appbar.ViewOffsetHelper>;
						public getLayoutTop(): number;
						public setHorizontalOffsetEnabled(param0: boolean): void;
						public getLayoutLeft(): number;
						public isVerticalOffsetEnabled(): boolean;
						public setTopAndBottomOffset(param0: number): boolean;
						public constructor(param0: globalAndroid.view.View);
						public setLeftAndRightOffset(param0: number): boolean;
						public getLeftAndRightOffset(): number;
						public isHorizontalOffsetEnabled(): boolean;
						public getTopAndBottomOffset(): number;
						public setVerticalOffsetEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class ViewUtilsLollipop {
						public static class: java.lang.Class<com.google.android.material.appbar.ViewUtilsLollipop>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module badge {
					export class BadgeDrawable implements com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate {
						public static class: java.lang.Class<com.google.android.material.badge.BadgeDrawable>;
						public getMaxCharacterCount(): number;
						public clearBadgeNumber(): void;
						public setContentDescriptionNumberless(param0: string): void;
						public setMaxCharacterCount(param0: number): void;
						public getAlpha(): number;
						public getBadgeTextColor(): number;
						public getContentDescription(param0: globalAndroid.content.Context): string;
						public isStateful(): boolean;
						public updateBadgeCoordinates(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public setBadgeTextColor(param0: number): void;
						public getNumber(): number;
						public onStateChange(param0: native.Array<number>): boolean;
						public setBackgroundColor(param0: number): void;
						public getState(): native.Array<number>;
						public getBackgroundColor(): number;
						public setContentDescriptionQuantityStringsResource(param0: number): void;
						public getIntrinsicWidth(): number;
						public static createFromSavedState(param0: globalAndroid.content.Context, param1: com.google.android.material.badge.BadgeDrawable.SavedState): com.google.android.material.badge.BadgeDrawable;
						public getIntrinsicHeight(): number;
						public static create(param0: globalAndroid.content.Context): com.google.android.material.badge.BadgeDrawable;
						public hasNumber(): boolean;
						public setNumber(param0: number): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
						public onTextSizeChange(): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getSavedState(): com.google.android.material.badge.BadgeDrawable.SavedState;
						public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): com.google.android.material.badge.BadgeDrawable;
						public setVisible(param0: boolean): void;
					}
					export module BadgeDrawable {
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.badge.BadgeDrawable.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.badge.BadgeDrawable.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module badge {
					export class BadgeUtils {
						public static class: java.lang.Class<com.google.android.material.badge.BadgeUtils>;
						public static USE_COMPAT_PARENT: boolean;
						public static createBadgeDrawablesFromSavedStates(param0: globalAndroid.content.Context, param1: com.google.android.material.internal.ParcelableSparseArray): globalAndroid.util.SparseArray<com.google.android.material.badge.BadgeDrawable>;
						public static updateBadgeBounds(param0: globalAndroid.graphics.Rect, param1: number, param2: number, param3: number, param4: number): void;
						public static attachBadgeDrawable(param0: com.google.android.material.badge.BadgeDrawable, param1: globalAndroid.view.View, param2: globalAndroid.widget.FrameLayout): void;
						public static setBadgeDrawableBounds(param0: com.google.android.material.badge.BadgeDrawable, param1: globalAndroid.view.View, param2: globalAndroid.widget.FrameLayout): void;
						public static detachBadgeDrawable(param0: com.google.android.material.badge.BadgeDrawable, param1: globalAndroid.view.View, param2: globalAndroid.widget.FrameLayout): void;
						public static createParcelableBadgeStates(param0: globalAndroid.util.SparseArray<com.google.android.material.badge.BadgeDrawable>): com.google.android.material.internal.ParcelableSparseArray;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module behavior {
					export class HideBottomViewOnScrollBehavior<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
						public static class: java.lang.Class<com.google.android.material.behavior.HideBottomViewOnScrollBehavior<any>>;
						public static ENTER_ANIMATION_DURATION: number;
						public static EXIT_ANIMATION_DURATION: number;
						public onNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: number): void;
						public constructor();
						public setAdditionalHiddenOffsetY(param0: any, param1: number): void;
						public slideUp(param0: any): void;
						public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public slideDown(param0: any): void;
						public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module behavior {
					export class SwipeDismissBehavior<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
						public static class: java.lang.Class<com.google.android.material.behavior.SwipeDismissBehavior<any>>;
						public static STATE_IDLE: number;
						public static STATE_DRAGGING: number;
						public static STATE_SETTLING: number;
						public static SWIPE_DIRECTION_START_TO_END: number;
						public static SWIPE_DIRECTION_END_TO_START: number;
						public static SWIPE_DIRECTION_ANY: number;
						public setStartAlphaSwipeDistance(param0: number): void;
						public setEndAlphaSwipeDistance(param0: number): void;
						public setDragDismissDistance(param0: number): void;
						public constructor();
						public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public canSwipeDismissView(param0: globalAndroid.view.View): boolean;
						public setSensitivity(param0: number): void;
						public setSwipeDirection(param0: number): void;
						public getDragState(): number;
						public setListener(param0: com.google.android.material.behavior.SwipeDismissBehavior.OnDismissListener): void;
						public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
					}
					export module SwipeDismissBehavior {
						export class OnDismissListener {
							public static class: java.lang.Class<com.google.android.material.behavior.SwipeDismissBehavior.OnDismissListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.behavior.SwipeDismissBehavior$OnDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDismiss(param0: globalAndroid.view.View): void;
								onDragStateChanged(param0: number): void;
							});
							public constructor();
							public onDismiss(param0: globalAndroid.view.View): void;
							public onDragStateChanged(param0: number): void;
						}
						export class SettleRunnable {
							public static class: java.lang.Class<com.google.android.material.behavior.SwipeDismissBehavior.SettleRunnable>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomappbar {
					export class BottomAppBar {
						public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar>;
						public static FAB_ALIGNMENT_MODE_CENTER: number;
						public static FAB_ALIGNMENT_MODE_END: number;
						public static FAB_ANIMATION_MODE_SCALE: number;
						public static FAB_ANIMATION_MODE_SLIDE: number;
						public constructor(param0: globalAndroid.content.Context);
						public getActionMenuViewTranslationX(param0: androidx.appcompat.widget.ActionMenuView, param1: number, param2: boolean): number;
						public onAttachedToWindow(): void;
						public setElevation(param0: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public getBehavior(): com.google.android.material.bottomappbar.BottomAppBar.Behavior;
						public getHideOnScroll(): boolean;
						public setFabAlignmentMode(param0: number): void;
						public setFabCradleRoundedCornerRadius(param0: number): void;
						public performShow(): void;
						public setSubtitle(param0: string): void;
						public createFabDefaultXAnimation(param0: number, param1: java.util.List<globalAndroid.animation.Animator>): void;
						public getFabAnimationMode(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getFabCradleMargin(): number;
						public getBackgroundTint(): globalAndroid.content.res.ColorStateList;
						public setFabAnimationMode(param0: number): void;
						public setCradleVerticalOffset(param0: number): void;
						public performHide(): void;
						public setBackgroundTint(param0: globalAndroid.content.res.ColorStateList): void;
						public getFabAlignmentMode(): number;
						public setFabCradleMargin(param0: number): void;
						public setTitle(param0: string): void;
						public getFabCradleRoundedCornerRadius(): number;
						public setHideOnScroll(param0: boolean): void;
						public replaceMenu(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getCradleVerticalOffset(): number;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					}
					export module BottomAppBar {
						export class AnimationListener {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.AnimationListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$AnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAnimationStart(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
								onAnimationEnd(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
							});
							public constructor();
							public onAnimationEnd(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
							public onAnimationStart(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
						}
						export class Behavior extends com.google.android.material.behavior.HideBottomViewOnScrollBehavior<com.google.android.material.bottomappbar.BottomAppBar> {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.Behavior>;
							public constructor();
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
							public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number): boolean;
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.bottomappbar.BottomAppBar, param2: number): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.bottomappbar.BottomAppBar, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number, param5: number): boolean;
						}
						export class FabAlignmentMode {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.FabAlignmentMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$FabAlignmentMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class FabAnimationMode {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.FabAnimationMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$FabAnimationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomappbar.BottomAppBar.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcelable);
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomappbar {
					export class BottomAppBarTopEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
						public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBarTopEdgeTreatment>;
						public setFabDiameter(param0: number): void;
						public constructor();
						public getHorizontalOffset(): number;
						/** @deprecated */
						public getEdgePath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getEdgePath(param0: number, param1: number, param2: number, param3: com.google.android.material.shape.ShapePath): void;
						public getFabDiameter(): number;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationItemView {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationItemView>;
						public static INVALID_ITEM_POSITION: number;
						public getItemPosition(): number;
						public constructor(param0: globalAndroid.content.Context);
						public setTextAppearanceInactive(param0: number): void;
						public showsIcon(): boolean;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public setLabelVisibilityMode(param0: number): void;
						public prefersCondensedTitle(): boolean;
						public setIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setTextAppearanceActive(param0: number): void;
						public setIconSize(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setChecked(param0: boolean): void;
						public setTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemPosition(param0: number): void;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
						public setEnabled(param0: boolean): void;
						public setTitle(param0: string): void;
						public onCreateDrawableState(param0: number): native.Array<number>;
						public setShortcut(param0: boolean, param1: string): void;
						public setShifting(param0: boolean): void;
						public setItemBackground(param0: number): void;
						public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setCheckable(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationMenu {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationMenu>;
						public static MAX_ITEM_COUNT: number;
						public constructor(param0: globalAndroid.content.Context);
						public addSubMenu(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.SubMenu;
						public addInternal(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.MenuItem;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationMenuView {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationMenuView>;
						public setItemBackgroundRes(param0: number): void;
						public isItemHorizontalTranslationEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						/** @deprecated */
						public getItemBackgroundRes(): number;
						public setItemHorizontalTranslationEnabled(param0: boolean): void;
						public buildMenuView(): void;
						public setLabelVisibilityMode(param0: number): void;
						public getItemTextAppearanceInactive(): number;
						public getSelectedItemId(): number;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setPresenter(param0: com.google.android.material.bottomnavigation.BottomNavigationPresenter): void;
						public getItemTextColor(): globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public getIconTintList(): globalAndroid.content.res.ColorStateList;
						public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						public getItemIconSize(): number;
						public updateMenuView(): void;
						public getLabelVisibilityMode(): number;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
						public setItemIconSize(param0: number): void;
						public createDefaultColorStateList(param0: number): globalAndroid.content.res.ColorStateList;
						public getWindowAnimations(): number;
						public setItemTextAppearanceActive(param0: number): void;
						public getItemTextAppearanceActive(): number;
						public setItemTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextAppearanceInactive(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationPresenter {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationPresenter>;
						public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						public constructor();
						public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
						public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
						public flagActionItems(): boolean;
						public setBottomNavigationMenuView(param0: com.google.android.material.bottomnavigation.BottomNavigationMenuView): void;
						public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						public setId(param0: number): void;
						public getId(): number;
						public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
						public setUpdateSuspended(param0: boolean): void;
						public updateMenuView(param0: boolean): void;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					}
					export module BottomNavigationPresenter {
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationPresenter.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomnavigation.BottomNavigationPresenter.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationView {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView>;
						public isItemHorizontalTranslationEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public getItemRippleColor(): globalAndroid.content.res.ColorStateList;
						public setOnNavigationItemSelectedListener(param0: com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener): void;
						public setItemHorizontalTranslationEnabled(param0: boolean): void;
						public setElevation(param0: number): void;
						public setLabelVisibilityMode(param0: number): void;
						public getSelectedItemId(): number;
						public getItemTextAppearanceInactive(): number;
						public getItemIconTintList(): globalAndroid.content.res.ColorStateList;
						public setSelectedItemId(param0: number): void;
						public getItemTextColor(): globalAndroid.content.res.ColorStateList;
						public removeBadge(param0: number): void;
						public showBadge(param0: number): com.google.android.material.badge.BadgeDrawable;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getMaxItemCount(): number;
						public setItemBackgroundResource(param0: number): void;
						public getBadge(param0: number): com.google.android.material.badge.BadgeDrawable;
						public getItemIconSize(): number;
						public getMenu(): globalAndroid.view.Menu;
						public inflateMenu(param0: number): void;
						public getLabelVisibilityMode(): number;
						public setItemIconSizeRes(param0: number): void;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setOnNavigationItemReselectedListener(param0: com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener): void;
						/** @deprecated */
						public getItemBackgroundResource(): number;
						public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
						public setItemIconSize(param0: number): void;
						public setItemTextAppearanceActive(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public getItemTextAppearanceActive(): number;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public setItemIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextAppearanceInactive(param0: number): void;
					}
					export module BottomNavigationView {
						export class OnNavigationItemReselectedListener {
							public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomnavigation.BottomNavigationView$OnNavigationItemReselectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onNavigationItemReselected(param0: globalAndroid.view.MenuItem): void;
							});
							public constructor();
							public onNavigationItemReselected(param0: globalAndroid.view.MenuItem): void;
						}
						export class OnNavigationItemSelectedListener {
							public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomnavigation.BottomNavigationView$OnNavigationItemSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							});
							public constructor();
							public onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomnavigation.BottomNavigationView.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcelable);
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class LabelVisibilityMode {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.LabelVisibilityMode>;
						/**
						 * Constructs a new instance of the com.google.android.material.bottomnavigation.LabelVisibilityMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static LABEL_VISIBILITY_AUTO: number;
						public static LABEL_VISIBILITY_LABELED: number;
						public static LABEL_VISIBILITY_SELECTED: number;
						public static LABEL_VISIBILITY_UNLABELED: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomsheet {
					export class BottomSheetBehavior<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
						public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior<any>>;
						public static STATE_DRAGGING: number;
						public static STATE_SETTLING: number;
						public static STATE_EXPANDED: number;
						public static STATE_COLLAPSED: number;
						public static STATE_HIDDEN: number;
						public static STATE_HALF_EXPANDED: number;
						public static PEEK_HEIGHT_AUTO: number;
						public static SAVE_PEEK_HEIGHT: number;
						public static SAVE_FIT_TO_CONTENTS: number;
						public static SAVE_HIDEABLE: number;
						public static SAVE_SKIP_COLLAPSED: number;
						public static SAVE_ALL: number;
						public static SAVE_NONE: number;
						public static from(param0: globalAndroid.view.View): com.google.android.material.bottomsheet.BottomSheetBehavior<any>;
						public onAttachedToLayoutParams(param0: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
						public setPeekHeight(param0: number): void;
						public onRestoreInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.os.Parcelable): void;
						public onSaveInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any): globalAndroid.os.Parcelable;
						public setSaveFlags(param0: number): void;
						public disableShapeAnimations(): void;
						public onDetachedFromLayoutParams(): void;
						public getSaveFlags(): number;
						public setHideable(param0: boolean): void;
						public setBottomSheetCallback(param0: com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback): void;
						public setFitToContents(param0: boolean): void;
						public onNestedPreScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: native.Array<number>, param6: number): void;
						public getHalfExpandedRatio(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public isFitToContents(): boolean;
						public getSkipCollapsed(): boolean;
						public constructor();
						public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
						public onStopNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number): void;
						public setHalfExpandedRatio(param0: number): void;
						public isHideable(): boolean;
						public onNestedPreFling(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number): boolean;
						public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number, param5: number): boolean;
						public setState(param0: number): void;
						public onNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: number, param7: number, param8: native.Array<number>): void;
						public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public setExpandedOffset(param0: number): void;
						public getState(): number;
						public setPeekHeight(param0: number, param1: boolean): void;
						public getPeekHeight(): number;
						public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public setSkipCollapsed(param0: boolean): void;
					}
					export module BottomSheetBehavior {
						export abstract class BottomSheetCallback {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback>;
							public constructor();
							public onSlide(param0: globalAndroid.view.View, param1: number): void;
							public onStateChanged(param0: globalAndroid.view.View, param1: number): void;
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomsheet.BottomSheetBehavior.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
							public constructor(param0: globalAndroid.os.Parcelable, param1: com.google.android.material.bottomsheet.BottomSheetBehavior<any>);
						}
						export class SettleRunnable {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.SettleRunnable>;
							public run(): void;
						}
						export class State {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.State>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomsheet.BottomSheetBehavior$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomsheet {
					export class BottomSheetDialog {
						public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDialog>;
						public setCanceledOnTouchOutside(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public setContentView(param0: globalAndroid.view.View): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public getBehavior(): com.google.android.material.bottomsheet.BottomSheetBehavior<globalAndroid.widget.FrameLayout>;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
						public setContentView(param0: number): void;
						public setCancelable(param0: boolean): void;
						public onStart(): void;
						public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomsheet {
					export class BottomSheetDialogFragment {
						public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDialogFragment>;
						public constructor();
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module button {
					export class MaterialButton implements com.google.android.material.shape.Shapeable {
						public static class: java.lang.Class<com.google.android.material.button.MaterialButton>;
						public static ICON_GRAVITY_START: number;
						public static ICON_GRAVITY_TEXT_START: number;
						public static ICON_GRAVITY_END: number;
						public static ICON_GRAVITY_TEXT_END: number;
						public getIconSize(): number;
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.content.Context);
						public setBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setIconPadding(param0: number): void;
						public getIcon(): globalAndroid.graphics.drawable.Drawable;
						public performClick(): boolean;
						public setElevation(param0: number): void;
						public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setRippleColorResource(param0: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setIconGravity(param0: number): void;
						public addOnCheckedChangeListener(param0: com.google.android.material.button.MaterialButton.OnCheckedChangeListener): void;
						public setStrokeWidthResource(param0: number): void;
						public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setBackgroundColor(param0: number): void;
						public onMeasure(param0: number, param1: number): void;
						public setChecked(param0: boolean): void;
						public getIconGravity(): number;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setCornerRadiusResource(param0: number): void;
						public getRippleColor(): globalAndroid.content.res.ColorStateList;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setStrokeWidth(param0: number): void;
						public getIconPadding(): number;
						public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public toggle(): void;
						public setCheckable(param0: boolean): void;
						public setStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getCornerRadius(): number;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public setIconTintResource(param0: number): void;
						public clearOnCheckedChangeListeners(): void;
						public getStrokeColor(): globalAndroid.content.res.ColorStateList;
						public isCheckable(): boolean;
						public setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getStrokeWidth(): number;
						public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public isChecked(): boolean;
						public setPressed(param0: boolean): void;
						public getBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public getIconTint(): globalAndroid.content.res.ColorStateList;
						public setIconSize(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setIconResource(param0: number): void;
						public setBackgroundResource(param0: number): void;
						public setStrokeColorResource(param0: number): void;
						public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						public removeOnCheckedChangeListener(param0: com.google.android.material.button.MaterialButton.OnCheckedChangeListener): void;
						public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public getBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setCornerRadius(param0: number): void;
						public onCreateDrawableState(param0: number): native.Array<number>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
					}
					export module MaterialButton {
						export class IconGravity {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButton.IconGravity>;
							/**
							 * Constructs a new instance of the com.google.android.material.button.MaterialButton$IconGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class OnCheckedChangeListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButton.OnCheckedChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.button.MaterialButton$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCheckedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
							});
							public constructor();
							public onCheckedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
						}
						export class OnPressedChangeListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButton.OnPressedChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.button.MaterialButton$OnPressedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPressedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
							});
							public constructor();
							public onPressedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module button {
					export class MaterialButtonHelper {
						public static class: java.lang.Class<com.google.android.material.button.MaterialButtonHelper>;
						public getMaskDrawable(): com.google.android.material.shape.MaterialShapeDrawable;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module button {
					export class MaterialButtonToggleGroup {
						public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup>;
						public onViewRemoved(param0: globalAndroid.view.View): void;
						public clearOnButtonCheckedListeners(): void;
						public constructor(param0: globalAndroid.content.Context);
						public addOnButtonCheckedListener(param0: com.google.android.material.button.MaterialButtonToggleGroup.OnButtonCheckedListener): void;
						public removeOnButtonCheckedListener(param0: com.google.android.material.button.MaterialButtonToggleGroup.OnButtonCheckedListener): void;
						public setSingleSelection(param0: boolean): void;
						public getAccessibilityClassName(): string;
						public getCheckedButtonIds(): java.util.List<java.lang.Integer>;
						public onFinishInflate(): void;
						public getCheckedButtonId(): number;
						public setSingleSelection(param0: number): void;
						public clearChecked(): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public isSingleSelection(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public check(param0: number): void;
					}
					export module MaterialButtonToggleGroup {
						export class CheckedStateTracker extends com.google.android.material.button.MaterialButton.OnCheckedChangeListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.CheckedStateTracker>;
							public onCheckedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
						}
						export class CornerData {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.CornerData>;
						}
						export class OnButtonCheckedListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.OnButtonCheckedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.button.MaterialButtonToggleGroup$OnButtonCheckedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onButtonChecked(param0: com.google.android.material.button.MaterialButtonToggleGroup, param1: number, param2: boolean): void;
							});
							public constructor();
							public onButtonChecked(param0: com.google.android.material.button.MaterialButtonToggleGroup, param1: number, param2: boolean): void;
						}
						export class PressedStateTracker extends com.google.android.material.button.MaterialButton.OnPressedChangeListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.PressedStateTracker>;
							public onPressedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module canvas {
					export class CanvasCompat {
						public static class: java.lang.Class<com.google.android.material.canvas.CanvasCompat>;
						public static saveLayerAlpha(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: number, param4: number, param5: number): number;
						public static saveLayerAlpha(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.RectF, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module card {
					export class MaterialCardView {
						public static class: java.lang.Class<com.google.android.material.card.MaterialCardView>;
						public removeViewsInLayout(param0: number, param1: number): void;
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCheckedIconTint(): globalAndroid.content.res.ColorStateList;
						public getRadius(): number;
						public getCheckedIcon(): globalAndroid.graphics.drawable.Drawable;
						public setRippleColorResource(param0: number): void;
						public isDragged(): boolean;
						public getContentPaddingTop(): number;
						public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onMeasure(param0: number, param1: number): void;
						public setCardBackgroundColor(param0: number): void;
						public removeView(param0: globalAndroid.view.View): void;
						public setChecked(param0: boolean): void;
						public setClickable(param0: boolean): void;
						public getCardBackgroundColor(): globalAndroid.content.res.ColorStateList;
						public setCheckedIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getContentPaddingBottom(): number;
						public setPreventCornerOverlap(param0: boolean): void;
						public getRippleColor(): globalAndroid.content.res.ColorStateList;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setStrokeWidth(param0: number): void;
						public removeViewInLayout(param0: globalAndroid.view.View): void;
						public setRadius(param0: number): void;
						public toggle(): void;
						public setCheckedIconResource(param0: number): void;
						public getContentPaddingLeft(): number;
						public setCheckable(param0: boolean): void;
						public setStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setCheckedIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public removeViewAt(param0: number): void;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public setUseCompatPadding(param0: boolean): void;
						public setOnCheckedChangeListener(param0: com.google.android.material.card.MaterialCardView.OnCheckedChangeListener): void;
						public isCheckable(): boolean;
						public getStrokeWidth(): number;
						public setContentPadding(param0: number, param1: number, param2: number, param3: number): void;
						public isChecked(): boolean;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getStrokeColorStateList(): globalAndroid.content.res.ColorStateList;
						public setCardBackgroundColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setCardElevation(param0: number): void;
						public getContentPaddingRight(): number;
						public setDragged(param0: boolean): void;
						public removeViews(param0: number, param1: number): void;
						public setStrokeColor(param0: number): void;
						public setMaxCardElevation(param0: number): void;
						public removeAllViews(): void;
						public onCreateDrawableState(param0: number): native.Array<number>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public getStrokeColor(): number;
						public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
					}
					export module MaterialCardView {
						export class OnCheckedChangeListener {
							public static class: java.lang.Class<com.google.android.material.card.MaterialCardView.OnCheckedChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.card.MaterialCardView$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCheckedChanged(param0: com.google.android.material.card.MaterialCardView, param1: boolean): void;
							});
							public constructor();
							public onCheckedChanged(param0: com.google.android.material.card.MaterialCardView, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module card {
					export class MaterialCardViewHelper {
						public static class: java.lang.Class<com.google.android.material.card.MaterialCardViewHelper>;
						public constructor(param0: com.google.android.material.card.MaterialCardView, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module checkbox {
					export class MaterialCheckBox {
						public static class: java.lang.Class<com.google.android.material.checkbox.MaterialCheckBox>;
						public isUseMaterialThemeColors(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setUseMaterialThemeColors(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module chip {
					export class Chip implements com.google.android.material.chip.ChipDrawable.Delegate, com.google.android.material.shape.Shapeable {
						public static class: java.lang.Class<com.google.android.material.chip.Chip>;
						public setChipDrawable(param0: com.google.android.material.chip.ChipDrawable): void;
						public constructor(param0: globalAndroid.content.Context);
						/** @deprecated */
						public setChipCornerRadius(param0: number): void;
						/** @deprecated */
						public isCheckedIconEnabled(): boolean;
						public setBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public getFocusedRect(param0: globalAndroid.graphics.Rect): void;
						public setChipIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setHideMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public setCloseIconEndPadding(param0: number): void;
						public getChipIcon(): globalAndroid.graphics.drawable.Drawable;
						/** @deprecated */
						public setCloseIconEnabled(param0: boolean): void;
						public setBackgroundColor(param0: number): void;
						public getCloseIconStartPadding(): number;
						public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
						public setGravity(param0: number): void;
						public setCloseIconContentDescription(param0: string): void;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public setEnsureMinTouchTargetSize(param0: boolean): void;
						public setChecked(param0: boolean): void;
						public setCloseIconResource(param0: number): void;
						/** @deprecated */
						public setChipTextResource(param0: number): void;
						/** @deprecated */
						public setCloseIconEnabledResource(param0: number): void;
						public setShowMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public onChipDrawableSizeChange(): void;
						public setIconStartPadding(param0: number): void;
						public getTextEndPadding(): number;
						public setCheckedIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getChipBackgroundColor(): globalAndroid.content.res.ColorStateList;
						public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
						public setTextAppearance(param0: number): void;
						public setChipStartPaddingResource(param0: number): void;
						public setChipStartPadding(param0: number): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setCloseIconVisible(param0: number): void;
						public setCloseIconTintResource(param0: number): void;
						public shouldEnsureMinTouchTargetSize(): boolean;
						public setOnCloseIconClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public setIconEndPaddingResource(param0: number): void;
						public setCloseIconStartPaddingResource(param0: number): void;
						public setLayoutDirection(param0: number): void;
						public performCloseIconClick(): boolean;
						public getCloseIcon(): globalAndroid.graphics.drawable.Drawable;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public setChipIconSize(param0: number): void;
						/** @deprecated */
						public setChipIconEnabledResource(param0: number): void;
						public setCloseIconSizeResource(param0: number): void;
						public setCheckedIconVisible(param0: number): void;
						public setCheckableResource(param0: number): void;
						public getChipIconSize(): number;
						public getChipMinHeight(): number;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
						public setTextStartPaddingResource(param0: number): void;
						public setBackgroundResource(param0: number): void;
						public getChipCornerRadius(): number;
						public setChipStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setCloseIconSize(param0: number): void;
						public getCloseIconEndPadding(): number;
						public setMinLines(param0: number): void;
						public setCloseIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setIconStartPaddingResource(param0: number): void;
						public isCloseIconVisible(): boolean;
						public setTextEndPaddingResource(param0: number): void;
						public onCreateDrawableState(param0: number): native.Array<number>;
						public setChipIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setCompoundDrawables(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
						public setShowMotionSpecResource(param0: number): void;
						/** @deprecated */
						public setChipText(param0: string): void;
						public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setTextAppearanceResource(param0: number): void;
						public setTextEndPadding(param0: number): void;
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setCompoundDrawablesWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;
						public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
						/** @deprecated */
						public setChipCornerRadiusResource(param0: number): void;
						public setChipEndPaddingResource(param0: number): void;
						public setChipIconResource(param0: number): void;
						public setChipBackgroundColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getCheckedIcon(): globalAndroid.graphics.drawable.Drawable;
						public setElevation(param0: number): void;
						public setMaxLines(param0: number): void;
						public setRippleColorResource(param0: number): void;
						public setChipIconVisible(param0: number): void;
						public getBackgroundDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setIconEndPadding(param0: number): void;
						public setChipMinHeight(param0: number): void;
						public setChipIconVisible(param0: boolean): void;
						public getCloseIconTint(): globalAndroid.content.res.ColorStateList;
						public setCompoundDrawablesRelative(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getChipIconTint(): globalAndroid.content.res.ColorStateList;
						public setTextStartPadding(param0: number): void;
						public setChipEndPadding(param0: number): void;
						public isCheckedIconVisible(): boolean;
						public getChipStrokeWidth(): number;
						/** @deprecated */
						public setChipIconEnabled(param0: boolean): void;
						public getCloseIconContentDescription(): string;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setChipIconTintResource(param0: number): void;
						public setChipStrokeWidthResource(param0: number): void;
						public getRippleColor(): globalAndroid.content.res.ColorStateList;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getTextStartPadding(): number;
						public setCheckedIconResource(param0: number): void;
						public setCheckable(param0: boolean): void;
						public getChipEndPadding(): number;
						public setChipStrokeColorResource(param0: number): void;
						public setCloseIconStartPadding(param0: number): void;
						public ensureAccessibleTouchTarget(param0: number): boolean;
						public setTextAppearance(param0: com.google.android.material.resources.TextAppearance): void;
						public setEllipsize(param0: globalAndroid.text.TextUtils.TruncateAt): void;
						public dispatchHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
						/** @deprecated */
						public isCloseIconEnabled(): boolean;
						public getCloseIconSize(): number;
						public getEllipsize(): globalAndroid.text.TextUtils.TruncateAt;
						public setLines(param0: number): void;
						public getChipStrokeColor(): globalAndroid.content.res.ColorStateList;
						public isCheckable(): boolean;
						public setCloseIconEndPaddingResource(param0: number): void;
						public drawableStateChanged(): void;
						public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
						public getIconEndPadding(): number;
						public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
						/** @deprecated */
						public setCheckedIconEnabledResource(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onRtlPropertiesChanged(param0: number): void;
						public setChipMinHeightResource(param0: number): void;
						public getChipStartPadding(): number;
						public onFocusChanged(param0: boolean, param1: number, param2: globalAndroid.graphics.Rect): void;
						/** @deprecated */
						public isChipIconEnabled(): boolean;
						public setChipBackgroundColorResource(param0: number): void;
						public setMaxWidth(param0: number): void;
						public setChipStrokeWidth(param0: number): void;
						/** @deprecated */
						public setCheckedIconEnabled(param0: boolean): void;
						public setCompoundDrawablesWithIntrinsicBounds(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
						public setCheckedIconVisible(param0: boolean): void;
						public setSingleLine(param0: boolean): void;
						public onResolvePointerIcon(param0: globalAndroid.view.MotionEvent, param1: number): any;
						public setHideMotionSpecResource(param0: number): void;
						public setText(param0: string, param1: globalAndroid.widget.TextView.BufferType): void;
						public setCloseIconVisible(param0: boolean): void;
						public getIconStartPadding(): number;
						public setChipIconSizeResource(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getChipDrawable(): globalAndroid.graphics.drawable.Drawable;
						/** @deprecated */
						public getChipText(): string;
						public isChipIconVisible(): boolean;
						public setCloseIconTint(param0: globalAndroid.content.res.ColorStateList): void;
					}
					export module Chip {
						export class ChipTouchHelper {
							public static class: java.lang.Class<com.google.android.material.chip.Chip.ChipTouchHelper>;
							public onVirtualViewKeyboardFocusChanged(param0: number, param1: boolean): void;
							public getVirtualViewAt(param0: number, param1: number): number;
							public onPopulateNodeForVirtualView(param0: number, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
							public onPopulateNodeForHost(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
							public getVisibleVirtualViews(param0: java.util.List<java.lang.Integer>): void;
							public onPerformActionForVirtualView(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module chip {
					export class ChipDrawable extends com.google.android.material.shape.MaterialShapeDrawable implements com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate {
						public static class: java.lang.Class<com.google.android.material.chip.ChipDrawable>;
						public onSizeChange(): void;
						public onLevelChange(param0: number): boolean;
						/** @deprecated */
						public setChipCornerRadius(param0: number): void;
						/** @deprecated */
						public isCheckedIconEnabled(): boolean;
						public setChipIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setHideMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public setCloseIconEndPadding(param0: number): void;
						public getChipIcon(): globalAndroid.graphics.drawable.Drawable;
						public getMaxWidth(): number;
						/** @deprecated */
						public setCloseIconEnabled(param0: boolean): void;
						public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getCloseIconStartPadding(): number;
						public setCloseIconContentDescription(param0: string): void;
						public setCloseIconResource(param0: number): void;
						/** @deprecated */
						public setCloseIconEnabledResource(param0: number): void;
						public setShowMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public setIconStartPadding(param0: number): void;
						public getTextEndPadding(): number;
						public setCheckedIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getCloseIconTouchBounds(param0: globalAndroid.graphics.RectF): void;
						public onTextSizeChange(): void;
						public setAlpha(param0: number): void;
						public getOutline(param0: any): void;
						public getChipBackgroundColor(): globalAndroid.content.res.ColorStateList;
						public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
						public setChipStartPaddingResource(param0: number): void;
						public setChipStartPadding(param0: number): void;
						public setCloseIconVisible(param0: number): void;
						public setCloseIconTintResource(param0: number): void;
						public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): com.google.android.material.chip.ChipDrawable;
						public setIconEndPaddingResource(param0: number): void;
						public setCloseIconStartPaddingResource(param0: number): void;
						public getCloseIcon(): globalAndroid.graphics.drawable.Drawable;
						public getText(): string;
						public getChipTouchBounds(param0: globalAndroid.graphics.RectF): void;
						public getUseCompatRipple(): boolean;
						public setChipIconSize(param0: number): void;
						/** @deprecated */
						public setChipIconEnabledResource(param0: number): void;
						public setCloseIconSizeResource(param0: number): void;
						public onStateChange(param0: native.Array<number>): boolean;
						public setCheckedIconVisible(param0: number): void;
						public setCheckableResource(param0: number): void;
						public getState(): native.Array<number>;
						public getChipIconSize(): number;
						public getChipMinHeight(): number;
						public setTextStartPaddingResource(param0: number): void;
						public getIntrinsicWidth(): number;
						public getChipCornerRadius(): number;
						public setChipStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getOpacity(): number;
						public setDelegate(param0: com.google.android.material.chip.ChipDrawable.Delegate): void;
						public setCloseIconSize(param0: number): void;
						public getCloseIconEndPadding(): number;
						public getCloseIconState(): native.Array<number>;
						public setCloseIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setIconStartPaddingResource(param0: number): void;
						public isCloseIconVisible(): boolean;
						public setTextEndPaddingResource(param0: number): void;
						public setChipIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setShowMotionSpecResource(param0: number): void;
						public setTextAppearanceResource(param0: number): void;
						public setTextEndPadding(param0: number): void;
						public setUseCompatRipple(param0: boolean): void;
						/** @deprecated */
						public setChipCornerRadiusResource(param0: number): void;
						public onLayoutDirectionChanged(param0: number): boolean;
						public setChipEndPaddingResource(param0: number): void;
						public setChipIconResource(param0: number): void;
						public setChipBackgroundColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getCheckedIcon(): globalAndroid.graphics.drawable.Drawable;
						public setRippleColorResource(param0: number): void;
						public setChipIconVisible(param0: number): void;
						public isStateful(): boolean;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public setIconEndPadding(param0: number): void;
						public setChipMinHeight(param0: number): void;
						public setChipIconVisible(param0: boolean): void;
						public getCloseIconTint(): globalAndroid.content.res.ColorStateList;
						public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setCloseIconState(param0: native.Array<number>): boolean;
						public getChipIconTint(): globalAndroid.content.res.ColorStateList;
						public getColorFilter(): globalAndroid.graphics.ColorFilter;
						public setTextStartPadding(param0: number): void;
						public setChipEndPadding(param0: number): void;
						public isCheckedIconVisible(): boolean;
						public getChipStrokeWidth(): number;
						/** @deprecated */
						public setChipIconEnabled(param0: boolean): void;
						public getCloseIconContentDescription(): string;
						public setChipIconTintResource(param0: number): void;
						public setChipStrokeWidthResource(param0: number): void;
						public getRippleColor(): globalAndroid.content.res.ColorStateList;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getTextStartPadding(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCheckedIconResource(param0: number): void;
						public setCheckable(param0: boolean): void;
						public getChipEndPadding(): number;
						public static createFromResource(param0: globalAndroid.content.Context, param1: number): com.google.android.material.chip.ChipDrawable;
						public setChipStrokeColorResource(param0: number): void;
						public setCloseIconStartPadding(param0: number): void;
						public setTextAppearance(param0: com.google.android.material.resources.TextAppearance): void;
						public getTextAppearance(): com.google.android.material.resources.TextAppearance;
						public setEllipsize(param0: globalAndroid.text.TextUtils.TruncateAt): void;
						/** @deprecated */
						public isCloseIconEnabled(): boolean;
						public getCloseIconSize(): number;
						public getEllipsize(): globalAndroid.text.TextUtils.TruncateAt;
						public getAlpha(): number;
						public getChipStrokeColor(): globalAndroid.content.res.ColorStateList;
						public isCheckable(): boolean;
						public isCloseIconStateful(): boolean;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setCloseIconEndPaddingResource(param0: number): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
						public getIconEndPadding(): number;
						/** @deprecated */
						public setCheckedIconEnabledResource(param0: number): void;
						public setChipMinHeightResource(param0: number): void;
						public getChipStartPadding(): number;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						/** @deprecated */
						public isChipIconEnabled(): boolean;
						public getIntrinsicHeight(): number;
						public setChipBackgroundColorResource(param0: number): void;
						public setMaxWidth(param0: number): void;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public setChipStrokeWidth(param0: number): void;
						public setTextResource(param0: number): void;
						/** @deprecated */
						public setCheckedIconEnabled(param0: boolean): void;
						public setCheckedIconVisible(param0: boolean): void;
						public setHideMotionSpecResource(param0: number): void;
						public onShapeAppearanceModelChanged(): void;
						public setCloseIconVisible(param0: boolean): void;
						public getIconStartPadding(): number;
						public setText(param0: string): void;
						public setChipIconSizeResource(param0: number): void;
						public isChipIconVisible(): boolean;
						public setCloseIconTint(param0: globalAndroid.content.res.ColorStateList): void;
					}
					export module ChipDrawable {
						export class Delegate {
							public static class: java.lang.Class<com.google.android.material.chip.ChipDrawable.Delegate>;
							/**
							 * Constructs a new instance of the com.google.android.material.chip.ChipDrawable$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onChipDrawableSizeChange(): void;
							});
							public constructor();
							public onChipDrawableSizeChange(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module chip {
					export class ChipGroup extends com.google.android.material.internal.FlowLayout {
						public static class: java.lang.Class<com.google.android.material.chip.ChipGroup>;
						public constructor(param0: globalAndroid.content.Context);
						public setChipSpacingHorizontalResource(param0: number): void;
						public getChipSpacingVertical(): number;
						public onFinishInflate(): void;
						public setSingleSelection(param0: number): void;
						/** @deprecated */
						public setDividerDrawableVertical(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setChipSpacingHorizontal(param0: number): void;
						public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
						public setOnCheckedChangeListener(param0: com.google.android.material.chip.ChipGroup.OnCheckedChangeListener): void;
						public setSingleLine(param0: number): void;
						public setChipSpacingResource(param0: number): void;
						public setChipSpacingVerticalResource(param0: number): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public getCheckedChipId(): number;
						public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
						public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
						/** @deprecated */
						public setFlexWrap(param0: number): void;
						public setChipSpacingVertical(param0: number): void;
						public setSingleSelection(param0: boolean): void;
						/** @deprecated */
						public setDividerDrawableHorizontal(param0: globalAndroid.graphics.drawable.Drawable): void;
						/** @deprecated */
						public setShowDividerHorizontal(param0: number): void;
						public getChipSpacingHorizontal(): number;
						public clearCheck(): void;
						public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
						public setSingleLine(param0: boolean): void;
						public setOnHierarchyChangeListener(param0: globalAndroid.view.ViewGroup.OnHierarchyChangeListener): void;
						/** @deprecated */
						public setShowDividerVertical(param0: number): void;
						public isSingleSelection(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public check(param0: number): void;
						public setChipSpacing(param0: number): void;
					}
					export module ChipGroup {
						export class CheckedStateTracker {
							public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.CheckedStateTracker>;
							public onCheckedChanged(param0: globalAndroid.widget.CompoundButton, param1: boolean): void;
						}
						export class LayoutParams {
							public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.LayoutParams>;
							public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
							public constructor(param0: number, param1: number);
							public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
						export class OnCheckedChangeListener {
							public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.OnCheckedChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.chip.ChipGroup$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCheckedChanged(param0: com.google.android.material.chip.ChipGroup, param1: number): void;
							});
							public constructor();
							public onCheckedChanged(param0: com.google.android.material.chip.ChipGroup, param1: number): void;
						}
						export class PassThroughHierarchyChangeListener {
							public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.PassThroughHierarchyChangeListener>;
							public onChildViewAdded(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
							public onChildViewRemoved(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealCompat {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealCompat>;
						public static createCircularReveal(param0: com.google.android.material.circularreveal.CircularRevealWidget, param1: number, param2: number, param3: number): globalAndroid.animation.Animator;
						public static createCircularRevealListener(param0: com.google.android.material.circularreveal.CircularRevealWidget): globalAndroid.animation.Animator.AnimatorListener;
						public static createCircularReveal(param0: com.google.android.material.circularreveal.CircularRevealWidget, param1: number, param2: number, param3: number, param4: number): globalAndroid.animation.Animator;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealFrameLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealFrameLayout>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealGridLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealGridLayout>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealHelper {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealHelper>;
						public static BITMAP_SHADER: number;
						public static CLIP_PATH: number;
						public static REVEAL_ANIMATOR: number;
						public static STRATEGY: number;
						public destroyCircularRevealCache(): void;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public getCircularRevealScrimColor(): number;
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public constructor(param0: com.google.android.material.circularreveal.CircularRevealHelper.Delegate);
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
					export module CircularRevealHelper {
						export class Delegate {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealHelper.Delegate>;
							/**
							 * Constructs a new instance of the com.google.android.material.circularreveal.CircularRevealHelper$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								actualDraw(param0: globalAndroid.graphics.Canvas): void;
								actualIsOpaque(): boolean;
							});
							public constructor();
							public actualDraw(param0: globalAndroid.graphics.Canvas): void;
							public actualIsOpaque(): boolean;
						}
						export class Strategy {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealHelper.Strategy>;
							/**
							 * Constructs a new instance of the com.google.android.material.circularreveal.CircularRevealHelper$Strategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealLinearLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealLinearLayout>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealRelativeLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealRelativeLayout>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealWidget extends com.google.android.material.circularreveal.CircularRevealHelper.Delegate {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget>;
						/**
						 * Constructs a new instance of the com.google.android.material.circularreveal.CircularRevealWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							draw(param0: globalAndroid.graphics.Canvas): void;
							isOpaque(): boolean;
							buildCircularRevealCache(): void;
							destroyCircularRevealCache(): void;
							getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
							setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
							getCircularRevealScrimColor(): number;
							setCircularRevealScrimColor(param0: number): void;
							getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
							setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							actualDraw(param0: globalAndroid.graphics.Canvas): void;
							actualIsOpaque(): boolean;
						});
						public constructor();
						public destroyCircularRevealCache(): void;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public getCircularRevealScrimColor(): number;
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
					export module CircularRevealWidget {
						export class CircularRevealEvaluator extends globalAndroid.animation.TypeEvaluator<com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo> {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.CircularRevealEvaluator>;
							public static CIRCULAR_REVEAL: globalAndroid.animation.TypeEvaluator<com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo>;
							public constructor();
							public evaluate(param0: number, param1: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo, param2: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						}
						export class CircularRevealProperty extends globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget,com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo> {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.CircularRevealProperty>;
							public static CIRCULAR_REVEAL: globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget,com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo>;
							public get(param0: com.google.android.material.circularreveal.CircularRevealWidget): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
							public set(param0: com.google.android.material.circularreveal.CircularRevealWidget, param1: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						}
						export class CircularRevealScrimColorProperty extends globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget,java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.CircularRevealScrimColorProperty>;
							public static CIRCULAR_REVEAL_SCRIM_COLOR: globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget,java.lang.Integer>;
							public get(param0: com.google.android.material.circularreveal.CircularRevealWidget): java.lang.Integer;
							public set(param0: com.google.android.material.circularreveal.CircularRevealWidget, param1: java.lang.Integer): void;
						}
						export class RevealInfo {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo>;
							public static INVALID_RADIUS: number;
							public centerX: number;
							public centerY: number;
							public radius: number;
							public constructor(param0: number, param1: number, param2: number);
							public set(param0: number, param1: number, param2: number): void;
							public isInvalid(): boolean;
							public constructor(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo);
							public set(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export module cardview {
						export class CircularRevealCardView extends com.google.android.material.card.MaterialCardView implements com.google.android.material.circularreveal.CircularRevealWidget {
							public static class: java.lang.Class<com.google.android.material.circularreveal.cardview.CircularRevealCardView>;
							public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public buildCircularRevealCache(): void;
							public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
							public setCircularRevealScrimColor(param0: number): void;
							public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public actualIsOpaque(): boolean;
							public getCircularRevealScrimColor(): number;
							public isOpaque(): boolean;
							public destroyCircularRevealCache(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public actualDraw(param0: globalAndroid.graphics.Canvas): void;
							public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export module coordinatorlayout {
						export class CircularRevealCoordinatorLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
							public static class: java.lang.Class<com.google.android.material.circularreveal.coordinatorlayout.CircularRevealCoordinatorLayout>;
							public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public buildCircularRevealCache(): void;
							public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
							public setCircularRevealScrimColor(param0: number): void;
							public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public actualIsOpaque(): boolean;
							public getCircularRevealScrimColor(): number;
							public isOpaque(): boolean;
							public destroyCircularRevealCache(): void;
							public actualDraw(param0: globalAndroid.graphics.Canvas): void;
							public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module color {
					export class MaterialColors {
						public static class: java.lang.Class<com.google.android.material.color.MaterialColors>;
						public static ALPHA_FULL: number;
						public static ALPHA_MEDIUM: number;
						public static ALPHA_DISABLED: number;
						public static ALPHA_LOW: number;
						public static ALPHA_DISABLED_LOW: number;
						public constructor();
						public static getColor(param0: globalAndroid.content.Context, param1: number, param2: number): number;
						public static getColor(param0: globalAndroid.view.View, param1: number, param2: number): number;
						public static layer(param0: number, param1: number, param2: number): number;
						public static layer(param0: number, param1: number): number;
						public static layer(param0: globalAndroid.content.res.ColorStateList, param1: number, param2: globalAndroid.content.res.ColorStateList, param3: number, param4: native.Array<native.Array<number>>): globalAndroid.content.res.ColorStateList;
						public static layer(param0: globalAndroid.view.View, param1: number, param2: number): number;
						public static getColor(param0: globalAndroid.view.View, param1: number): number;
						public static layer(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): number;
						public static getColor(param0: globalAndroid.content.Context, param1: number, param2: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module dialog {
					export class InsetDialogOnTouchListener {
						public static class: java.lang.Class<com.google.android.material.dialog.InsetDialogOnTouchListener>;
						public constructor(param0: globalAndroid.app.Dialog, param1: globalAndroid.graphics.Rect);
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module dialog {
					export class MaterialAlertDialogBuilder {
						public static class: java.lang.Class<com.google.android.material.dialog.MaterialAlertDialogBuilder>;
						public setAdapter(param0: globalAndroid.widget.ListAdapter, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackgroundInsetTop(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public constructor(param0: globalAndroid.content.Context);
						public setItems(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackground(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setView(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNeutralButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public getBackground(): globalAndroid.graphics.drawable.Drawable;
						public setTitle(param0: string): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setView(param0: globalAndroid.view.View): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMultiChoiceItems(param0: globalAndroid.database.Cursor, param1: string, param2: string, param3: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNegativeButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setCancelable(param0: boolean): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setSingleChoiceItems(param0: number, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setPositiveButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setPositiveButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setIcon(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setOnDismissListener(param0: globalAndroid.content.DialogInterface.OnDismissListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackgroundInsetEnd(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setCursor(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.DialogInterface.OnClickListener, param2: string): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setTitle(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMessage(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public create(): androidx.appcompat.app.AlertDialog;
						public setIconAttribute(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setCustomTitle(param0: globalAndroid.view.View): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setSingleChoiceItems(param0: native.Array<string>, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNegativeButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNeutralButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setSingleChoiceItems(param0: globalAndroid.database.Cursor, param1: number, param2: string, param3: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNeutralButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setOnCancelListener(param0: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMultiChoiceItems(param0: native.Array<string>, param1: native.Array<boolean>, param2: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMessage(param0: string): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackgroundInsetBottom(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setPositiveButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setSingleChoiceItems(param0: globalAndroid.widget.ListAdapter, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNegativeButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setOnItemSelectedListener(param0: globalAndroid.widget.AdapterView.OnItemSelectedListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackgroundInsetStart(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMultiChoiceItems(param0: number, param1: native.Array<boolean>, param2: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setItems(param0: native.Array<string>, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public setOnKeyListener(param0: globalAndroid.content.DialogInterface.OnKeyListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module dialog {
					export class MaterialDialogs {
						public static class: java.lang.Class<com.google.android.material.dialog.MaterialDialogs>;
						public static insetDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Rect): globalAndroid.graphics.drawable.InsetDrawable;
						public static getDialogBackgroundInsets(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.graphics.Rect;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module drawable {
					export class DrawableUtils {
						public static class: java.lang.Class<com.google.android.material.drawable.DrawableUtils>;
						public static updateTintFilter(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.content.res.ColorStateList, param2: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuffColorFilter;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module elevation {
					export class ElevationOverlayProvider {
						public static class: java.lang.Class<com.google.android.material.elevation.ElevationOverlayProvider>;
						public isOverlaysEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public calculateOverlayAlphaFraction(param0: number): number;
						public getOverlaysColor(): number;
						public getSurfaceColor(): number;
						public layerOverlayIfNeeded(param0: number, param1: number): number;
						public calculateOverlayAlpha(param0: number): number;
						public layerOverlay(param0: number, param1: number): number;
						public getSurfaceColorWithOverlayIfNeeded(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module expandable {
					export class ExpandableTransformationWidget extends com.google.android.material.expandable.ExpandableWidget {
						public static class: java.lang.Class<com.google.android.material.expandable.ExpandableTransformationWidget>;
						/**
						 * Constructs a new instance of the com.google.android.material.expandable.ExpandableTransformationWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getExpandedComponentIdHint(): number;
							setExpandedComponentIdHint(param0: number): void;
							isExpanded(): boolean;
							setExpanded(param0: boolean): boolean;
						});
						public constructor();
						public getExpandedComponentIdHint(): number;
						public setExpandedComponentIdHint(param0: number): void;
						public isExpanded(): boolean;
						public setExpanded(param0: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module expandable {
					export class ExpandableWidget {
						public static class: java.lang.Class<com.google.android.material.expandable.ExpandableWidget>;
						/**
						 * Constructs a new instance of the com.google.android.material.expandable.ExpandableWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isExpanded(): boolean;
							setExpanded(param0: boolean): boolean;
						});
						public constructor();
						public isExpanded(): boolean;
						public setExpanded(param0: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module expandable {
					export class ExpandableWidgetHelper {
						public static class: java.lang.Class<com.google.android.material.expandable.ExpandableWidgetHelper>;
						public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
						public getExpandedComponentIdHint(): number;
						public constructor(param0: com.google.android.material.expandable.ExpandableWidget);
						public onSaveInstanceState(): globalAndroid.os.Bundle;
						public setExpandedComponentIdHint(param0: number): void;
						public setExpanded(param0: boolean): boolean;
						public isExpanded(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class BorderDrawable {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.BorderDrawable>;
						public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
						public getPadding(param0: globalAndroid.graphics.Rect): boolean;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public getOpacity(): number;
						public getOutline(param0: any): void;
						public setAlpha(param0: number): void;
						public setBorderWidth(param0: number): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public isStateful(): boolean;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public onStateChange(param0: native.Array<number>): boolean;
					}
					export module BorderDrawable {
						export class BorderState {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.BorderDrawable.BorderState>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class ExtendedFloatingActionButton extends com.google.android.material.button.MaterialButton {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton>;
						public removeOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public removeOnExtendAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public extend(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public removeOnShrinkAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setVisibility(param0: number): void;
						public shrink(param0: boolean): void;
						public onAttachedToWindow(): void;
						public shrink(): void;
						public setExtendMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton>;
						public getExtendMotionSpec(): com.google.android.material.animation.MotionSpec;
						public isExtended(): boolean;
						public hide(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedListener): void;
						public setHideMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public addOnShowAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
						public getUserSetVisibility(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public removeOnShowAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public hide(param0: boolean): void;
						public setExtendMotionSpecResource(param0: number): void;
						public addOnShrinkAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setShowMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setShrinkMotionSpecResource(param0: number): void;
						public addOnExtendAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public hide(): void;
						public shrink(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedListener): void;
						public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
						public extend(): void;
						public setHideMotionSpecResource(param0: number): void;
						public show(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedListener): void;
						public extend(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedListener): void;
						public setCornerRadius(param0: number): void;
						public show(): void;
						public setShrinkMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public addOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setShowMotionSpecResource(param0: number): void;
						public getShrinkMotionSpec(): com.google.android.material.animation.MotionSpec;
						public show(param0: boolean): void;
					}
					export module ExtendedFloatingActionButton {
						export class ExtendedFloatingActionButtonBehavior<T>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ExtendedFloatingActionButtonBehavior<any>>;
							public constructor();
							public setInternalAutoHideListener(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedListener): void;
							public setAutoShrinkEnabled(param0: boolean): void;
							public onDependentViewChanged(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, param2: globalAndroid.view.View): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setAutoHideEnabled(param0: boolean): void;
							public setInternalAutoShrinkListener(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedListener): void;
							public shrinkOrHide(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
							public isAutoShrinkEnabled(): boolean;
							public getInsetDodgeRect(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, param2: globalAndroid.graphics.Rect): boolean;
							public onAttachedToLayoutParams(param0: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, param2: number): boolean;
							public isAutoHideEnabled(): boolean;
							public extendOrShow(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
						}
						export abstract class OnChangedListener {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedListener>;
							public constructor();
							public onExtended(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
							public onHidden(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
							public onShown(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
							public onShrunken(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class FloatingActionButton extends com.google.android.material.internal.VisibilityAwareImageButton implements com.google.android.material.expandable.ExpandableTransformationWidget {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton>;
						public static SIZE_MINI: number;
						public static SIZE_NORMAL: number;
						public static SIZE_AUTO: number;
						public static NO_CUSTOM_SIZE: number;
						public removeOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public getCustomSize(): number;
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getExpandedComponentIdHint(): number;
						public constructor(param0: globalAndroid.content.Context);
						public setBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public addTransformationListener(param0: com.google.android.material.animation.TransformationListener<any>): void;
						public setTranslationZ(param0: number): void;
						public getMeasuredContentRect(param0: globalAndroid.graphics.Rect): void;
						public setScaleY(param0: number): void;
						public setCompatElevation(param0: number): void;
						public setElevation(param0: number): void;
						public setExpandedComponentIdHint(param0: number): void;
						public setHideMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public getRippleColorStateList(): globalAndroid.content.res.ColorStateList;
						public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getContentBackground(): globalAndroid.graphics.drawable.Drawable;
						public setCompatPressedTranslationZ(param0: number): void;
						public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setBackgroundColor(param0: number): void;
						public onMeasure(param0: number, param1: number): void;
						public removeOnShowAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setExpanded(param0: boolean): boolean;
						public setEnsureMinTouchTargetSize(param0: boolean): void;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						/** @deprecated */
						public getRippleColor(): number;
						public getCompatHoveredFocusedTranslationZ(): number;
						public setScaleX(param0: number): void;
						public getUseCompatPadding(): boolean;
						public setTranslationY(param0: number): void;
						public setShowMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public isOrWillBeShown(): boolean;
						public clearCustomSize(): void;
						public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getShapeAppearance(): com.google.android.material.shape.ShapeAppearanceModel;
						public hide(param0: com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener): void;
						public jumpDrawablesToCurrentState(): void;
						public setCustomSize(param0: number): void;
						public getSize(): number;
						public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public show(param0: com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener): void;
						public shouldEnsureMinTouchTargetSize(): boolean;
						public setCompatHoveredFocusedTranslationZ(param0: number): void;
						public isExpanded(): boolean;
						public getCompatElevation(): number;
						public setSize(param0: number): void;
						public setRippleColor(param0: number): void;
						public setVisibility(param0: number): void;
						public setCompatHoveredFocusedTranslationZResource(param0: number): void;
						public onAttachedToWindow(): void;
						public setUseCompatPadding(param0: boolean): void;
						public getCompatPressedTranslationZ(): number;
						public setImageResource(param0: number): void;
						public drawableStateChanged(): void;
						public addOnShowAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
						public removeTransformationListener(param0: com.google.android.material.animation.TransformationListener<any>): void;
						public getBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setSupportImageTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setShapeAppearance(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public isOrWillBeHidden(): boolean;
						public setBackgroundResource(param0: number): void;
						public onDetachedFromWindow(): void;
						public hide(): void;
						public setHideMotionSpecResource(param0: number): void;
						public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public setSupportImageTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setCompatPressedTranslationZResource(param0: number): void;
						public getBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setCompatElevationResource(param0: number): void;
						public show(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public addOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setTranslationX(param0: number): void;
						public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setShowMotionSpecResource(param0: number): void;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						/** @deprecated */
						public getContentRect(param0: globalAndroid.graphics.Rect): boolean;
					}
					export module FloatingActionButton {
						export class BaseBehavior<T>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior<any>>;
							public constructor();
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.FloatingActionButton, param2: number): boolean;
							public onDependentViewChanged(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.FloatingActionButton, param2: globalAndroid.view.View): boolean;
							public onAttachedToLayoutParams(param0: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
							public setInternalAutoHideListener(param0: com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setAutoHideEnabled(param0: boolean): void;
							public isAutoHideEnabled(): boolean;
							public getInsetDodgeRect(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.FloatingActionButton, param2: globalAndroid.graphics.Rect): boolean;
						}
						export class Behavior extends com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior<com.google.android.material.floatingactionbutton.FloatingActionButton> {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.Behavior>;
							public constructor();
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
						export abstract class OnVisibilityChangedListener {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener>;
							public constructor();
							public onHidden(param0: com.google.android.material.floatingactionbutton.FloatingActionButton): void;
							public onShown(param0: com.google.android.material.floatingactionbutton.FloatingActionButton): void;
						}
						export class ShadowDelegateImpl extends com.google.android.material.shadow.ShadowViewDelegate {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.ShadowDelegateImpl>;
							public getRadius(): number;
							public isCompatPaddingEnabled(): boolean;
							public setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
							public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						}
						export class Size {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.Size>;
							/**
							 * Constructs a new instance of the com.google.android.material.floatingactionbutton.FloatingActionButton$Size interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class TransformationListenerWrapper<T>  extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.InternalTransformationListener {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.TransformationListenerWrapper<any>>;
							public hashCode(): number;
							public onTranslationChanged(): void;
							public onScaleChanged(): void;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class FloatingActionButtonImpl {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl>;
						public removeOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public addOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
					}
					export module FloatingActionButtonImpl {
						export class DisabledElevationAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.DisabledElevationAnimation>;
							public getTargetShadowSize(): number;
						}
						export class ElevateToHoveredFocusedTranslationZAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ElevateToHoveredFocusedTranslationZAnimation>;
							public getTargetShadowSize(): number;
						}
						export class ElevateToPressedTranslationZAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ElevateToPressedTranslationZAnimation>;
							public getTargetShadowSize(): number;
						}
						export class InternalTransformationListener {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.InternalTransformationListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.floatingactionbutton.FloatingActionButtonImpl$InternalTransformationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTranslationChanged(): void;
								onScaleChanged(): void;
							});
							public constructor();
							public onTranslationChanged(): void;
							public onScaleChanged(): void;
						}
						export class InternalVisibilityChangedListener {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.InternalVisibilityChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.floatingactionbutton.FloatingActionButtonImpl$InternalVisibilityChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onShown(): void;
								onHidden(): void;
							});
							public constructor();
							public onShown(): void;
							public onHidden(): void;
						}
						export class ResetElevationAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ResetElevationAnimation>;
							public getTargetShadowSize(): number;
						}
						export abstract class ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl>;
							public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
							public getTargetShadowSize(): number;
							public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class FloatingActionButtonImplLollipop extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImplLollipop>;
						public getElevation(): number;
					}
					export module FloatingActionButtonImplLollipop {
						export class AlwaysStatefulMaterialShapeDrawable extends com.google.android.material.shape.MaterialShapeDrawable {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImplLollipop.AlwaysStatefulMaterialShapeDrawable>;
							public isStateful(): boolean;
							public onShapeAppearanceModelChanged(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class BaselineLayout {
						public static class: java.lang.Class<com.google.android.material.internal.BaselineLayout>;
						public getBaseline(): number;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class CheckableImageButton {
						public static class: java.lang.Class<com.google.android.material.internal.CheckableImageButton>;
						public setChecked(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public isChecked(): boolean;
						public onCreateDrawableState(param0: number): native.Array<number>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public toggle(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class CollapsingTextHelper {
						public static class: java.lang.Class<com.google.android.material.internal.CollapsingTextHelper>;
						public setExpandedBounds(param0: globalAndroid.graphics.Rect): void;
						public getExpandedTextColor(): globalAndroid.content.res.ColorStateList;
						public setCollapsedTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getText(): string;
						public getCollapsedTextActualBounds(param0: globalAndroid.graphics.RectF): void;
						public setExpandedTextAppearance(param0: number): void;
						public setTextSizeInterpolator(param0: globalAndroid.animation.TimeInterpolator): void;
						public getCollapsedTextHeight(): number;
						public isStateful(): boolean;
						public getExpandedTextGravity(): number;
						public setCollapsedBounds(param0: number, param1: number, param2: number, param3: number): void;
						public setExpandedTextGravity(param0: number): void;
						public setCollapsedTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setState(param0: native.Array<number>): boolean;
						public setCollapsedTextSize(param0: number): void;
						public setTypefaces(param0: globalAndroid.graphics.Typeface): void;
						public getExpansionFraction(): number;
						public setExpandedTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setExpansionFraction(param0: number): void;
						public setCollapsedTextAppearance(param0: number): void;
						public setPositionInterpolator(param0: globalAndroid.animation.TimeInterpolator): void;
						public getCollapsedTextGravity(): number;
						public getExpandedTypeface(): globalAndroid.graphics.Typeface;
						public getCollapsedTypeface(): globalAndroid.graphics.Typeface;
						public setCollapsedTextGravity(param0: number): void;
						public setCollapsedBounds(param0: globalAndroid.graphics.Rect): void;
						public constructor(param0: globalAndroid.view.View);
						public setExpandedBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getCollapsedTextColor(): globalAndroid.content.res.ColorStateList;
						public getExpandedTextSize(): number;
						public getExpandedTextHeight(): number;
						public getCollapsedTextSize(): number;
						public recalculate(): void;
						public setExpandedTextSize(param0: number): void;
						public calculateCollapsedTextWidth(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setText(param0: string): void;
						public setExpandedTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getCurrentCollapsedTextColor(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ContextUtils {
						public static class: java.lang.Class<com.google.android.material.internal.ContextUtils>;
						public constructor();
						public static getActivity(param0: globalAndroid.content.Context): globalAndroid.app.Activity;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class DescendantOffsetUtils {
						public static class: java.lang.Class<com.google.android.material.internal.DescendantOffsetUtils>;
						public constructor();
						public static getDescendantRect(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect): void;
						public static offsetDescendantRect(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class DrawableUtils {
						public static class: java.lang.Class<com.google.android.material.internal.DrawableUtils>;
						public static setContainerConstantState(param0: globalAndroid.graphics.drawable.DrawableContainer, param1: globalAndroid.graphics.drawable.Drawable.ConstantState): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class Experimental {
						public static class: java.lang.Class<com.google.android.material.internal.Experimental>;
						/**
						 * Constructs a new instance of the com.google.android.material.internal.Experimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
						});
						public constructor();
						public value(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class FlowLayout {
						public static class: java.lang.Class<com.google.android.material.internal.FlowLayout>;
						public setLineSpacing(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setItemSpacing(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getLineSpacing(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getItemSpacing(): number;
						public isSingleLine(): boolean;
						public setSingleLine(param0: boolean): void;
						public onMeasure(param0: number, param1: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ForegroundLinearLayout {
						public static class: java.lang.Class<com.google.android.material.internal.ForegroundLinearLayout>;
						public mForegroundInPadding: boolean;
						public drawableHotspotChanged(param0: number, param1: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
						public getForeground(): globalAndroid.graphics.drawable.Drawable;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setForeground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public drawableStateChanged(): void;
						public jumpDrawablesToCurrentState(): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getForegroundGravity(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setForegroundGravity(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationMenu {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationMenu>;
						public constructor(param0: globalAndroid.content.Context);
						public addSubMenu(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.SubMenu;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationMenuItemView extends com.google.android.material.internal.ForegroundLinearLayout {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuItemView>;
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setChecked(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public setTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setIconPadding(param0: number): void;
						public showsIcon(): boolean;
						public recycle(): void;
						public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
						public setTextAppearance(param0: number): void;
						public setMaxLines(param0: number): void;
						public prefersCondensedTitle(): boolean;
						public setTitle(param0: string): void;
						public setShortcut(param0: boolean, param1: string): void;
						public onCreateDrawableState(param0: number): native.Array<number>;
						public setNeedsEmptyIcon(param0: boolean): void;
						public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setCheckable(param0: boolean): void;
						public setIconSize(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setHorizontalPadding(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationMenuPresenter {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter>;
						public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
						public setItemHorizontalPadding(param0: number): void;
						public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
						public flagActionItems(): boolean;
						public getItemIconPadding(): number;
						public setItemMaxLines(param0: number): void;
						public inflateHeaderView(param0: number): globalAndroid.view.View;
						public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						public removeHeaderView(param0: globalAndroid.view.View): void;
						public updateMenuView(param0: boolean): void;
						public getItemTextColor(): globalAndroid.content.res.ColorStateList;
						public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						public addHeaderView(param0: globalAndroid.view.View): void;
						public getItemMaxLines(): number;
						public constructor();
						public setCheckedItem(param0: androidx.appcompat.view.menu.MenuItemImpl): void;
						public setItemIconPadding(param0: number): void;
						public getItemHorizontalPadding(): number;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
						public setItemIconSize(param0: number): void;
						public getId(): number;
						public setId(param0: number): void;
						public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
						public dispatchApplyWindowInsets(param0: androidx.core.view.WindowInsetsCompat): void;
						public setUpdateSuspended(param0: boolean): void;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public getItemTintList(): globalAndroid.content.res.ColorStateList;
						public getHeaderView(param0: number): globalAndroid.view.View;
						public setItemIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
						public getHeaderCount(): number;
						public setItemTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextAppearance(param0: number): void;
						public getCheckedItem(): androidx.appcompat.view.menu.MenuItemImpl;
					}
					export module NavigationMenuPresenter {
						export class HeaderViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.HeaderViewHolder>;
							public constructor(param0: globalAndroid.view.View);
						}
						export class NavigationMenuAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.material.internal.NavigationMenuPresenter.ViewHolder> {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuAdapter>;
							public getItemId(param0: number): number;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.google.android.material.internal.NavigationMenuPresenter.ViewHolder;
							public restoreInstanceState(param0: globalAndroid.os.Bundle): void;
							public getItemViewType(param0: number): number;
							public setUpdateSuspended(param0: boolean): void;
							public onViewRecycled(param0: com.google.android.material.internal.NavigationMenuPresenter.ViewHolder): void;
							public createInstanceState(): globalAndroid.os.Bundle;
							public getItemCount(): number;
							public onBindViewHolder(param0: com.google.android.material.internal.NavigationMenuPresenter.ViewHolder, param1: number): void;
							public setCheckedItem(param0: androidx.appcompat.view.menu.MenuItemImpl): void;
							public update(): void;
							public getCheckedItem(): androidx.appcompat.view.menu.MenuItemImpl;
						}
						export class NavigationMenuHeaderItem extends com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuHeaderItem>;
						}
						export class NavigationMenuItem {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem>;
							/**
							 * Constructs a new instance of the com.google.android.material.internal.NavigationMenuPresenter$NavigationMenuItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class NavigationMenuSeparatorItem extends com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuSeparatorItem>;
							public constructor(param0: number, param1: number);
							public getPaddingBottom(): number;
							public getPaddingTop(): number;
						}
						export class NavigationMenuTextItem extends com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuTextItem>;
							public getMenuItem(): androidx.appcompat.view.menu.MenuItemImpl;
						}
						export class NavigationMenuViewAccessibilityDelegate {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuViewAccessibilityDelegate>;
							public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
						}
						export class NormalViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NormalViewHolder>;
							public constructor(param0: globalAndroid.view.View);
							public constructor(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.view.View.OnClickListener);
						}
						export class SeparatorViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.SeparatorViewHolder>;
							public constructor(param0: globalAndroid.view.View);
							public constructor(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup);
						}
						export class SubheaderViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.SubheaderViewHolder>;
							public constructor(param0: globalAndroid.view.View);
							public constructor(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup);
						}
						export abstract class ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.ViewHolder>;
							public constructor(param0: globalAndroid.view.View);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationMenuView {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuView>;
						public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						public constructor(param0: globalAndroid.content.Context);
						public getWindowAnimations(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationSubMenu {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationSubMenu>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.material.internal.NavigationMenu, param2: androidx.appcompat.view.menu.MenuItemImpl);
						public onItemsChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ParcelableSparseArray extends globalAndroid.util.SparseArray<globalAndroid.os.Parcelable> implements globalAndroid.os.Parcelable  {
						public static class: java.lang.Class<com.google.android.material.internal.ParcelableSparseArray>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.ParcelableSparseArray>;
						public constructor();
						public describeContents(): number;
						public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ParcelableSparseBooleanArray {
						public static class: java.lang.Class<com.google.android.material.internal.ParcelableSparseBooleanArray>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.ParcelableSparseBooleanArray>;
						public constructor(param0: globalAndroid.util.SparseBooleanArray);
						public constructor();
						public describeContents(): number;
						public constructor(param0: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ParcelableSparseIntArray {
						public static class: java.lang.Class<com.google.android.material.internal.ParcelableSparseIntArray>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.ParcelableSparseIntArray>;
						public constructor();
						public describeContents(): number;
						public constructor(param0: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: globalAndroid.util.SparseIntArray);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ScrimInsetsFrameLayout {
						public static class: java.lang.Class<com.google.android.material.internal.ScrimInsetsFrameLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public onAttachedToWindow(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onDetachedFromWindow(): void;
						public onInsetsChanged(param0: androidx.core.view.WindowInsetsCompat): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class StateListAnimator {
						public static class: java.lang.Class<com.google.android.material.internal.StateListAnimator>;
						public constructor();
						public addState(param0: native.Array<number>, param1: globalAndroid.animation.ValueAnimator): void;
						public jumpToCurrentState(): void;
						public setState(param0: native.Array<number>): void;
					}
					export module StateListAnimator {
						export class Tuple {
							public static class: java.lang.Class<com.google.android.material.internal.StateListAnimator.Tuple>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class TextDrawableHelper {
						public static class: java.lang.Class<com.google.android.material.internal.TextDrawableHelper>;
						public setTextWidthDirty(param0: boolean): void;
						public getTextWidth(param0: string): number;
						public constructor(param0: com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate);
						public getTextAppearance(): com.google.android.material.resources.TextAppearance;
						public setTextAppearance(param0: com.google.android.material.resources.TextAppearance, param1: globalAndroid.content.Context): void;
						public getTextPaint(): globalAndroid.text.TextPaint;
						public setDelegate(param0: com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate): void;
						public isTextWidthDirty(): boolean;
						public updateTextPaintDrawState(param0: globalAndroid.content.Context): void;
					}
					export module TextDrawableHelper {
						export class TextDrawableDelegate {
							public static class: java.lang.Class<com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.material.internal.TextDrawableHelper$TextDrawableDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getState(): native.Array<number>;
								onTextSizeChange(): void;
								onStateChange(param0: native.Array<number>): boolean;
							});
							public constructor();
							public getState(): native.Array<number>;
							public onStateChange(param0: native.Array<number>): boolean;
							public onTextSizeChange(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class TextScale {
						public static class: java.lang.Class<com.google.android.material.internal.TextScale>;
						public captureEndValues(param0: androidx.transition.TransitionValues): void;
						public constructor();
						public captureStartValues(param0: androidx.transition.TransitionValues): void;
						public createAnimator(param0: globalAndroid.view.ViewGroup, param1: androidx.transition.TransitionValues, param2: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ThemeEnforcement {
						public static class: java.lang.Class<com.google.android.material.internal.ThemeEnforcement>;
						public static obtainStyledAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: native.Array<number>, param3: number, param4: number, param5: native.Array<number>): globalAndroid.content.res.TypedArray;
						public static checkMaterialTheme(param0: globalAndroid.content.Context): void;
						public static obtainTintedStyledAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: native.Array<number>, param3: number, param4: number, param5: native.Array<number>): androidx.appcompat.widget.TintTypedArray;
						public static checkAppCompatTheme(param0: globalAndroid.content.Context): void;
						public static createThemedContext(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): globalAndroid.content.Context;
						public static isAppCompatTheme(param0: globalAndroid.content.Context): boolean;
						public static isMaterialTheme(param0: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ViewUtils {
						public static class: java.lang.Class<com.google.android.material.internal.ViewUtils>;
						public constructor();
						public static parseTintMode(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuff.Mode;
						public static isLayoutRtl(param0: globalAndroid.view.View): boolean;
						public static dpToPx(param0: globalAndroid.content.Context, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class VisibilityAwareImageButton {
						public static class: java.lang.Class<com.google.android.material.internal.VisibilityAwareImageButton>;
						public constructor(param0: globalAndroid.content.Context);
						public setVisibility(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getUserSetVisibility(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public internalSetVisibility(param0: number, param1: boolean): void;
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module android {
			export module material {
				export module math {
					export class MathUtils {
						public static class: java.lang.Class<com.google.android.material.math.MathUtils>;
						public static DEFAULT_EPSILON: number;
						public static distanceToFurthestCorner(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
						public static dist(param0: number, param1: number, param2: number, param3: number): number;
						public static lerp(param0: number, param1: number, param2: number): number;
						public static geq(param0: number, param1: number, param2: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module navigation {
					export class NavigationView extends com.google.android.material.internal.ScrimInsetsFrameLayout {
						public static class: java.lang.Class<com.google.android.material.navigation.NavigationView>;
						public setItemHorizontalPadding(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public getItemIconPadding(): number;
						public setItemMaxLines(param0: number): void;
						public inflateHeaderView(param0: number): globalAndroid.view.View;
						public setElevation(param0: number): void;
						public removeHeaderView(param0: globalAndroid.view.View): void;
						public getItemIconTintList(): globalAndroid.content.res.ColorStateList;
						public setNavigationItemSelectedListener(param0: com.google.android.material.navigation.NavigationView.OnNavigationItemSelectedListener): void;
						public getItemTextColor(): globalAndroid.content.res.ColorStateList;
						public addHeaderView(param0: globalAndroid.view.View): void;
						public getItemMaxLines(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setItemBackgroundResource(param0: number): void;
						public onMeasure(param0: number, param1: number): void;
						public setItemHorizontalPaddingResource(param0: number): void;
						public setCheckedItem(param0: globalAndroid.view.MenuItem): void;
						public setItemIconPadding(param0: number): void;
						public getMenu(): globalAndroid.view.Menu;
						public getItemHorizontalPadding(): number;
						public inflateMenu(param0: number): void;
						public setCheckedItem(param0: number): void;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onInsetsChanged(param0: androidx.core.view.WindowInsetsCompat): void;
						public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
						public setItemIconSize(param0: number): void;
						public getCheckedItem(): globalAndroid.view.MenuItem;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setItemIconPaddingResource(param0: number): void;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public getHeaderView(param0: number): globalAndroid.view.View;
						public setItemIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public getHeaderCount(): number;
						public setItemTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextAppearance(param0: number): void;
					}
					export module NavigationView {
						export class OnNavigationItemSelectedListener {
							public static class: java.lang.Class<com.google.android.material.navigation.NavigationView.OnNavigationItemSelectedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.navigation.NavigationView$OnNavigationItemSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							});
							public constructor();
							public onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.navigation.NavigationView.SavedState>;
							public menuState: globalAndroid.os.Bundle;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.navigation.NavigationView.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
							public constructor(param0: globalAndroid.os.Parcelable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class CalendarBounds {
						public static class: java.lang.Class<com.google.android.material.picker.CalendarBounds>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.picker.CalendarBounds>;
						public describeContents(): number;
						public getStart(): com.google.android.material.picker.Month;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static create(param0: com.google.android.material.picker.Month, param1: com.google.android.material.picker.Month, param2: com.google.android.material.picker.Month): com.google.android.material.picker.CalendarBounds;
						public static create(param0: com.google.android.material.picker.Month, param1: com.google.android.material.picker.Month): com.google.android.material.picker.CalendarBounds;
						public getEnd(): com.google.android.material.picker.Month;
						public getCurrent(): com.google.android.material.picker.Month;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class CalendarGridSelectors {
						public static class: java.lang.Class<com.google.android.material.picker.CalendarGridSelectors>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class DateGridSelector extends com.google.android.material.picker.GridSelector<java.util.Calendar> {
						public static class: java.lang.Class<com.google.android.material.picker.DateGridSelector>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.picker.DateGridSelector>;
						public constructor();
						public describeContents(): number;
						public getSelection(): java.util.Calendar;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public drawCell(param0: globalAndroid.widget.TextView, param1: java.util.Calendar): void;
						public getSelection(): any;
						public select(param0: java.util.Calendar): void;
						public onCalendarMonthDraw(param0: globalAndroid.graphics.Canvas, param1: com.google.android.material.picker.MaterialCalendarGridView): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class DateRangeGridSelector extends com.google.android.material.picker.GridSelector<androidx.core.util.Pair<java.util.Calendar,java.util.Calendar>> {
						public static class: java.lang.Class<com.google.android.material.picker.DateRangeGridSelector>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.picker.DateRangeGridSelector>;
						public constructor();
						public getStart(): java.util.Calendar;
						public describeContents(): number;
						public getSelection(): androidx.core.util.Pair<java.util.Calendar,java.util.Calendar>;
						public getEnd(): java.util.Calendar;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public drawCell(param0: globalAndroid.widget.TextView, param1: java.util.Calendar): void;
						public getSelection(): any;
						public select(param0: java.util.Calendar): void;
						public onCalendarMonthDraw(param0: globalAndroid.graphics.Canvas, param1: com.google.android.material.picker.MaterialCalendarGridView): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class DaysOfWeekAdapter {
						public static class: java.lang.Class<com.google.android.material.picker.DaysOfWeekAdapter>;
						public getItem(param0: number): java.lang.Integer;
						public constructor();
						public getItemId(param0: number): number;
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class GridSelector<S>  extends globalAndroid.os.Parcelable {
						public static class: java.lang.Class<com.google.android.material.picker.GridSelector<any>>;
						/**
						 * Constructs a new instance of the com.google.android.material.picker.GridSelector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getSelection(): any;
							select(param0: java.util.Calendar): void;
							drawCell(param0: globalAndroid.widget.TextView, param1: java.util.Calendar): void;
							onCalendarMonthDraw(param0: globalAndroid.graphics.Canvas, param1: com.google.android.material.picker.MaterialCalendarGridView): void;
						});
						public constructor();
						public drawCell(param0: globalAndroid.widget.TextView, param1: java.util.Calendar): void;
						public getSelection(): any;
						public select(param0: java.util.Calendar): void;
						public onCalendarMonthDraw(param0: globalAndroid.graphics.Canvas, param1: com.google.android.material.picker.MaterialCalendarGridView): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class MaterialCalendar<S>  extends androidx.fragment.app.Fragment {
						public static class: java.lang.Class<com.google.android.material.picker.MaterialCalendar<any>>;
						public static VIEW_PAGER_TAG: any;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public getSelection(): any;
						public static newInstance(param0: com.google.android.material.picker.GridSelector<any>, param1: number, param2: com.google.android.material.picker.CalendarBounds): com.google.android.material.picker.MaterialCalendar<any>;
					}
					export module MaterialCalendar {
						export class OnDayClickListener {
							public static class: java.lang.Class<com.google.android.material.picker.MaterialCalendar.OnDayClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.picker.MaterialCalendar$OnDayClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDayClick(param0: java.util.Calendar): void;
							});
							public constructor();
							public onDayClick(param0: java.util.Calendar): void;
						}
						export class OnSelectionChangedListener<S>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.material.picker.MaterialCalendar.OnSelectionChangedListener<any>>;
							/**
							 * Constructs a new instance of the com.google.android.material.picker.MaterialCalendar$OnSelectionChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSelectionChanged(param0: S): void;
							});
							public constructor();
							public onSelectionChanged(param0: S): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class MaterialCalendarGridView {
						public static class: java.lang.Class<com.google.android.material.picker.MaterialCalendarGridView>;
						public constructor(param0: globalAndroid.content.Context);
						public setAdapter(param0: globalAndroid.widget.ListAdapter): void;
						public getAdapter(): com.google.android.material.picker.MonthAdapter;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class MaterialDatePickerDialogFragment extends com.google.android.material.picker.MaterialPickerDialogFragment<java.util.Calendar> {
						public static class: java.lang.Class<com.google.android.material.picker.MaterialDatePickerDialogFragment>;
						public createGridSelector(): com.google.android.material.picker.DateGridSelector;
						public constructor();
						public createGridSelector(): com.google.android.material.picker.GridSelector<any>;
						public static newInstance(param0: number, param1: com.google.android.material.picker.CalendarBounds): com.google.android.material.picker.MaterialDatePickerDialogFragment;
						public getDefaultThemeAttr(): number;
						public static newInstance(param0: com.google.android.material.picker.CalendarBounds): com.google.android.material.picker.MaterialDatePickerDialogFragment;
						public static newInstance(): com.google.android.material.picker.MaterialDatePickerDialogFragment;
						public getHeaderText(param0: any): string;
						public static newInstance(param0: number): com.google.android.material.picker.MaterialDatePickerDialogFragment;
						public getHeaderText(param0: java.util.Calendar): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class MaterialDateRangePickerDialogFragment extends com.google.android.material.picker.MaterialPickerDialogFragment<androidx.core.util.Pair<java.util.Calendar,java.util.Calendar>> {
						public static class: java.lang.Class<com.google.android.material.picker.MaterialDateRangePickerDialogFragment>;
						public constructor();
						public static newInstance(): com.google.android.material.picker.MaterialDateRangePickerDialogFragment;
						public getStart(): java.util.Calendar;
						public createGridSelector(): com.google.android.material.picker.GridSelector<any>;
						public getEnd(): java.util.Calendar;
						public getHeaderText(param0: androidx.core.util.Pair<java.util.Calendar,java.util.Calendar>): string;
						public getDefaultThemeAttr(): number;
						public static newInstance(param0: number, param1: com.google.android.material.picker.CalendarBounds): com.google.android.material.picker.MaterialDateRangePickerDialogFragment;
						public createGridSelector(): com.google.android.material.picker.GridSelector<androidx.core.util.Pair<java.util.Calendar,java.util.Calendar>>;
						public getHeaderText(param0: any): string;
						public static newInstance(param0: number): com.google.android.material.picker.MaterialDateRangePickerDialogFragment;
						public static newInstance(param0: com.google.android.material.picker.CalendarBounds): com.google.android.material.picker.MaterialDateRangePickerDialogFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export abstract class MaterialPickerDialogFragment<S>  extends androidx.fragment.app.DialogFragment {
						public static class: java.lang.Class<com.google.android.material.picker.MaterialPickerDialogFragment<any>>;
						public static DEFAULT_START: com.google.android.material.picker.Month;
						public static DEFAULT_END: com.google.android.material.picker.Month;
						public static DEFAULT_BOUNDS: com.google.android.material.picker.CalendarBounds;
						public static CONFIRM_BUTTON_TAG: any;
						public static CANCEL_BUTTON_TAG: any;
						public constructor();
						public onDismiss(param0: globalAndroid.content.DialogInterface): void;
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public setSimpleDateFormat(param0: java.text.SimpleDateFormat): void;
						public getMaterialCalendar(): com.google.android.material.picker.MaterialCalendar<any>;
						public getDefaultThemeAttr(): number;
						public getSimpleDateFormat(): java.text.SimpleDateFormat;
						public onStop(): void;
						public createGridSelector(): com.google.android.material.picker.GridSelector<any>;
						public static addArgsToBundle(param0: globalAndroid.os.Bundle, param1: number, param2: com.google.android.material.picker.CalendarBounds, param3: number): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public getSelection(): any;
						public getHeaderText(param0: any): string;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class MaterialStyledDatePickerDialog {
						public static class: java.lang.Class<com.google.android.material.picker.MaterialStyledDatePickerDialog>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.app.DatePickerDialog.OnDateSetListener, param2: number, param3: number, param4: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.app.DatePickerDialog.OnDateSetListener, param3: number, param4: number, param5: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class Month extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.picker.Month>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.picker.Month>;
						public describeContents(): number;
						public compareTo(param0: com.google.android.material.picker.Month): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class MonthAdapter {
						public static class: java.lang.Class<com.google.android.material.picker.MonthAdapter>;
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.widget.TextView;
						public getItemId(param0: number): number;
						public getItem(param0: number): java.util.Calendar;
						public getCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class MonthFragment {
						public static class: java.lang.Class<com.google.android.material.picker.MonthFragment>;
						public static newInstance(param0: com.google.android.material.picker.Month, param1: com.google.android.material.picker.GridSelector<any>): com.google.android.material.picker.MonthFragment;
						public constructor();
						public setOnDayClickListener(param0: com.google.android.material.picker.MaterialCalendar.OnDayClickListener): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.widget.GridView;
						public onCreate(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module picker {
					export class MonthsPagerAdapter {
						public static class: java.lang.Class<com.google.android.material.picker.MonthsPagerAdapter>;
						public getItem(param0: number): com.google.android.material.picker.MonthFragment;
						public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): androidx.fragment.app.Fragment;
						public getPageTitle(param0: number): string;
						public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
						public getCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module radiobutton {
					export class MaterialRadioButton {
						public static class: java.lang.Class<com.google.android.material.radiobutton.MaterialRadioButton>;
						public isUseMaterialThemeColors(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setUseMaterialThemeColors(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class CancelableFontCallback extends com.google.android.material.resources.TextAppearanceFontCallback {
						public static class: java.lang.Class<com.google.android.material.resources.CancelableFontCallback>;
						public constructor(param0: com.google.android.material.resources.CancelableFontCallback.ApplyFont, param1: globalAndroid.graphics.Typeface);
						public constructor();
						public cancel(): void;
						public onFontRetrieved(param0: globalAndroid.graphics.Typeface, param1: boolean): void;
						public onFontRetrievalFailed(param0: number): void;
					}
					export module CancelableFontCallback {
						export class ApplyFont {
							public static class: java.lang.Class<com.google.android.material.resources.CancelableFontCallback.ApplyFont>;
							/**
							 * Constructs a new instance of the com.google.android.material.resources.CancelableFontCallback$ApplyFont interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: globalAndroid.graphics.Typeface): void;
							});
							public constructor();
							public apply(param0: globalAndroid.graphics.Typeface): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class MaterialAttributes {
						public static class: java.lang.Class<com.google.android.material.resources.MaterialAttributes>;
						public static resolveBoolean(param0: globalAndroid.content.Context, param1: number, param2: boolean): boolean;
						public constructor();
						public static resolveOrThrow(param0: globalAndroid.view.View, param1: number): number;
						public static resolveMinimumAccessibleTouchTarget(param0: globalAndroid.content.Context): number;
						public static resolve(param0: globalAndroid.content.Context, param1: number): globalAndroid.util.TypedValue;
						public static resolveBooleanOrThrow(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
						public static resolveOrThrow(param0: globalAndroid.content.Context, param1: number, param2: string): number;
						public static resolveDimension(param0: globalAndroid.content.Context, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class MaterialResources {
						public static class: java.lang.Class<com.google.android.material.resources.MaterialResources>;
						public static getColorStateList(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray, param2: number): globalAndroid.content.res.ColorStateList;
						public static getColorStateList(param0: globalAndroid.content.Context, param1: androidx.appcompat.widget.TintTypedArray, param2: number): globalAndroid.content.res.ColorStateList;
						public static getDrawable(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray, param2: number): globalAndroid.graphics.drawable.Drawable;
						public static getTextAppearance(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray, param2: number): com.google.android.material.resources.TextAppearance;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class TextAppearance {
						public static class: java.lang.Class<com.google.android.material.resources.TextAppearance>;
						public textSize: number;
						public textColor: globalAndroid.content.res.ColorStateList;
						public textColorHint: globalAndroid.content.res.ColorStateList;
						public textColorLink: globalAndroid.content.res.ColorStateList;
						public textStyle: number;
						public typeface: number;
						public fontFamily: string;
						public textAllCaps: boolean;
						public shadowColor: globalAndroid.content.res.ColorStateList;
						public shadowDx: number;
						public shadowDy: number;
						public shadowRadius: number;
						public getFont(param0: globalAndroid.content.Context): globalAndroid.graphics.Typeface;
						public updateMeasureState(param0: globalAndroid.content.Context, param1: globalAndroid.text.TextPaint, param2: com.google.android.material.resources.TextAppearanceFontCallback): void;
						public getFontAsync(param0: globalAndroid.content.Context, param1: globalAndroid.text.TextPaint, param2: com.google.android.material.resources.TextAppearanceFontCallback): void;
						public getFontAsync(param0: globalAndroid.content.Context, param1: com.google.android.material.resources.TextAppearanceFontCallback): void;
						public updateDrawState(param0: globalAndroid.content.Context, param1: globalAndroid.text.TextPaint, param2: com.google.android.material.resources.TextAppearanceFontCallback): void;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public getFallbackFont(): globalAndroid.graphics.Typeface;
						public updateTextPaintMeasureState(param0: globalAndroid.text.TextPaint, param1: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class TextAppearanceConfig {
						public static class: java.lang.Class<com.google.android.material.resources.TextAppearanceConfig>;
						public constructor();
						public static setShouldLoadFontSynchronously(param0: boolean): void;
						public static shouldLoadFontSynchronously(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export abstract class TextAppearanceFontCallback {
						public static class: java.lang.Class<com.google.android.material.resources.TextAppearanceFontCallback>;
						public constructor();
						public onFontRetrieved(param0: globalAndroid.graphics.Typeface, param1: boolean): void;
						public onFontRetrievalFailed(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module ripple {
					export class RippleUtils {
						public static class: java.lang.Class<com.google.android.material.ripple.RippleUtils>;
						public static USE_FRAMEWORK_RIPPLE: boolean;
						public static convertToRippleDrawableColor(param0: globalAndroid.content.res.ColorStateList): globalAndroid.content.res.ColorStateList;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shadow {
					export class ShadowDrawableWrapper {
						public static class: java.lang.Class<com.google.android.material.shadow.ShadowDrawableWrapper>;
						public getShadowSize(): number;
						public static calculateVerticalPadding(param0: number, param1: number, param2: boolean): number;
						public setMaxShadowSize(param0: number): void;
						public setShadowSize(param0: number, param1: number): void;
						public getCornerRadius(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.drawable.Drawable, param2: number, param3: number, param4: number);
						public getPadding(param0: globalAndroid.graphics.Rect): boolean;
						public setAddPaddingForCorners(param0: boolean): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public getMinWidth(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setRotation(param0: number): void;
						public setCornerRadius(param0: number): void;
						public setShadowSize(param0: number): void;
						public static calculateHorizontalPadding(param0: number, param1: number, param2: boolean): number;
						public getMaxShadowSize(): number;
						public getMinHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shadow {
					export class ShadowRenderer {
						public static class: java.lang.Class<com.google.android.material.shadow.ShadowRenderer>;
						public drawEdgeShadow(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.RectF, param3: number): void;
						public constructor();
						public constructor(param0: number);
						public getShadowPaint(): globalAndroid.graphics.Paint;
						public setShadowColor(param0: number): void;
						public drawCornerShadow(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.RectF, param3: number, param4: number, param5: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shadow {
					export class ShadowViewDelegate {
						public static class: java.lang.Class<com.google.android.material.shadow.ShadowViewDelegate>;
						/**
						 * Constructs a new instance of the com.google.android.material.shadow.ShadowViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getRadius(): number;
							setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
							setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							isCompatPaddingEnabled(): boolean;
						});
						public constructor();
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public isCompatPaddingEnabled(): boolean;
						public getRadius(): number;
						public setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class CornerFamily {
						public static class: java.lang.Class<com.google.android.material.shape.CornerFamily>;
						/**
						 * Constructs a new instance of the com.google.android.material.shape.CornerFamily interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static ROUNDED: number;
						public static CUT: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class CornerTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.CornerTreatment>;
						public cornerSize: number;
						public constructor();
						public constructor(param0: number);
						public getCornerSize(): number;
						public setCornerSize(param0: number): void;
						public clone(): com.google.android.material.shape.CornerTreatment;
						public getCornerPath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class CutCornerTreatment extends com.google.android.material.shape.CornerTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.CutCornerTreatment>;
						public constructor();
						public constructor(param0: number);
						public getCornerPath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class EdgeTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.EdgeTreatment>;
						public constructor();
						/** @deprecated */
						public getEdgePath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getEdgePath(param0: number, param1: number, param2: number, param3: com.google.android.material.shape.ShapePath): void;
						public clone(): com.google.android.material.shape.EdgeTreatment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class InterpolateOnScrollPositionChangeHelper {
						public static class: java.lang.Class<com.google.android.material.shape.InterpolateOnScrollPositionChangeHelper>;
						public stopListeningForScrollChanges(param0: globalAndroid.view.ViewTreeObserver): void;
						public startListeningForScrollChanges(param0: globalAndroid.view.ViewTreeObserver): void;
						public setMaterialShapeDrawable(param0: com.google.android.material.shape.MaterialShapeDrawable): void;
						public setContainingScrollView(param0: globalAndroid.widget.ScrollView): void;
						public updateInterpolationForScreenPosition(): void;
						public constructor(param0: globalAndroid.view.View, param1: com.google.android.material.shape.MaterialShapeDrawable, param2: globalAndroid.widget.ScrollView);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class MaterialShapeDrawable implements com.google.android.material.shape.ShapeAppearanceModel.OnChangedListener {
						public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeDrawable>;
						public static SHADOW_COMPAT_MODE_DEFAULT: number;
						public static SHADOW_COMPAT_MODE_NEVER: number;
						public static SHADOW_COMPAT_MODE_ALWAYS: number;
						/** @deprecated */
						public getPathForSize(param0: number, param1: number, param2: globalAndroid.graphics.Path): void;
						public constructor(param0: com.google.android.material.shape.ShapeAppearanceModel);
						/** @deprecated */
						public setShapedViewModel(param0: com.google.android.material.shape.ShapePathModel): void;
						public setTranslationZ(param0: number): void;
						public getScale(): number;
						/** @deprecated */
						public setShadowElevation(param0: number): void;
						public getShadowCompatRotation(): number;
						/** @deprecated */
						public getShapedViewModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public getShadowVerticalOffset(): number;
						public setElevation(param0: number): void;
						public setShadowColor(param0: number): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public isStateful(): boolean;
						public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getShadowOffsetY(): number;
						public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setInterpolation(param0: number): void;
						public setPaintStyle(param0: globalAndroid.graphics.Paint.Style): void;
						public getElevation(): number;
						public invalidateSelf(): void;
						public constructor();
						public getTintList(): globalAndroid.content.res.ColorStateList;
						public getTransparentRegion(): globalAndroid.graphics.Region;
						public getStrokeTintList(): globalAndroid.content.res.ColorStateList;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setStroke(param0: number, param1: number): void;
						public getPadding(param0: globalAndroid.graphics.Rect): boolean;
						public getInterpolation(): number;
						public initializeElevationOverlay(param0: globalAndroid.content.Context): void;
						public setScale(param0: number): void;
						public setAlpha(param0: number): void;
						public getOutline(param0: any): void;
						public setStrokeTint(param0: globalAndroid.content.res.ColorStateList): void;
						/** @deprecated */
						public getPathForSize(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Path): void;
						public setStrokeWidth(param0: number): void;
						public setStrokeTint(param0: number): void;
						public getTranslationZ(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public getShadowCompatibilityMode(): number;
						public setStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setZ(param0: number): void;
						public setPadding(param0: number, param1: number, param2: number, param3: number): void;
						public setShadowCompatibilityMode(param0: number): void;
						public static createWithElevationOverlay(param0: globalAndroid.content.Context): com.google.android.material.shape.MaterialShapeDrawable;
						public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
						/** @deprecated */
						public isShadowEnabled(): boolean;
						public getShadowOffsetX(): number;
						public mutate(): globalAndroid.graphics.drawable.Drawable;
						public getStrokeColor(): globalAndroid.content.res.ColorStateList;
						/** @deprecated */
						public getStrokeTint(): number;
						public setStroke(param0: number, param1: globalAndroid.content.res.ColorStateList): void;
						public getStrokeWidth(): number;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public setShadowCompatRotation(param0: number): void;
						public isPointInTransparentRegion(param0: number, param1: number): boolean;
						public setUseTintColorForShadow(param0: boolean): void;
						public static createWithElevationOverlay(param0: globalAndroid.content.Context, param1: number): com.google.android.material.shape.MaterialShapeDrawable;
						/** @deprecated */
						public setShadowRadius(param0: number): void;
						public drawShape(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint, param2: globalAndroid.graphics.Path, param3: globalAndroid.graphics.RectF): void;
						public onStateChange(param0: native.Array<number>): boolean;
						/** @deprecated */
						public setShadowEnabled(param0: boolean): void;
						public getFillColor(): globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setFillColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getShadowRadius(): number;
						/** @deprecated */
						public getShadowElevation(): number;
						public setTint(param0: number): void;
						public getPaintStyle(): globalAndroid.graphics.Paint.Style;
						public getOpacity(): number;
						public getBoundsAsRectF(): globalAndroid.graphics.RectF;
						public getZ(): number;
						public onShapeAppearanceModelChanged(): void;
						public setShadowVerticalOffset(param0: number): void;
						public setCornerRadius(param0: number): void;
						public isElevationOverlayInitialized(): boolean;
					}
					export module MaterialShapeDrawable {
						export class CompatibilityShadowMode {
							public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeDrawable.CompatibilityShadowMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.shape.MaterialShapeDrawable$CompatibilityShadowMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class MaterialShapeDrawableState {
							public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeDrawable.MaterialShapeDrawableState>;
							public shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel;
							public elevationOverlayProvider: com.google.android.material.elevation.ElevationOverlayProvider;
							public colorFilter: globalAndroid.graphics.ColorFilter;
							public fillColor: globalAndroid.content.res.ColorStateList;
							public strokeColor: globalAndroid.content.res.ColorStateList;
							public strokeTintList: globalAndroid.content.res.ColorStateList;
							public tintList: globalAndroid.content.res.ColorStateList;
							public tintMode: globalAndroid.graphics.PorterDuff.Mode;
							public padding: globalAndroid.graphics.Rect;
							public scale: number;
							public interpolation: number;
							public strokeWidth: number;
							public alpha: number;
							public elevation: number;
							public translationZ: number;
							public shadowCompatMode: number;
							public shadowCompatRadius: number;
							public shadowCompatOffset: number;
							public shadowCompatRotation: number;
							public useTintColorForShadow: boolean;
							public paintStyle: globalAndroid.graphics.Paint.Style;
							public constructor(param0: com.google.android.material.shape.MaterialShapeDrawable.MaterialShapeDrawableState);
							public constructor(param0: com.google.android.material.shape.ShapeAppearanceModel, param1: com.google.android.material.elevation.ElevationOverlayProvider);
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class MaterialShapeUtils {
						public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeUtils>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class RoundedCornerTreatment extends com.google.android.material.shape.CornerTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.RoundedCornerTreatment>;
						public constructor();
						public constructor(param0: number);
						public getCornerPath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class ShapeAppearanceModel {
						public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearanceModel>;
						public static PILL: number;
						public constructor(param0: com.google.android.material.shape.ShapeAppearanceModel);
						public getTopEdge(): com.google.android.material.shape.EdgeTreatment;
						public getLeftEdge(): com.google.android.material.shape.EdgeTreatment;
						public setAllCorners(param0: number, param1: number): void;
						public setAllCorners(param0: com.google.android.material.shape.CornerTreatment): void;
						public setBottomRightCorner(param0: number, param1: number): void;
						public setTopRightCorner(param0: number, param1: number): void;
						public setTopLeftCorner(param0: number, param1: number): void;
						public setCornerRadii(param0: number, param1: number, param2: number, param3: number): void;
						public getTopLeftCorner(): com.google.android.material.shape.CornerTreatment;
						public setTopEdge(param0: com.google.android.material.shape.EdgeTreatment): void;
						public getRightEdge(): com.google.android.material.shape.EdgeTreatment;
						public setBottomLeftCorner(param0: com.google.android.material.shape.CornerTreatment): void;
						public constructor();
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
						public isUsingPillCorner(): boolean;
						public setBottomRightCorner(param0: com.google.android.material.shape.CornerTreatment): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: number);
						public isRoundRect(): boolean;
						public getTopRightCorner(): com.google.android.material.shape.CornerTreatment;
						public getBottomLeftCorner(): com.google.android.material.shape.CornerTreatment;
						public setRightEdge(param0: com.google.android.material.shape.EdgeTreatment): void;
						public setEdgeTreatments(param0: com.google.android.material.shape.EdgeTreatment, param1: com.google.android.material.shape.EdgeTreatment, param2: com.google.android.material.shape.EdgeTreatment, param3: com.google.android.material.shape.EdgeTreatment): void;
						public setAllEdges(param0: com.google.android.material.shape.EdgeTreatment): void;
						public setTopRightCorner(param0: com.google.android.material.shape.CornerTreatment): void;
						public setBottomEdge(param0: com.google.android.material.shape.EdgeTreatment): void;
						public setCornerRadius(param0: number): void;
						public setCornerTreatments(param0: com.google.android.material.shape.CornerTreatment, param1: com.google.android.material.shape.CornerTreatment, param2: com.google.android.material.shape.CornerTreatment, param3: com.google.android.material.shape.CornerTreatment): void;
						public setLeftEdge(param0: com.google.android.material.shape.EdgeTreatment): void;
						public getBottomEdge(): com.google.android.material.shape.EdgeTreatment;
						public setTopLeftCorner(param0: com.google.android.material.shape.CornerTreatment): void;
						public getBottomRightCorner(): com.google.android.material.shape.CornerTreatment;
						public setBottomLeftCorner(param0: number, param1: number): void;
					}
					export module ShapeAppearanceModel {
						export class OnChangedListener {
							public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearanceModel.OnChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.shape.ShapeAppearanceModel$OnChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onShapeAppearanceModelChanged(): void;
							});
							public constructor();
							public onShapeAppearanceModelChanged(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class ShapeAppearancePathProvider {
						public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider>;
						public constructor();
						public calculatePath(param0: com.google.android.material.shape.ShapeAppearanceModel, param1: number, param2: globalAndroid.graphics.RectF, param3: com.google.android.material.shape.ShapeAppearancePathProvider.PathListener, param4: globalAndroid.graphics.Path): void;
						public calculatePath(param0: com.google.android.material.shape.ShapeAppearanceModel, param1: number, param2: globalAndroid.graphics.RectF, param3: globalAndroid.graphics.Path): void;
					}
					export module ShapeAppearancePathProvider {
						export class PathListener {
							public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider.PathListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.shape.ShapeAppearancePathProvider$PathListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCornerPathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
								onEdgePathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
							});
							public constructor();
							public onEdgePathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
							public onCornerPathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
						}
						export class ShapeAppearancePathSpec {
							public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider.ShapeAppearancePathSpec>;
							public shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel;
							public path: globalAndroid.graphics.Path;
							public bounds: globalAndroid.graphics.RectF;
							public pathListener: com.google.android.material.shape.ShapeAppearancePathProvider.PathListener;
							public interpolation: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class ShapePath {
						public static class: java.lang.Class<com.google.android.material.shape.ShapePath>;
						public static ANGLE_LEFT: number;
						public startX: number;
						public startY: number;
						public endX: number;
						public endY: number;
						public currentShadowAngle: number;
						public endShadowAngle: number;
						public constructor();
						public reset(param0: number, param1: number): void;
						public addArc(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						public quadToPoint(param0: number, param1: number, param2: number, param3: number): void;
						public constructor(param0: number, param1: number);
						public lineTo(param0: number, param1: number): void;
						public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
						public reset(param0: number, param1: number, param2: number, param3: number): void;
					}
					export module ShapePath {
						export class ArcShadowOperation extends com.google.android.material.shape.ShapePath.ShadowCompatOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.ArcShadowOperation>;
							public constructor(param0: com.google.android.material.shape.ShapePath.PathArcOperation);
							public draw(param0: com.google.android.material.shadow.ShadowRenderer, param1: number, param2: globalAndroid.graphics.Canvas): void;
							public draw(param0: globalAndroid.graphics.Matrix, param1: com.google.android.material.shadow.ShadowRenderer, param2: number, param3: globalAndroid.graphics.Canvas): void;
						}
						export class LineShadowOperation extends com.google.android.material.shape.ShapePath.ShadowCompatOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.LineShadowOperation>;
							public constructor(param0: com.google.android.material.shape.ShapePath.PathLineOperation, param1: number, param2: number);
							public draw(param0: com.google.android.material.shadow.ShadowRenderer, param1: number, param2: globalAndroid.graphics.Canvas): void;
							public draw(param0: globalAndroid.graphics.Matrix, param1: com.google.android.material.shadow.ShadowRenderer, param2: number, param3: globalAndroid.graphics.Canvas): void;
						}
						export class PathArcOperation extends com.google.android.material.shape.ShapePath.PathOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathArcOperation>;
							public left: number;
							public top: number;
							public right: number;
							public bottom: number;
							public startAngle: number;
							public sweepAngle: number;
							public constructor();
							public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
						export class PathLineOperation extends com.google.android.material.shape.ShapePath.PathOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathLineOperation>;
							public constructor();
							public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
						}
						export abstract class PathOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathOperation>;
							public matrix: globalAndroid.graphics.Matrix;
							public constructor();
							public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
						}
						export class PathQuadOperation extends com.google.android.material.shape.ShapePath.PathOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathQuadOperation>;
							public controlX: number;
							public controlY: number;
							public endX: number;
							public endY: number;
							public constructor();
							public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
						}
						export abstract class ShadowCompatOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.ShadowCompatOperation>;
							public draw(param0: com.google.android.material.shadow.ShadowRenderer, param1: number, param2: globalAndroid.graphics.Canvas): void;
							public draw(param0: globalAndroid.graphics.Matrix, param1: com.google.android.material.shadow.ShadowRenderer, param2: number, param3: globalAndroid.graphics.Canvas): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class ShapePathModel extends com.google.android.material.shape.ShapeAppearanceModel {
						public static class: java.lang.Class<com.google.android.material.shape.ShapePathModel>;
						public constructor();
						public constructor(param0: com.google.android.material.shape.ShapeAppearanceModel);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class Shapeable {
						public static class: java.lang.Class<com.google.android.material.shape.Shapeable>;
						/**
						 * Constructs a new instance of the com.google.android.material.shape.Shapeable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
							getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						});
						public constructor();
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class TriangleEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.TriangleEdgeTreatment>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						/** @deprecated */
						public getEdgePath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getEdgePath(param0: number, param1: number, param2: number, param3: com.google.android.material.shape.ShapePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export abstract class BaseTransientBottomBar<B>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar<any>>;
						public static ANIMATION_MODE_SLIDE: number;
						public static ANIMATION_MODE_FADE: number;
						public static LENGTH_INDEFINITE: number;
						public static LENGTH_SHORT: number;
						public static LENGTH_LONG: number;
						public view: com.google.android.material.snackbar.BaseTransientBottomBar.SnackbarBaseLayout;
						public hasSnackbarStyleAttr(): boolean;
						public setBehavior(param0: com.google.android.material.snackbar.BaseTransientBottomBar.Behavior): B;
						public isShown(): boolean;
						public constructor(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: com.google.android.material.snackbar.ContentViewCallback);
						public setAnchorView(param0: globalAndroid.view.View): B;
						public getDuration(): number;
						public getAnchorView(): globalAndroid.view.View;
						public dismiss(): void;
						public removeCallback(param0: com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<B>): B;
						public getContext(): globalAndroid.content.Context;
						public setAnchorView(param0: number): B;
						public getBehavior(): com.google.android.material.snackbar.BaseTransientBottomBar.Behavior;
						public setDuration(param0: number): B;
						public isShownOrQueued(): boolean;
						public getAnimationMode(): number;
						public setAnimationMode(param0: number): B;
						public show(): void;
						public getSnackbarBaseLayoutResId(): number;
						public getNewBehavior(): com.google.android.material.behavior.SwipeDismissBehavior<any>;
						public getView(): globalAndroid.view.View;
						public dispatchDismiss(param0: number): void;
						public addCallback(param0: com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<B>): B;
					}
					export module BaseTransientBottomBar {
						export class AnimationMode {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.AnimationMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$AnimationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export abstract class BaseCallback<B>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<any>>;
							public static DISMISS_EVENT_SWIPE: number;
							public static DISMISS_EVENT_ACTION: number;
							public static DISMISS_EVENT_TIMEOUT: number;
							public static DISMISS_EVENT_MANUAL: number;
							public static DISMISS_EVENT_CONSECUTIVE: number;
							public constructor();
							public onShown(param0: B): void;
							public onDismissed(param0: B, param1: number): void;
						}
						export module BaseCallback {
							export class DismissEvent {
								public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback.DismissEvent>;
								/**
								 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$BaseCallback$DismissEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
						}
						export class Behavior extends com.google.android.material.behavior.SwipeDismissBehavior<globalAndroid.view.View> {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.Behavior>;
							public constructor();
							public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.MotionEvent): boolean;
							public canSwipeDismissView(param0: globalAndroid.view.View): boolean;
							public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						}
						export class BehaviorDelegate {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.BehaviorDelegate>;
							public constructor(param0: com.google.android.material.behavior.SwipeDismissBehavior<any>);
							public canSwipeDismissView(param0: globalAndroid.view.View): boolean;
							public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.MotionEvent): void;
							public setBaseTransientBottomBar(param0: com.google.android.material.snackbar.BaseTransientBottomBar<any>): void;
						}
						export class ContentViewCallback extends com.google.android.material.snackbar.ContentViewCallback {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.ContentViewCallback>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$ContentViewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								animateContentIn(param0: number, param1: number): void;
								animateContentOut(param0: number, param1: number): void;
							});
							public constructor();
							public animateContentOut(param0: number, param1: number): void;
							public animateContentIn(param0: number, param1: number): void;
						}
						export class Duration {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.Duration>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$Duration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class OnAttachStateChangeListener {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.OnAttachStateChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$OnAttachStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onViewAttachedToWindow(param0: globalAndroid.view.View): void;
								onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
							});
							public constructor();
							public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
							public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
						}
						export class OnLayoutChangeListener {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.OnLayoutChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$OnLayoutChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
							});
							public constructor();
							public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						}
						export class SnackbarBaseLayout {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.SnackbarBaseLayout>;
							public onDetachedFromWindow(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public onAttachedToWindow(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export class ContentViewCallback {
						public static class: java.lang.Class<com.google.android.material.snackbar.ContentViewCallback>;
						/**
						 * Constructs a new instance of the com.google.android.material.snackbar.ContentViewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							animateContentIn(param0: number, param1: number): void;
							animateContentOut(param0: number, param1: number): void;
						});
						public constructor();
						public animateContentIn(param0: number, param1: number): void;
						public animateContentOut(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export class Snackbar extends com.google.android.material.snackbar.BaseTransientBottomBar<com.google.android.material.snackbar.Snackbar> {
						public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar>;
						public static LENGTH_INDEFINITE: number;
						public static LENGTH_SHORT: number;
						public static LENGTH_LONG: number;
						public static make(param0: globalAndroid.view.View, param1: number, param2: number): com.google.android.material.snackbar.Snackbar;
						public isShown(): boolean;
						public setAction(param0: number, param1: globalAndroid.view.View.OnClickListener): com.google.android.material.snackbar.Snackbar;
						public getDuration(): number;
						public dismiss(): void;
						public setBackgroundTint(param0: number): com.google.android.material.snackbar.Snackbar;
						public setText(param0: string): com.google.android.material.snackbar.Snackbar;
						public setTextColor(param0: globalAndroid.content.res.ColorStateList): com.google.android.material.snackbar.Snackbar;
						public static hasSnackbarButtonStyleAttr(param0: globalAndroid.content.Context): boolean;
						public setAction(param0: string, param1: globalAndroid.view.View.OnClickListener): com.google.android.material.snackbar.Snackbar;
						public setTextColor(param0: number): com.google.android.material.snackbar.Snackbar;
						public show(): void;
						public setActionTextColor(param0: globalAndroid.content.res.ColorStateList): com.google.android.material.snackbar.Snackbar;
						public static make(param0: globalAndroid.view.View, param1: string, param2: number): com.google.android.material.snackbar.Snackbar;
						public setText(param0: number): com.google.android.material.snackbar.Snackbar;
						/** @deprecated */
						public setCallback(param0: com.google.android.material.snackbar.Snackbar.Callback): com.google.android.material.snackbar.Snackbar;
						public setActionTextColor(param0: number): com.google.android.material.snackbar.Snackbar;
					}
					export module Snackbar {
						export class Callback extends com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<com.google.android.material.snackbar.Snackbar> {
							public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar.Callback>;
							public static DISMISS_EVENT_SWIPE: number;
							public static DISMISS_EVENT_ACTION: number;
							public static DISMISS_EVENT_TIMEOUT: number;
							public static DISMISS_EVENT_MANUAL: number;
							public static DISMISS_EVENT_CONSECUTIVE: number;
							public constructor();
							public onDismissed(param0: com.google.android.material.snackbar.Snackbar, param1: number): void;
							public onDismissed(param0: any, param1: number): void;
							public onShown(param0: any): void;
							public onShown(param0: com.google.android.material.snackbar.Snackbar): void;
						}
						export class Duration {
							public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar.Duration>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.Snackbar$Duration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class SnackbarLayout extends com.google.android.material.snackbar.BaseTransientBottomBar.SnackbarBaseLayout {
							public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar.SnackbarLayout>;
							public onMeasure(param0: number, param1: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export class SnackbarContentLayout implements com.google.android.material.snackbar.ContentViewCallback {
						public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarContentLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public getActionView(): globalAndroid.widget.Button;
						public animateContentIn(param0: number, param1: number): void;
						public animateContentOut(param0: number, param1: number): void;
						public getMessageView(): globalAndroid.widget.TextView;
						public onFinishInflate(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export class SnackbarManager {
						public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarManager>;
						public isCurrent(param0: com.google.android.material.snackbar.SnackbarManager.Callback): boolean;
						public onShown(param0: com.google.android.material.snackbar.SnackbarManager.Callback): void;
						public dismiss(param0: com.google.android.material.snackbar.SnackbarManager.Callback, param1: number): void;
						public pauseTimeout(param0: com.google.android.material.snackbar.SnackbarManager.Callback): void;
						public onDismissed(param0: com.google.android.material.snackbar.SnackbarManager.Callback): void;
						public isCurrentOrNext(param0: com.google.android.material.snackbar.SnackbarManager.Callback): boolean;
						public restoreTimeoutIfPaused(param0: com.google.android.material.snackbar.SnackbarManager.Callback): void;
						public show(param0: number, param1: com.google.android.material.snackbar.SnackbarManager.Callback): void;
					}
					export module SnackbarManager {
						export class Callback {
							public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarManager.Callback>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.SnackbarManager$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								show(): void;
								dismiss(param0: number): void;
							});
							public constructor();
							public dismiss(param0: number): void;
							public show(): void;
						}
						export class SnackbarRecord {
							public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarManager.SnackbarRecord>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module stateful {
					export class ExtendableSavedState {
						public static class: java.lang.Class<com.google.android.material.stateful.ExtendableSavedState>;
						public extendableStates: androidx.collection.SimpleArrayMap<string,globalAndroid.os.Bundle>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.stateful.ExtendableSavedState>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: globalAndroid.os.Parcelable);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module switchmaterial {
					export class SwitchMaterial {
						public static class: java.lang.Class<com.google.android.material.switchmaterial.SwitchMaterial>;
						public isUseMaterialThemeColors(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setUseMaterialThemeColors(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module tabs {
					export class TabItem {
						public static class: java.lang.Class<com.google.android.material.tabs.TabItem>;
						public text: string;
						public icon: globalAndroid.graphics.drawable.Drawable;
						public customLayout: number;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module tabs {
					export class TabLayout {
						public static class: java.lang.Class<com.google.android.material.tabs.TabLayout>;
						public static MODE_SCROLLABLE: number;
						public static MODE_FIXED: number;
						public static MODE_AUTO: number;
						public static TAB_LABEL_VISIBILITY_UNLABELED: number;
						public static TAB_LABEL_VISIBILITY_LABELED: number;
						public static GRAVITY_FILL: number;
						public static GRAVITY_CENTER: number;
						public static INDICATOR_GRAVITY_BOTTOM: number;
						public static INDICATOR_GRAVITY_CENTER: number;
						public static INDICATOR_GRAVITY_TOP: number;
						public static INDICATOR_GRAVITY_STRETCH: number;
						public isTabIndicatorFullWidth(): boolean;
						public getTabIconTint(): globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.content.Context);
						public setTabIconTintResource(param0: number): void;
						public removeOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.OnTabSelectedListener): void;
						public setInlineLabelResource(param0: number): void;
						public setElevation(param0: number): void;
						/** @deprecated */
						public setTabsFromPagerAdapter(param0: androidx.viewpager.widget.PagerAdapter): void;
						public shouldDelayChildPressedState(): boolean;
						public setTabIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setTabMode(param0: number): void;
						public setTabGravity(param0: number): void;
						public getSelectedTabPosition(): number;
						public removeTabAt(param0: number): void;
						public addOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.OnTabSelectedListener): void;
						public onMeasure(param0: number, param1: number): void;
						/** @deprecated */
						public addOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): void;
						public addTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number, param2: boolean): void;
						public setInlineLabel(param0: boolean): void;
						public setScrollPosition(param0: number, param1: number, param2: boolean, param3: boolean): void;
						public getTabTextColors(): globalAndroid.content.res.ColorStateList;
						public setScrollPosition(param0: number, param1: number, param2: boolean): void;
						public setSelectedTabIndicator(param0: number): void;
						/** @deprecated */
						public setSelectedTabIndicatorHeight(param0: number): void;
						public wrapOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): com.google.android.material.tabs.TabLayout.OnTabSelectedListener;
						public addTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number): void;
						public setUnboundedRipple(param0: boolean): void;
						public setSelectedTabIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
						public createTabFromPool(): com.google.android.material.tabs.TabLayout.Tab;
						public setSelectedTabIndicatorGravity(param0: number): void;
						public setTabRippleColorResource(param0: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getTabCount(): number;
						public getTabIndicatorGravity(): number;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public setSelectedTabIndicatorColor(param0: number): void;
						public getTabMode(): number;
						public addTab(param0: com.google.android.material.tabs.TabLayout.Tab): void;
						public getTabAt(param0: number): com.google.android.material.tabs.TabLayout.Tab;
						public clearOnTabSelectedListeners(): void;
						public getTabSelectedIndicator(): globalAndroid.graphics.drawable.Drawable;
						public onAttachedToWindow(): void;
						public setupWithViewPager(param0: androidx.viewpager.widget.ViewPager): void;
						public removeTab(param0: com.google.android.material.tabs.TabLayout.Tab): void;
						public selectTab(param0: com.google.android.material.tabs.TabLayout.Tab): void;
						public getTabGravity(): number;
						public newTab(): com.google.android.material.tabs.TabLayout.Tab;
						public setupWithViewPager(param0: androidx.viewpager.widget.ViewPager, param1: boolean): void;
						public setTabRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setTabTextColors(param0: number, param1: number): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public releaseFromTabPool(param0: com.google.android.material.tabs.TabLayout.Tab): boolean;
						public addView(param0: globalAndroid.view.View): void;
						public getTabRippleColor(): globalAndroid.content.res.ColorStateList;
						/** @deprecated */
						public setOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.OnTabSelectedListener): void;
						public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.widget.FrameLayout.LayoutParams;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public removeAllTabs(): void;
						public selectTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: boolean): void;
						public isInlineLabel(): boolean;
						public onDetachedFromWindow(): void;
						public setTabTextColors(param0: globalAndroid.content.res.ColorStateList): void;
						/** @deprecated */
						public setOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): void;
						/** @deprecated */
						public removeOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): void;
						public hasUnboundedRipple(): boolean;
						public setTabIndicatorFullWidth(param0: boolean): void;
						public setUnboundedRippleResource(param0: number): void;
						public addTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: boolean): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					}
					export module TabLayout {
						export class AdapterChangeListener {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.AdapterChangeListener>;
							public onAdapterChanged(param0: androidx.viewpager.widget.ViewPager, param1: androidx.viewpager.widget.PagerAdapter, param2: androidx.viewpager.widget.PagerAdapter): void;
						}
						export class BaseOnTabSelectedListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$BaseOnTabSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTabSelected(param0: T): void;
								onTabUnselected(param0: T): void;
								onTabReselected(param0: T): void;
							});
							public constructor();
							public onTabUnselected(param0: T): void;
							public onTabReselected(param0: T): void;
							public onTabSelected(param0: T): void;
						}
						export class LabelVisibility {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.LabelVisibility>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$LabelVisibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class Mode {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.Mode>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$Mode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class OnTabSelectedListener {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.OnTabSelectedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$OnTabSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTabSelected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
								onTabUnselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
								onTabReselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							});
							public constructor();
							public onTabUnselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabSelected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabReselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
						}
						export class PagerAdapterObserver {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.PagerAdapterObserver>;
							public onChanged(): void;
							public onInvalidated(): void;
						}
						export class SlidingTabIndicator {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.SlidingTabIndicator>;
							public onMeasure(param0: number, param1: number): void;
							public onRtlPropertiesChanged(param0: number): void;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
						}
						export class Tab {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.Tab>;
							public static INVALID_POSITION: number;
							public parent: com.google.android.material.tabs.TabLayout;
							public view: com.google.android.material.tabs.TabLayout.TabView;
							public constructor();
							public getTabLabelVisibility(): number;
							public getText(): string;
							public getPosition(): number;
							public setIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.tabs.TabLayout.Tab;
							public isSelected(): boolean;
							public setCustomView(param0: globalAndroid.view.View): com.google.android.material.tabs.TabLayout.Tab;
							public setText(param0: string): com.google.android.material.tabs.TabLayout.Tab;
							public setTag(param0: any): com.google.android.material.tabs.TabLayout.Tab;
							public setContentDescription(param0: string): com.google.android.material.tabs.TabLayout.Tab;
							public getCustomView(): globalAndroid.view.View;
							public setIcon(param0: number): com.google.android.material.tabs.TabLayout.Tab;
							public select(): void;
							public setText(param0: number): com.google.android.material.tabs.TabLayout.Tab;
							public getIcon(): globalAndroid.graphics.drawable.Drawable;
							public setContentDescription(param0: number): com.google.android.material.tabs.TabLayout.Tab;
							public getTag(): any;
							public getBadge(): com.google.android.material.badge.BadgeDrawable;
							public setTabLabelVisibility(param0: number): com.google.android.material.tabs.TabLayout.Tab;
							public getContentDescription(): string;
							public removeBadge(): void;
							public showBadge(): com.google.android.material.badge.BadgeDrawable;
							public setCustomView(param0: number): com.google.android.material.tabs.TabLayout.Tab;
						}
						export class TabGravity {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabGravity>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$TabGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class TabIndicatorGravity {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabIndicatorGravity>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$TabIndicatorGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class TabLayoutOnPageChangeListener {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabLayoutOnPageChangeListener>;
							public onPageScrollStateChanged(param0: number): void;
							public onPageScrolled(param0: number, param1: number, param2: number): void;
							public constructor(param0: com.google.android.material.tabs.TabLayout);
							public onPageSelected(param0: number): void;
						}
						export class TabView {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabView>;
							public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
							public constructor(param0: com.google.android.material.tabs.TabLayout, param1: globalAndroid.content.Context);
							public performClick(): boolean;
							public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
							public onMeasure(param0: number, param1: number): void;
							public drawableStateChanged(): void;
							public setSelected(param0: boolean): void;
							public getTab(): com.google.android.material.tabs.TabLayout.Tab;
						}
						export class ViewPagerOnTabSelectedListener extends com.google.android.material.tabs.TabLayout.OnTabSelectedListener {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.ViewPagerOnTabSelectedListener>;
							public onTabUnselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabSelected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabReselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public constructor(param0: androidx.viewpager.widget.ViewPager);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module tabs {
					export class TabLayoutMediator {
						public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator>;
						public constructor(param0: com.google.android.material.tabs.TabLayout, param1: androidx.viewpager2.widget.ViewPager2, param2: boolean, param3: com.google.android.material.tabs.TabLayoutMediator.OnConfigureTabCallback);
						public constructor(param0: com.google.android.material.tabs.TabLayout, param1: androidx.viewpager2.widget.ViewPager2, param2: com.google.android.material.tabs.TabLayoutMediator.OnConfigureTabCallback);
						public detach(): void;
						public attach(): void;
					}
					export module TabLayoutMediator {
						export class OnConfigureTabCallback {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.OnConfigureTabCallback>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayoutMediator$OnConfigureTabCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConfigureTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number): void;
							});
							public constructor();
							public onConfigureTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number): void;
						}
						export class PagerAdapterObserver {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.PagerAdapterObserver>;
							public onChanged(): void;
							public onItemRangeInserted(param0: number, param1: number): void;
							public onItemRangeChanged(param0: number, param1: number, param2: any): void;
							public onItemRangeChanged(param0: number, param1: number): void;
							public onItemRangeRemoved(param0: number, param1: number): void;
							public onItemRangeMoved(param0: number, param1: number, param2: number): void;
						}
						export class TabLayoutOnPageChangeCallback {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.TabLayoutOnPageChangeCallback>;
							public onPageScrollStateChanged(param0: number): void;
							public onPageScrolled(param0: number, param1: number, param2: number): void;
							public onPageSelected(param0: number): void;
						}
						export class ViewPagerOnTabSelectedListener extends com.google.android.material.tabs.TabLayout.OnTabSelectedListener {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.ViewPagerOnTabSelectedListener>;
							public onTabUnselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabSelected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabReselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class ClearTextEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.ClearTextEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class CustomEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.CustomEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class CutoutDrawable extends com.google.android.material.shape.MaterialShapeDrawable {
						public static class: java.lang.Class<com.google.android.material.textfield.CutoutDrawable>;
						public onShapeAppearanceModelChanged(): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class DropdownMenuEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.DropdownMenuEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export abstract class EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.EndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class IndicatorViewController {
						public static class: java.lang.Class<com.google.android.material.textfield.IndicatorViewController>;
						public constructor(param0: com.google.android.material.textfield.TextInputLayout);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class NoEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.NoEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class PasswordToggleEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.PasswordToggleEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class TextInputEditText {
						public static class: java.lang.Class<com.google.android.material.textfield.TextInputEditText>;
						public constructor(param0: globalAndroid.content.Context);
						public getHint(): string;
						public onAttachedToWindow(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class TextInputLayout {
						public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout>;
						public static BOX_BACKGROUND_NONE: number;
						public static BOX_BACKGROUND_FILLED: number;
						public static BOX_BACKGROUND_OUTLINE: number;
						public static END_ICON_CUSTOM: number;
						public static END_ICON_NONE: number;
						public static END_ICON_PASSWORD_TOGGLE: number;
						public static END_ICON_CLEAR_TEXT: number;
						public static END_ICON_DROPDOWN_MENU: number;
						public constructor(param0: globalAndroid.content.Context);
						public setCounterOverflowTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						/** @deprecated */
						public isPasswordVisibilityToggleEnabled(): boolean;
						public setEndIconVisible(param0: boolean): void;
						/** @deprecated */
						public setPasswordVisibilityToggleTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getBoxCornerRadiusBottomEnd(): number;
						public getHint(): string;
						public isHintAnimationEnabled(): boolean;
						public getBoxBackgroundMode(): number;
						public setEndIconDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setStartIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public onMeasure(param0: number, param1: number): void;
						public setDefaultHintTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setBoxBackgroundColor(param0: number): void;
						public setStartIconOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public setStartIconContentDescription(param0: number): void;
						public getErrorCurrentTextColors(): number;
						public setStartIconVisible(param0: boolean): void;
						public setHintEnabled(param0: boolean): void;
						public isEndIconVisible(): boolean;
						public setBoxBackgroundMode(param0: number): void;
						public removeOnEditTextAttachedListener(param0: com.google.android.material.textfield.TextInputLayout.OnEditTextAttachedListener): void;
						public setEndIconActivated(param0: boolean): void;
						public setCounterEnabled(param0: boolean): void;
						public getEditText(): globalAndroid.widget.EditText;
						public setStartIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						/** @deprecated */
						public getPasswordVisibilityToggleDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setErrorTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setBoxCornerRadii(param0: number, param1: number, param2: number, param3: number): void;
						public removeOnEndIconChangedListener(param0: com.google.android.material.textfield.TextInputLayout.OnEndIconChangedListener): void;
						public setHintTextAppearance(param0: number): void;
						public getEndIconContentDescription(): string;
						public dispatchProvideAutofillStructure(param0: any, param1: number): void;
						public getCounterTextColor(): globalAndroid.content.res.ColorStateList;
						public setEndIconContentDescription(param0: string): void;
						public addOnEndIconChangedListener(param0: com.google.android.material.textfield.TextInputLayout.OnEndIconChangedListener): void;
						public setCounterTextAppearance(param0: number): void;
						public getBoxCornerRadiusTopStart(): number;
						public getHintTextColor(): globalAndroid.content.res.ColorStateList;
						public setEndIconContentDescription(param0: number): void;
						public setEndIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public clearOnEndIconChangedListeners(): void;
						public setHelperTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setEnabled(param0: boolean): void;
						public setBoxCornerRadiiResources(param0: number, param1: number, param2: number, param3: number): void;
						public isStartIconVisible(): boolean;
						public isHelperTextEnabled(): boolean;
						public setCounterMaxLength(param0: number): void;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setCounterTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getStartIconContentDescription(): string;
						/** @deprecated */
						public passwordVisibilityToggleRequested(param0: boolean): void;
						public setBoxBackgroundColorResource(param0: number): void;
						public setHelperText(param0: string): void;
						public getCounterMaxLength(): number;
						public getEndIconMode(): number;
						public setStartIconDrawable(param0: number): void;
						public setStartIconContentDescription(param0: string): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						/** @deprecated */
						public setPasswordVisibilityToggleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getBaseline(): number;
						public setErrorTextAppearance(param0: number): void;
						public setEndIconMode(param0: number): void;
						public getTypeface(): globalAndroid.graphics.Typeface;
						public setBoxStrokeColor(param0: number): void;
						public getBoxBackgroundColor(): number;
						public isCounterEnabled(): boolean;
						public setHelperTextTextAppearance(param0: number): void;
						public getBoxCornerRadiusTopEnd(): number;
						public getCounterOverflowTextColor(): globalAndroid.content.res.ColorStateList;
						public setHintAnimationEnabled(param0: boolean): void;
						/** @deprecated */
						public setPasswordVisibilityToggleDrawable(param0: number): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setHintTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setHelperTextEnabled(param0: boolean): void;
						public getError(): string;
						public setEndIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setTextInputAccessibilityDelegate(param0: com.google.android.material.textfield.TextInputLayout.AccessibilityDelegate): void;
						public setErrorEnabled(param0: boolean): void;
						public setHint(param0: string): void;
						public addOnEditTextAttachedListener(param0: com.google.android.material.textfield.TextInputLayout.OnEditTextAttachedListener): void;
						public getBoxStrokeColor(): number;
						public getDefaultHintTextColor(): globalAndroid.content.res.ColorStateList;
						public getBoxCornerRadiusBottomStart(): number;
						public setCounterOverflowTextAppearance(param0: number): void;
						public setError(param0: string): void;
						public drawableStateChanged(): void;
						public getHelperText(): string;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public setEndIconOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						/** @deprecated */
						public getPasswordVisibilityToggleContentDescription(): string;
						public getHelperTextCurrentTextColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setStartIconDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getStartIconDrawable(): globalAndroid.graphics.drawable.Drawable;
						public dispatchRestoreInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
						public isHintEnabled(): boolean;
						/** @deprecated */
						public setPasswordVisibilityToggleEnabled(param0: boolean): void;
						public setEndIconDrawable(param0: number): void;
						/** @deprecated */
						public setPasswordVisibilityToggleTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public getEndIconDrawable(): globalAndroid.graphics.drawable.Drawable;
						public clearOnEditTextAttachedListeners(): void;
						/** @deprecated */
						public setPasswordVisibilityToggleContentDescription(param0: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public setPasswordVisibilityToggleContentDescription(param0: number): void;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public isErrorEnabled(): boolean;
					}
					export module TextInputLayout {
						export class comgoogleandroidmaterialtextfieldTextInputLayoutAccessibilityDelegate {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.AccessibilityDelegate>;
							public constructor(param0: com.google.android.material.textfield.TextInputLayout);
							public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
							public onPopulateAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
						}
						export type AccessibilityDelegate = comgoogleandroidmaterialtextfieldTextInputLayoutAccessibilityDelegate
						export class BoxBackgroundMode {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.BoxBackgroundMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$BoxBackgroundMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class EndIconMode {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.EndIconMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$EndIconMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class OnEditTextAttachedListener {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.OnEditTextAttachedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$OnEditTextAttachedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onEditTextAttached(param0: globalAndroid.widget.EditText): void;
							});
							public constructor();
							public onEditTextAttached(param0: globalAndroid.widget.EditText): void;
						}
						export class OnEndIconChangedListener {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.OnEndIconChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$OnEndIconChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onEndIconChanged(param0: number): void;
							});
							public constructor();
							public onEndIconChanged(param0: number): void;
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.textfield.TextInputLayout.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module theme {
					export class MaterialComponentsViewInflater {
						public static class: java.lang.Class<com.google.android.material.theme.MaterialComponentsViewInflater>;
						public constructor();
						public createCheckBox(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckBox;
						public createRadioButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatRadioButton;
						public shouldInflateAppCompatButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): boolean;
						public createButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatButton;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export abstract class ExpandableBehavior extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<globalAndroid.view.View> {
						public static class: java.lang.Class<com.google.android.material.transformation.ExpandableBehavior>;
						public constructor();
						public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: number): boolean;
						public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public onExpandedStateChange(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): boolean;
						public onDependentViewChanged(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public static from(param0: globalAndroid.view.View, param1: java.lang.Class): com.google.android.material.transformation.ExpandableBehavior;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public findExpandableWidget(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View): com.google.android.material.expandable.ExpandableWidget;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export abstract class ExpandableTransformationBehavior extends com.google.android.material.transformation.ExpandableBehavior {
						public static class: java.lang.Class<com.google.android.material.transformation.ExpandableTransformationBehavior>;
						public constructor();
						public onCreateExpandedStateChangeAnimation(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): globalAndroid.animation.AnimatorSet;
						public onExpandedStateChange(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export abstract class FabTransformationBehavior extends com.google.android.material.transformation.ExpandableTransformationBehavior {
						public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationBehavior>;
						public constructor();
						public onCreateExpandedStateChangeAnimation(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): globalAndroid.animation.AnimatorSet;
						public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public onCreateMotionSpec(param0: globalAndroid.content.Context, param1: boolean): com.google.android.material.transformation.FabTransformationBehavior.FabTransformationSpec;
						public onAttachedToLayoutParams(param0: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
					export module FabTransformationBehavior {
						export class FabTransformationSpec {
							public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationBehavior.FabTransformationSpec>;
							public timings: com.google.android.material.animation.MotionSpec;
							public positioning: com.google.android.material.animation.Positioning;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export class FabTransformationScrimBehavior extends com.google.android.material.transformation.ExpandableTransformationBehavior {
						public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationScrimBehavior>;
						public static EXPAND_DELAY: number;
						public static EXPAND_DURATION: number;
						public static COLLAPSE_DELAY: number;
						public static COLLAPSE_DURATION: number;
						public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.MotionEvent): boolean;
						public constructor();
						public onCreateExpandedStateChangeAnimation(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): globalAndroid.animation.AnimatorSet;
						public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export class FabTransformationSheetBehavior extends com.google.android.material.transformation.FabTransformationBehavior {
						public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationSheetBehavior>;
						public constructor();
						public onCreateMotionSpec(param0: globalAndroid.content.Context, param1: boolean): com.google.android.material.transformation.FabTransformationBehavior.FabTransformationSpec;
						public onExpandedStateChange(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export class TransformationChildCard extends com.google.android.material.circularreveal.cardview.CircularRevealCardView {
						public static class: java.lang.Class<com.google.android.material.transformation.TransformationChildCard>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export class TransformationChildLayout extends com.google.android.material.circularreveal.CircularRevealFrameLayout {
						public static class: java.lang.Class<com.google.android.material.transformation.TransformationChildLayout>;
						public destroyCircularRevealCache(): void;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public constructor(param0: globalAndroid.content.Context);
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.material.animation.TransformationListener:1
//com.google.android.material.appbar.AppBarLayout.BaseBehavior:1
//com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback:1
//com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener:1
//com.google.android.material.appbar.HeaderBehavior:1
//com.google.android.material.appbar.ViewOffsetBehavior:1
//com.google.android.material.behavior.HideBottomViewOnScrollBehavior:1
//com.google.android.material.behavior.SwipeDismissBehavior:1
//com.google.android.material.bottomsheet.BottomSheetBehavior:1
//com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ExtendedFloatingActionButtonBehavior:1
//com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior:1
//com.google.android.material.floatingactionbutton.FloatingActionButton.TransformationListenerWrapper:1
//com.google.android.material.picker.GridSelector:1
//com.google.android.material.picker.MaterialCalendar:1
//com.google.android.material.picker.MaterialCalendar.OnSelectionChangedListener:1
//com.google.android.material.picker.MaterialPickerDialogFragment:1
//com.google.android.material.snackbar.BaseTransientBottomBar:1
//com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback:1
//com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener:1

