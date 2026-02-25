export const nodes = {
    "animation": {
        "description": "Extends [**AnimationBase**](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/animationbase.md\n\nThe Animation node class provides animations of renderable nodes, by applying interpolator functions to the values in specified renderable node fields. For an animation to take effect, an Animation node definition must include a child field interpolator node ([FloatFieldInterpolator](https://developer.roku.com/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md\"FloatFieldInterpolator\"), [Vector2DFieldInterpolator](https://developer.roku.com/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md\"Vector2DFieldInterpolator\"), [ColorFieldInterpolator](https://developer.roku.com/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md\"ColorFieldInterpolator\")) definition for each renderable node field that is animated.\n\nThe Animation node class provides a simple linear interpolator function, where the animation takes place smoothly and simply from beginning to end. The Animation node class also provides several more complex interpolator functions to allow custom animation effects. For example, you can move a graphic image around the screen at differing speeds and curved trajectories at different times in the animation by specifying the appropriate function in the easeFunction field (quadratic and exponential are two examples of functions that can be specified). The interpolator functions are divided into two parts: the beginning of the animation (ease-in), and the end of the animation (ease-out). You can apply a specified interpolator function to either or both ease-in and ease-out, or specify no function for either or both (which is the linear function). You can also change the portion of the animation that is ease-in and ease-out to arbitrary fractional values for a quadratic interpolator function applied to both ease-in and ease-out.",
        "events": [],
        "extends": {
            "name": "AnimationBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/animationbase.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Sets the duration of the animation in seconds",
                "name": "duration",
                "type": "Time"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"outCubic\"",
                "description": "Specifies the interpolator function to be used for the animation:\n\n| Value | Ease-In/Ease-Out Function |\n| --- | --- |\n| linear | No ease-in or ease-out |\n| inQuad | Quadratic ease-in function, no ease-out |\n| inCubic | Cubic ease-in function, no ease-out |\n| inQuartic | Quartic ease-in function, no ease-out |\n| inQuintic | Quintic ease-in function, no ease-out |\n| inExpo | Exponential ease-in function, no ease-out |\n| outQuad | Quadratic ease-out function, no ease-in |\n| outCubic | Cubic ease-out function, no ease-in |\n| outQuartic | Quartic ease-out function, no ease-in |\n| outQuintic | Quintic ease-out function, no ease-in |\n| outExpo | Exponential ease-out function, no ease-in |\n| inOutQuad | Quadratic ease-in and ease-out function |\n| inOutCubic | Cubic ease-in and ease-out function |\n| inOutQuartic | Quartic ease-in and ease-out function |\n| inOutQuintic | Quintic ease-in and ease-out function |\n| inOutExpo | Exponential ease-in and ease-out function |\n| piecewise | Quadratic ease-in and ease-out function with extra control over the percentage of the duration during which ease-in and ease-out occurs. The extra control is specified using the `easeInPercent` and `easeOutPercent` fields. |",
                "name": "easeFunction",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.5",
                "description": "If easeFunction is set to piecewise, easeInPercent sets the percentage of the animation duration during which ease-in is applied. Note that the values of easeInPercent plus easeOutPercent must be less than or equal to 1. For all other values of easeFunction, easeInPercent is ignored",
                "name": "easeInPercent",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.5",
                "description": "If easeFunction is set to piecewise, easeOutPercent sets the percentage of the animation duration during which ease-out is applied. Note that the values of easeInPercent plus easeOutPercent must be less than or equal to 1. For all other values of easeFunction, easeOutPercent is ignored",
                "name": "easeOutPercent",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Set to true to skip animations on lower performing Roku devices. See \\[Roku Devices\\](/docs/specs/hardware.md#current-models \"Roku Devices\") for model numbers and code names. When an Animation has optional set to true, setting the control field to start will cause the state field to change to running and immediately change again to finished. These state changes allow any logic tied to state field observers that run at the start and end of the Animation to be properly called",
                "name": "optional",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "false",
                "description": "Indicates whether the animation runs or jumps to the end (effectively skipping the animation and rendering it in its final state).",
                "name": "willBeSkipped",
                "type": "boolean"
            }
        ],
        "interfaces": [],
        "name": "Animation",
        "url": "https://developer.roku.com/docs/references/scenegraph/animation-nodes/animation.md"
    },
    "animationbase": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\"**Node**\")\n\nAnimationBase is an abstract node class that contains the fields common to the [Animation](https://developer.roku.com/docs/references/scenegraph/animation-nodes/animation.md\"Animation\"), [SequentialAnimation](https://developer.roku.com/docs/references/scenegraph/animation-nodes/sequentialanimation.md\"SequentialAnimation\"), and [ParallelAnimation](https://developer.roku.com/docs/references/scenegraph/animation-nodes/parallelanimation.md\"ParallelAnimation\") nodes. The purpose of the AnimationBase node class is to provide the basic functionality needed to animate screen elements, such as moving them across the display screen, fading them in and out of view, or changing their color. All node classes extended from AnimationBase require the use of the interpolator node classes [FloatFieldInterpolator](https://developer.roku.com/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md\"FloatFieldInterpolator\"), [Vector2DFieldInterpolator](https://developer.roku.com/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md\"Vector2DFieldInterpolator\"), and [ColorFieldInterpolator](https://developer.roku.com/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md\"ColorFieldInterpolator\") as child nodes to achieve a specific animation effect.\n\n> AnimationBase is not meant to be instantiated directly by app code",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Controls the animation. Supported options include:\n\n| Option | Effect |\n| --- | --- |\n| none | Initial state with no associated action |\n| start | Always plays the animation from the beginning |\n| stop | Stops the animation in its current state |\n| pause | Pauses the animation in its current state |\n| resume | If paused, resumes the animation from its current state. If the animation is not paused, plays the animation from the beginning. |\n| finish | Jumps to the end of the animation, then stops. All animated fields will be immediately set to their final values as if the animation had completed. |",
                "name": "control",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Delays the start of the animation by the specified number of seconds",
                "name": "delay",
                "type": "time"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Controls whether the animation stops when it finishes (false) or repeats from the beginning (true)",
                "name": "repeat",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "stopped",
                "description": "Indicates the state of the animation. Values include:\n\n| Value | Meaning |\n| --- | --- |\n| running | Indicates that the animation is in progress |\n| paused | Indicates that the animation has been paused |\n| stopped | Indicates that the animation has either run to completion or has been explicitly stopped |",
                "name": "state",
                "type": "value string"
            }
        ],
        "interfaces": [],
        "name": "AnimationBase",
        "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/animationbase.md"
    },
    "arraygrid": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe ArrayGrid node class is an abstract base class that provides functionality to the list and grid node classes that are extended from ArrayGrid. The field value settings and their effect in this abstract base class depend in many cases on whether a list, or a grid, node class is extended from ArrayGrid, and the specific type of list or grid.\n\nThe following node classes extended from ArrayGrid derive their basic functionality from the ArrayGrid abstract node class:\n\n*   [LabelList](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/labellist.md\"LabelList\")\n*   [MarkupList](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markuplist.md\"MarkupList\")\n*   [PosterGrid](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/postergrid.md\"PosterGrid\")\n*   [MarkupGrid](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markupgrid.md\"MarkupGrid\")\n*   [RowList](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/rowlist.md\"RowList\")\n\n> ArrayGrid is not meant to be instantiated directly by app code",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, causes the list or grid to quickly scroll so that the item at the specified index moves into focus, or focus moves to the item",
                "name": "animateToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[]",
                "description": "Specifies differing spaces between each grid column, to allow the spacing between columns to vary from column to column. This field is not used by lists. The specified values override the itemSpacing field vector2d X-value for each grid column corresponding to its position in the array, in left to right order. If the array contains fewer elements than the number of columns needed to display all the items in the grid, the itemSpacing field vector2d X-value is used for any unspecified columns",
                "name": "columnSpacings",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[]",
                "description": "Specifies differing widths for each grid column, to allow the width of each column to vary from column to column. This field is not used by lists. The specified values override the itemSize field vector2d X-value for each grid column corresponding to its position in the array, in left to right order. If the array contains fewer elements than the number of columns needed to display all the items in the grid, the itemSize field vector2d X-value is used for any unspecified columns",
                "name": "columnWidths",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Specifies the content meta-data for the list or grid. This field must be set with a ContentNode that specifies the content meta-data for the list or grid in order for the list or grid to be displayed. See the Data Bindings section of each list or grid reference description for details on the content meta-data that must be specified in the ContentNode",
                "name": "content",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Gives access to which column of a grid is in the focus position as the items scrolling around. So, currFocusColumn = 3.7 would mean that item 3 occupies 30% of the focus position while item 4 occupies 70% of the focus position. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render",
                "name": "currFocusColumn",
                "type": "float"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "This field provides access to the current opacity of the focus feedback indicator. It can be used to have other items on the screen fade in/out when the focus feedback indicator fades in/out.",
                "name": "currFocusFeedbackOpacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Gives access to which row of a grid is in the focus position as the items scrolling around. So, currFocusRow = 3.7 would mean that item 3 occupies 30% of the focus position while item 4 occupies 70% of the focus position. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render",
                "name": "currFocusRow",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Gives access to which section of a grid is in the focus position as the items scrolling around. So, currFocusSection = 3.7 would mean that item 3 occupies 30% of the focus position while item 4 occupies 70% of the focus position. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render",
                "name": "currFocusSection",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Causes a specified bitmap to be drawn on list or grid items to indicate focus has moved to that item",
                "name": "drawFocusFeedback",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If the drawFocusFeedback field value is set to true, specifies whether the specified focus indicator bitmap is drawn on top of the focused list or grid items. The default value draws the specified focus indicator bitmap below the focused list or grid item",
                "name": "drawFocusFeedbackOnTop",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "When set to true, the focus feedback indicator will quickly fade out when scrolling multiple items and fade back in when the scrolling ends. The focus feedback indicator will also after in and out when using the FFW/Rewind keys to scroll a page at a time. Additionally, the focus behavior has been modified for situations where all the items in a RowList row are visible on screen at once. In the past, the focus would step once, then begin to scroll smoothly. Now, the focus steps one-by-one through each item.",
                "name": "fadeFocusFeedbackWhenAutoScrolling",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies that a grid will have a layout of items of different widths configured by parameters included in a ContentNode for the grid. This field is not used by lists",
                "name": "fixedLayout",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by focusBitmapUri with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by focusBitmapUri",
                "name": "focusBitmapBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the drawFocusFeedback field value is set to true, specifies a custom bitmap to be drawn on list or grid items to indicate the focus has moved to that item. Only set this field to use a bitmap with a different appearance than the system default. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions as well as margins to fit around the item, which is the type of bitmap used as the system default",
                "name": "focusBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the column that will have fixed focus for grids if the horizFocusAnimationStyle field value is set to fixedFocusWrap. This field is not used for lists",
                "name": "focusColumn",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the drawFocusFeedback field value is set to true, specifies a custom bitmap to be drawn on list or grid items to indicate focus on that item, when the list or grid itself does not have focus. Only set this field to use a bitmap with a different appearance than the system default. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions as well as margins to fit around the item, which is the type of bitmap used as the system default",
                "name": "focusFootprintBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by focusFootprintBitmapUri with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by focusFootprintBitmapUri",
                "name": "focusFootprintBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the row that will have fixed focus if the vertFocusAnimationStyle field value is set to fixedFocusWrap",
                "name": "focusRow",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "floatingFocus",
                "description": "Specifies the how the focus indicator moves in a row of grid items in response to the remote direction pad Left and Right key presses. This field is not used for lists. The possible values are:\n\n| Option | Effect |\n| --- | --- |\n| floatingFocus | Causes the focus indicator to float left or right until it reaches the end of the row, at which point the focus indicator will stay fixed on the first or last item in the row, and the items will scroll left or right if there were items that were not visible. |\n| fixedFocusWrap | Causes the row to wrap around when the focus indicator reaches the first or last item in the row, as long as the row contains enough items to fill the row. If the row does not contain enough items to fill the row, the focus indicator will float left and right. |",
                "name": "horizFocusAnimationStyle",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ 0.0, 0.0, 0.0, 0.0 ]",
                "description": "Specifies a clipping region for the list or grid items",
                "name": "itemClippingRect",
                "type": "rect2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "This field provides access to the current opacity of the focus feedback indicator. It can be used to have other items on the screen fade in/out when the focus feedback indicator fades in/out. Additionally, the focus behavior has been modified for situations where all the items in a RowList row are visible on screen at once. In the past, the focus would step once, then begin to scroll smoothly. Now, the focus steps one-by-one through each item.",
                "name": "itemcurrFocusFeedbackOpacity",
                "type": "Float"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When focus moves to a list or grid item, set to the index of the focused item",
                "name": "itemFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list or grid item is selected, set to the index of the selected item",
                "name": "itemSelected",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Specifies the width and height of each item in the list or grid. For list or grid items that are posters, itemSize is the value of a basePosterSize field and any sub-elements included with the poster",
                "name": "itemSize",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Specifies the horizontal and vertical spacing between the list or grid items. For lists, the vector2d Y-value specifies the vertical spacing between items in the list, and the vector2d X-value is ignored",
                "name": "itemSpacing",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When focus moves away from a list or grid item, set to the index of the unfocused item",
                "name": "itemUnfocused",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, causes the list or grid to immediately update so that the item at the specified index moves into focus, or focus moves to the item",
                "name": "jumpToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the number of columns in a grid. This field is not used for lists",
                "name": "numColumns",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1",
                "description": "Specifies the number of rendering operations to display a complex list or grid. This allows you to achieve a performance increase by specifying that individual sub-elements of the list or grid items occur on sequential rendering operations, rather than all of the item sub-elements being rendered in one rendering operation, which is the default. If you set this field to a value greater than 1, you must specify the rendering operation number for each of the item sub-elements as the renderPass field value for that sub-element. No sub-element that has a renderPass field value of 0 (the default), or has a renderPass field value greater than the value of the numRenderPasses field, will render",
                "name": "numRenderPasses",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the number of visible rows displayed. Note that the actual number of rows may be more or less than the number specified depending on the number of items in the list or grid content",
                "name": "numRows",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[]",
                "description": "Specifies differing heights for each list or grid row, to allow the height of each row to vary from row to row. The specified values override the itemSize field vector2d Y-value for each list or grid row corresponding to its position in the array, in top to bottom order. If the array contains fewer elements than the number of rows needed to display all the items in the list or grid, the itemSize field vector2d Y-value is used for any unspecified rows",
                "name": "rowHeights",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[]",
                "description": "Specifies differing spaces between each list or grid row, to allow the spacing between rows to vary from row to row. The specified values override the itemSpacing field vector2d Y-value for each list or grid row corresponding to its position in the array, in top to bottom order. If the array contains fewer elements than the number of rows needed to display all the items in the list or grid, the itemSpacing field vector2d Y-value is used for any unspecified rows",
                "name": "rowSpacings",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "false",
                "description": "When the list or grid is scrolling, is set to true (undocumented).",
                "name": "scrollingStatus",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the ContentNode specifies sections for a list or grid, specifies a custom bitmap to use as a visual divider between the sections of the list or grid. Only set this field to use a bitmap with a different appearance than the system default. For sections that do not include an icon or a title, the system default or custom bitmap specified as the wrapDividerBitmapUri field value is used for the section dividers. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default",
                "name": "sectionDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "If the ContentNode specifies sections for a list or grid, specifies a custom font to use for the section title text. Only set this field to use a different font than the system default",
                "name": "sectionDividerFont",
                "type": "font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "If the ContentNode specifies sections for a list or grid, specifies the height of the section divider bitmap",
                "name": "sectionDividerHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "If the ContentNode specifies sections for a list or grid, specifies the left offset of the section divider from the list or grid",
                "name": "sectionDividerLeftOffset",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "If the ContentNode specifies sections for a list or grid, specifies the minimum width of the section divider bitmap",
                "name": "sectionDividerMinWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "If the ContentNode specifies sections for a list or grid, and the section dividers are specified to include an icon and/or a label, specifies the spacing between the icon, label, and section divider bitmap",
                "name": "sectionDividerSpacing",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "If the ContentNode specifies sections for a list or grid, specifies a custom color to use for the section title text. Only set this field to use a different text color than the system default",
                "name": "sectionDividerTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "If the ContentNode specifies sections for a list or grid, specifies the width of the section divider bitmap",
                "name": "sectionDividerWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether changes in the focus item should be animated. If this field is set to true, any scrolling or repositioning/scaling of the focus indicator occurs without an animation. This causes fields reflecting the focus status (itemFocused, currFocusRow, currFocusColumn) to be updated instantly and not transition smoothly between old and new values. For example, currFocusRow will go directly from 3.0 to 4.0 instead of taking on values between 3.0 and 4.0.",
                "name": "skipFocusAnimations",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "floatingFocus",
                "description": "Specifies the how the focus indicator moves in a list or a column of grid items in response to the remote direction pad Up and Down key presses. The possible values are:\n\n| Option | Effect |\n| --- | --- |\n| floatingFocus | Causes the focus indicator to float up or down until it reaches the end of the list or grid column, at which point the focus indicator will stay fixed on the first or last item in the list or grid column, and the items will scroll up or down if there are items that were not visible. Note that when this style is set, section dividers are not rendered. |\n| fixedFocusWrap | Causes the column to wrap around when the focus indicator reaches the first or last item in the list or grid column, as long as the list or grid column contains enough items to fill the list or grid column. If the list or grid column does not contain enough items to fill the list or grid column, the focus indicator will float up and down. |\n| fixedFocus | Causes the focus to stay fixed on the upper leftmost item. As the user scrolls down, the row containing the previously selected item scrolls up off screen. Scrolling continues until the last row is reached. |",
                "name": "vertFocusAnimationStyle",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the vertFocusAnimationStyle field value is set to fixedFocusWrap, specifies a custom bitmap to use as a visual divider between the last and first list or grid items, when the list or grid wraps. Only set this field to use a bitmap with a different appearance than the system default. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default",
                "name": "wrapDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "36",
                "description": "If the vertFocusAnimationStyle field value is set to fixedFocusWrap, specifies the height of a bitmap used as a visual divider between the last and first list or grid items, when the list or grid wraps. Only set this field to use a value with a different appearance than the system default",
                "name": "wrapDividerHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Additionally, the focus behavior has been modified for situations where all the items in a RowList row are visible on screen at once. In the past, the focus would step once, then begin to scroll smoothly. Now, the focus steps one-by-one through each item.If the vertFocusAnimationStyle field value is set to fixedFocusWrap, specifies the width of a bitmap used as a visual divider between the last and first list or grid items when the list or grid wraps. Only set this field to use a value with a different appearance than the system default",
                "name": "wrapDividerWidth",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "ArrayGrid",
        "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md"
    },
    "audio": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe Audio node class plays streaming audio.\n\nThe Audio node class has no built-in visual UI, but you can build your own UI for the node, including trick play, or showing an album cover or similar graphical image for each song selected by a user.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "Contains the format of the currently playing audio.\n\n| Value | Meaning |\n| --- | --- |\n| \"\" | No stream playing |\n| aac | ISO/IEC 14496-3, Advanced Audio Coding |\n| aac\\_adif | ISO/IEC 14496-3, Advanced Audio Coding, ADIF container |\n| aac\\_adts | ISO/IEC 14496-3, Advanced Audio Coding, ADTS container |\n| aac\\_latm | ISO/IEC 14496-3, Advanced Audio Coding, LATM container |\n| ac3 | Dolby Digital |\n| alac | Apple Lossless |\n| dts | DTS Coherent Acoustics |\n| eac3 | Dolby Digital Plus |\n| flac | Free Lossless Audio Codec |\n| mp2 | ISO/IEC 11172-3, MPEG Audio Layer II |\n| mp3 | ISO/IEC 11172-3, MPEG Audio Layer III |\n| none | Stream contains no playable audio |\n| pcm | linear PCM |\n| unknown | Stream contains unknown audio |\n| vorbis | Ogg Vorbis |\n| wma   _sunset as of Roku OS 12.5_ | Microsoft Windows Media Audio.      As of Roku OS 10.5, the Roku platform no longer supports this audio format. As part of the Roku OS 12.5 release, this format was officially sunset. |\n| wmapro   _sunset as of Roku OS 12.5_ | Microsoft Windows Media Pro Audio.      As of Roku OS 10.5, the Roku platform no longer supports this audio format. As part of the Roku OS 12.5 release, this format was officially sunset. |",
                "name": "audioFormat",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Enables audio content to automatically play after rebuffering. Setting this flag to false disables this default behavior.",
                "name": "autoplayAfterSeek",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Contains information about stream buffering progress and status. This field is valid only while buffering is in progress, both at stream startup or when re-buffering is required. Observers will be notified when any element of the array changes, and also when buffering is complete and the field itself becomes invalid. The array contains the following name - value pairs.\n\n| Value | Meaning |\n| --- | --- |\n| percentage | Percent buffering complete as an integer. |\n| isUnderrun | Boolean value indicating if a stream underrun occurred. |",
                "name": "bufferingStatus",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "NULL",
                "description": "The ContentNode with the \\[Content Meta-Data\\](/docs/developer-program/getting-started/architecture/content-metadata.md) for the audio or audio playlist (a sequence of audios) to be played. If a audio playlist is to be played, the ContentNode must include complete child ContentNodes for each audio in the playlist, with all attributes required to play that audio.",
                "name": "content",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "-1",
                "description": "The index of the audio in the audio playlist that is currently playing. Generally, you would only want to check this field if audio playlists are enabled (by setting the \\`contentIsPlaylist\\` field to true), but it is set to 0 when a single audio is playing and audio playlists are not enabled.",
                "name": "contentIndex",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If set to true, enables audio playlists (a sequence of audios to be played). To enable audio playlists, the ContentNode set in the \\`content\\` field must have children ContentNodes for each audio in the playlist. When audio playback is started, all of the audios in the playlist will be played in sequence.",
                "name": "contentIsPlaylist",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Sets the desired play state for the audio, such as starting or stopping the audio play. Getting the value of this field returns the most recent value set, or \\`none\\` if no value has been set. In order to dynamically monitor the actual state of the audio, see the \\`state\\` field.\n\n| Option | Effect |\n| --- | --- |\n| none | No play state set |\n| play | Start audio play |\n| start | Start audio play |\n| stop | Stop audio play |\n| pause | Pause audio play |\n| resume | Resume audio play after a pause |\n| replay | Replay audio |\n| prebuffer | Starts buffering the audio stream before the Audio node actually begins playback. Only one audio stream can be buffering in the application at any time. Setting the `control` field to `prebuffer` for another audio stream after setting `prebuffer` for a previous audio stream stops the buffering of the previous audio stream. |\n| skipcontent | Skip the currently-playing content, and begin playing the next content in the playlist. If the content is not a playlist, or if the current content is the end of the playlist, this will end playback. |",
                "name": "control",
                "type": "option string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The duration of the audio being played, specified in seconds. This becomes valid when playback begins and may change if the audio is dynamic content, such as a live event.",
                "name": "duration",
                "type": "time"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The error code associated with the audio play error set in the \\`state\\` field",
                "name": "errorCode",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "An error message describing the audio play error set in the \\`state\\` field.",
                "name": "errorMsg",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "When a node or one of its children gains or loses the keyboard focus, the focusedChild field will be set and call its observer functions. In the observer function, typically, you use \\[ifSGNodeFocus\\](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodefocus.md functions to query whether this node or some other node has the key focus or is in the key focus chain. Accessing the value of the field will result in script errors.",
                "name": "focusedChild",
                "type": "N/A"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If set to true, the audio or audio playlist (if the \\`contentIsPlaylist\\` field is set to true to enable audio playlists) will be restarted from the beginning after the end is reached.",
                "name": "loop",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Set to true to mute the audio currently playing in the Audio node. Set to false to restore audio.",
                "name": "mute",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "-1",
                "description": "If the \\`contentIsPlaylist\\` field is set to true to enable audio playlists, sets the index of the next audio in the playlist to be played. Setting this field does not immediately change the audio being played, but takes effect when the current audio is completed or skipped. By default, this value is -1, which performs the default index increment operation. After the audio specified by the index in this field begins playing, the field is set to the default -1 again, so the next audio played will be set by the default index increment operation, unless the field is set again to a different index.",
                "name": "nextContentIndex",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.5",
                "description": "The interval between notifications to observers of the position field, specified as the number of seconds. If the value is 0, no notifications are delivered. This value may be read or modified at any time.",
                "name": "notificationInterval",
                "type": "time"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "The current position in the audio play, as the number of seconds.",
                "name": "position",
                "type": "time"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "invalid",
                "description": "Sets the current position in the audio. The value is the number seconds from the beginning of the stream, specified as a double.",
                "name": "seek",
                "type": "time"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "none",
                "description": "Describes the current audio play state, such as if the audio play has been paused.\n\n| Value | Meaning |\n| --- | --- |\n| none | No current play state |\n| buffering | Audio stream is currently buffering |\n| playing | Audio is currently playing |\n| paused | Audio is currently paused |\n| stopped | Audio is currently stopped |\n| finished | Audio has completed play |\n| error | An error has occurred in the audio play. The error code and error message can be found in the `errorCode` and `errorMsg` fields respectively. |",
                "name": "state",
                "type": "value string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Information about the audio stream that is currently playing or buffering.\n\n| Key | Type | Value |\n| --- | --- | --- |\n| isUnderrun | Boolean | If true, the stream was downloaded due to an underrun |\n| isResumed | Boolean | If true, playback was resumed after trickplay |\n| measuredBItrate | Integer | The measured bitrate (bps) of the network when the stream was selected |\n| streamBitrate | Integer | The bitrate of the stream |\n| streamUrl | URI | The URL of the stream |",
                "name": "streamInfo",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "{ }",
                "description": "Information about the audio segment that is currently streaming. This is only meaningful for segmented audio transports, such as DASH and HLS. The associative array has the following entries:\n\n| Key | Type | Value |\n| --- | --- | --- |\n| segBitrateBps | integer | Bitrate of the segment in bits per second |\n| segSequence | integer | The sequence number of the segment in the audio |\n| segStart | time | The start time of the segment from the start of the audio, specified in seconds |\n| segUrl | string | URL of the segment |\n| segTypeStr | string | The type of data in the segment: \"unknown\", \"mux\", \"audio\", \"video\", or \"captions\". |\n| hdrModeStr | string | The HDR format of the content, which may be one of the following values:  *   \"invalid\" *   \"unknown\" *   \"none\" *   \"hdr10\" *   \"dolby\\_vision\" *   \"hlg10\" *   \"hdr10\" *   \"sl-hdr2\"   |",
                "name": "streamingSegment",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "{ }",
                "description": "The most recent timed meta data that has been decoded from the audio stream. Only meta data with a key that matches an entry in timedMetaDataSelectionKeys will be set into this field. The value of this field is an associative array which contains arbitrary keys and values, as found in the audio stream. As of Roku OS 10.5, this field can be used to read ID3 tags embedded in an audio stream.",
                "name": "timedMetaData",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "If the audio stream contains timed meta data such as ID3 tags, any meta data with a key matching an entry in this array will be set into the timedMetaData field. If any entry in this array is \"\\\\\\*\", then all timed meta data will be selected.",
                "name": "timedMetaDataSelectionKeys",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The time in seconds from playback being started until the audio actually began playing. The minimum valid value is 1 millisecond, and this is only valid if the current value of the \\`state\\` field is \\`playing\\`. When the state field value is not \\`playing\\`, the value will be 0. This field is updated prior to the \\`state\\` field changing, so \\`state\\` field observer callback functions can assume this field is valid after the \\`state\\` field value changes to \\`playing\\`.",
                "name": "timeToStartStreaming",
                "type": "time"
            }
        ],
        "interfaces": [],
        "name": "Audio",
        "url": "https://developer.roku.com/docs/references/scenegraph/media-playback-nodes/audio.md"
    },
    "bifdisplay": {
        "description": "Component that displays BIFs and allows navigation.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "A color to be blended with the image displayed behind individual BIF images displayed on the screen. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.",
                "name": "frameBgBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The URI of an image to be displayed behind individual frames on the screen. The actual frame image is displayed opaquely on top of this background, so only the outer edges of this image are visible. Because of that, this background image typically appears as a border around the video frame. If the frameBgBlendColor field is set to a value other than the default, that color will be blended with the background image.",
                "name": "frameBgImageUri",
                "type": "uri"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "invalid",
                "description": "Requests the nearest BIF to the time specified. This would normally be an offset from the current playback position. The getNearestFrame request is passed to the BifCache which uses the getNearestFrame() method implemented on all BIF storage classes. Existing BifCache functionality is then used to retrieve the bitmap data and load it into the texture manager.",
                "name": "getNearestFrame",
                "type": "time"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Contains the URI of the requested BIF. The returned URIs will be of the form `memory://BIF%d%d`. These URIs can then be used directly in the `uri` field of a Poster SGN (or similar).",
                "name": "nearestFrame",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "BifDisplay",
        "url": "https://developer.roku.com/en-ca/docs/references/scenegraph/media-playback-nodes/video.md#ui-fields"
    },
    "busyspinner": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\n\nThe BusySpinner node class is a simple widget that displays a continuously rotating bitmap. Since the BusySpinner node class uses an internal Poster node instance, the busy spinner bitmap can be specified by setting the internal Poster node uri field.\n\n[SimpleBusySpinner](https://github.com/rokudev/samples/tree/master/ux%20components/widgets) is a sample app that demonstrates usage of the BusySpinner.\n\n> Not all Roku Player hardware versions support arbitrary rotations. In particular, some hardware versions only support 90 degree rotation increments. In those cases, the icon will step through 90 degree, 180 degree, 270 degree and back to 0 degree rotations, rather than spin smoothly.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether the bitmap rotates in a clockwise or counterclockwise direction",
                "name": "clockwise",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Sets the operational state of the busy spinner\n\n| Option | Effect |\n| --- | --- |\n| none | No operational state set. The busy spinner will run if not set to `\"stop\"`. |\n| start | Starts the busy spinner if not running |\n| stop | Stops the busy spinner if running |",
                "name": "control",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "internal instance default",
                "description": "Set the uri field of the Poster node to select the bitmap for the busy spinner",
                "name": "poster",
                "type": "Poster node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "2",
                "description": "The number of seconds to complete a 360-degree rotation of the spinner image. A value of 0 will cause the spinner to remain stationary and not spin",
                "name": "spinInterval",
                "type": "time"
            }
        ],
        "interfaces": [],
        "name": "BusySpinner",
        "url": "https://developer.roku.com/docs/references/scenegraph/widget-nodes/busyspinner.md"
    },
    "button": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe Button node is a simple widget that generates a buttonSelected event when the user selects it. The button can display a label and/or an icon, as well as a background image. Fields are provided to customize the label text and color depending on whether or not the button has the key focus. Similarly, the bitmaps used for the icon and background can be specified for both focused and unfocused button states.\n\nBy default, the background of the button is only shown when the button has the key focus. Buttons are typically used in a ButtonGroup node that manages which button in the group will have the key focus when the ButtonGroup node receives the focus. When the ButtonGroup node has the focus, the button in the group that has the focus will display the focusBitmapUri bitmap as its background. When the ButtonGroup node does not have the focus, it remembers which button in the group had the focus and sets that button showFocusFootprint field to true, causing it to a render a \"footprint\" bitmap as a visual indicator that it will be the focused button when the ButtonGroup node receives the focus again. All other buttons in the ButtonGroup node do not display a background image.\n\nWhen a Button node is created that is not a child of a ButtonGroup node, typically the showFootprintfield field should be set to true, so that the button always displays a background image.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_ONLY",
                "default": "N/A",
                "description": "The buttonSelected field is set whenever the button is selected. The field should be used to call observer callback functions when the button is selected",
                "name": "buttonSelected",
                "type": "Event"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the button background bitmap file to display when the button has the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap",
                "name": "focusBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies a bitmap file for the button icon when the button has the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. For a button with no icon, set this field to an empty string (iconUri=\"\")",
                "name": "focusedIconUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0x262626ff",
                "description": "Specifies the color of the button label when the button has the key focus",
                "name": "focusedTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the font of the button label when the button has the key focus",
                "name": "focusedTextFont",
                "type": "Font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the button focus \"footprint\" bitmap file to display when the button does not have key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. By default the \"footprint\" bitmap is not displayed when the button does not have the key focus. To display the background when the button is unfocused, the showFocusFootprint field must be set to true",
                "name": "focusFootprintBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "64",
                "description": "Specifies the height of the button",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies a bitmap file for the button icon when the button does not have the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. For a button with no icon, set this field to an empty string (iconUri=\"\")",
                "name": "iconUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "32767",
                "description": "Specifies the maximum width of the button. The maxWidth field must be greater than or equal to the minWidth field",
                "name": "maxWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the minimum width of the button. The minWidth field must be less than or equal to the maxWidth field",
                "name": "minWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Enables auto-scrolling to ensure text that is larger than initially expected fits within the button (for example, when the text is translated to other languages).",
                "name": "scrollable",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Controls whether the focus \"footprint\" bitmap is displayed when the button does not have the key focus. Since the default value of the showFocusFootprint field is false, the \"footprint\" bitmap is not displayed by default",
                "name": "showFocusFootprint",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the text to be displayed as the button label",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the color of the button label when the button does not have the key focus",
                "name": "textColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the font of the button label when the button does not have the key focus",
                "name": "textFont",
                "type": "Font"
            }
        ],
        "interfaces": [],
        "name": "Button",
        "url": "https://developer.roku.com/docs/references/scenegraph/widget-nodes/button.md"
    },
    "buttongroup": {
        "description": "Extends [**LayoutGroup**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/layoutgroup.md\"**LayoutGroup**\")\n\nThe ButtonGroup node class manages the layout, visual attributes, and focus management of a vertical list of Button nodes. When the ButtonGroup node has focus, it sets the key focus on a single one of its child Button nodes.\n\n*   The buttons can be easily created using default button appearances by setting the buttons field to an array of strings containing the labels for each button.\n*   A single observer can watch for any of the Button nodes in the group to be selected by observing the buttonSelected field.\n*   By default, Button nodes added to the group will have the default button appearance. Several fields exist that allow you to change an attribute of the appearance of all Button nodes in the group.",
        "events": [],
        "extends": {
            "name": "LayoutGroup",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/layoutgroup.md"
        },
        "fields": [
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Set to the index of the focused button whenever a button in the group receives the key focus",
                "name": "buttonFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the height of each Button node in the group. Only set to override the system default",
                "name": "buttonHeight",
                "type": "float"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "[ ]",
                "description": "Allows a set of Button nodes to be easily created by providing an array of button labels. Each string in the array will result in a Button node to be added to the ButtonGroup node, using the string as the button label",
                "name": "buttons",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Set to the index of the selected button whenever the user selects a button in the group",
                "name": "buttonSelected",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap to be used as the background for the Button node that has focus. Only set to override the system default",
                "name": "focusBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "Causes the button with the specified index to receive the focus when the ButtonGroup node has the key focus. Note that if the ButtonGroup node does not have the key focus when the focusButton field is set, the specified button will display the focus \"footprint\" as its background",
                "name": "focusButton",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap for the focused button icon. Only set to override the system default",
                "name": "focusedIconUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the button label color for the Button node that has focus, if any. Only set to override the system default",
                "name": "focusedTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system: MediumBoldSystemFont",
                "description": "Specifies the \\[Font\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/font.md\"Font\") node for the Button node that has focus, if any. Only set to override the system default. See Font for a list of all system fonts available",
                "name": "focusedTextFont",
                "type": "Font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap to be used as the focus footprint background, when focus is not on the ButtonGroup node. The focus footprint is a visual indicator of the button that will take focus when focus moves back onto the ButtonGroup node. Only set to override the system default",
                "name": "focusFootprintBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap for the button icon for all unfocused Button nodes in the group. Only set to override the system default",
                "name": "iconUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "32767",
                "description": "When set, specifies the maximum width for the Button nodes in the group. The maxWidth field must be greater than or equal to the minWidth field",
                "name": "maxWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the minimum width for the Button nodes in the group. The minWidth field must be less than or equal to the maxWidth field. Only set to override the system default",
                "name": "minWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the button labels and icons should be right- or left-justified. When right-justified and there is an icon, it appears to the right of the button label",
                "name": "rightJustify",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the button label color for all unfocused Button nodes in the group. Only set to override the system default",
                "name": "textColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system: MediumSystemFont",
                "description": "Specifies the \\[Font\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/font.md\"Font\") node for all unfocused Button nodes in the group. Only set to override the system default. See Font for a list of all system fonts available",
                "name": "textFont",
                "type": "Font"
            }
        ],
        "interfaces": [],
        "name": "ButtonGroup",
        "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/buttongroup.md"
    },
    "channelstore": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe **ChannelStore** node class provides an interface to the Streaming Store. It provides functionality equivalent to the [roChannelStore](https://developer.roku.com/docs/references/brightscript/interfaces/ifchannelstore.md component. In general, the **ChannelStore** node class allows developers to issue one of several commands, which involves the following steps:\n\n1.  Set the fields containing the data needed by the command (optional).\n2.  Set up an observer of the result field associated with the command.\n3.  Set the command field to the appropriate string to start the command execution.\n4.  The field associated with the command is set to a **ContentNode** object containing the results of the command.\n\nEach of the commands starts a sequence of actions associated with the financial transaction that are handled by the Roku OS outside of control or monitoring by the app SceneGraph markup. The SceneGraph markup merely initiates the purchase and receives a final result.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Contains the results of a \\[\\*\\*getCatalog\\*\\*\\](#getcatalog) command.",
                "name": "catalog",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the command to be executed: \\* \\[getUserData\\](#getuserdata) \\* \\[getUserRegionData\\](#getuserregiondata) () \\* \\[getCatalog\\](#getcatalog) and \\[getStoreCatalog\\](#getstorecatalog) \\* \\[doOrder\\](#doorder) \\* \\[getPurchases\\](#getpurchases) and \\[getAllPurchases\\](#getallpurchases) \\* \\[storeChannelCredData\\](#storechannelcreddata) \\* \\[getChannelCred\\](#getchannelcred) \\* \\[getDeviceAttestationToken\\](#getdeviceattestationtoken) \\* \\[requestPartnerOrder\\](#requestpartnerorder) \\* \\[confirmPartnerOrder\\](#confirmpartnerorder)",
                "name": "command",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Confirms the product being ordered from a TVOD app. The order contains the following fields:\n\n| Field | Type | Description |\n| --- | --- | --- |\n| orderId | string | The orderID returned by Roku in the [RequestPartnerOrderStatus](#requestpartnerorderstatus) content node. |\n| code | string | The product identifier. |\n| priceDisplay | string | The original price of the product. Do not include a currency symbol (for example, set this to \"3.99\" instead of \"$3.99\"). |\n| price | string | The final price of the product, including any discounts. Do not include a currency symbol (for example, set this to \"3.99\" instead of \"$3.99\"). |\n| title | string | The name of the product to be displayed on customers' invoices. |\n| couponCode | string | An alphanumeric string entered by the customer to receive a discounted price on the product. |\n| contentKey | string | The publisher-specific SKU (or other unique identifier) for the product. |",
                "name": "confirmPartnerOrder",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Contains the results of a \\[\\*\\*confirmPartnerOrder\\*\\*\\](#confirmpartnerorder) command.",
                "name": "confirmPartnerOrderStatus",
                "type": "ContentNode"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "{}",
                "description": "Enables the \\[\\*\\*order\\*\\*\\](#order) field to be populated incrementally. Each time this field is set, the \\*\\*order\\*\\* field is modified. The \\*\\*deltaOrder\\*\\* associative array should contain a \"code\" string that identifies an available item, and a \"qty\" integer value to indicate how the children of the order field \\*\\*ContentNode\\*\\* should be modified. For example, if the order is invalid, setting the deltaOrder field to the following associative array:   \\`{ \"code\": \"Merchandise1\", \"qty\": 1 }\\` Would cause an order field to be set to a \\*\\*ContentNode\\*\\*, with one child \\*\\*ContentNode\\*\\* with a \"code\" field set to \"Merchandise1\", and a \"qty\" field set to 1. If the deltaOrder field was then set to:   \\`{ \"code\": \"MyItem2\", \"qty\": 1 }\\` The order field \\*\\*ContentNode\\*\\* would have a second \\*\\*ContentNode\\*\\* child appended to it, with the specified \"code\" and \"qty\" field values. The \"qty\" field can be set to a negative value to remove an item from an order. For example, if the order field was set as above, and the deltaOrder field was set to:   \\`{ \"code\" MyItem2\", \"qty\": -1 }\\` The order field \\*\\*ContentNode\\*\\* would have the second child \\*\\*ContentNode\\*\\* removed.",
                "name": "deltaOrder",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Enables a test mode for the \\*\\*ChannelStore\\*\\* node. The test mode disables communication by the ChannelStore node with the Streaming Store server, and it causes responses to asynchronous queries and operations to come from XML test configuration files rather than the server. To use this test method, create a \\*\\*csFake\\*\\* folder and add the following XML files to it in order to simulate web service request and response data: \\* \\*\\*csfake/GetCatalog.xml\\*\\*: Simulates the list of products available for purchase in the app. \\* \\*\\*csfake/GetPurchases.xml\\*\\*: Simulates the list of products already purchased by the user. \\* \\*\\*csfake/PlaceOrder.xml\\*\\*: Contains information about the product to be ordered. \\* \\*\\*csfake/CheckOrder.xml\\*\\*: Verifies the validity of the order placed. For example, if the \\*\\*order\\*\\* and \\*\\*id\\*\\* values in the PlaceOrder and CheckOrder XML files do not match, the fake server will report an error in the order processing. See the \\[SimpleChannelStore sample app\\](https://github.com/rokudev/samples/tree/master/roku%20pay/SimpleChannelStore/csfake) for how to use this testing method. The \\*\\*fakeServer\\*\\* field must be set to false in a published app to allow actual \\[In-App Product\\](/docs/developer-program/roku-pay/quickstart/in-channel-products.md) purchases by users. It is recommended that developers use \\[billing testing\\](/docs/developer-program/roku-pay/testing/billing-testing.md) instead of the fakeServer.",
                "name": "fakeServer",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Contains the order to be filled when the \\[\\*\\*doOrder\\*\\*\\](#doorder) command is executed. This ContentNode contains one child ContentNode for each of the items to be purchased. The child ContentNode must contain the following fields:\n\n| Field | Type | Description |\n| --- | --- | --- |\n| code | string | Identifies the product to be purchased, as entered in the **Product Identifier** field on the [In-App Product page in the Developer Dashboard](https://developer.roku.com/products) when the product was created. See [Creating an order](#creating-an-order) for more information. |\n| qty | Integer | The quantity of the item to be purchased, which is typically 1 for most in-app products.      This is only typically more than 1 if the product is a \"packet\" of identical items (such as game points, number of viewings permitted of some item of content, and so on). |\n\nTo clear an order, set the \\*\\*order\\*\\* field to \"invalid\". \\*\\*For upgrades/downgrades only\\*\\*. You need to include an \\*\\*action\\*\\* field to specify a subscription plan change.\n\n| Field | Type | Access Permission | Description |\n| --- | --- | --- | --- |\n| action | string | READ\\_WRITE | Set this to \"Upgrade\" or \"Downgrade\" to change the subscription plan from a previous purchase (for example, `myOrder.action = \"Upgrade\"`). The required values are case-sensitive; do not pass \"upgrade\" or \"downgrade\". See [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md) for more information. |",
                "name": "order",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Contains the results of the \\[\\*\\*doOrder\\*\\*\\](#doorder) command.",
                "name": "orderStatus",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Contains the results of a \\[\\*\\*getPurchases\\*\\*\\](#getpurchases) or \\[\\*\\*getAllPurchases\\*\\*\\](#getallpurchases) command.",
                "name": "purchases",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "all",
                "description": "Specifies the Roku customer account fields to be retrieved when the \\[\\*\\*getUserData\\*\\*\\](#getuserdata) command is executed. The default value is \"all\", which causes a ContentNode object to be returned from \\*\\*getUserData\\*\\* that includes all of the available Roku customer account information. To request specific Roku customer account information items (for example, an email address, first name, and last name) set this field to a string containing a comma-separated list of values (for example, \"email, firstname, lastname\"). The available values are as follows: \\* email \\* phone \\* firstname \\* lastname \\* street \\* city \\* state \\* zip \\* country \\* birth \\* gender In this case, the ContentNode object returned from the \\*\\*getUserData\\*\\* command includes the specified customer account information.",
                "name": "requestedUserData",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Specifies whether the RFI screen is used for customer sign-ups or sign-ins. This may be one of the following values:\n\n| Field | Type | Default | Description |\n| --- | --- | --- | --- |\n| context | string | \"signup\" | Specifies the context of the RFI screen, which may be one of the following values:    *   \"signup\": The RFI screen displays a \"Let's create your account\" title and lists the customer information specified in the [**requestedUserData** field](#requesteduserdata). The RFI screen uses the \"signup\" context by default. See [Sign-up requirements and best practices](/docs/developer-program/roku-pay/signup-best-practices.md) for more information on implementing the app sign-up UI. *   \"signin: \"The RFI screen displays a \"Sign in\" title and lists only email or phone attributes, if specified in the [**requestedUserData** field](#requesteduserdata). Other attributes are ignored, even if specified. See the [Sign-in example](#sign-in-example) for how to use this field. See [Sign-in requirements and best practices](/docs/developer-program/roku-pay/signin-best-practices.md) for more information on implementing the app sign-in UI.   |\n| forceShowData | Boolean | false | If true, the RFI signup screen displays the values of the requested customer information to be shared with the app (for example, Jone Doe, jon.doe@emailaddress.com).      By default, this flag is set to false, which means that the default RFI screen for the region is used. For example, in the US, the RFI screen displays the type of customer information being requested (email address, name, and so on).      This flag has no effect if the context field is set to \"signin\" (the RFI sign-in screen always displays the customer information values).      **Example**:    ``` store = CreateObject(\"roSGNode\", \"ChannelStore\")  ' Doesn't show user data in dialog unless necessary in the user's region. store.requestedUserData = \"email,firstname,lastname,gender,birth\" store.command = \"getUserData\"  ' Shows user data in dialog. info = CreateObject(\"roSGNode\", \"ContentNode\") info.addFields({forceShowData: true}) store.requestedUserDataInfo = info store.requestedUserData = \"email\" store.command = \"getUserData\"  ```   |",
                "name": "requestedUserDataInfo",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Specifies the product to be ordered from a TVOD app. The order contains the following fields:\n\n| Field | Type | Description |\n| --- | --- | --- |\n| code | string | Identifies the product to be purchased, as entered in the **Product Identifier** field on the [In-App Product page in the Developer Dashboard](https://developer.roku.com/products) when the product was created. For TVOD-exclusive apps, a single in-app product may be used for all orders.      A TVOD-exclusive app only has transactional products such as movie rentals; it does not offer any subscription products. |\n| priceDisplay | string | The original price of the product. Do not include a currency symbol (for example, set this to \"3.99\" instead of \"$3.99\"). |\n| price | string | The final price of the product, including any discounts. Do not include a currency symbol (for example, set this to \"3.99\" instead of \"$3.99\"). |\n| title | string | A description of the product (for example, the name of a rental movie). |\n| couponCode | string | An alphanumeric string entered by the customer to receive a discounted price on the product. |\n| contentKey | string | The publisher-specific SKU (or other unique identifier) for the product. |",
                "name": "requestPartnerOrder",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Contains the results of a \\[\\*\\*requestPartnerOrder\\*\\*\\](#requestpartnerorder) command.",
                "name": "requestPartnerOrderStatus",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Contains the results of a \\[\\*\\*getStoreCatalog\\*\\*\\](#getstorecatalog) command.",
                "name": "storeCatalog",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Contains the results of a \\[\\*\\*getUserData\\*\\*\\](#getuserdata) command. The value stored in this field depends on whether the user clicks \\*\\*Continue\\*\\* or \\*\\*Cancel\\*\\* in the Request for Information (RFI) screen. If the user clicks \\*\\*Continue\\*\\*, this field is populated with the Roku customer account information that was requested in the \\[\\*\\*requestedUserData\\*\\*\\](#requesteduserdata) field. If the user clicks \\*\\*Cancel\\*\\*, this field is set to \"invalid\".",
                "name": "userData",
                "type": "ContentNode"
            }
        ],
        "interfaces": [],
        "name": "ChannelStore",
        "url": "https://developer.roku.com/docs/references/scenegraph/control-nodes/channelstore.md"
    },
    "checklist": {
        "description": "Extends [**LabelList**](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/labellist.md\n\nThe CheckList node class is a simple list class that displays a list of items, some of which include checkboxes that allow the user to select or unselect that item. Each item in the list displays a text string and an optional checkbox icon positioned to the left of the text string.\n\nIf the checkbox is displayed, it is shown as either:\n\n*   an empty box,\n*   or a box with a checkmark indicator inside indicating whether the item is in the checked or unchecked state.",
        "events": [],
        "extends": {
            "name": "LabelList",
            "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/labellist.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the checkbox icon to use for list items that are in the checked state when that list item does not the key focus. Typically, the icon will include the outline of a box with a checkmark indicator inside. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "checkedIconUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "all false",
                "description": "Specifies the checked state of each item in the list. A value of true indicates the item is in the checked state. A value of false indicates that the item is in the unchecked state. When reading the value of the field, note that the field array will always include one value for each item in the list. When writing the value of the field, if the specified array includes fewer values than items in the list, the list items that are unspecified will remain in their current state. For example, if there are 10 items in the list and the field value is set to \\\\\\[ \\`true\\`, \\`true\\` \\\\\\], items 0 and 1 will have their checked state set to true, and the checked state of the remaining items (items 3 to 9) will be unchanged.",
                "name": "checkedState",
                "type": "array of Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Controls whether or not pressing the remote control OK key causes the checkedState field to automatically toggle the checked state of the currently focused list item. By default, field value is set to true, but there are use cases where other behavior may be desired. In those cases, it is up to the developer to manage the checked state of the list items by setting the \\`checkedState\\` field to the desired index.",
                "name": "checkOnSelect",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the checkbox icon to use for list items that are in the checked state when that list item has the key focus. Typically, the icon will include the outline of a box with a checkmark indicator inside. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusedCheckedIconUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the checkbox icon to use for list items that are in the unchecked state when that list item has the key focus. Typically, the icon will include the outline of an empty box. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusedUncheckedIconUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the checkbox icon to use for list items that are in the unchecked state when that list item does not have the key focus. Typically, the icon will include the outline of an empty box. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "uncheckedIconUri",
                "type": "uri"
            }
        ],
        "interfaces": [],
        "name": "CheckList",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/checklist.md"
    },
    "colorfieldinterpolator": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe ColorFieldInterpolator node class specifies a keyframe animation sequence to be applied to the color field of a node (such as the color field of a Label node).\n\nAll field interpolators include a set of key/keyValue field pairs that define a keyframe of the animation. Field interpolators are generally used as children of an Animation node. As the animation progresses, it sets the fraction field of its field interpolators to a value between 0 and 1, indicating the fraction of the animation progress. The keyframe fields of the interpolator are key, the percentage where the keyframe should occur, and keyValue, the value that the field should have at that fraction of the animation.\n\nFor example, if a ColorFieldInterpolator node had three keyframes:\n\n*   0.0, 0xFF0000FF (red)\n*   0.4, 0x00FF00FF (green)\n*   1.0, 0x0000FFFF (blue)\n\nWhen the interpolator fraction field value was 0.0 (that is, 0%), the color field value would be set to red. When the fraction field value was 0.4 (that is, 40%), the color field value would be set to green. When the fraction field value was 1.0 (that is, 100%), the color field value would be set to blue.\n\nFor values of the fraction field between 0.0 and 0.4 (such as 0.2 or 20%), the field value is determined by linearly interpolating the keyValue field values for the first two keyframes. In this case, since the key of 0.2 is halfway between the key at 0.0 and the key at 0.4, the field would be set to a color halfway between red and green. Similarly, when the fraction field value is between the second and third keys (that is, between 0.4 and 1.0), the field value is determined by linearly interpolating the keyValue field values of the second and third keyframes.\n\nIf the first keyframe has a key field fraction value greater than zero, then the field value is equal to the keyValue field value of the first keyframe until the fraction field value reaches the first keyframe key field fraction value. Similarly, if the last keyframe has a key field fraction value less than one, the color field value is set to the keyValue field value of the last keyframe, from when the fraction field value equals the last keyframe key field fraction value percentage, and will not change as the fraction field value increases from that value to 1.0.\n\nThe ColorFieldInterpolator node class works in the HSV color space. Doing the interpolation in the HSV color space produces the most intuitive, visually pleasing results when animating color values.\n\n> While linear interpolation is used to compute the keyValue field values for fraction field values between successive keys, non-linear easing functions may be applied to the fraction field values computed by the Animation node, so the overall animation may vary in speed.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the field to interpolate. This generally refers to the field on a SceneGraph node that contains the color to animate, such as testRectangle.color field in the example below",
                "name": "fieldToInterp",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the fraction to be used to compute a value for the field",
                "name": "fraction",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the key fractions for the interpolator keyframes. Each key fraction should be a unique value from 0 to 1 indicating the fraction of the animation where the keyValue field value should occur. Behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field",
                "name": "key",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the key values for the interpolator keyframes. Each value in the keyValue field array corresponds to a value in the key field array. Behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field",
                "name": "keyValue",
                "type": "array of colors"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Enables animation to be played in reverse",
                "name": "reverse",
                "type": "boolean"
            }
        ],
        "interfaces": [],
        "name": "ColorFieldInterpolator",
        "url": "https://developer.roku.com/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md"
    },
    "componentlibrary": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe ComponentLibrary node class downloads a library of custom SceneGraph components to be used in an application. The ComponentLibrary node should be used in a Scene node, such as Scene or OverhangPanelSetScene. One way to ensure that the library downloads before the SceneGraph application begins to compile the components for the application, is to begin the download in the main.brs file that creates the Scene node, by adding an `<interface>` field to the Scene node that can be used to monitor the download, and starts the application when the download is complete.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "no default",
                "description": "Set to a unique ID for the library for the application",
                "name": "id",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "\"none\"",
                "description": "Indicates the progress of the library download. The possible values are:\n\n| Value | Meaning |\n| --- | --- |\n| none | The default if the library is not being downloaded |\n| loading | Library is downloading |\n| ready | Library has downloaded successfully |\n| failed | Download of the library has failed |",
                "name": "loadStatus",
                "type": "value string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "no default",
                "description": "The URL of the library to be downloaded",
                "name": "uri",
                "type": "uri"
            }
        ],
        "interfaces": [],
        "name": "ComponentLibrary",
        "url": "https://developer.roku.com/docs/references/scenegraph/control-nodes/componentlibrary.md"
    },
    "contentnode": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe ContentNode class allows you to specify the data used to configure a node or component. Many nodes and components require a ContentNode as the specification of their content field in order to be properly configured. In general, lists, grids, and panels require a ContentNode for configuration. The data included in a ContentNode can be data such as the text for labels in the node or component, and the spacing between items in a list, grid, or panel, including data to create custom lists, grids, and panels. The reference information for every node or component that requires a ContentNode includes a section that details the requirements of the ContentNode for that node or component.\n\nContentNodes defined as the specification for a node or component content field are typically structured as one ContentNode parent node, with a hierarchy of child nodes that specify the actual data, and sections of data if needed. For example, a [LabelList](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/labellist.md\"LabelList\") node can have several sections that divide the entire list, each with their own section heading, and specific items in that section of the list. The ContentNode for that LabelList node should have two levels of child ContentNodes, one level for the data to configure the list sections, and then another level of child ContentNodes for the data for each item in that list section.\n\nA ContentNode can also be used to specify the data for custom components with defined interfaces, and for nodes and components that require [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md \" Content Meta-Data\"). Also, you should use a ContentNode for complex structures of data for your application rather than associative arrays. ContentNode objects are passed by reference in the application, while associative array objects are copied. For large complex data structures, passing ContentNode objects is much quicker than passing the equivalent associative array object. You can use associative arrays for simpler data structures with just a few fixed members.\n\n> All of the attributes listed in [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md \"Content Meta-Data\") can be set as fields in a Content node. However, when creating a Content node, the fields themselves are not created until the valid attributes are set as fields, using either assignment (=), or set using [setField()](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodefield.mdsetfieldfieldname-as-string-value-as-object-as-boolean \"setField\") or [setFields()](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodefield.mdsetfieldsfields-as-object-as-boolean. \"setFields()\")",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "For upgrades/downgrades only. Set this to \"Upgrade\" or \"Downgrade\" to change the subscription plan from a previous purchase (for example, myOrder.action = \"Upgrade\"). The required values are case-sensitive; do not pass \"upgrade\" or \"downgrade\". See On-device upgrade and downgrade for more information.",
                "name": "action",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "List of Actor Names or Individual Actor Name",
                "name": "Actors",
                "type": "roArray or String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Maximum startup bitrate specified in kbps. Streaming will start with a variant less than or equal to this value. If this value is not set, it will default to 2500 kbps.",
                "name": "AdaptiveMaxStartBitrate",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Minimum startup bitrate specified in kbps. Streaming will start with a variant equal to or greater than this value. If this value is not set or if it's set to zero, any minimum start bitrate will be ignored.",
                "name": "AdaptiveMinStartBitrate",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roSpringboard audio style uses this to display the album",
                "name": "Album",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roSpringboard audio style uses to show artist",
                "name": "Artist",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Comma-separated list of audio tracks (based on ISO 639-1 or 639-2 language code) that may not be selected from the \\*\\*Audio track\\*\\* setting for the content. (Available since Roku OS 9.4) If a language is both blacklisted and whitelisted, the blacklisting takes precedence.",
                "name": "AudioBlacklist",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roSpringboardScreen: If set to \"dolby-digital\", will display a \"5.1 ))\" icon in the lower left of a movie style springboard screen",
                "name": "AudioFormat",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "\\*\\*This attribute was deprecated as of the Roku 9.2 OS release.\\*\\* Users can select their preferred audio language on-device in the \\*\\*Settings > Audio > Audio Preferred Language\\*\\* screen.",
                "name": "AudioLanguageSelected",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "\\*\\*This attribute is deprecated\\*\\* Users can select their preferred audio language on-device in the \\*\\*Settings > Audio > Audio Preferred Language\\*\\* screen.",
                "name": "AudioPIDPref",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Comma-separated list of audio tracks (based on ISO 639-1 or ISO 639-2 language code) that may be selected from the \\*\\*Audio track\\*\\* setting for the content.",
                "name": "AudioWhitelist",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Comma-separated list of captioning tracks (based on ISO 639-2 language code) that may not be selected from the \\*\\*Accessibility>Captioning track\\*\\* setting for the content. (Available since Roku OS 9.4) If a language is both blacklisted and whitelisted, the blacklisting takes precedence.",
                "name": "CaptionBlacklist",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Comma-separated list of captioning tracks (based on ISO 639-2 language code) that may be selected from the \\*\\*Accessibility>Captioning track\\*\\* setting for the content.",
                "name": "CaptionWhitelist",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "List of Category/Genre Names or Individual Category/Genre Name",
                "name": "Categories",
                "type": "roArray or String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "To use this field, create a child node and use a playlist (even though only one content item will be in the playlist). This field is updated only when \\*\\*contentIsPlayList\\*\\* is true. The \\*\\*URLFilter\\*\\*, \\*\\*Priority\\*\\*, and \\*\\*Weight\\*\\* attributes must be specified to apply these configurations.",
                "name": "cdnConfig",
                "type": "roArray of roAssociativeArrays"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "ClipEnd sets the clip end position. The unit of ClipEnd is seconds (Available since Roku OS 8.1).",
                "name": "ClipEnd",
                "type": "Float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "ClipStart sets the clip start position of the playback. The unit of ClipStart is seconds (Available since Roku OS 8.1).",
                "name": "ClipStart",
                "type": "Float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Boolean indicating if CC icon should be displayed",
                "name": "ClosedCaptions",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "\\* \" \" \\* \"action\" \\* \"animated\" \\* \"black+white\" (black and white) \\* \"comedy\" \\* \"drama\" \\* \"music\" \\* \"music:lyrics\" \\* \"nature\" \\* \"news\" \\* \"podcast\" (audio only) \\* \"reality\" \\* \"sports\"",
                "name": "contentClassifer",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "The publisher-specific SKU (or other unique identifier) for the product.",
                "name": "contentKey",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Although ContentType accepts type String, the return value is of type \\[roInt\\](https://developer.roku.com/docs/references/brightscript/components/roint.md. See table below.\n\n| Content Type | Return Value |\n| --- | --- |\n| audio | 5 |\n| episode | 4 |\n| movie | 1 |\n| not set or not supported | 0 |\n| season | 3 |\n| series | 2 |",
                "name": "ContentType",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "An alphanumeric string entered by the customer to receive a discounted price on the product.",
                "name": "couponCode",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Description of content",
                "name": "Description",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "List of Director Names",
                "name": "Directors",
                "type": "roArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "The original price of the product. Do not include a currency symbol (for example, set this to \"3.99\" instead of \"$3.99\").",
                "name": "drmParams",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Specifies the PlayReady license acquisition URL, and additional custom request data, determined by the EncodingType attribute value specified: \\* when encodingType=\"PlayReadyLicenseAcquisitionUrl\", the EncodingKey attribute contains the PlayReady license acquisition URL",
                "name": "EncodingKey",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Specifies the encoding scheme for PlayReady DRM, by setting to one of the following values: \\* \"PlayReadyLicenseAcquisitionUrl\" \\* \"PlayReadyLicenseAcquisitionAndChallenge\" Note, this is the same value that used to be specified directly in Content Metadata structure",
                "name": "EncodingType",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Episode Number",
                "name": "EpisodeNumber",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "BIF URL for FHD trick mode",
                "name": "FHDBifUrl",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "YesterdayURL for FHD content artwork",
                "name": "FHDPosterUrl",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Filters out any video profile/codec level combinations that the specified hardware cannot play. The default value is false, in which case no filtering occurs. \\*\\*Note that this currently only works for DASH streams.\\*\\*",
                "name": "filterCodecProfiles",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Controls whether query string parameters from initial DASH stream manifest requests are forward to subsequent segment download requests. The default value is set to false for backwards compatibility.",
                "name": "ForwardDashQueryStringParams",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Controls whether query string parameters from initial HLS stream manifest requests are forward to subsequent segment download requests. The default value is set to true for backwards compatibility.",
                "name": "ForwardQueryStringParams",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roVideoPlayer or roVideoScreen: Specify the 1080p stream was encoded at 24 or 30 fps",
                "name": "FrameRate",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roVideoPlayer or roVideoScreen: Specify that this stream was encoded at 1080p resolution",
                "name": "FullHD",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Overrides the `caption1NumLines` field for this section of the grid, allowing different sections to display different caption layouts. If not specified, the value of the `caption1NumLines` field is used.",
                "name": "GridCaption1NumLines",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Overrides the `caption2NumLines` field for this section of the grid, allowing different sections to display different caption layouts. If not specified, the value of the `caption2NumLines` field is used.",
                "name": "GridCaption1NumLines",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "When the fixedLayout field is set to true, this specifies how many rows the grid item occupies. If not specified, the default value of 1 is used.\nFor example, if a grid item is to occupy the the third, fourth and fifth rows, Y would be set to 2 and H would be set to 3.",
                "name": "H",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roListScreen: URL for the HD background image",
                "name": "HDBackgroundImageUrl",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "BIF URL for HD trick mode",
                "name": "HDBifUrl",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Boolean indicating if HD branding should be displayed",
                "name": "HDBranded",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The image file for the item poster when the screen resolution is set to HD. HDGRIDPOSTERURL is used if non-empty. HDPOSTERURL is used otherwise. See: PosterGrid",
                "name": "HDGridPosterUrl",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The image file for the icon to be displayed to the left of the list item label when the list item is focused",
                "name": "HDListItemIconSelectedURL",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The image file for the icon to be displayed to the left of the list item label when the list item is not focused",
                "name": "HDListItemIconURL",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "URL for HD content artwork",
                "name": "HDPosterUrl",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The image file for the item poster when the screen resolution is set to HD. HDGRIDPOSTERURL is used if non-empty. HDPOSTERURL is used otherwise. See: PosterGrid",
                "name": "HDPosterUrl",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The image file for the channel logo or for an icon that appears beside the program title. See: TimeGrid",
                "name": "HDSmallIconUrl",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "When set to true, the default, the list item displays the checkbox icon, reflecting the item's current selection state. When set to false, no checkbox icon is displayed, allowing the list to contain a mix of checkbox and regular list items.",
                "name": "HideIcon",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "When set to true the media player will not stop playback when it runs into a streaming related error for this content. Instead, it will skip to the next item in the content list. If this was the last item in the content list the media player will send a regular completion event (like isFullResult). Apps are still notified of any errors via an isRequestFailed notification but a new attribute in the event’s GetInfo object tells the app the error was ignored. See the changes related to isRequestFailed for more information. The default value is false.",
                "name": "IgnoreStreamErrors",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Boolean indicating if content is HD",
                "name": "IsHD",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Movie Length in Seconds; Length zero displays at 0m, Length not set will not display",
                "name": "Length",
                "type": "Float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Optional flag indicating video is live. Replaces time remaining in progress bar to display \"Live\". Default is false",
                "name": "Live",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Allows an app to customize Media Player behavior on live streams when playing in the earliest part of a DVR buffer. The stream remains paused even though it is playing in the earliest part of the buffer of a live stream when the value of the attribute is set to \"pause.\" This enables the Roku OS to distinguish between live streams and live streams that eventually transition to video on demand. The possible values of this attribute are \"resume\", \"stop\", \"pause\", with resume being the default value. \\*\\*Currently, this attribute will work only with Smooth and Dash streams.\\*\\* (Available since Roku OS 8.1)",
                "name": "LiveBoundsPauseBehavior",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roVideoPlayer or roVideoScreen: Will only select variant streams with a bandwidth less than this maximum bandwidth. Units are kbps",
                "name": "MaxBandwidth",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roVideoPlayer or roVideoScreen: Will only select variant streams with a bandwidth higher than this minimum bandwidth. Units are kbps. By default Wowza servers set streams to 64 kbs, so you might want to set this parameter to something smaller than 64 when first testing Wowza streams. You will eventually want to specify the Wowza bitrates with a smil file (Please see the encoding guide)",
                "name": "MinBandwidth",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Number of episodes for a \"season\" or \"series\" contentType",
                "name": "NumEpisodes",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "The orderID returned by Roku in the RequestPartnerOrderStatus content node.",
                "name": "orderId",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "PlayStart defines the start position of the content, in seconds. Starting from Roku OS 8.0, content metadata supports negative PlayStart values. This feature allows the media players to start playbacks distanced from the edge of the live stream",
                "name": "PlayStart",
                "type": "Float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Specifies the audio codec that should be used during playback. The Media Player will select and report to the app only those audio renditions that are encoded with the specified codec. Renditions that are encoded with a different codec are ignored. Possible values of this attribute are \"aac\", \"ac3\" and \"eac3\".",
                "name": "PreferredAudioCodec",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "The original price of the product. Do not include a currency symbol (for example, set this to \"3.99\" instead of \"$3.99\").",
                "name": "price",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "The original price of the product. Do not include a currency symbol (for example, set this to \"3.99\" instead of \"$3.99\").",
                "name": "priceDisplay",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "An opaque, unique identifier for the content the app is playing. Each movie, episode, or other content in the app should have a different program ID value. This identifier is used to debug content-specific playback issues. Roku will reference this programID in playback error reports, allowing developers to identify the content that failed to play.",
                "name": "ProgramID",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Selects an icon to be displayed for the corresponding MPAA or TV rating, that is, the value will display as an icon artwork. See \\[Rating Attribute Icons\\](/docs/developer-program/getting-started/architecture/content-metadata.md#rating-attribute-icons) for a list of the acceptable values and the corresponding icon.",
                "name": "Rating",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Formatted Date String",
                "name": "ReleaseDate",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roListScreen: URL for the SD background image",
                "name": "SDBackgroundImageUrl",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "BIF URL for SD trick mode",
                "name": "SDBifUrl",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The image file for the item poster when the screen resolution is set to HD. SDGRIDPOSTERURL is used if non-empty. SDPOSTERURL is used otherwise. See: PosterGrid",
                "name": "SDGridPosterUrl",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "URL for SD content artwork",
                "name": "SDPosterUrl",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The image file for the item poster when the screen resolution is set to SD. SDGRIDPOSTERURL is used if non-empty. SDPOSTERURL is used otherwise. See: PosterGrid",
                "name": "SDPosterUrl",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The image file for the item poster when the screen resolution is set to SD. SDGRIDPOSTERURL is used if non-empty. SDPOSTERURL is used otherwise. See: PosterGrid",
                "name": "SDPosterUrl",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Secondary title for the video content",
                "name": "SecondaryTitle",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Line 1 of Poster Screen Description",
                "name": "ShortDescriptionLine1",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The text for the first grid item caption.",
                "name": "ShortDescriptionLine1",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Line 2 of Poster Screen Description",
                "name": "ShortDescriptionLine2",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "The text for the second grid item caption.",
                "name": "ShortDescriptionLine2",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Specifies the star rating to display as red star icon artwork, as a number from 1 to 100: \\* 20 displays one star \\* 40 displays two stars \\* 60 displays three stars \\* 80 displays four stars \\* 100 displays five stars Numbers not divisible by 20 are displayed as a fractional star (A number of 30 will display one and a half stars)",
                "name": "StarRating",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Supported by roVideoPlayer and roVideoScreen, but not the Roku Scene Graph Video node. For the Video node, use the top level url, streamformat, etc. attributes. The exception is cases where you don't have adaptive streams (typically MP4) and need to specify different bitrate variants separately. For this use case use the Streams attribute. roAssociativeArray that has parameters representing the stream settings that were set as individual roArrays in previous firmware revisions. The old method is still supported and descriptions of the parameters can be found under those content-meta data entries. For url please see StreamUrls, for quality it is now a Boolean that is true for HD quality.\n\n| Key | Type |\n| --- | --- |\n| url | String |\n| stickyredirects | Boolean |\n| quality | Boolean |\n| contentid | String |\n| bitrate | Integer |",
                "name": "Stream",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Array of bitrates in kbps for content streams used. Setting stream bitrates using this value is recommended for non-adaptive video (such as MP4 progressive download) only. \\*\\*Must be used in conjunction with StreamUrls and StreamQualities\\*\\*",
                "name": "StreamBitrates",
                "type": "roArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "array of strings values logged in Roku logs to identify stream and bitrate played",
                "name": "StreamContentIDs",
                "type": "roArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Type of content \\* Type of content: \\* Default: H.264/AAC in .mp4 Container \\* Valid values: \\* \"mp4\" (mp4 will also accept .mov and .m4v files) \\* \"wma\" (deprecated) \\* \"mp3\" \\* \"hls\" -\"ism\" (smooth streaming) \\* \"dash\" (MPEG-DASH) \\* \"mkv\", \"mka\", \"mks\" \\* Deprecated: \\* \"wmv\"",
                "name": "StreamFormat",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Array of Strings quality indicators identifying a stream as \"SD\" or \"HD\". \\*\\*Must be used in conjunction with StreamBitrates and StreamUrls\\*\\*",
                "name": "StreamQualities",
                "type": "roArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Used by roVideoPlayer and roVideoScreen to specify the content metadata for a set of fixed bitrate streams. Each array item specifies the URL, bitrate, etc. for one stream variant. Setting stream content metadata using the Streams value is recommended for non-adaptive video (such as MP4 progressive download) only. For adaptive streaming, use the Stream metadata value.\n\n| Key | Type |\n| --- | --- |\n| url | String |\n| stickyredirects | Boolean |\n| quality | Boolean |\n| contentid | String |\n| bitrate | Integer |",
                "name": "Streams",
                "type": "roArray of roAssociativeArrays"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Optional. Default is 0. The offset into the stream which is considered the beginning of playback. Time in seconds.",
                "name": "StreamStartTimeOffset",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Array of Boolean values indicating if the HTTP endpoint should be sticky and not subject to change on subsequent requests. Default is false",
                "name": "StreamStickyHttpRedirects",
                "type": "roArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Array of URLs for content streams. Setting stream urls using this value is recommended for non-adaptive video (such as MP4 progressive download) only. \\*\\*Must be used in conjunction with StreamBitrates and StreamQualities\\*\\*",
                "name": "StreamUrls",
                "type": "roArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Theme metadata attribute that specifies the color to use when rendering subtitle text",
                "name": "SubtitleColor",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Specifies the caption settings for content playback. TrackName sets the name of the caption track to render. This string is a concatenation of the track source and track id, separated by a \"/\". Valid track sources are: \"ism\", \"mkv\", \"eia608\" and \"dvb\". The track id must match the track identifier in the smooth or mkvmanifest. For example, if an mkvfile has a caption track called “english1” the TrackName to select this track is “mkv/english1”. When the track source is \"dvb\", the track id is the three-letter language code, with \"\\\\\\_sdh\" appended for subtitles for the deaf and hard of hearing. For example, \"dvb/eng\\\\\\_sdh\" are English subtitles for the deaf and hard of hearing and \"dvb/nor\" are normal Norwegian subtitles. For sideloaded caption tracks, the TrackName is the url from where the caption track can be downloaded.Sideloaded caption formats can include srt,ttml, anddfxp. Specifying eia608/1 will trigger the Roku OS to search for embedded 608/708 captions in the stream. In the 8.0 Roku OS, automatic track selection based on a preferred caption language setting is introduced. Omit setting a URL here to avoid interfering with the automatic track selection. It is sufficient to add the URLs to SubtitleTracks",
                "name": "SubtitleConfig",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "SubtitleTracks sets the list of available caption tracks available to the stream. This list is added to the track list in the closed caption configuration dialog that is displayed during video playback when the user presses the Roku remote control \\\\\\* button. The captions from the selected track are then displayed on the screen. Language specifies the ISO 639.2B 3 character language code. This string is used to match the proper caption track with the audio language. Description specifies the text that will be shown for the corresponding track in the closed caption configuration dialog. For sideloaded caption tracks the TrackName is the URL from where the caption track can be downloaded. Sideloaded caption formats can include srt, ttml, and dfxp. The SubtitleTracks metadata is generally only used for side loaded captions. the Roku OS detects in-stream captions and thus specifying SubtitleTracks in this case is not necessary",
                "name": "SubtitleTracks",
                "type": "roArray of roAssociativeArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Specifies the path to an SRT or TTML formatted file used to render subtitles or closed captions, respectively. This is supported on roVideoScreen only. See \\[Closed Caption Support\\](/docs/developer-program/media-playback/closed-caption.md) for additional details",
                "name": "SubtitleUrl",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roVideoPlayer or roVideoScreen. Specify different stream switching algorithms to be used in HLS adaptive streaming. Only has an effect on HLS streams. \"full-adaptation\" uses measured bandwidth and buffer fullness to determine when to switch. This strategy requires that segments align across variants as the HLS spec requires. This is the new default",
                "name": "SwitchingStrategy",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roSlideShow displays this string on the bottom part of slide",
                "name": "TextOverlayBody",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roSlideShow displays this string in Upper Left corner of slide",
                "name": "TextOverlayUL",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roSlideShow displays this string in Upper Right corner of slide",
                "name": "TextOverlayUR",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Content title: movie title for films; episode title for TV series",
                "name": "Title",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Season title for TV series",
                "name": "TitleSeason",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roVideoPlayer or roVideoScreen: Used in SmoothStreaming (StreamFormat = \"ISM\") to specify. Set the TrackIDAudio field to the desired track's StreamIndex.Name attribute from the manifest file",
                "name": "TrackIDAudio",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roVideoPlayer: Used to specify a closed caption track in a video stream that supports 608/708 captions",
                "name": "TrackIDSubtitle",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "roVideoPlayer or roVideoScreen: Used in SmoothStreaming (StreamFormat = \"ISM\") to specify. Set the TrackIDVideo field to the desired track's StreamIndex.Name attribute from the manifest file",
                "name": "TrackIDVideo",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Stream URL for Scene Graph Video node",
                "name": "Url",
                "type": "String"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Specifies the user star rating to display as yellow star icon artwork, as a number from 1 to 100: \\* 20 displays one star \\* 40 displays two stars \\* 60 displays three stars \\* 80 displays four stars \\* 100 displays five stars Does not display fractional stars for numbers not divisible by 20",
                "name": "UserStarRating",
                "type": "Integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "If set to true, hides the Scene Graph Video node trick play UI; If set to false (the default) shows the Scene Graph Video node trick play UI",
                "name": "VideoDisableUI",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "When the fixedLayout field is set to true, this specifies how many columns the grid item occupies. If not specified, the default value of 1 is used.\nFor example, if the numColumns field were set to 3 and a grid item is to occupy the rightmost two columns, X would be set to 1 and W would be set to 2.",
                "name": "W",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Flag indicating if content has been watched",
                "name": "Watched",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "When the fixedLayout field is set to true, this specifies the first row of the grid occupied by this item, where 0 refers to the first row. Note that there can be more rows in the data than visible rows, where the number of visible rows is specified by the numRows field.\nFor example, if the data model contains enough data to fill 12 rows, X would be set to a value from 0 to 11.",
                "name": "X",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "When the fixedLayout field is set to true, this specifies the first column of the grid occupied by this item, where 0 refers to the first column. Note that the number of columns is always specified by the numColumns field, regardless of how many items are in the data model.\nFor example, if the numColumns field is set to 3, Y would be set to 0, 1 or 2.",
                "name": "Y",
                "type": "integer"
            }
        ],
        "interfaces": [],
        "name": "ContentNode",
        "url": "https://developer.roku.com/docs/references/scenegraph/control-nodes/contentnode.md"
    },
    "dialog": {
        "description": "> Roku OS 10.0 introduced a new [StandardDialog node](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md\"**Standard Dialog**\"), which features updated graphics and color palette support. This enables developers to provide a consistent user experience across the dialogs in their app. Developers should replace the legacy Dialog nodes in their app with the new [StandardDialog nodes](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md\"**Standard Dialog**\").\n\nExtends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe Dialog node class defines a modal pop-up dialog used to present the user with information requiring their immediate attention.\n\nSetting the dialog field of the current Scene node to a Dialog node causes the dialog to be displayed.\n\nThe Dialog node is configured to have up to five regions: the title, message, bullet text, graphic, and button regions. All of these are optional except for the title.\n\n*   The title region consists of a an icon and a title label, along with a horizontal divider that visually separates the title from the rest of the dialog.\n    \n*   The message region consist of a string that is displayed below the title divider.\n    \n*   The bullet text region contains a set of zero or more bullet points. It is displayed below the message.\n    \n*   The graphic region consists of a single bitmap displayed center-aligned below the message and bullet text and above the button region.\n    \n*   The button region contains a ButtonGroup node that contains zero or more Button nodes, arranged vertically.\n    \n\nDialogs are modal and intercept all key events except pressing the Home key. Dialogs are closed automatically when the user presses the Home key or the Back key. If the optionsDialog field is set to true, pressing the Options key also closes the dialog.\n\nOnly a single dialog may appear at any time. If a second dialog is shown, the previous dialog is closed automatically.",
        "events": [],
        "extends": {
            "name": "DialogBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the bitmap to be displayed as the dialog background. Usually this is a 9-patch image to support dynamic resizing. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap",
                "name": "backgroundUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "An array of strings to be displayed as a list of bullet points",
                "name": "bulletText",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "When set, the color of the bullet point text",
                "name": "bulletTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "When set, the font of the bullet point text",
                "name": "bulletTextFont",
                "type": "Font"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Set to the index of the focused button whenever a button in the group receives the key focus",
                "name": "buttonFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "The dialog internal ButtonGroup node. This allows the appearance attributes of all the Button nodes in the dialog to be easily modified. Since the ButtonGroup node class is derived from the LayoutGroup node class, additional non-Button node children can also be added",
                "name": "buttonGroup",
                "type": "ButtonGroup"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "[ ]",
                "description": "Allows a set of Button nodes to be easily created by providing an array of Button labels. Each string in the array will result in a Button node to be added to the ButtonGroup, using the string as the Button label",
                "name": "buttons",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Set to the index of the selected button whenever the user selects a button in the group",
                "name": "buttonSelected",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "false",
                "description": "Causes the dialog to be dismissed. The dialog is dismissed whenever the close field is set, regardless of whether the field is set to true or false",
                "name": "close",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies a bitmap to be displayed as the divider between the title region and the remainder of the dialog. Usually this is a 9-patch image to support dynamic resizing. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap",
                "name": "dividerUri",
                "type": "uri"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "Causes the button with the specified index to receive the focus when the ButtonGroup node has the key focus. Note that if the ButtonGroup node does not have the key focus when the focusButton field is set, the specified button will display the focus footprint as its background",
                "name": "focusButton",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the height of the bitmap graphic in local coordinates. If set to 0.0, the height of the bitmap from the image file is used. If set to a value greater than 0.0, the bitmap is scaled to that height. The graphicWidth and graphicHeight fields both must be set in order to be applied, and both fields must be set before the graphicURI field.",
                "name": "graphicHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies a bitmap to be displayed in the dialog. The bitmap is displayed below the bullet text region and above the buttons. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap",
                "name": "graphicUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the width of the bitmap graphic in local coordinates. If set to 0.0, the width of the bitmap from the image file is used. If set to a value greater than 0.0, the bitmap is scaled to that width. The graphicWidth and graphicHeight fields both must be set in order to be applied, and both fields must be set before the graphicURI field.",
                "name": "graphicWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies a bitmap to be displayed as a small icon next to the dialog title. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap",
                "name": "iconUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "-1.0",
                "description": "Sets the maximum height of the dialog. By default, the Dialog will scale the height based on the contents but never larger than the height of the display resolution. Setting maxHeight smaller than the contents will switch to a scrollable text region",
                "name": "maxHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The string to be displayed in the message region of the dialog. Newline and carriage return characters in the string result in the message being displayed as several lines of text. In BrightScript, to include a newline in a string, use chr(10). For example: \\`message = \"First line\" + chr(10) + \"Second line\"\\`",
                "name": "message",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "When set, the color of the message text",
                "name": "messageColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "When set, the font of the message text",
                "name": "messageFont",
                "type": "Font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If set to true, the bulletText will be displayed with numbers rather than bullets",
                "name": "numberedBullets",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If set to true, the dialog is automatically dismissed when the Options key is pressed",
                "name": "optionsDialog",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Title of the dialog box",
                "name": "title",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "When set, the color of the title",
                "name": "titleColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "When set, the font of the title",
                "name": "titleFont",
                "type": "Font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "Set when the dialog has been closed. The field is set when the dialog close field is set, when the Back or Home key has been pressed, when the Options key has been pressed if the optionsDialog field is set to true, and when the dialog is dismissed because another dialog was displayed",
                "name": "wasClosed",
                "type": "Event"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "-1.0",
                "description": "Specifies the width of the dialog. By default, this value is pulled from the system theme",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "Dialog",
        "url": "https://developer.roku.com/docs/references/scenegraph/dialog-nodes/dialog.md"
    },
    "dialogbase": {
        "description": "The base dialog component.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "When set to `true`, dialog will close on back button press",
                "name": "backExitsDialog",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Indicates the index of the button that gained focus when the user moved the focus onto one of the buttons in the button area.",
                "name": "buttonFocused",
                "type": "int"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Indicates the index of the selected button when the user selects one of the buttons in the button area.",
                "name": "buttonSelected",
                "type": "int"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "false",
                "description": "Dismisses the dialog. The dialog is dismissed whenever the close field is set, regardless of whether the field is set to true or false.",
                "name": "close",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "When set to `true`, dialog will close on back button press",
                "name": "homeExitsDialog",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If set to true, the dialog is automatically dismissed when the Options key is pressed",
                "name": "optionsDialog",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not set",
                "description": "Sets the color palette for the dialog's background, text, buttons, and other elements. By default, no palette is specified; therefore, the dialog inherits the color palette from the nodes higher in the scene graph (typically, from the dialog's \\[Scene\\](https://developer.roku.com/docs/references/scenegraph/scene.md node, which has a \\*\\*palette\\*\\* field that can be used to consistently color the standard dialogs and keyboards in the app). The RSGPalette color values used by the StandardDialog node are as follows:\n\n| Palette Color Name | Usages |\n| --- | --- |\n| DialogBackgroundColor | Blend color for dialog's background bitmap. |\n| DialogItemColor | Blend color for the following items:    *   [StdDlgProgressItem's](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md spinner bitmap *   [StdDlgDeterminateProgressItem's](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md graphic   |\n| DialogTextColor | Color for the text in the following items:    *   [StdDlgTextItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md and [StdDlgGraphicItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md if the **namedTextStyle** field is set to \"normal\" or \"bold\". *   All [content area items](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md, except for [StdDlgTextItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md and [StdDlgGraphicItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md. *   [Title area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.mdfields). Unfocused button.   |\n| DialogFocusColor | Blend color for the following:    *   The [button area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.mdfields) focus bitmap. *   The focused scrollbar thumb.   |\n| DialogFocusItemColor | Color for the text of the focused button. |\n| DialogSecondaryTextColor | Color for the text of in the following items:    *   [StdDlgTextItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md and [StdDlgGraphicItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md if the **namedTextStyle** field is set to \"secondary\". *   Disabled button.   |\n| DialogSecondaryItemColor | Color for the following items:    *   The divider displayed below the title area. *   The unfilled portion of the [StdDlgDeterminateProgressItem's](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md graphic.   |\n| DialogInputFieldColor | The blend color for the text edit box background bitmap for keyboards used inside dialogs. |\n| DialogKeyboardColor | The blend color for the keyboard background bitmap for keyboards used inside dialogs |\n| DialogFootprintColor | The blend color for the following items:    *   The button focus footprint bitmap that is displayed when the [button area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.mdfields) does not have focus. *   Unfocused scrollbar thumb and scrollbar track.   |",
                "name": "palette",
                "type": "RSGPalette node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The title to be displayed at the top of the dialog.",
                "name": "title",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "Set when the dialog has been closed. The field is set when the dialog close field is set, when the Back or Home key has been pressed, when the Options key has been pressed if the optionsDialog field is set to true, and when the dialog is dismissed because another dialog was displayed",
                "name": "wasClosed",
                "type": "Event"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "-1.0",
                "description": "Specifies the width of the dialog. By default, this value is pulled from the system theme",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "DialogBase"
    },
    "dynamiccustomkeyboard": {
        "description": "Extends [DynamicKeyboardBase](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md\"DynamicKeyboardBase\")\n\nThe **DynamicCustomKeyboard** node enables developers to create a voice-enabled keyboard that has a custom layout. As specified in its parent [DynamicKeyboardBase](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md\"DynamicKeyboardBase\") class, the **DynamicCustomKeyboard** node has a built-in [**VoiceTextEditBox**](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md node for displaying the string of characters provided via text or voice entry, and it has a [**DynamicKeyGrid**](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md node that provides keyboard functionality.\n\nThe layout of the keyboard is customized based on a JSON-formatted Key Definition File. In the Key Definition File, the developer labels the individual keys and groups them into sections and rows. The key labels support the characters in the Basic Latin, Latin 1 Supplement, Latin Extended-A, and Latin Extended-B blocks. This provides support for most Western European languages, including English, French, German, Italian, Portuguese, and Spanish.\n\n![roku815px - address-keyboard-voice](https://image.roku.com/ZHZscHItMTc2/address-keyboard-voice.jpg)",
        "events": [],
        "extends": {
            "name": "DynamicKeyboardBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ",
                "default": "The DynamicKeyGrid node associated with the keyboard",
                "description": "Provides access to the internal \\*\\*DynamicKeyGrid\\*\\* node of this \\*\\*DynamicKeyboardBase\\*\\* component. Do not set this field to null or to a different DynamicKeyGrid node; this field should be used only to access the fields of this component's internal DynamicKeyGrid node. > The \\*\\*DynamicKeyGrid\\*\\*.\\*\\*keyDefinitionUri\\*\\* field must be set to the custom Key Definition File that defines the keyboard's layout.",
                "name": "keyGrid",
                "type": "DynamicKeyGrid node"
            }
        ],
        "interfaces": [],
        "name": "DynamicCustomKeyboard",
        "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-custom-keyboard.md"
    },
    "dynamickeyboard": {
        "description": "Extends [DynamicKeyboardBase](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md\"**DynamicKeyboardBase**\")\n\nThe **DynamicKeyboard** node is similar to the [legacy **Keyboard** node](https://developer.roku.com/docs/references/scenegraph/widget-nodes/keyboard.md, but with additional voice entry functionality. It enables text entry of alphanumeric and Latin characters, and voice entry of alphanumeric characters. It is typically used for entering email addresses or passwords.\n\nThe key layout is fixed based on the node's pre-built Key Definition File.\n\n![roku815px - dynamic-keyboard-voice](https://image.roku.com/ZHZscHItMTc2/dynamic-keyboard-voice.jpg)",
        "events": [],
        "extends": {
            "name": "DynamicKeyboardBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "DynamicKeyboard",
        "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md"
    },
    "dynamickeyboardbase": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\n> Apps must use Roku voice keyboards for [email](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md, [PIN](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md, [password](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md entry to pass [certification](/docs/developer-program/certification/certification.md#4-channel-operation).\n\nThe DynamicKeyboardBase is an abstract class that provides the functionality for dynamic voice-enabled keyboards. It combines [**DynamicKeyGrid**](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md and [**VoiceTextEditBox**](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md nodes to provide a single node that supports text entry in multiple languages and voice entry in English and Spanish.\n\n*   The [**DynamicKeyGrid**](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md provides keyboard functionality. The layout of the keyboard is based on a JSON-formatted Key Definition File.\n    \n    The classes derived from DynamicKeyboardBase (DynamicKeyboard, DynamicPinPad, and DynamicMiniKeyboard) have built-in Key Definition Files. For example, the DynamicKeyboard node uses a Key Definition File that matches the key layout of the [legacy Keyboard node](https://developer.roku.com/docs/references/scenegraph/widget-nodes/keyboard.md.\n    \n    The [**DynamicCustomKeyboard** node](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-custom-keyboard.md enables developers to define a custom Key Definition File in order to configure the key layout. In the Key Definition File, the developer specifies the keys in each section and row of the keyboard. The keys support the characters in the Basic Latin, Latin 1 Supplement, Latin Extended-A, and Latin Extended-B blocks. This provides support for most Western European languages, including English, French, German, Italian, Portuguese, and Spanish.\n    \n\n*   The [**VoiceTextEditBox**](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md displays the text that has been entered or spoken. This node supports multiple voice entry modes for entering email addresses, passwords, street addresses, and PINs. This node currently supports voice entry in English and Spanish.\n\n> Developers should upgrade the [legacy keyboards](https://developer.roku.com/docs/references/scenegraph/widget-nodes/keyboard.md in their apps to dynamic voice-enabled keyboards in order to leverage the following benefits:\n> \n> *   **Faster on-device sign-ups and sign-ins.** Enable customers to use voice entry to provide their information when subscribing to apps and logging in.\n>     \n> *   **Localized in-app search**: Enable customers to search for content in their native language.\n>     \n> *   **Localized customer information entry**: Enable customers to enter their personal information in their native language.\n>",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"generic\"",
                "description": "The keyboard mode, which may be one of the following: \\* \"email\": letter-by-letter dictation for emails. \\* \"numeric\": letter-by-letter dictation for PIN codes, zip codes, and other numeric input. \\* \"alphanumeric\": letter-by-letter dication for street addresses or other sequences of numbers and letters. \\* \"generic\": Full word input for search queries or other sequences of numbers, letters and symbols. \\* \"password\": letter-by-letter dication for passwords. The domain may be used to: \\* Set options for the speech recognition system. \\* Identify when a complete string has been entered (for example, an email address). \\* Specify whether the entered string is displayed as a single string or a discrete sequence of characters (for example, a PIN code). \\* Enable key suggestions (for example, a pop-up for the ampersand key (&) to provide common email choices).",
                "name": "domain",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Hides the keyboard's internal \\*\\*VoiceTextEditBox\\*\\*, and renders the keyboard's \\*\\*DynamicKeyGrid\\*\\* at the top of the node.",
                "name": "hideTextBox",
                "type": "boolean"
            },
            {
                "accessPermission": "READ",
                "default": "The DynamicKeyGrid associated with the keyboard",
                "description": "The internal \\[DynamicKeyGrid node\\](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md used by this DynamicKeyboardBase node. Do not set this field to null or to a different DynamicKeyGrid node; this field should be only used to access the fields of this node's internal DynamicKeyGrid node, such as the mode or horizWrapping fields.",
                "name": "keyGrid",
                "type": "**[DynamicKeyGrid node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md)**"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Contains the string of characters that has been entered. The text written to this field may also be displayed in the VoiceTextEditBox.",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ",
                "default": "The VoiceTextEditBox associated with the keyboard",
                "description": "The internal \\[VoiceTextEditBox node\\](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md used by this DynamicKeyboardBase node. Do not set this field to null or to a different VoiceTextEditBox node; this field should be used only to access the fields of this node's internal VoiceTextEditBox node.",
                "name": "textEditBox",
                "type": "[**VoiceTextEditBox** node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md)"
            }
        ],
        "interfaces": [],
        "name": "DynamicKeyboardBase",
        "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md"
    },
    "dynamickeygrid": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe **DynamicKeyGrid** node implements a grid of keys that are defined and organized in a [Key Definition File](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/key-definition-file.md. It is typically used in a subclass of the [DynamicKeyboardBase](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md node (DynamicKeyboard, DynamicPinPad, and DynamicMiniKeyboard) to display the string of characters entered via text or voice entry. It may also be used as an individual node.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "WRITE-ONLY",
                "default": "\"\"",
                "description": "Draws the key's label or icon with a disabled appearance and prevents the key from gaining focus. If the key has focus when it becomes disabled, the focus is automatically moved to an adjacent key that is not disabled (the key above the disabled key is checked first, then the key below, to the right, and then to the left). To disable/enable a key, set the respective field to the key's \\*\\*label\\*\\* or \\*\\*StrOut\\*\\* value as defined in the Key Definition File. For example, to disable the \"backspace\" key, which typically has a delete icon displayed on the keyboard, enter the following: m.keyboard.keyGrid.disableKey = \"backspace\". Multiple keys may be disabled at any time by setting the write-only \\*\\*disableKey\\*\\* field once for each key to be disabled.",
                "name": "disableKey",
                "type": "string"
            },
            {
                "accessPermission": "WRITE-ONLY",
                "default": "\"\"",
                "description": "Draws the key's label or icon with an enabled appearance and allows the key to gain focus. To disable/enable a key, set the respective field to the key's \\*\\*label\\*\\* or \\*\\*StrOut\\*\\* value as defined in the KDF file. For example, to enable the \"backspace\" key, which typically has a delete icon displayed on the keyboard, enter the following: m.keyboard.keyGrid.enableKey = \"backspace\". Multiple disabled keys may be re-enabled at any time by setting the write-only \\*\\*enableKey\\*\\* field once for each key to be enabled.",
                "name": "enableKey",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Enables the grid's focus indicator to be hidden. This option is typically used in PinPads to hide the entered characters.",
                "name": "focusVisible",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the key grid uses horizontal wrapping. \\* \\*\\*true\\*\\*: A horizontal arrow keypress causes the focus to wrap from the key at the left (or right) edge of the grid to the key at the right (or left) edge. \\* \\*\\*false\\*\\*: The horizontal arrow keypress is not handled by the DynamicKeyGrid node; it is propagated up the scene graph so that it can be handled by one of its ancestor nodes.",
                "name": "horizWrap",
                "type": "boolean"
            },
            {
                "accessPermission": "WRITE",
                "default": "N/A",
                "description": "Jumps the grid to the key to the coordinates specified in the provided array. The array must contain a valid section, row and key index for the current keyboard mode. If the array specifies an invalid key, no jump occurs.",
                "name": "jumpToKey",
                "type": "array of integers"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the \\[Key Definition File\\](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/key-definition-file.md to use to define the key layout metadata.",
                "name": "keyDefinitionUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ",
                "default": "\"\"",
                "description": "Specifies the appearance of a key when it receives focus, based on the key's \\*\\*strOut\\*\\* value. \\* If the key's \\*\\*strOut\\*\\* value (as specified in the Key Definition File) is non-empty, this field is set to the \\*\\*strOut\\*\\* value. \\* If \\*\\*strOut\\*\\* is an empty string, this field is set to the key's label string.",
                "name": "keyFocused",
                "type": "string"
            },
            {
                "accessPermission": "READ",
                "default": "\"\"",
                "description": "Specifies the appearance of a key when it is selected, based on the key's \\*\\*strOut\\*\\* value. \\* If the key's \\*\\*strOut\\*\\* value (as specified in the Key Definition File) is non-empty, this field is set to the \\*\\*strOut\\*\\* value. \\* If \\*\\*strOut\\*\\* is an empty string, this field is set to the key's label string.",
                "name": "keySelected",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the keyboard mode. When set, the value is used to select which Grid of each Section is used, based on the grid's mode as specified in the Key Definition File.",
                "name": "mode",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not set",
                "description": "The \\[RSGPalette node\\](https://developer.roku.com/docs/references/scenegraph/scene.md contains the set of color values used by this DynamicKeyGrid node. By default, no RSGPalette is specified; therefore, the RSGPalette colors are inherited from the ancestor nodes in the scene graph. If the DynamicKeyboardBase node is used within a StandardDialog node, the following rules determine the color palette used by the keyboard: \\* If the \\*\\*palette\\*\\* field is set, the key grid uses it. \\* If the \\*\\*palette\\*\\* field is not set, the key grid looks up the scene graph until it finds a \\*\\*PaletteGroup\\*\\* node with its \\*\\*palette\\*\\* field set. This may be found in a \\*\\*DynamicKeyboard\\*\\* node, a \\*\\*StandardDialog\\*\\* node, or the \\*\\*Scene\\*\\* itself. \\* If no node has its \\*\\*palette\\*\\* field set, the key grid uses the default palette (gray background/white text). The RSGPalette color values used by the DynamicKeyboardBase are as follows:\n\n| Palette Color Name | Usages |\n| --- | --- |\n| KeyboardColor | Blend color for key background bitmap. |\n| PrimaryTextColor | Text color used for non-focused keys.   Blend color for the icons of non-focused keys.   Text color for the label of focused key suggestion items. |\n| SecondaryItemColor | Text color for disabled keys.   Blend color for the icons of disabled keys. |\n| FocusColor | Blend color for the focus indicator.   Blend color for the background of key suggestion pop-us. |\n| FocusItemColor | Text color for the label of the focused key.   Blend color for the icons of the focused key and the focus indicator in key suggestion pop-ups.   Text color for the labels of non-focused key suggestion items. |",
                "name": "palette",
                "type": "RSGPalette node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the key grid uses vertical wrapping. \\* \\*\\*true\\*\\*: A vertical arrow keypress causes the focus to wrap from the key at the top (or bottom) edge of the grid to the key at the bottom (or top) edge. \\* \\*\\*false\\*\\*: The vertical arrow key press is not be handled by the DynamicKeyGrid node; it is propagated up the scene graph so that it can be handled by one of its ancestor nodes.",
                "name": "vertWrap",
                "type": "boolean"
            }
        ],
        "interfaces": [],
        "name": "DynamicKeyGrid",
        "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md"
    },
    "dynamicminikeyboard": {
        "description": "Extends [DynamicKeyboardBase](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md\"**DynamicKeyboardBase**\")\n\nThe **DynamicMiniKeyboard** node is similar to the [legacy **MiniKeyboard** node](https://developer.roku.com/docs/references/scenegraph/widget-nodes/minikeyboard.md, but with additional voice entry functionality. It enables text and voice entry of letters A-Z and digits 0-9. It is typically used for entering a search query.\n\nThe key layout is fixed based on the node's pre-built Key Definition File.\n\n![roku815px - dynamic-mini-keyboard](https://image.roku.com/ZHZscHItMTc2/dynamic-mini-keyboard.jpg)",
        "events": [],
        "extends": {
            "name": "DynamicKeyboardBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "DynamicMiniKeyboard",
        "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-mini-keyboard.md"
    },
    "dynamicpinpad": {
        "description": "Extends [DynamicKeyboardBase](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md\"**DynamicKeyboardBase**\")\n\nThe **DynamicPinPad** node is similar to the [legacy **PinPad** node](https://developer.roku.com/docs/references/scenegraph/widget-nodes/pinpad.md, but with additional voice entry functionality. It enables text and voice entry of numeric characters. It is typically used for entering short numeric PIN codes.\n\nThe key layout is fixed based on the node's pre-built Key Definition File.\n\n![roku815px - dynamic-pinpad-voice](https://image.roku.com/ZHZscHItMTc2/dynamic-pinpad-voice.jpg)",
        "events": [],
        "extends": {
            "name": "DynamicKeyboardBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "DynamicPinPad",
        "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md"
    },
    "floatfieldinterpolator": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe FloatFieldInterpolator node class specifies a keyframe animation sequence to be applied to a floating point field of a node (such as, an opacity, width or height value.)\n\nAll field interpolators include a set of key/keyValue pairs that define a keyframe of the animation. Field interpolators are generally used as children of an Animation node. As the animation progresses, it sets the fraction field of its field interpolators to a value between 0 and 1, indicating the percentage of the Animation's progress. The keyframes of the interpolator include a \"key\", the percentage where the keyframe should occur, and a \"keyValue\", the value that the field should have at that percentage.\n\nFor example, if a FloatFieldInterpolator had three keyframes, (0.0, 10.0), (0.4, 200.0) and (1.0, 87.0), then when the interpolator's fraction field was 0.0 (i.e. 0%), the field would be set to 10.0. When fraction was 0.4 (i.e. 40%), the field would be set to 200.0. When fraction was 1.0 (i.e. 100%), the field would be set to 87.0.\n\nFor values of fraction between 0.0 and 0.4 (e.g. 0.2 or 20%), the field value is determined by linearly interpolating the keyValues for the first two keyframes. In this case, since the key of 0.2 is halfway between the key at 0.0 and the key at 0.4, the field would be set to 10.0 + 0.5 \\* (10.0 + 200.0) = 105.0. Similarly, when fraction is between the second and third keys (i.e. between 0.4 and 1.0), the field value is determined by linearly interpolating the keyValues of the second and third keyframes.\n\nIf the first keyframe has a key percentage greater than zero, then the field value will be equal to the keyValue of the first keyframe until fraction reaches the first keyframe's key percentage. Similarly, if the last keyframe has a key percentage less than one, the field value will be set to the keyValue of the last keyframe from when fraction equals the the last keyframe's key percentage and will not change as fraction increases from that value to 1.0.\n\n> While linearly interpolation is used to compute the keyValue's for fraction values between successive keys, non-linear easing functions may be applied to the fraction values computed by the Animation node, so the overall animation may vary in speed.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the field to interpolate. The string should contain the ID of a node in the scene and the name of a field of that node, separated by a dot \".\". For example, \"title.width\" would indicate that the interpolator should be applied to the width field of a node whose id field was \"title\". The specified field must be of type float",
                "name": "fieldToInterp",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the percentage to be used to compute a value for the field",
                "name": "fraction",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the key percentages for the interpolator's keyframes. Each key percentage should be a unique value from 0 to 1 indicating the percentage of the animation where the keyValue should occur. Behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field",
                "name": "key",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the key values or the interpolator's keyframes. Each value in the keyValue array corresponds to a value in the key field's array. The interpolator's behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field",
                "name": "keyValue",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Enables animation to be played in reverse.",
                "name": "reverse",
                "type": "boolean"
            }
        ],
        "interfaces": [],
        "name": "FloatFieldInterpolator",
        "url": "https://developer.roku.com/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md"
    },
    "font": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe Font node class specifies the font to be used by a Label node, or any other nodes that render text.\n\nNodes that use fonts include a field that stores a Font node. The font to use is specified by creating a Font node, and setting its uri and size fields.\n\nThe uri field can be set to any TrueType/OpenType font file. For example, to specify a font in XML markup:\n\n```\n<Label>\n  <Font role = \"font\" uri = \"pkg:/fonts/font.ttf\" size = \"24\" />\n</Label>\n```\n\nA default system font can also be specified, such as in the following:\n\n```\n<Label id = \"myLabel\"\n  width = \"200\"\n  height = \"200\"\n  text = \"Hello Label\"\n  font = \"font:MediumBoldSystemFont\" \n  />\n```\n\nBelow is the list of all the possible system font values:\n\n*   TinySystemFont\n*   TinyBoldSystemFont\n*   SmallerSystemFont\n*   SmallerBoldSystemFont\n*   SmallestSystemFont\n*   SmallestBoldSystemFont\n*   SmallSystemFont\n*   SmallBoldSystemFont\n*   MediumSystemFont\n*   MediumBoldSystemFont\n*   LargeSystemFont\n*   LargeBoldSystemFont\n*   LargestSystemFont\n*   ExtraLargeSystemFont\n*   ExtraLargeBoldSystemFont\n*   BadgeSystemFont\n\nThe font can also be specified in BrightScript, for example:\n\n```\nlabel = CreateObject(\"roSGNode\", \"Label\")\nfont  = CreateObject(\"roSGNode\", \"Font\")\nfont.uri = \"pkg:/fonts/font.ttf\"\nfont.size = 24\nlabel.font = font\n```",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "String representation of a Unicode character to display when an unsupported glyph is encountered. For example, \"u0020\" would render a space for any unrenderable characters",
                "name": "fallbackGlyph",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1",
                "description": "Specifies the size of the font in points",
                "name": "size",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies a TrueType or OpenType font file. Currently only font files included in the application can be specified",
                "name": "uri",
                "type": "uri"
            }
        ],
        "interfaces": [],
        "name": "Font",
        "url": "https://developer.roku.com/docs/references/scenegraph/typographic-nodes/font.md"
    },
    "gridpanel": {
        "description": "Extends [**Panel**](https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/panel.md\n\nThe GridPanel node class allows you to easily create a Panel that adheres to the Roku layout and behavior for panels that contain a PosterGrid or MarkupGrid node. The GridPanel node class provides the following functionality:\n\n*   Resolution appropriate positioning and sizing of the grid node\n*   Automatic key focus handling (i.e. the grid node is set to receive key events when the GridPanel is given the key focus by the PanelSet)\n*   Left-justified and right-justified labels that can be used to provide descriptive information about the grid (e.g. \"1 of N\", etc.). These labels are automatically positioned and sized appropriately.\n*   Simple mechanism for setting up the case where focusing any item in the grid triggers the creation of a new panel to add to the PanelSet\n*   Default fade in/out animation of the next panel when the simple mechanism is used\n*   Default fade out mask effect applied to the grid items at the bottom of the panel",
        "events": [],
        "extends": {
            "name": "Panel",
            "url": "https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/panel.md"
        },
        "fields": [
            {
                "accessPermission": "READ_ONLY",
                "default": "N/A",
                "description": "When the createNextPanelOnItemFocus field is true, createNextPanel is set when a new panel needs to be created and added to the PanelSet. The value of the field is the index of the grid's content that should be used to create and populate the new panel. The createNextPanelIndex field is guaranteed to be set exactly once whenever the next panel for the focused grid item needs to be created.",
                "name": "createNextPanelIndex",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "When set to true, the Create Next Panel mechanism is enabled (i.e. the createNextPanelIndex field will be set when a new grid item receives the focus). When set to false, the Create Next Panel mechanism is disabled (i.e. the createNextPanelIndex field will not be set when a new grid item receives the focus).",
                "name": "createNextPanelOnItemFocus",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "NULL",
                "description": "The grid field should be set to either a PosterGrid or MarkupGrid node to be displayed in the Panel. In general, because the layout of any grid is usually custom, you will generally need to set the grid's itemSize, itemSpacing, numRows and numColumns fields. The GridPanel will position the grid appropriately.",
                "name": "grid",
                "type": "Node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "Label node",
                "description": "The leftLabel field is set to a Label node that is positioned just above the left/top corner of the grid. Setting the Label node's text field will cause that text string to be displayed. Setting other fields of the Label node can be used to adjust the Label's text color and other visual attributes.",
                "name": "leftLabel",
                "type": "Node"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "false",
                "description": "When the createNextPanelOnItemFocus field is true, the nextPanel field should be set to a Panel node to the next panel to add to the PanelSet in response to the createNextPanelIndex field being set. It must be set immediately in repsonse to the createNextPanelIndex field being set.",
                "name": "nextPanel",
                "type": "Node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "Label node",
                "description": "The rightLabel field is set to a Label node that is positioned just above the right/top corner of the grid. Setting the Label node's text field will cause that text string to be displayed. Setting other fields of the Label node can be used to adjust the Label's text color and other visual attributes. The rightLabel is often used to display a \"1 of N\" message that reflects the index of the grid's focused item.",
                "name": "rightLabel",
                "type": "Node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If showSectionLabels is set to true and the data for the grid node is divided into sections, the Title attribute of the current section will be displayed as the leftLabel of the grid. As the grid items scroll, the leftLabel will smoothly transition as each section of the grid reaches the focus position.",
                "name": "showSectionLabels",
                "type": "Boolean"
            }
        ],
        "interfaces": [],
        "name": "GridPanel",
        "url": "https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/gridpanel.md"
    },
    "group": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nGroup is the base class of all renderable nodes. Group also provides fields that control the transformation, visibility and opacity of themselves and all of their children.\n\nEach Group defines a local coordinate system relative to the coordinate system of its parent node. A 2D matrix that describes how points in the local coordinate system can be transformed into the parent node coordinate system is constructed from the values of the translation, rotation, scale, and scaleRotateCenter fields.\n\nThe 2D matrix is computed using the values of these four fields in the following order:\n\n*   translating by the negative of the scaleRotateCenter field value\n*   scaling by the the scale field value\n*   rotating by the rotation field value\n*   translating by the the scaleRotateCenter field value\n*   translating by the translation field value\n\nIn matrix math terms, the overall 2D matrix is:\n\nM = C(-1) S R C T\n\nWhere:\n\n*   M is the total matrix\n*   C is a 2D translation matrix that describes the location of the scale/rotation center in the node's local coordinate system\n*   C(-1) is the inverse of C\n*   S is a 2D scaling matrix\n*   R is a 2D rotation matrix\n*   T is a 2D translation matrix\n\n> In nearly all cases, either the default values for these four fields will be used (in which case, the local coordinate system of the node is the same as the parent node coordinate system), or only a translation will be specified (in which, the local coordinate system is a simple offset from the parent node coordinate system).",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "renderLast",
                "description": "| Option | Description |\n| --- | --- |\n| `\"renderFirst\"` | any drawing done by this node will be done **before** the node children are rendered |\n| `\"renderLast\"` | any drawing done by this node will be done **after** the node children are rendered |",
                "name": "childRenderOrder",
                "type": "option as string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ 0.0, 0.0, 0.0, 0.0 ]",
                "description": "Specifies a rectangle in the node local coordinate system that is used to limit the region where this node and its children can render. If a non-empty rectangle is specified, then all drawing by this node and its children will be limited to that rectangular area. \\* \\`ClippingRects\\` can be specified by the node or by any of its ancestors in the SceneGraph. \\* \\`ClippingRects\\` are automatically set by some nodes such as lists and grids. \\* \\`ClippingRects\\` are always clipped to the screen boundaries, so if a \\`clippingRect\\` is specified that is partially or completely offscreen, it will be clipped to the screen boundaries. With respect to render tracking, although the node could be completely within the bounds of the specified \\`clippingRect\\`, it's \\`renderTracking\\` field could be set to \\`\"none\"\\` if the portion of the \\`clippingRect\\` it occupies is completely offscreen.",
                "name": "clippingRect",
                "type": "array of float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If true, renderTracking will be set to a string describing how much of the node is rendered on screen",
                "name": "enableRenderTracking",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If true, the node opacity is determined by multiplying opacity attribute of the node by the opacity of the parent node, which may have been determined by multiplying the opacity of its ancestor nodes. If false, the node opacity is determined by the opacity attribute set for the node or the default opacity attribute value",
                "name": "inheritParentOpacity",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If true, the node overall transformation is determined by combining the accumulated transformation matrix of all of its ancestors in the SceneGraph with the node local 2D transformation matrix described by its translation, rotation, scale and scaleRotateCenter fields. If false, the accumulated transformation of all of its ancestors in the SceneGraph is ignored and only the node local transformation matrix is used. This causes the node to be transformed relative to the root of the SceneGraph (that is, the Scene component)",
                "name": "inheritParentTransform",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Set to true to suppress the default CVAA text to speech. This allows apps to provide their own custom implementation",
                "name": "muteAudioGuide",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1.0",
                "description": "Sets the opacity of the node and its children. Opacity is the opposite of transparency. Opacity values range from 0.0 (fully transparent) to 1.0 (fully opaque). As the SceneGraph is traversed, the opacity values are combined by multiplying the current accumulated opacity with the node opacity, so that if the accumulated opacity of a node ancestors is 0.25 (75% transparent), the node will have opacity of 0.25 or less. This allows entire branches of the SceneGraph to fade in and out by animating the opacity of the node at the root of the branch",
                "name": "opacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Used in combination with the numRenderPasses field of nodes extended from the \\[ArrayGrid\\](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md\"ArrayGrid\") abstract node class, to optimize rendering of lists and grids. This should never be set to a non-zero value unless you are optimizing the performance of a list or grid rendering by specifying the sequence of rendering operations for sub-elements of the list or grid items, and have set the numRenderPasses field value for the list or grid to a value greater than 1. If the numRenderPasses field value for the list or grid is set to a value greater than 1, you must set this field to a value greater than 0 for all sub-elements of the list or grid items, and not greater than the numRenderPasses field value. If the numRenderPasses field is set to a value greater than 1, and you set this field for a list or grid item sub-element to 0 (the default), or a value greater than the numRenderPasses field value, the list or grid item sub-element will not render",
                "name": "renderPass",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "disabled",
                "description": "renderTracking is set to \"disabled\" when enableRenderTracking is set to false. The following options are only available when enableRenderTracking is set to true:\n\n| Option | Description |\n| --- | --- |\n| `\"none\"` | renderTracking is set to: `\"none\"` if **one or more** of these conditions is true:  *   the node's `visible` field is set to `false`. *   the node's `opacity` field is set to `0.0`. *   no `clippingRect` is specified and the node is completely offscreen. *   a `clippingRect` is specified and the node lies completely outside that `clippingRect's` coordinates or is completely offscreen.   |\n| `\"partial\"` | renderTracking is set to `\"partial\"` if **all** of the following conditions are true:  *   the node's `visible` field is set to `true`. *   the node's `opacity` field is greater than `0.0`. *   no `clippingRect` is specified and the node is partially offscreen. *   a `clippingRect` is specified and the node lies partially inside the `clippingRect's` coordinates.   |\n| `\"full\"` | renderTracking is set to `\"full\"` if **all** of the following conditions are true:  *   the node's `visible` field is set to `true`. *   the node's `opacity` field is greater than `0.0`. *   no `clippingRect` is specified and the node is completely onscreen. *   a `clippingRect` is specified and the node lies completely inside the `clippingRect's` coordinates.   |",
                "name": "renderTracking",
                "type": "option as string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Defines the rotation angle about the scaleRotateCenter point (in radians) of the node local coordinate system. Positive values specify a counterclockwise rotation, negative values specify a clockwise rotation. For some Roku Player hardware, specifically Roku Players without OpenGL graphics support, only rotations of 0, 90, 180 and 270 degrees (in equivalent radians) are supported. (See \\[Roku Models and Features\\](/docs/specs/hardware.md#current-models \"Roku Models and Features\") for information on OpenGL support)",
                "name": "rotation",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[1.0,1.0]",
                "description": "Defines the scale factor to be applied to the node local coordinate",
                "name": "scale",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0.0,0.0]",
                "description": "Describes the location of a point in the node local coordinate that serves as the center of the scale and rotation operations",
                "name": "scaleRotateCenter",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0.0,0.0]",
                "description": "Defines the origin of the node local coordinate system relative to its parent node",
                "name": "translation",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If true, the node and its children are rendered. If false, the node and its children do not render",
                "name": "visible",
                "type": "Boolean"
            }
        ],
        "interfaces": [],
        "name": "Group",
        "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
    },
    "infopane": {
        "description": "The **InfoPane** node class is used to display an opaque, white-bordered, rounded rectangular label with text providing help for a specific setting. This component can be used to help customers successfully configure settings related to their account profile, closed captioning, parental controls, and so on.\n\n![roku815px - info-pane](https://image.roku.com/ZHZscHItMTc2/infopane.jpg \"info-pane\")",
        "events": [],
        "fields": [],
        "interfaces": [],
        "name": "InfoPane",
        "url": "https://developer.roku.com/docs/references/scenegraph/label-nodes/info-pane.md"
    },
    "key definition file": {
        "description": "The Key Definition File is a JSON-formatted file that specifies the layout of a keyboard. The Key Definition Files for the classes derived from **DynamicKeyboardBase** (**DynamicKeyboard**, **DynamicPinPad**, and **DynamicMiniKeyboard**) are built-in and cannot be modified because the keyboard layout for these nodes is fixed. Conversely, the **DynamicCustomKeyboard** node requires developers to create the Key Definition File in order to implement a custom keyboard layout.\n\nThe Key Definition File is a single JSON object with the following six hierarchal objects (listed in order from the top to the bottom of the hierarchy):\n\n1.  [KeyLayout](#keylayout)\n2.  [Section](#section)\n3.  [Grid](#grid)\n4.  [Row](#row)\n5.  [Key](#key)\n6.  [KeySuggestions](#keysuggestions)\n\nProperties can be set at any level of the hierarchy and are used to determine the default values for the subparts at lower levels in the hierarchy. For example, setting the **keyboardHeight** property at the **KeyLayout** level will specify the default height of each **Row** in each **Grid** in each **Section** of the grid used. If a **Grid** specifies a **gridHeight** property, it is set as the default for each **Row** in that **Grid**. In both cases, if any **Row** in the **Grid** specifies a **rowHeight** property, that height will be used as the default for each **Key** in that **Row**.",
        "events": [],
        "fields": [],
        "interfaces": [],
        "name": "Key Definition File",
        "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/key-definition-file.md"
    },
    "keyboard": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe Keyboard node class allows a user to enter a string of alphanumeric characters. The string entered is displayed in a [TextEditBox](https://developer.roku.com/docs/references/scenegraph/widget-nodes/texteditbox.md\"TextEditBox\") node that is part of the Keyboard node.\n\nThe Keyboard node must have the key focus in order to work properly. By default, a Keyboard node toggles between uppercase and lowercase letters when the Options remote key is pressed, to speed the entry of mixed-case strings by the user. It is important not to override this behavior, particularly if a Keyboard node is used as an internal node for a [KeyboardDialog](https://developer.roku.com/docs/references/scenegraph/dialog-nodes/keyboarddialog.md\"KeyboardDialog\") node.\n\nThe default appearance of a Keyboard node is very transparent, allowing the keyboard to pick up most of its color from what is rendered underneath it. The appearance can be customized by changing the keyboardBitmapUri and other fields.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the keyboard focus indicator. This should be a 9-patch image so that it can be stretched to the appropriate size for the double width keys",
                "name": "focusBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the key labels and icons when the Keyboard node has the focus",
                "name": "focusedKeyColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the default keyboard image drawn underneath the key label and icons. This image must be carefully designed so that the key positions match the default image. Template images for SD, HD and FHD resolutions are provided below.",
                "name": "keyboardBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the key labels and icons when the Keyboard node does not have the focus",
                "name": "keyColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not the Keyboard node internal TextEditBox node is displayed. In most cases, it is desirable to display the TextEditBox node so that the user can see the string as it is entered. In some cases though, you might want to show only the keyboard part of the Keyboard node. In those cases, the text field of the node will still contain the string entered by the user, so it can displayed in some different manner",
                "name": "showTextEditBox",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Contains the string of characters that has been entered",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "system default",
                "description": "This provides access to the Keyboard node internal TextEditBox node so that its appearance can be modified. You should not set this field, but you can set the fields of the TextEditBox node (such as, myKeyboard.textEditBox.textColor = \"0xFF0000FF\")",
                "name": "textEditBox",
                "type": "TextEditBox node"
            }
        ],
        "interfaces": [],
        "name": "Keyboard",
        "url": "https://developer.roku.com/docs/references/scenegraph/widget-nodes/keyboard.md"
    },
    "keyboarddialog": {
        "description": "> Roku OS 10.0 introduced a new [StandardKeyboardDialog node](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-keyboard-dialog.md\"**Standard Keyboard Dialog**\"), which features updated graphics, color palette support, and voice entry support. This enables developers to provide a consistent user experience across the keyboard dialogs in their app, and help speed up customer sign-ups and sign-ins. Developers must replace the legacy KeyboardDialog nodes in their app with the new [StandardKeyboardDialog node](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-keyboard-dialog.md\"**Standard Keyboard Dialog**\").\n> \n> To upgrade a legacy keyboard dialog to the standard version, prepend \"Standard\" to the node type. For example, change `keyboarddialog = createObject(\"roSGNode\", \"KeyboardDialog\")` to `keyboarddialog = createObject(\"roSGNode\", \"StandardKeyboardDialog\")`.\n\nExtends [**Dialog**](https://developer.roku.com/docs/references/scenegraph/dialog-nodes/dialog.md\"**Dialog**\")\n\nThe KeyboardDialog node class is a special type of Dialog node that prompts the user to enter an alphanumeric text string. The KeyboardDialog node class includes an interrnal Keyboard node to allow the user to enter the string.\n\nThe KeyboardDialog allows you to add a title (by setting the Dialog title field), a help message (by setting the Dialog message field), and a set of action buttons (by setting the Dialog node buttons field). The bulletText and graphicUrl fields of the Dialog node should not be set. If those Dialog node fields are set, the layout of the dialog will likely not look correct.\n\nAlso, the KeyboardDialog node class inherits the behavior of the interrnal [Keyboard](https://developer.roku.com/docs/references/scenegraph/widget-nodes/keyboard.md\"Keyboard\") node when the Options remote key is pressed. The Keyboard node class toggles between uppercase and lowercase letters when the Options remote key is pressed, to speed the entry of mixed-case strings by the user. Therefore, the optionsDialog field of the Dialog node class should not be set to true.\n\nTypically, you will want to set the KeyboardDialog node title field to prompt the user to enter the string, and add \"OK\" and \"Cancel\" buttons by setting the Dialog node buttons field to \\[ \"OK\", \"Cancel\" \\], then observe the Dialog node class buttonSelected field to react when the user presses one of those buttons. At any time, the text field can be accessed to obtain the string entered by the user.\n\nAnother typical usage of the KeyboardDialog node class adds a \"Hide Text\" button, with an observer function set up to toggle the secureMode field of the Keyboard node internal TextEditBox node (that is, by toggling the value of the keyboard.textEditBox.secureMode field).",
        "events": [],
        "extends": {
            "name": "Dialog",
            "url": "https://developer.roku.com/docs/references/scenegraph/dialog-nodes/dialog.md"
        },
        "fields": [
            {
                "accessPermission": "READ_ONLY",
                "default": "system default",
                "description": "Provides access to the internal Keyboard node. The field is read-only, but the fields of the Keyboard node it refers to can be read and written, allowing you to fully customize the Keyboard node appearance and behavior",
                "name": "keyboard",
                "type": "Keyboard node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Can be used to explicitly set the internal Keyboard node text string, as well as to access the string entered by the user",
                "name": "text",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "KeyboardDialog",
        "url": "https://developer.roku.com/docs/references/scenegraph/dialog-nodes/keyboarddialog.md"
    },
    "label": {
        "description": "Extends [**LabelBase**](https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.md\n\n> As of Roku OS 10.5, the Label node inherits most of its functionality from [LabelBase](https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.md node class. Developers, however, do not need to update their app code to account for this refactoring.\n\nThe Label node class is used to display a string of text.",
        "events": [],
        "extends": {
            "name": "LabelBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the Font node to be used",
                "name": "font",
                "type": "Font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether to display the end or beginning of text that overflows its available width: \\* \\*\\*true\\*\\*. The end of the text is shown. For example, \"the quick brown fox jumps over the lazy dog\" would be truncated to \"...jumps over the lazy dog\". \\* \\*\\*false\\*\\*. The start of the text is shown (for example, \"the quick brown fox jumps...\").",
                "name": "leadingEllipsis",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the text is displayed on more than one line, specifies the amount of additional space added between lines",
                "name": "lineSpacing",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the width field value is greater than zero, provides a set of characters that are used to determine how to truncate the last line of text that is displayed if it extends beyond the specified width. If none of the characters in the last line of text are included in the truncateOnDelimiter field value string, the entire last line is not displayed. When the value is set to a non-empty string, the ellipsizeOnBoundary field value is ignored",
                "name": "truncateOnDelimiter",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "indicates the number of wrapped lines in the label.",
                "name": "wrappedLines",
                "type": "Integer"
            }
        ],
        "interfaces": [],
        "name": "Label",
        "url": "https://developer.roku.com/docs/references/scenegraph/label-nodes/label.md"
    },
    "labelbase": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\n\nThe LabelBase node is an abstract base class for the [**Label**](https://developer.roku.com/docs/references/scenegraph/label-nodes/label.md and [**MultiStyleLabel**](https://developer.roku.com/docs/references/scenegraph/label-nodes/multi-style-label.md nodes. The Label node is used to display a string of text with a single style; the MultiStyleLabel node is used display a string of text with mixed styles (for example, plain and bold text, different fonts, and/or multiple colors). The LabelBase node provides the dimensions, text alignment, wrapping, auto-truncating, and other common functionality for its child nodes.\n\n> The LabelBase node was introduced in Roku OS 10.5 to provide a single base class for the Label node and the new MultiStyleLabel node, which was added as part of the Roku OS 10.5 release. The Label node now inherits most of its functionality from LabelBase node class. Developers, however, do not need to update their app code to account for this refactoring.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the text color",
                "name": "color",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If the height field value is greater than zero, used to determine whether or not the last line of visible text is displayed if it would be clipped vertically.",
                "name": "displayPartialLines",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "By default, three dots (...) are used to ellipsize the last line of text that extends beyond the bounding rectangle. This field specifies alternate characters to be displayed when the last line of text is ellipsized",
                "name": "ellipsisText",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If the width field value is greater than zero, controls whether or not the last line of text displayed should be ellipsized if it extends beyond the specified width. It is ignored if the truncateOnDelimiter field value is set to a non-empty string \\* When set to true, text will be ellipsized by whole words. Example: \"This is the last line of...\" \\* When set to false, text will be ellipsized by characters. Example: \"This is the last line of tex...\"",
                "name": "ellipsizeOnBoundary",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the height of the label. If set to zero, the actual height is determined by the value of the numLines field if it is greater than zero. See \\[Vertical Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Vertical Alignment\") and \\[Wrapping\\](https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.mdwrapping-text \"Wrapping\") for more details.",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "left",
                "description": "See \\[Horizontal Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Vertical Alignment\")",
                "name": "horizAlign",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "false",
                "description": "Indicates whether the last line of text has been ellipsized",
                "name": "isTextEllipsized",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "If the height and numLines field values are both zero, specifies the maximum number of lines of text to be displayed. See \\[Vertical Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Vertical Alignment\") and \\[Wrapping\\](https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.mdwrapping-text \"Wrapping\") for more details.",
                "name": "maxLines",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Renders numeric values using tabular (fixed-width) fonts.",
                "name": "monospacedDigits",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "If the height field value is zero, provides an alternate way to specify the height of the bounding rectangle of the label. See \\[Vertical Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Vertical Alignment\") and \\[Wrapping\\](https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.mdwrapping-text \"Wrapping\") for more details.",
                "name": "numLines",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the text to be displayed",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "top",
                "description": "See \\[Vertical Alignment\\](https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.mdwrapping-text \"Wrapping\")",
                "name": "vertAlign",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the width of the label. If set to zero, the text is always displayed as a single line",
                "name": "width",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "By default, space and hyphen characters are used to determine where lines can be divided. In addition, this field can specify additional characters to be used to determine where the text can be broken into lines",
                "name": "wordBreakChars",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "See \\[Horizontal Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Horizontal Alignment\")",
                "name": "wrap",
                "type": "boolean"
            }
        ],
        "interfaces": [],
        "name": "LabelBase",
        "url": "https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.md"
    },
    "labellist": {
        "description": "Extends [**ArrayGrid**](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md\n\nThe LabelList node class is a simple list class that can be used to display a list of items. Each item can include a text string and an optional icon positioned to the left of the text string.\n\nThe list items can be organized into sections that are demarcated by labelled horizontal divider lines between the sections.\n\nIn most cases, you will want to populate the content of a LabelList (or other similar components like PosterGrids, etc.) from a content feed, web service API, or some other dynamic data source. However, to illustrate the basics of how a LabelList is constructed and used, here is a simple example of creating a LabelList and populating it with static data. Static data in a LabelList may be useful for app screens such as settings or menus with fixed items.\n\n**Static LabelList configuration**\n\n```\n<LabelList\n  id = \"moviemenu\"\n  translation = \"[160,92]\"\n  itemSize = \"[440,48]\" >\n\n  <ContentNode id = \"moviemenucontent\" role = \"content\" >\n\n    <ContentNode title = \"Drama\" />\n    <ContentNode title = \"Action\" />\n    <ContentNode title = \"Horror\" />\n    <ContentNode title = \"Comedy\" />\n\n  </ContentNode>\n\n</LabelList>\n```\n\n**Example**\n\nThis code renders the LabelList shown below.\n\nIn this screen shot, the user has scrolled down one item to highlight \"Drama\" showing the separator after the last list item.\n\n![roku815px - LabelList-example1](https://image.roku.com/ZHZscHItMTc2/LabelList-example1.jpg \"LabelList-example1\")",
        "events": [],
        "extends": {
            "name": "ArrayGrid",
            "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md"
        },
        "fields": [
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "\\*\\*Write-Only\\*\\* When set to a valid item index, this causes the list to quickly scroll so that the specified index moves into the focus position.",
                "name": "animateToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the text color for unfocused list items",
                "name": "color",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Specifies the content for the list. See \\[Data bindings\\](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/labellist.mddata-bindings) below for more details. If the data contains section markers, section dividers will be drawn between each section. These section dividers may contain an icon and/or a string.",
                "name": "content",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not the focus indicator bitmap is displayed",
                "name": "drawFocusFeedback",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the focus indicator bitmap is drawn below or on top of the list items",
                "name": "drawFocusFeedbackOnTop",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by \\`focusBitmapUri.\\`",
                "name": "focusBitmapBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list has focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0x262626ff",
                "description": "Specifies the text color for focused list items",
                "name": "focusedColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the font for focused list items",
                "name": "focusedFont",
                "type": "font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list does not have focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusFootprintBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusFootprintBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by \\`focusFootprintBitmapUri\\`.",
                "name": "focusFootprintBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the row that will have fixed focus if the \\`vertFocusAnimationStyle\\` field value is set to \\`fixedFocusWrap\\`.",
                "name": "focusRow",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the font for unfocused list items",
                "name": "font",
                "type": "font"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "\\*\\*Read-Only\\*\\* When a list item gains the key focus, set to the index of the focused item.",
                "name": "itemFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "\\*\\*Read-Only\\*\\* When a list item is selected, itemSelected is set to the index of the selected item.",
                "name": "itemSelected",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Specifies the width and height of each item in the list",
                "name": "itemSize",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "The second value of the vector specifies the vertical spacing between items in the list. The first value of the vector is ignored.",
                "name": "itemSpacing",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "\\*\\*Read-Only\\*\\* When a list item loses the key focus, set to the index of the unfocused item.",
                "name": "itemUnfocused",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "\\*\\*Write-Only\\*\\* When set to a valid item index, this causes the list to immediately update so that the specified index moves into the focus position.",
                "name": "jumpToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "12",
                "description": "Specifies the number of visible rows displayed. The actual number of rows may be more or less than the number of visible rows specified depending on the number of items in the list content.",
                "name": "numRows",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the ContentNode specifies sections for a list or grid, specifies a custom bitmap to use as a visual divider between the sections of the list or grid. Only set this field to use a bitmap with a different appearance than the system default. For sections that do not include an icon or a title, the system default or custom bitmap specified as the \\`wrapDividerBitmapUri\\` field value is used for the section dividers. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default.",
                "name": "sectionDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the font for section divider labels",
                "name": "sectionDividerFont",
                "type": "font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "40",
                "description": "Specifies the height of the section dividers. The width of the section dividers is determined by the width of the list items as specified by the itemSize field width value.",
                "name": "sectionDividerHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Number of pixels to offset the left edge of the section divider relative to the left edge of the list items.",
                "name": "sectionDividerLeftOffset",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "117",
                "description": "Specifies the minimum width of the section divider bitmap. The section divider label will be ellipsized if necessary in order to ensure that the section divider bitmap meets the minimum width.",
                "name": "sectionDividerMinWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "10",
                "description": "If the ContentNode specifies sections for a list or grid, and the section dividers are specified to include an icon and/or a label, specifies the spacing between the icon, label, and section divider bitmap.",
                "name": "sectionDividerSpacing",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the text color for section divider labels",
                "name": "sectionDividerTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "left",
                "description": "Specifies the horizontal alignment of the text in the list item area specified by the \\`itemSize\\` field value (the text is always centered vertically in the list item area). The possible options are:\n\n| Option | Effect |\n| --- | --- |\n| left | Text is left-aligned |\n| right | Text is right-aligned |\n| center | Text is center-aligned |",
                "name": "textHorizAlign",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "fixedFocusWrap",
                "description": "Specifies the how the focus indicator moves in a list of items in response to the remote direction pad Up and Down key presses. The possible values are:\n\n| Option | Effect |\n| --- | --- |\n| fixedFocusWrap | Causes the list to wrap around when the focus indicator reaches the first or last item in the list, as long as the list contains enough items to fill the list. If the list does not contain enough items to fill the list, the focus indicator will float up and down. |\n| floatingFocus | Causes the focus indicator to float up or down until it reaches the end of the list, at which point the focus indicator will stay fixed on the first or last item in the list, and the items will scroll up or down if there are items that were not visible. |",
                "name": "vertFocusAnimationStyle",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file to use as a wrap divider, the visual separator between the last and first list items when the list wraps. In most cases, this should be a 9-patch image that specifies both expandable regions. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "wrapDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the height of the wrap divider, the visual separator between the last and first list items when the list wraps. The bitmap for the wrap divider is scaled to this height. The width of the wrap divider is set to the width of the list items as specified by the \\`itemSize\\` field width value.",
                "name": "wrapDividerHeight",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "LabelList",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/labellist.md"
    },
    "layoutgroup": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe LayoutGroup node class manages the position of its child nodes by arranging them in a row from left to right (horizontal layout), or in a column from top to bottom (vertical layout). Fields provide options to control the spacing between children, the horizontal and vertical alignment, and the margins around the edges of the group.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Controls how the spaces specified in the itemSpacings field are inserted. By default, the field value is set to true. This causes the specified spaces to be inserted after the child is positioned. If the field value is set to false, the specified item space is inserted before the child is positioned",
                "name": "addItemSpacingAfterChild",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "left",
                "description": "Specifies the alignment point in the horizontal direction. The effect of the value set depends on the whether the layoutDirection field value is set to either horiz or vert\n\n| Value | layoutDirection | Use |\n| --- | --- | --- |\n| left | vert | Aligns the left edges of each child in the column, and sets the LayoutGroup node local x-coordinate origin at the left edge of the children |\n| left | horiz | Sets the LayoutGroup node local x-coordinate origin at the left edge of the first child |\n| center | vert | Aligns the centers of each child in the column, and sets the LayoutGroup node local x-coordinate origin at the center alignment point |\n| center | horiz | Sets the LayoutGroup node local x-coordinate origin at the center of the horizontal row of children |\n| right | vert | Aligns the right edges of each child in the column, and sets the **LayoutGroup** node local x-coordinate origin is at the right edge of the children |\n| right | horiz | Sets the LayoutGroup node local x-coordinate origin at the right edge of the last child |\n| custom | vert | Explicitly set the x translation of each child of the LayoutGroup. If the layoutDirection is \"horiz\", custom will not be a valid setting. Instead, \"left\" will be used to do the child layout. |",
                "name": "horizAlignment",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Controls the spacing before or after each child in the layout direction. By default, no space is added between the children",
                "name": "itemSpacings",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "vert",
                "description": "Controls the layout direction\n\n| Value | Use |\n| --- | --- |\n| horiz | Positions the children in a row from left to right |\n| vert | Positions the children in a column from top to bottom |",
                "name": "layoutDirection",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "top",
                "description": "Specifies the alignment point in the vertical direction. The effect of the value set depends on the whether the layoutDirection field value is set to either horiz or vert\n\n| Value | layoutDirection | Use |\n| --- | --- | --- |\n| top | horiz | Aligns the top edges of each child in the row, and sets the **LayoutGroup** node local y-coordinate origin at the top edge of the children |\n| top | vert | Sets the LayoutGroup node local y-coordinate origin at the top edge of the first child |\n| center | horiz | Aligns the centers of each child in the row, and sets the LayoutGroup node local y-coordinate origin at the center alignment point |\n| center | vert | Sets the **LayoutGroup** node local y-coordinate origin at the center of the vertical column of children |\n| bottom | horiz | Aligns the bottom edges of each child in the row, and sets the **LayoutGroup** node local y-coordinate origin at the bottom edge of the children |\n| bottom | vert | Sets the LayoutGroup node local y-coordinate origin at the bottom edge of the last child |\n| custom | horiz | Explicitly set the y translation of each child of the LayoutGroup. If the layoutDirection is \"vert\", custom will not be a valid setting. Instead, \"top\" will be used to do the child layout. |",
                "name": "vertAlignment",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "LayoutGroup",
        "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/layoutgroup.md"
    },
    "listpanel": {
        "description": "Extends [**Panel**](https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/panel.md\n\nThe ListPanel node class allows you to easily create a Panel that adheres to the Roku layout and behavior for panels that contain a LabelList or MarkupList node. The ListPanel provides the following functionality:\n\n*   Resolution appropriate positioning and sizing of the list node\n*   Automatic key focus handling (i.e. the list node is set to receive key events when the ListPanel is given the key focus by the PanelSet)\n*   Left-justified and right-justified labels that can be used to provide descriptive information about the list (e.g. \"1 of N\", etc.). These labels are automatically positioned and sized appropriately.\n*   Simple mechanism for setting up the case where focusing any item in the grid triggers the creation of a new panel to add to the PanelSet\n*   Default fade in/out animation of the next panel when the simple mechanism is used\n*   Default fade out mask effect applied to the list items at the bottom of the panel",
        "events": [],
        "extends": {
            "name": "Panel",
            "url": "https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/panel.md"
        },
        "fields": [
            {
                "accessPermission": "READ_ONLY",
                "default": "N/A",
                "description": "When the createNextPanelOnItemFocus field is true, createNextPanel is set when a new panel needs to be created and added to the PanelSet. The value of the field is the index of the list's content that should be used to create and populate the new panel. The createNextPanelIndex field is guaranteed to be set exactly once whenever the next panel for the focused list item needs to be created.",
                "name": "createNextPanelIndex",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "When set to true, the Create Next Panel mechanism is enabled (i.e. the createNextPanelIndex field will be set when a new list item receives the focus). When set to false, the Create Next Panel mechanism is disabled (i.e. the createNextPanelIndex field will not be set when a new list item receives the focus).",
                "name": "createNextPanelOnItemFocus",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "Label node",
                "description": "The leftLabel field is set to a Label node that is positioned just above the left/top corner of the list. Setting the Label node's text field will cause that text string to be displayed. Setting other fields of the Label node can be used to adjust the Label's text color and other visual attributes.",
                "name": "leftLabel",
                "type": "Node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "NULL",
                "description": "The list field should be set to either a LabelList or MarkupList node to be displayed in the Panel. See the LabelList and MarkupList notes above about setting up the list's layout.",
                "name": "list",
                "type": "Node"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "false",
                "description": "When the createNextPanelOnItemFocus field is true, the nextPanel field should be set to a Panel node to the next panel to add to the PanelSet in response to the createNextPanelIndex field being set. It must be set immediately in repsonse to the createNextPanelIndex field being set.",
                "name": "nextPanel",
                "type": "Node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "Label node",
                "description": "The rightLabel field is set to a Label node that is positioned just above the right/top corner of the list. Setting the Label node's text field will cause that text string to be displayed. Setting other fields of the Label node can be used to adjust the Label's text color and other visual attributes. The rightLabel is often used to display a \"1 of N\" message that reflects the index of the list's focused item.",
                "name": "rightLabel",
                "type": "Node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If showSectionLabels is set to true and the data for the list node is divided into sections, the Title attribute of the current section will be displayed as the leftLabel of the list. As the list items scroll, the leftLabel will smoothly transition as each section of the list reaches the focus position.",
                "name": "showSectionLabels",
                "type": "Boolean"
            }
        ],
        "interfaces": [],
        "name": "ListPanel",
        "url": "https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/listpanel.md"
    },
    "markupgrid": {
        "description": "Extends [**ArrayGrid**](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md\n\nThe MarkupGrid node class is a is a generic grid class that can be used to display a set of items arranged into a 2D grid. The contents of each grid item is an instance of an XML component specified by the `itemComponentName` field. An instance of the XML component is used to display the data for each item in the grid data model. The appearance of the grid item as it enters/exits the grid focus position can be customized using scripting. [SimpleMarkupList](https://github.com/rokudev/samples/blob/master/ux%20components/lists%20and%20grids/SimpleMarkupList) is a sample app containing a MarkupGrid where each item is an instance of an XML component. See the section [MarkupGrid XML component](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markupgrid.mdmarkupgrid-xml-component) for details.\n\nThe number of columns in the MarkupGrid node is fixed and the number of rows varies as needed to display all of the items in the grid data model. The items in the grid fill each row from left to right, then top to bottom. For example, if the grid data contains 8 items and the number of columns is set to 3, then items 1, 2 and 3 will be in the first row. Items 4, 5 and 6 will be in the second row. The third row will contain items 7 and 8 in the leftmost two columns and blank space in the right column.\n\nThe layout of rows and columns in the grid is very flexible. Possible layouts include:\n\n*   a simple layout with all items in the grid having the same size\n*   a layout with the items in some rows having varying heights and/or the items in some columns having varying widths\n*   a layout with varying width rows and columns and items that occupy one or more rows and columns\n\nThe grid items can be organized into sections that are demarcated by labelled horizontal divider lines between the sections.",
        "events": [],
        "extends": {
            "name": "ArrayGrid",
            "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md"
        },
        "fields": [
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, this causes the list to quickly scroll so that the specified index moves into the focus position.",
                "name": "animateToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "When specified, the columnSpacings field specifies the spacing after each column of the grid. This allows the spacing between columns to vary from column to column. The columnSpacings values override the horizontal spacing specified in element 0 of the itemSpacing field. If the columnSpacings array contains fewer elements than the number of columns specified by the numColumns field, element 0 of the itemSpacing field is used as the spacing after the excess columns.",
                "name": "columnSpacings",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "When specified, the columnWidths field specifies the widths of the poster for each column of the grid. This allows the width of each column of the grid to vary from column to column. The columnWidths values override the width specified in element 0 of the basePosterSize field. If the columnWidths array contains fewer elements than the number of columns specified by the numColumns field, element 0 of the basePosterSize field is used as the width of the excess columns.",
                "name": "columnWidths",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Specifies the content for the list. See \\[Data bindings\\](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markupgrid.mddata-bindings) below for more details. If the data contains section markers, section dividers will be drawn between each section. These section dividers may contain an icon and/or a string.",
                "name": "content",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not the focus indicator bitmap is displayed",
                "name": "drawFocusFeedback",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the focus indicator bitmap is drawn below or on top of the list items",
                "name": "drawFocusFeedbackOnTop",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "When fixedLayout is false, the MarkupGrid assigns each item in the data model to sequential cells in the grid (or the section if the data model includes section information). When fixedLayout is true, the data models using the X, Y, W and H attributes to specify which cells of the grid each item should occupy, where X is the column number, Y is the row number, W is the number of columns the item occupies and H is the number of rows the item occupies. Fixed layout should only be set to true for cases where one or more items in the grid should span multiple rows or columns.",
                "name": "fixedLayout",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by \\`focusBitmapUri.\\`",
                "name": "focusBitmapBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list has focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list does not have focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusFootprintBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusFootprintBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by \\`focusFootprintBitmapUri\\`.",
                "name": "focusFootprintBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file to use to suggest where images would appear for empty grids and empty sections of grids. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "imageWellBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the name of a XML component for the grid items. An instance of this component is created on demand for each visible item of the grid. The XML component must define a specific interface as detailed in \\[MarkupGrid XML component\\](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markupgrid.mdmarkupgrid-xml-component) below.",
                "name": "itemComponentName",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list item gains the key focus, set to the index of the focused item.",
                "name": "itemFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list item is selected, itemSelected is set to the index of the selected item.",
                "name": "itemSelected",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Specifies the width and height of the default size for the grid items.",
                "name": "itemSize",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list item loses the key focus, set to the index of the unfocused item.",
                "name": "itemUnfocused",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, this causes the list to immediately update so that the specified index moves into the focus position.",
                "name": "jumpToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the number of columns in the grid",
                "name": "numColumns",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "12",
                "description": "Specifies the number of visible rows displayed. The actual number of rows may be more or less than the number of visible rows specified depending on the number of items in the list content.",
                "name": "numRows",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "When specified, the rowHeights field specifies the heights of the poster for each row of the grid. This allows the height of each row of the grid to vary from row to row. The rowHeights values override the height specified in element 1 of the basePosterSize field. If the rowHeights array contains fewer elements than the number of rows needed to display all the items in the grid, element 1 of the basePosterSize field is used as the height of the excess rows.",
                "name": "rowHeights",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "When specified, the rowSpacings field specifies the spacing after each row of the grid. This allows the spacing between rows to vary from row to row. The rowSpacings values override the vertical spacing specified in element 1 of the itemSpacing field. If the rowSpacings array contains fewer elements than the number of rows needed to display all the items in the grid, element 1 of the itemSpacing field is used as the spacing after the excess rows.",
                "name": "rowSpacings",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the ContentNode specifies sections for a list or grid, specifies a custom bitmap to use as a visual divider between the sections of the list or grid. Only set this field to use a bitmap with a different appearance than the system default. For sections that do not include an icon or a title, the system default or custom bitmap specified as the \\`wrapDividerBitmapUri\\` field value is used for the section dividers. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default.",
                "name": "sectionDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the font for section divider labels",
                "name": "sectionDividerFont",
                "type": "font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "40",
                "description": "Specifies the height of the section dividers. The width of the section dividers is determined by the width of the list items as specified by the itemSize field width value.",
                "name": "sectionDividerHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Number of pixels to offset the left edge of the section divider relative to the left edge of the list items.",
                "name": "sectionDividerLeftOffset",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "117",
                "description": "Specifies the minimum width of the section divider bitmap. The section divider label will be ellipsized if necessary in order to ensure that the section divider bitmap meets the minimum width.",
                "name": "sectionDividerMinWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "10",
                "description": "Specifies the spacing between the items appearing in the section divider (e.g. the spacing between the section divider icon, the section divider label, and the section divider bitmap). Note the section divider does not always include an icon and/or a title.",
                "name": "sectionDividerSpacing",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the text color for section divider labels",
                "name": "sectionDividerTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file to use as a wrap divider, the visual separator between the last and first list items when the list wraps. In most cases, this should be a 9-patch image that specifies both expandable regions. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "wrapDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the height of the wrap divider, the visual separator between the last and first list items when the list wraps. The bitmap for the wrap divider is scaled to this height. The width of the wrap divider is set to the width of the list items as specified by the \\`itemSize\\` field width value.",
                "name": "wrapDividerHeight",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "MarkupGrid",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markupgrid.md"
    },
    "markuplist": {
        "description": "Extends [**ArrayGrid**](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md\n\nThe MarkupList node class is a generic list class that can be used to display a list of items.\n\nThe contents of each list item is an instance of an XML component specified by the `itemComponentName` field value. An instance of the XML component is used to display the data for each item in the list data model. The appearance of the list item as it enters/exits the list focus position can be customized using BrightScript.\n\n[SimpleMarkupList](https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids) is a sample app containing a MarkupList where each item is an instance of an XML component. See the [MarkupList XML component](#markuplist-xml-component) section for details.\n\n**Example**\n\nThe following example displays the use of the MarkupList node.\n\n![roku815px - markuplist-node](https://image.roku.com/ZHZscHItMTc2/markuplist-node.png \"markuplist-node\")",
        "events": [],
        "extends": {
            "name": "ArrayGrid",
            "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md"
        },
        "fields": [
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, this causes the list to quickly scroll so that the specified index moves into the focus position.",
                "name": "animateToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Specifies the content for the list. See \\[Data bindings\\](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markuplist.mdData-Bindings) below for more details. If the data contains section markers, section dividers will be drawn between each section. These section dividers may contain an icon and/or a string.",
                "name": "content",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not the focus indicator bitmap is displayed",
                "name": "drawFocusFeedback",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether the focus indicator bitmap is drawn below or on top of the list items",
                "name": "drawFocusFeedbackOnTop",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by \\`focusBitmapUri.\\`",
                "name": "focusBitmapBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list has focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list does not have focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusFootprintBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusFootprintBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by \\`focusFootprintBitmapUri\\`.",
                "name": "focusFootprintBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ 0.0, 0.0, 0.0, 0.0 ]",
                "description": "Specifies a clipping region for the list or grid items",
                "name": "itemClippingRect",
                "type": "rect2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the name of a XML component for the list items. An instance of this component is created on demand for each visible item of the list. The XML component must define a specific interface as detailed in \\[MarkupList XML component\\](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markuplist.mdMarkupList-XML-Component) below.",
                "name": "itemComponentName",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list item gains the key focus, set to the index of the focused item.",
                "name": "itemFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list item is selected, itemSelected is set to the index of the selected item.",
                "name": "itemSelected",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Specifies the width and height of each item in the list",
                "name": "itemSize",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "The second value of the vector specifies the vertical spacing between items in the list. The first value of the vector is ignored.",
                "name": "itemSpacing",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list item loses the key focus, set to the index of the unfocused item.",
                "name": "itemUnfocused",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, this causes the list to immediately update so that the specified index moves into the focus position.",
                "name": "jumpToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "12",
                "description": "Specifies the number of visible rows displayed. The actual number of rows may be more or less than the number of visible rows specified depending on the number of items in the list content.",
                "name": "numRows",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the ContentNode specifies sections for a list or grid, specifies a custom bitmap to use as a visual divider between the sections of the list or grid. Only set this field to use a bitmap with a different appearance than the system default. For sections that do not include an icon or a title, the system default or custom bitmap specified as the \\`wrapDividerBitmapUri\\` field value is used for the section dividers. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default.",
                "name": "sectionDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the font for section divider labels",
                "name": "sectionDividerFont",
                "type": "font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "40",
                "description": "Specifies the height of the section dividers. The width of the section dividers is determined by the width of the list items as specified by the itemSize field width value.",
                "name": "sectionDividerHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Number of pixels to offset the left edge of the section divider relative to the left edge of the list items.",
                "name": "sectionDividerLeftOffset",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "117",
                "description": "Specifies the minimum width of the section divider bitmap. The section divider label will be ellipsized if necessary in order to ensure that the section divider bitmap meets the minimum width.",
                "name": "sectionDividerMinWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "10",
                "description": "If the ContentNode specifies sections for a list or grid, and the section dividers are specified to include an icon and/or a label, specifies the spacing between the icon, label, and section divider bitmap.",
                "name": "sectionDividerSpacing",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the text color for section divider labels",
                "name": "sectionDividerTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file to use as a wrap divider, the visual separator between the last and first list items when the list wraps. In most cases, this should be a 9-patch image that specifies both expandable regions. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "wrapDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the height of the wrap divider, the visual separator between the last and first list items when the list wraps. The bitmap for the wrap divider is scaled to this height. The width of the wrap divider is set to the width of the list items as specified by the \\`itemSize\\` field width value.",
                "name": "wrapDividerHeight",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "MarkupList",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markuplist.md"
    },
    "maskgroup": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe MaskGroup node class allows an alpha mask bitmap to be applied to the rendering of its children. This allows effects such as having a list fade out at the bottom to be easily created.\n\n> MaskGroup nodes do not work on all Roku players (specifically, MaskGroup nodes only work on players that support OpenGL). On players whose graphics do not support OpenGL, a MaskGroup node just renders its children without applying the extra alpha mask. For this reason, you should avoid using the MaskGroup node for anything other than decorative purposes, such as creating a fading effect at the bottom of the screen, where the user interface information value of the screen element is not affected by the lack of the MaskNode node rendering.\n\nUnlike other bitmaps, the MaskGroup node class does not work with 9-patch images. If the bitmap size does not match the group bounding rectangle, the edge rows of the mask are repeated as needed.\n\nFor example, suppose the MaskGroup node bounding rectangle has an origin at (0, 0), a width of 150 and a height of 80. If the mask bitmap were also 150 by 80, and the maskOffset and maskSize field values were left at their default values of \\[ 0, 0 \\], then each pixel of the mask bitmap would be applied to the corresponding pixel of the MaskGroup node bounding rectangle. The figure below illustrates that case. On the right is a MaskGroup node that contains a Poster node. In the center is an alpha bitmap with the same size as the Poster node. On the right is the result of rendering the MaskGroup node with the image in the center used as a mask.\n\n![roku815px - maskExample1](https://image.roku.com/ZHZscHItMTc2/maskExample1.png \"maskExample1\")\n\nThe maskSize and maskOffset field values can be used to scale and offset the mask bitmap relative to the group coordinate system, as shown in the figure below. The mask is the same bitmap as in the figure above. In the below figure, the maskOffset field value has been set to (50, 30), offsetting the origin of the mask bitmap coordinate system relative to the origin of the MaskGroup node coordinate system 50 pixels to the left and 30 pixels down.The maskSize field value has been set to (100, 50), This causes the width of the mask bitmap to be scaled from 150 to 100, and the height of the mask bitmap to be scaled from 80 to 50, so that the mask right edge aligns with the right edge of the MaskGroup node bounding rectangle, and the mask bottom edge aligns with the bottom edge of the MaskGroup node bounding rectangle. The center of the figure shows the mask with the maskOffset and maskSize field values applied overlaid on top of the MaskGroup node. The right side of the figure shows the result of applying the mask to the MaskGroup node. Notice that the left column of pixels in the mask is used as the mask for all columns of the MaskGroup node that lie to the left of the mask, causing those columns to be rendered with full opacity. Similarly, and the top row of the mask is used as the mask for all rows of the MaskGroup node that lie above the mask, causing each of the rows to fade out on the right.\n\n![roku815px - maskExample2](https://image.roku.com/ZHZscHItMTc2/maskExample2.png \"maskExample2\")\n\nAs shown in above, the transformed mask may not overlay all the rendered pixels of the MaskGroup node. In that case, the leftmost (rightmost) columns of the mask bitmap are used as the mask for any MaskGroup node pixels that are to the left (right) of the transformed mask. The top (bottom) row of the mask bitmap is used as the mask for MaskGroup node pixels that are above (below) the transformed mask.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Contains the actual height of the mask bitmap. The mask bitmap can be stretched vertically by setting the y-dimension of the maskSize field value to a different value than the maskBitmapHeight field value",
                "name": "maskBitmapHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Contains the actual width of the mask bitmap. The mask bitmap can be stretched horizontally by setting the x-dimension of the maskSize field value to a different value than the maskBitmapWidth field value",
                "name": "maskBitmapWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0, 0 ]",
                "description": "Specifies an offset of the mask coordinate system relative to the group coordinate system. For example, if the maskOffset field value is set to \\\\\\[ 100, 0 \\\\\\], then mask pixel \\\\\\[0, 0\\\\\\] is used as the alpha value for pixels rendered for the MaskGroup node coordinate \\\\\\[100, 0\\\\\\]",
                "name": "maskOffset",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ 0, 0 ]",
                "description": "Specifies a scaling factor of the alpha mask coordinate system relative to the group coordinate system. If either element of the maskSize field value does not match the corresponding size of the mask bitmap, the mask bitmap is scaled to the specified size in the dimension. Setting either element of the maskSize field vector to 0 causes the mask bitmap to be used at its actual size in that dimension",
                "name": "maskSize",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the bitmap to use for the group alpha mask. The alpha value of each pixel rendered in the group is multiplied by the value of a pixel in the alpha mask. The mapping from pixel coordinates in the group to mask pixel coordinates is controlled by the maskSize and maskOffset field values. Those fields define a coordinate system for the mask bitmap relative to the group coordinate system. This mask coordinate system is used to map mask pixels to their corresponding pixels in the MaskGroup node",
                "name": "maskUri",
                "type": "uri"
            }
        ],
        "interfaces": [],
        "name": "MaskGroup",
        "url": "https://developer.roku.com/docs/references/scenegraph/control-nodes/maskgroup.md"
    },
    "minikeyboard": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe MiniKeyboard node class allows a user to enter a string of letters and numerals. The string entered is displayed in a [TextEditBox](https://developer.roku.com/docs/references/scenegraph/widget-nodes/texteditbox.md\"TextEditBox\") node that is part of the MiniKeyboard node.\n\nThe MiniKeyboard node is intended for users to enter a simple case-insensitive string consisting of the letters A-Z and the numerals 0-9. It is intended for use in functions such as \"Search\", where the entered string need not support general case-sensitive text entry. For general text entry, use a [Keyboard](https://developer.roku.com/docs/references/scenegraph/widget-nodes/keyboard.md\"Keyboard\") node instead.\n\nThe MiniKeyboard node must have the key focus in order to work properly.\n\nThe default appearance of the MiniKeyboard node is very transparent, allowing the keyboard to pick up most of its color from what is rendered underneath it. The appearance can be customized by changing the keyboardBitmapUri and other fields.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the keyboard focus indicator. This should be a 9-patch image so that it can be stretched to the appropriate size for the double width keys",
                "name": "focusBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the key labels and icons when the Keyboard node has the focus",
                "name": "focusedKeyColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the default keyboard image drawn underneath the key label and icons. This image must be carefully designed so that the key positions match the default image. Template images for SD, HD and FHD resolutions are provided below.",
                "name": "keyboardBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the key labels and icons when the Keyboard node does not have the focus",
                "name": "keyColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether the 26 letter keys are displayed as lowercase or uppercase",
                "name": "lowerCase",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not the Keyboard node internal TextEditBox node is displayed. In most cases, it is desirable to display the TextEditBox node so that the user can see the string as it is entered. In some cases though, you might want to show only the keyboard part of the Keyboard node. In those cases, the text field of the node will still contain the string entered by the user, so it can displayed in some different manner",
                "name": "showTextEditBox",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Contains the string of characters that has been entered",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "system default",
                "description": "This provides access to the Keyboard node internal TextEditBox node so that its appearance can be modified. You should not set this field, but you can set the fields of the TextEditBox node (such as, myKeyboard.textEditBox.textColor = \"0xFF0000FF\")",
                "name": "textEditBox",
                "type": "TextEditBox node"
            }
        ],
        "interfaces": [],
        "name": "MiniKeyboard",
        "url": "https://developer.roku.com/docs/references/scenegraph/widget-nodes/minikeyboard.md"
    },
    "monospacelabel": {
        "availableSince": "14.0",
        "description": "_Available since Roku OS 14.0_\n\nThe **MonospaceLabel** node is used to draw a single line of text with all characters spaced at a fixed distance from each other. It transforms proportional fonts into monospaced fonts. It is a substitute for using a monospace font with the **Label** node.\n\n**Fields**\n\n| **Field** | **Type** | **Default** | **Access Permission** | **Description** |\n| --- | --- | --- | --- | --- |\n| text | string |  | READ\\_WRITE | Specifies the text to be displayed |\n| color | color | 0xddddddff | READ\\_WRITE | Specifies the text color |\n| font | Font | system default | READ\\_WRITE | Specifies the Font node to be used |\n| horizAlign | string | left | READ\\_WRITE | See [Horizontal Alignment](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment) |\n| vertAlign | string | top | READ\\_WRITE | See [Vertical Alignment](https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.mdwrapping-text) |\n| width | float | 0 | READ\\_WRITE | Specifies the width of the label. If set to zero, the width of the label will be set automatically |\n| height | float | 0 | READ\\_WRITE | Specifies the height of the label. If set to zero, the height of the label will be set automatically |\n| characterWidth | float | 0 | READ\\_WRITE | Specifies the width of the label characters. If set to zero, width of font’s character 'M' will be used |\n| ellipsizeOnBoundary | Boolean | false | READ\\_WRITE | If the width field value is greater than zero, controls whether or not the last line of text displayed should be ellipsized if it extends beyond the specified width. It is ignored if the truncateOnDelimiter field value is set to a non-empty stringWhen set to true, text will be ellipsized by whole words. Example: \"This is the last line of...\"When set to false, text will be ellipsized by characters. Example: \"This is the last line of tex...\" |\n| firstCharTrueLeftAlign | Boolean | false | READ\\_WRITE | Forces the first character to left align completely instead of rendering centered in the character box. Subsequent characters are centered in their character box. If enabled monospace text strings with different first characters will shift around. This is primarily used for single characters strings |\n| wordBreakChars | string |  | READ\\_WRITE | By default, space and hyphen characters are used to determine where lines can be divided. In addition, this field can specify additional characters to be used to determine where the text can be broken into lines |\n| isTextEllipsized | Boolean | false | READ | Tells whether or not currently displayed text is clipped. |",
        "events": [],
        "fields": [],
        "interfaces": [],
        "name": "MonospaceLabel",
        "url": "https://developer.roku.com/docs/references/scenegraph/label-nodes/monospace-label.md"
    },
    "multistylelabel": {
        "description": "Extends [**LabelBase**](https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.md\n\nThe MultiStyleLabel node class is used to create labels with mixed styles. For example, this node can be used to create a single label with plain and bold text, different fonts, and/or multiple colors.\n\n![roku815px - img](https://image.roku.com/ZHZscHItMTc2/emoji-multistylelabel.jpg)",
        "events": [],
        "extends": {
            "name": "LabelBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/label-nodes/label-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": null,
                "description": "Defines the size, URI, and color of a font style. This field may contain one or more font styles.",
                "name": "drawingStyles",
                "type": "associative array of associative arrays"
            }
        ],
        "interfaces": [],
        "name": "MultiStyleLabel",
        "url": "https://developer.roku.com/docs/references/scenegraph/label-nodes/multi-style-label.md"
    },
    "node": {
        "description": "The abstract base class of all SceneGraph nodes and the equivalent of the BrightScript roSGNode component. See [roSGNode](https://developer.roku.com/docs/references/brightscript/components/rosgnode.md\"roSGNode\") for supported interfaces.\n\n**Node** class objects do not draw anything and are skipped in the render traversal of the SceneGraph node tree. The Node class provides the core parenting and key focus management functionality used by all nodes.",
        "events": [
            {
                "name": "roSGNodeEvent",
                "url": "https://developer.roku.com/docs/references/brightscript/events/rosgnodeevent.md"
            }
        ],
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "n/a",
                "description": "The role of the node.",
                "name": "role",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "{ Index1: 0, Index2: 0, Operation: none }",
                "description": "Operations affecting the set of children of a Node are recorded in this field if, and only if, this field has been observed. The field associative array indicates the operation and two indexes, index1 and index 2, involved in the change. The operation is denoted by these value strings:\n\n| Value | Meaning |\n| --- | --- |\n| none | No operation on the children nodes since the change field was observed, indexes are irrelevant |\n| insert | A child node was inserted at _index1_. If multiple child nodes were inserted (for example, via the [insertChildren() function](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodechildren.mdinsertchildrenchild_nodes-as-object-index-as-integer-as-boolean)), the last inserted child node is stored at _index2_. |\n| add | A child node was added to the end of the children node tree (at _index 1_). If multiple child nodes were added (for example, via the [appendChildren() function](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodechildren.mdappendchildrenchild_nodes-as-object-as-boolean)), the last added child node is stored at _index2_. |\n| remove | A child node was removed from position _index1_, and if _index2_\\>_index1_, all the children nodes between _index1_ and _index2_ inclusive were removed |\n| set | The child node at position _index1_ was replaced with a new child node |\n| clear | All the children nodes were removed |\n| move | The child node at position _index1_ was moved to the new position _index2_ |\n| setall | All the children nodes were replaced |\n| modify | A pre-defined content meta-data field of a **ContentNode** node child at _index1_ was changed (_only_ set for **ContentNode** node children when a pre-defined content meta-data field changes) |",
                "name": "change",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Provides a hint as to whether or not this node can take the key focus.",
                "name": "focusable",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "N/A",
                "description": "When a node or one of its children gains or loses the keyboard focus, the focusedChild field will be set and call its observer functions. In the observer function, typically, you use \\[ifSGNodeFocus\\](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodefocus.md\"ifSGNodeFocus\") functions to query whether this node or some other node has the key focus or is in the key focus chain. Accessing the value of the field will result in script errors.",
                "name": "focusedChild",
                "type": "N/A"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Adds a dictionary entry that allows the node to be retrieved with \\[ifSGNodeDict\\](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodedict.md\"ifSGNodeDict\") findNode() function.",
                "name": "id",
                "type": "string"
            }
        ],
        "interfaces": [
            {
                "name": "ifAssociativeArray",
                "url": "https://developer.roku.com/docs/references/brightscript/interfaces/ifassociativearray.md"
            },
            {
                "name": "ifSGNodeBoundingRect",
                "url": "https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodeboundingrect.md"
            },
            {
                "name": "ifSGNodeChildren",
                "url": "https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodechildren.md"
            },
            {
                "name": "ifSGNodeDict",
                "url": "https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodedict.md"
            },
            {
                "name": "ifSGNodeField",
                "url": "https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodefield.md"
            },
            {
                "name": "ifSGNodeFocus",
                "url": "https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodefocus.md"
            },
            {
                "name": "ifSGNodeHttpAgentAccess",
                "url": "https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodehttpagentaccess.md"
            }
        ],
        "name": "Node",
        "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
    },
    "overhang": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\n\nThe Overhang node provides a information bar that is displayed at the top of a screen in many Roku apps. The regions occupied by the overhang can be filled with either a solid color or a bitmap.\n\nOn the left side, a logo bitmap and/or a string can be displayed. If both are displayed, a vertical divider is drawn to separate them. The string is typically set to display a reminder to the user of their current location in the interface. For example, in the Roku homescreen, the string is set to \"Search\" while the user in the search entry portion of the user interface. Then when the user explores a search result, the string is changed to reflect the name of the content being explored.\n\nOn the right side, a clock and/or an indicator that the options key (\\*) is available can be displayed. If both are displayed, a vertical divider is drawn to separate them.\n\nThe appearance and contents of the Overhang can be customized by setting its fields to the desired values.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "Overhang",
        "url": "https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/overhang.md"
    },
    "overhangpanelsetscene": {
        "description": "Extends [**Scene**](https://developer.roku.com/docs/references/scenegraph/scene.md\n\nThe OverhangPanelSetScene node class provides a convenient way to create a Scene node that has set with default Overhang and PanelSet nodes. The layout of the Overhang and PanelSet use the default sizes for SDK2 apps. The node provides access to the PanelSet and Overhang via fields that contain the node objects.\n\n```\nscene = screen.CreateScene(\"OverhangPanelSetScene\")\n```",
        "events": [],
        "extends": {
            "name": "Scene",
            "url": "https://developer.roku.com/docs/references/scenegraph/scene.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "OverhangPanelSetScene",
        "url": "https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/overhangpanelsetscene.md"
    },
    "panel": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\n\nThe Panel node is used to create sliding panels for app UI, similar to those in the Roku OS home screen.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "Panel",
        "url": "https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/panel.md"
    },
    "panelset": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\n\nThe PanelSet node provides the panel sliding behavior seen in the Roku home screen. The PanelSet node manages the position of a set of child Panel nodes, and implements the left and right panel sliding behavior. Once a Panel node has been added to a PanelSet node, it remains a child of the PanelSet node unless it is replaced by another Panel node, or slides completely off the right side of the screen.\n\nThe PanelSet node is designed to display two Panel nodes in most cases, one Panel node on the left and one on the right. When the PanelSet node has focus, and the user presses the **Left** (or **Back**) or **Right** remote control key, the panels slide to the left or right one position.\n\nFor example, suppose the PanelSet node has two Panel nodes as children, panel A and panel B. When the user presses the **Right** key, a new panel, panel C, should be created and added as a child of the PanelSet node. Adding a panel as a child of the PanelSet node causes all the panels to slide left one position, so that panel A is now offscreen to the left, panel B is in the left position, and panel C is in the right position. If the user presses the **Right** key again, a new panel, panel D, should be created and added as a child node of the PanelSet node. Adding panel D causes the panels to slide left again so that panels A and B are offscreen to the left, panel C is in the left position, and panel D is in the right position.\n\nAt this point, if the user presses the **Left** key (or **Back** key), the panels will slide one position to the _right_, _back_ towards the original home position, so panel D will slide offscreen to the right, panel C will slide to the right position, and panel B will slide to the left position (panel A is still offscreen to the left). When the sliding animation ends, since panel D is offscreen to the right, it is automatically removed as a child node of the PanelSet node.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "605",
                "description": "Specifies the height of the PanelSet node. In most cases, this is set to the the display height minus the overhang height.",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "false",
                "description": "Set to true when the PanelSet node panels are sliding right, \\_back\\_ towards the original home position, as a result of a \\*\\*Left\\*\\* or \\*\\*Back\\*\\* key press.",
                "name": "isGoingBack",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Contains the current number of Panel nodes that are children of the PanelSet node.",
                "name": "numPanels",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "500",
                "description": "Milliseconds of the slide transition. The default is 1/2 second.",
                "name": "slideDuration",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1280",
                "description": "Specifies the width of the PanelSet node. In most cases, this is set to the display width (such as 1280 for HD).",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "PanelSet",
        "url": "https://developer.roku.com/docs/references/scenegraph/sliding-panels-nodes/panelset.md"
    },
    "parallelanimation": {
        "description": "Extends [**AnimationBase**](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/animationbase.md\n\nThe ParallelAnimation node class allows you to specify that a set of animations should occur simultaneously. The children of a ParallelAnimation node specify the set of animations to be executed. Note that the use of the delay field in the child animations allows the start of the child animations to be offset from one another, if desired.\n\nThe state field is set to running when any of the child animations is in progress. Once all the animations have run to completion, the state field is set to stopped.",
        "events": [],
        "extends": {
            "name": "AnimationBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/animationbase.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "ParallelAnimation",
        "url": "https://developer.roku.com/docs/references/scenegraph/animation-nodes/parallelanimation.md"
    },
    "parentalcontrolpinpad": {
        "description": "ParentalControlPinPad is a variant of the [PinPad component](https://developer.roku.com/docs/references/scenegraph/widget-nodes/pinpad.md\"PinPad component\"), although it does have a few key differences: The pin, pinLength, and secureMode fields are made private (i.e., not accessible to BrightScript, and secureMode set to true).\n\nThere are two use cases for the ParentalControlPinPad node:\n\n*   If the user enters the correct pin, a 2-hour override of content blocking starts, similar to the system behavior on RokuTV\n*   If the user enters an incorrect PIN, the text fields are cleared automatically",
        "events": [],
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the keyboard focus indicator. This should be a 9-patch image so that it can be stretched to the appropriate size for the double width keys.",
                "name": "focusBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the key labels and icons when the keyboard has the focus",
                "name": "focusedKeyColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the default keyboard image drawn underneath the numeric keys and icons. Note that this image must be carefully designed so that the key positions match the default image. Template images for SD, HD and FHD resolutions are provided below.",
                "name": "keyboardBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the key labels and icons when the keyboard does not have the focus",
                "name": "keyColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Contains the string of numbers that have been entered.",
                "name": "pin",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifed the URI of an image file to be loaded to replace the default box drawn underneath each entered digit in the pin display. This should be a 9-patch image so that it can be stretched to appropriate size depending on the pinLength field.",
                "name": "pinDisplayBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the numbers displayed in the pin display boxes",
                "name": "pinDisplayTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "4",
                "description": "Contains the maximum number of digits that can be entered",
                "name": "pinLength",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "incomplete",
                "description": "\\*\\*Read-only\\*\\* \"true\": Content is now unblocked \"false\": Pin incorrect, \"incomplete\": a full pin is not entered",
                "name": "pinSuccess",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "When set to true, each digit entered is displayed briefly, then replaced with an asterisk. When false, the entered digits always remain visible.",
                "name": "secureMode",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not the pin display that shows the entered digits is visible. In most cases, it is desirable to display the entered digits so that the user can see the string as it is entered. In some cases though, you might want to only show the keyboard part of the PinPad node. In those cases, the pinfield of the node will still contain the string entered by the user, so that it can displayed in some different manner.",
                "name": "showPinDisplay",
                "type": "boolean"
            }
        ],
        "interfaces": [],
        "name": "ParentalControlPinPad",
        "url": "https://developer.roku.com/docs/references/scenegraph/widget-nodes/parentalcontrolpinpad.md"
    },
    "pindialog": {
        "description": "> Roku OS 10.0 introduced a new [StandardPinPadDialog node](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-pinpad-dialog.md\"**Standard PinPad Dialog**\"), which features updated graphics, color palette support, and voice entry support. This enables developers to provide a consistent user experience across the PIN pad dialogs in their app, and help speed up customer sign-ups and sign-ins. Developers must replace the legacy PinDialog nodes in their app with the new [StandardPinPadDialog node](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-pinpad-dialog.md\"**Standard PinPad Dialog**\").\n> \n> To upgrade a legacy pinpad dialog to the standard version, prepend \"Standard\" to the node type. For example, change `pindialog = createObject(\"roSGNode\", \"PinDialog\")` to `pindialog = createObject(\"roSGNode\", \"StandardPinDialog\")`.\n\nExtends [**Dialog**](https://developer.roku.com/docs/references/scenegraph/dialog-nodes/dialog.md\"**Dialog**\")\n\nThe PinDialog node class is a special type of Dialog node that prompts the user to enter a numeric string. The PinDialog node class includes an internal [PinPad](https://developer.roku.com/docs/references/scenegraph/widget-nodes/pinpad.md\"PinPad\") node to allow the user to input a numeric value, such as a PIN.\n\nThe PinDialog node class allows you to add a title (by setting the Dialog node title field), a message (by setting the Dialog node message field), and a set of action buttons (by setting the Dialog node buttons field). The bulletText and graphicUrl fields of the Dialog node should not be set. If those fields are set, the layout of the PinDialog node will likely not look correct.\n\nTypically, you will want to set the Dialog node title field to prompt the user to enter a PIN, and add \"OK\" and \"Cancel\" buttons by setting the Dialog node buttons field to \\[ \"OK\", \"Cancel\" \\], then observe the Dialog node buttonSelected field to react when the user presses one of those buttons. At any time, the PinDialog node pin field can be accessed to obtain the PIN value entered by the user.\n\nThe PinDialog node displays a privacy hint at the bottom of the dialog instructing the user how to show/hide the PinPad node focus indicator with the Options remote key. This provides more privacy for the user when entering a PIN. You should not override this default behavior of the Options remote key in the PinDialog node.",
        "events": [],
        "extends": {
            "name": "Dialog",
            "url": "https://developer.roku.com/docs/references/scenegraph/dialog-nodes/dialog.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Can be used to explicitly set the internal PinPad node PIN value, as well as to access the PIN value entered by the user",
                "name": "pin",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "system default",
                "description": "Provides access to the PinDialog node internal PinPad node. The field is read-only, but the fields of the PinPad node it refers to can be read and written, allowing you to fully customize the PinPad node appearance and behavior",
                "name": "pinPad",
                "type": "PinPad node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not PinPad will be focused when PinDialog is created",
                "name": "pinPadFocused",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "When set, the color of the privacy hint shown at the bottom of the dialog",
                "name": "privacyHintColor",
                "type": "color"
            }
        ],
        "interfaces": [],
        "name": "PinDialog",
        "url": "https://developer.roku.com/docs/references/scenegraph/dialog-nodes/pindialog.md"
    },
    "pinpad": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe PinPad node is a simple widget that allows you to enter a fixed length numeric string. The string that is entered is displayed in a set of boxes above the PinPad node keyboard, with each box displaying a single numeral of the entered string.\n\nThe PinPad node must have the key focus in order to work properly.\n\nThe default appearance of the PinPad node is very transparent, allowing the node to pick up most of its color from what is rendered underneath it. The appearance can be customized by changing the keyboardBitmapUri and other fields.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the keyboard focus indicator. This should be a 9-patch image so that it can be stretched to the appropriate size for the double width keys",
                "name": "focusBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the key labels and icons when the keyboard has the focus",
                "name": "focusedKeyColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not focused key is visible when PinPad is created",
                "name": "focusVisible",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies index of the key label that will be in focus when PinPad is created",
                "name": "itemFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the default keyboard image drawn underneath the numeric keys and icons This image must be carefully designed so that the key positions match the default image. Template images for SD, HD and FHD resolutions are provided below.",
                "name": "keyboardBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the key labels and icons when the keyboard does not have the focus",
                "name": "keyColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Contains the string of numbers that have been entered",
                "name": "pin",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifed the URI of an image file to be loaded to replace the default box drawn underneath each entered digit in the pin display. This should be a 9-patch image so that it can be stretched to appropriate size depending on the pinLength field",
                "name": "pinDisplayBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the numbers displayed in the pin display boxes",
                "name": "pinDisplayTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "4",
                "description": "Contains the maximum number of digits that can be entered",
                "name": "pinLength",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "When set to true, each digit entered is displayed briefly, then replaced with an asterisk. When false, the entered digits always remain visible",
                "name": "secureMode",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not the pin display that shows the entered digits is visible. In most cases, it is desirable to display the entered digits so that the user can see the string as it is entered. You may want to only show the keyboard part of the PinPad node. In those cases, the pin field of the node will still contain the string entered by the user, so that it can displayed in some different manner.",
                "name": "showPinDisplay",
                "type": "boolean"
            }
        ],
        "interfaces": [],
        "name": "PinPad",
        "url": "https://developer.roku.com/docs/references/scenegraph/widget-nodes/pinpad.md"
    },
    "poster": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\n\nThe Poster node class draws an image with the top/left corner located at the origin of the node local coordinate system. Because the Poster node class extends the Group node class, a Poster node can have child nodes. For example, a Poster node might have a Label node as a child that draws an annotation on top of the poster.\n\nThe Poster node class supports JPEG, PNG and (since Roku OS 9.4) [WebP](https://developers.google.com/speed/webp/) image files. Please observe [Special WebP considerations](/docs/specs/media/streaming-specifications.md#special-webp-considerations) when using the latter.\n\nThe Poster node class includes the capability to automatically scale graphical images to different sizes as they are loaded, by setting the loadWidth and loadHeight field values. After the graphical images are loaded, the images can be scaled to fit within the target screen element area specified by the width and height field values. To use this capability, select the scaling option you want as the value of the loadDisplayMode field.\n\nSee SceneGraph's [Texture Memory](/docs/developer-program/performance-guide/memory-management.md#texture-memory \"Texture Memory\") feature for more information.\n\n> In order for the load scaling options to work, the option fields must be set in XML markup before the uri field",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If muteAudioGuide is false, this string will be spoken when the poster is focused",
                "name": "audioGuideText",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0.0",
                "description": "After the graphical image file is loaded, contains the height of the graphical image in pixels",
                "name": "bitmapHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "This field is set to an associative array with four elements \"left\", \"right\", \"top\" and \"bottom\". If the Poster's bitmap is a 9-patch image, the associative array is set to margin info encoded along the right and bottom edges of the image. If the Poster's bitmap is not a 9-patch image, all values in the associative array are set to 0. The bitmapMargins field is set whenever the Poster's loadStatus field changes (e.g. when the bitmap has been loaded).",
                "name": "bitmapMargins",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0.0",
                "description": "After the graphical image file is loaded, contains the width of the graphical image in pixels",
                "name": "bitmapWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Can be used to tint the image by multiplying the color of each pixel by the specified value. If this value is not set to a value other than the default value, no color blending will be performed",
                "name": "blendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1.0",
                "description": "Used to control the rendering opacity of the graphical image that indicates a bitmap failed to load. This value multiplies the Poster node opacity",
                "name": "failedBitmapOpacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies a bitmap file to display when the poster image failed to load",
                "name": "failedBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the height of the image in local coordinates. If set to 0.0, the height of the bitmap from the image file is used. If set to a value greater than 0.0, the bitmap is scaled to that height",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "noScale",
                "description": "Provides automatic scaling of graphical images after loading. If you intend to load very large graphical images, such as larger than the user interface resolution, you must set one of the scaling options other than noScale, otherwise the image may fail to load. The following are the possible field values:\n\n| Option | Effect |\n| --- | --- |\n| limitSize | Scale the image while loading it into texture memory so that the maximum width and height in either dimension does not exceed the specified loadWidth or loadHeight values. If the image is smaller in both dimensions than the specified values, the image is loaded at its regular size. Aspect ratio is preserved. |\n| noScale | The bitmap will be loaded at the image's original resolution. If the Poster's width and height differ from the bitmap's resolution, it will be scaled to fill the Poster's dimensions. Aspect ratio is not preserved. |\n| scaleToFit | Scale the image to fit into the target screen element area, preserving the aspect ratio but \"letterboxing\" or \"pillarboxing\" the image (background-color bars at the top/bottom or left/right of the image).    > This field in not supported on Liberty and Littlefield devices for images that are both scaled and rotated. On these devices, scaled and rotated images appear as if the **scaleToFill** property was applied to them.   |\n| scaleToFill | Stretch the image dimensions to fill the target screen element area, distorting the image if the target screen element area has a different aspect ratio than the image. |\n| scaleToZoom | Scale the image to fill the target screen element area, preserving the aspect ratio but not \"letterboxing\" or \"pillarboxing\" the image, with some of the image cropped out. |",
                "name": "loadDisplayMode",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Scale the graphical image to the specified height when loaded, preserving aspect ratio. If set to the default, no load-time scaling occurs. If the height field is not set, the loadHeight field is used as the default height of the displayed image",
                "name": "loadHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1.0",
                "description": "Used to control the rendering opacity of the graphical image that indicates a bitmap is loading. This value multiplies the Poster node opacity",
                "name": "loadingBitmapOpacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies a bitmap file to display while the poster image is loading. To execute a seamless cross-fade transition between posters, set the \\*\\*loadingBitmapUri\\*\\* of the next poster to be shown to the uri of the currently displayed poster.",
                "name": "loadingBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "none",
                "description": "Can be used to track the progress of loading the graphical image file. A typical use of this field is to set an observer so that when the field value changes to ready, an action can be triggered. The possible values are:\n\n| Value | Meaning |\n| --- | --- |\n| none | No loading or decoding of the graphical image file is taking place |\n| loading | Graphical image file is being fetched and decoded |\n| ready | Graphical image file has been fetched and decoded and is ready to be drawn |\n| failed | Graphical image file could not be loaded for some reason, such as the uri field value is set to a non-existent file location |",
                "name": "loadStatus",
                "type": "value string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Controls whether the image is loaded synchronously in the render thread, and appears immediately, or loaded asynchronously in a background thread, and may not appear immediately. If set to true, and the uri field specifies a local file (in the pkg:/images directory), the image is loaded synchronously, and appears immediately. If set to false, or if the uri field specifies a file from a remote server (a URL starting with http: or https:), the image is loaded asynchronously in a background thread, and may not appear immediately. Be careful when setting this field to true, as it might cause brief glitches in the rendering while the image is being fetched and loaded",
                "name": "loadSync",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Scale the graphical image to the specified width when loaded, preserving aspect ratio. If set to the default, no load-time scaling occurs. If the width field is not set, the loadWidth field is used as the default width of the displayed image",
                "name": "loadWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the URI of the image file. Images included as part of the application package can be referenced using the pkg:/images prefix. Images included as part of the application package that are to be localized can be referenced using the pkg:/locale/images/ prefix (see \\[Localizing Graphical Images in the Application Package\\](/docs/developer-program/core-concepts/localization.md#localizing-graphical-images-in-the-application-package \"Localizing Graphical Images in the Application Package\"))",
                "name": "uri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the width of the image in local coordinates. If set to 0.0, the width of the bitmap from the image file is used. If set to a value greater than 0.0, the bitmap is scaled to that width",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "Poster",
        "url": "https://developer.roku.com/docs/references/scenegraph/renderable-nodes/poster.md"
    },
    "postergrid": {
        "description": "Extends [**ArrayGrid**](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md\n\nThe PosterGrid node is a simple grid class that can be used to display two-dimensional grids of posters. In addition to the poster, each item in the grid can include up to two lines of captions.\n\nThe number of columns in the PosterGrid is fixed and the number of rows varies. The items in the grid fill each row from left to right, then top to bottom in the following order:\n\n![roku815px - Presentation1](https://image.roku.com/ZHZscHItMTc2/Presentation1.png \"Presentation1\")\n\nThe layout of rows and columns in the grid is very flexible. Possible layouts include:\n\n*   a simple layout with all posters in the grid having the same size\n*   a layout with the posters in some rows having varying heights and/or the posters in some columns having varying widths\n*   a layout with varying width rows and columns and items that occupy one or more rows and columns\n\nThe grid items can be organized into sections that are demarcated by labelled horizontal divider lines between the sections.\n\nThe PosterGrid node class includes the capability to automatically scale the loaded graphical images to fit within the target screen element area specified by the `basePosterSize` field value. To use this capability, select the scaling option you want as the value of the `posterDisplayMode` field.",
        "events": [],
        "extends": {
            "name": "ArrayGrid",
            "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md"
        },
        "fields": [
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, this causes the list to quickly scroll so that the specified index moves into the focus position.",
                "name": "animateToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Specifies the width and height of the posters in the grid.",
                "name": "basePosterSize",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the color for the grid item first caption",
                "name": "caption1Color",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the font for the grid item first caption",
                "name": "caption1Font",
                "type": "font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the number of lines to render for the grid item first caption",
                "name": "caption1NumLines",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the color for the grid item second caption",
                "name": "caption2Color",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the font for the grid item second caption",
                "name": "caption2Font",
                "type": "font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the number of lines to render for the grid item second caption",
                "name": "caption2NumLines",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies a bitmap file to render as a background for the grid item captions",
                "name": "captionBackgroundBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "center",
                "description": "Specifies the horizontal positioning of the grid item captions. Possible values are:\n\n| Value | Meaning |\n| --- | --- |\n| left | Left-justify the caption relative to the grid item poster |\n| center | Center-justify the caption relative to the grid item poster |\n| right | Right-justify the caption relative to the grid item poster |\n\nSet enableCaptionScrolling to false to use captionHorizAlignment",
                "name": "captionHorizAlignment",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the spacing in pixels between lines of the caption",
                "name": "captionLineSpacing",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "below",
                "description": "Specifies the vertical positioning of the grid item captions. Possible values are:\n\n| Value | Meaning |\n| --- | --- |\n| above | Position the caption so the bottom of the caption lies just above the grid item poster |\n| top | Align the top of the caption with the top edge of the grid item poster |\n| center | Align the vertical center of the caption with the vertical center of the of the grid item poster |\n| bottom | Align the bottom of the caption with the bottom edge of the grid item poster |\n| below | Position the caption so the top of the caption lies just below the grid item poster |",
                "name": "captionVertAlignment",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "When specified, the columnSpacings field specifies the spacing after each column of the grid. This allows the spacing between columns to vary from column to column. The columnSpacings values override the horizontal spacing specified in element 0 of the itemSpacing field. If the columnSpacings array contains fewer elements than the number of columns specified by the numColumns field, element 0 of the itemSpacing field is used as the spacing after the excess columns.",
                "name": "columnSpacings",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "When specified, the columnWidths field specifies the widths of the poster for each column of the grid. This allows the width of each column of the grid to vary from column to column. The columnWidths values override the width specified in element 0 of the basePosterSize field. If the columnWidths array contains fewer elements than the number of columns specified by the numColumns field, element 0 of the basePosterSize field is used as the width of the excess columns.",
                "name": "columnWidths",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Specifies the content for the list. See \\[Data bindings\\](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markuplist.mddata-bindings) below for more details. If the data contains section markers, section dividers will be drawn between each section. These section dividers may contain an icon and/or a string.",
                "name": "content",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not the focus indicator bitmap is displayed",
                "name": "drawFocusFeedback",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the focus indicator bitmap is drawn below or on top of the list items",
                "name": "drawFocusFeedbackOnTop",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not to scroll single line captions when it is necessary to ellipsize the caption because it is wider the column containing the grid item",
                "name": "enableCaptionScrolling",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1.0",
                "description": "Specifies an opacity value used to render the failed bitmap",
                "name": "failedBitmapOpacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies a bitmap file to display when a grid item poster fails to load",
                "name": "failedBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "When fixedLayout is false, the PosterGrid assigns each item in the data model to sequential cells in the grid (or the section if the data model includes section information). When fixedLayout is true, the data models using the X, Y, W and H attributes to specify which cells of the grid each item should occupy, where X is the column number, Y is the row number, W is the number of columns the item occupies and H is the number of rows the item occupies. Fixed layout should only be set to true for cases where one or more items in the grid should span multiple rows or columns.",
                "name": "fixedLayout",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by \\`focusBitmapUri.\\`",
                "name": "focusBitmapBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list has focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list does not have focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusFootprintBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusFootprintBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by \\`focusFootprintBitmapUri\\`.",
                "name": "focusFootprintBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file to use to suggest where images would appear for empty grids and empty sections of grids. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "imageWellBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list item gains the key focus, set to the index of the focused item.",
                "name": "itemFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list item is selected, itemSelected is set to the index of the selected item.",
                "name": "itemSelected",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "The second value of the vector specifies the vertical spacing between items in the list. The first value of the vector is ignored.",
                "name": "itemSpacing",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a list item loses the key focus, set to the index of the unfocused item.",
                "name": "itemUnfocused",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, this causes the list to immediately update so that the specified index moves into the focus position.",
                "name": "jumpToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1.0",
                "description": "Specifies an opacity value used to render the loading bitmap",
                "name": "loadingBitmapOpacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies a bitmap file to display while a grid item's poster is loading. To execute a seamless cross-fade transition between posters, set the \\*\\*loadingBitmapUri\\*\\* of the next poster to be shown to the uri of the currently displayed poster.",
                "name": "loadingBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the number of columns in the grid",
                "name": "numColumns",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "12",
                "description": "Specifies the number of visible rows displayed. The actual number of rows may be more or less than the number of visible rows specified depending on the number of items in the list content.",
                "name": "numRows",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "noScale",
                "description": "Provides automatic scaling of posters, if \\`useAtlas\\` is set to false. If you intend to load very large graphical images, such as larger than the user interface resolution, you must set one of the scaling options other than \\`noScale\\`, otherwise the image may fail to load. The following are the possible field values:\n\n| Option | Effect |\n| --- | --- |\n| noScale | No scaling |\n| scaleToFit | Scale the image to fit into the target screen element area, preserving the aspect ratio but \"letterboxing\" or \"pillarboxing\" the image (background-color bars at the top/bottom or left/right of the image) |\n| scaleToFill | Stretch the image width and height dimensions to fill the target screen element area, distorting the image if the target screen element area has a different aspect ratio than the image |\n| scaleToZoom | Scale the image to fill the target screen element area, preserving the aspect ratio but not \"letterboxing\" or \"pillarboxing\" the image, with some of the image cropped out |",
                "name": "posterDisplayMode",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "When specified, the rowHeights field specifies the heights of the poster for each row of the grid. This allows the height of each row of the grid to vary from row to row. The rowHeights values override the height specified in element 1 of the basePosterSize field. If the rowHeights array contains fewer elements than the number of rows needed to display all the items in the grid, element 1 of the basePosterSize field is used as the height of the excess rows.",
                "name": "rowHeights",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "When specified, the rowSpacings field specifies the spacing after each row of the grid. This allows the spacing between rows to vary from row to row. The rowSpacings values override the vertical spacing specified in element 1 of the itemSpacing field. If the rowSpacings array contains fewer elements than the number of rows needed to display all the items in the grid, element 1 of the itemSpacing field is used as the spacing after the excess rows.",
                "name": "rowSpacings",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "If the ContentNode specifies sections for a list or grid, specifies a custom bitmap to use as a visual divider between the sections of the list or grid. Only set this field to use a bitmap with a different appearance than the system default. For sections that do not include an icon or a title, the system default or custom bitmap specified as the \\`wrapDividerBitmapUri\\` field value is used for the section dividers. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default.",
                "name": "sectionDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the font for section divider labels",
                "name": "sectionDividerFont",
                "type": "font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "40",
                "description": "Specifies the height of the section dividers. The width of the section dividers is determined by the width of the list items as specified by the itemSize field width value.",
                "name": "sectionDividerHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Number of pixels to offset the left edge of the section divider relative to the left edge of the list items.",
                "name": "sectionDividerLeftOffset",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "117",
                "description": "Specifies the minimum width of the section divider bitmap. The section divider label will be ellipsized if necessary in order to ensure that the section divider bitmap meets the minimum width.",
                "name": "sectionDividerMinWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "10",
                "description": "Specifies the spacing between the items appearing in the section divider (e.g. the spacing between the section divider icon, the section divider label, and the section divider bitmap). Note the section divider does not always include an icon and/or a title.",
                "name": "sectionDividerSpacing",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the text color for section divider labels",
                "name": "sectionDividerTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If a caption background is specified, this field specifies whether or not to display the caption background when the caption text is empty",
                "name": "showBackgroundForEmptyCaptions",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Enables a performance optimization when most of the poster items displayed in the grid have the same size. The field value toggles the use of a texture atlas that stores the posters in the grid. The default is true, since in many cases, most of the posters in the grid have the same size as determined by the \\`basePosterSize\\` field value. In this case, using the texture atlas can provide a rendering performance benefit. For grids that have more complicated layouts, that include several posters that have sizes that differ from the value of \\`basePosterSize\\`, or for grids where there are only a few large posters (about five to eight, or posters that are about a quarter of the screen height or width) displayed at the same time, it is best for this field to be set to \\`false\\`.",
                "name": "useAtlas",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the bitmap file to use as a visual separator between the last and first list items when the list wraps. In most case, this should be a 9-patch image that specifies both expandable regions. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "wrapDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the height of the wrap divider, the visual separator between the last and first list items when the list wraps. The bitmap for the wrap divider is scaled to this height. The width of the wrap divider is set to the width of the list items as specified by the \\`itemSize\\` field width value.",
                "name": "wrapDividerHeight",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "PosterGrid",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/postergrid.md"
    },
    "progressbar": {
        "description": "Component that shows the progress of re-buffering, after video playback has started.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "A color to be blended with the graphical image specified in the `emptyBarImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.",
                "name": "emptyBarBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "A 9-patch or ordinary PNG of the bar presenting the remaining work to be done. This is typically displayed on the right side of the track, and is blended with the color specified in the `emptyBarBlendColor` field, if set to a non-default value.",
                "name": "emptyBarImageUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "This color will be blended with the graphical image specified in the `filledBarImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.",
                "name": "filledBarBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "A 9-patch or ordinary PNG of the bar that represents the completed portion of the work represented by this ProgressBar node. This is typically displayed on the left side of the track. This will be blended with the color specified by the `filledBarBlendColor` field, if set to a non-default value.",
                "name": "filledBarImageUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Sets a custom width for an instance of the ProgressBar node.",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "A 9-patch or ordinary PNG of the track of the progress bar, which surrounds the filled and empty bars. This will be blended with the color specified by the `trackBlendColor` field, if set to a non-default value.",
                "name": "percentage",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "This color is blended with the graphical image specified by `trackImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.",
                "name": "trackBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "A 9-patch or ordinary PNG of the track of the progress bar, which surrounds the filled and empty bars. This will be blended with the color specified by the `trackBlendColor` field, if set to a non-default value.",
                "name": "trackImageUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Sets a custom width for an instance of the ProgressBar node.",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "ProgressBar",
        "url": "https://developer.roku.com/en-ca/docs/references/scenegraph/media-playback-nodes/video.md#ui-fields"
    },
    "progressdialog": {
        "description": "> Roku OS 10.0 introduced a new [StandardProgressDialog node](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-progress-dialog.md\"**Standard Progress Dialog**\"), which features updated graphics and color palette support. This enables developers to provide a consistent user experience across the progress dialogs in their app. Developers should replace the legacy ProgressDialog nodes in their app with the new [StandardProgressDialog nodes](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-progress-dialog.md\"**Standard Progress Dialog**\").\n> \n> To upgrade a legacy progress dialog to the standard version, prepend \"Standard\" to the node type. For example, change `progressdialog = createObject(\"roSGNode\", \"ProgressDialog\")` to `progressdialog = createObject(\"roSGNode\", \"StandardProgressDialog\")`.\n\nExtends [**Dialog**](https://developer.roku.com/docs/references/scenegraph/dialog-nodes/dialog.md\"**Dialog**\")\n\nThe ProgressDialog node class is a special type of Dialog node that includes the dialog title region and a spinning icon as the body of the dialog. The ProgressDialog node class uses a BusySpinner node to display the spinning icon.\n\nThe message, bulleted text, graphic, and button regions of the dialog should all be empty. If those dialog regions are not empty, the layout of the dialog will likely not look correct.\n\n> Not all Roku Player hardware supports arbitrary rotations. In particular, some hardware only supports 90 degree rotation increments. In those cases, the icon will step through 90 degree, 180 degree, 270 degree and back to 0 degree rotations, rather than spin smoothly.",
        "events": [],
        "extends": {
            "name": "Dialog",
            "url": "https://developer.roku.com/docs/references/scenegraph/dialog-nodes/dialog.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Provides access to the BusySpinner node used by the ProgressDialog node so that the spinner icon and rotation direction can be customized",
                "name": "busySpinner",
                "type": "BusySpinner"
            }
        ],
        "interfaces": [],
        "name": "ProgressDialog",
        "url": "https://developer.roku.com/docs/references/scenegraph/dialog-nodes/progressdialog.md"
    },
    "radiobuttonlist": {
        "description": "Extends [**LabelList**](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/labellist.md\n\nThe RadioButtonList node class is a simple list class that can be used to display a list of mutually exclusive radio buttons. Each item in the list displays a text string and an optional check mark icon positioned to the left of the text string that indicates which of the radio buttons is currently selected.",
        "events": [],
        "extends": {
            "name": "LabelList",
            "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/labellist.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the check mark icon to use for the currently selected radio button list item when that list item does not have the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "checkedIconUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "-1",
                "description": "Specifies the index of the currently selected item in the list. The initial default value of -1 indicates that no radio button is currently selected. Setting the field changes the currently selected radio button list item to match the specified index.",
                "name": "checkedItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Controls whether or not pressing the remote control OK key causes the \\`checkedItem\\` field value to be automatically updated to the index of the currently focused list item. By default, the field value is set to true, but there are use cases where other behavior may be desired. In those cases, it is up to the developer to manage the currently selected radio button by setting the checkedItem field value to the desired index.",
                "name": "checkOnSelect",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the check mark icon to use for the currently selected radio button list item when that list item has the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusedCheckedIconUri",
                "type": "uri"
            }
        ],
        "interfaces": [],
        "name": "RadioButtonList",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/radiobuttonlist.md"
    },
    "rectangle": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe Rectangle node class draws a solid color rectangle with the top/left corner of the rectangle drawn at the origin of the node local coordinate system. Because the Rectangle node class extends the Group node class, it can have child nodes. For example, a Rectangle node might have a child Label node, resulting in text being drawn inside of a box.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies if the rectangle should be alpha blended with the nodes that are behind it",
                "name": "blendingEnabled",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Specifies the color of the rectangle",
                "name": "color",
                "type": "color (string containing hex value e.g. RGBA)"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the height of rectangle in local coordinates",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the width of the rectangle in local coordinates",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "Rectangle",
        "url": "https://developer.roku.com/docs/references/scenegraph/renderable-nodes/rectangle.md"
    },
    "rowlist": {
        "description": "Extends [**ArrayGrid**](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md\n\nThe RowList node class provides a vertically-scrollable list, containing rows of independent horizontally-scrollable individual items. Each item in a row can include a poster, but can also include much more complex sub-elements defined in an item component file, in the same way that items are defined in the [MarkupList](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markuplist.md and [MarkupGrid](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/markupgrid.md node classes. The RowList node class includes interface fields for customizing the appearance as the user scrolls up and down through the rows.\n\nLike those node classes, the RowList node class provides special interface fields to the item components to allow custom appearance and animations as the user scrolls left and right through the items in a row.\n\n> You can use the [ZoomRowList](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/zoomrowlist.md node class to enlarge the row in the RowList that currently has focus. In addition to providing a zoomed focus row, the ZoomRowList features custom row item and row decoration components, unique zooming amounts for individual rows, and separate heights for zoomed/unzoomed row items.",
        "events": [],
        "extends": {
            "name": "ArrayGrid",
            "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md"
        },
        "fields": [
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, causes the list to quickly scroll so that the specified row moves into the focus position.",
                "name": "animateToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "scroll speed",
                "name": "scrollSpeed",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Specifies the content for the list. The content should be a single ContentNode that has one child ContentNode for each row. These child ContentNodes for each row should themselves contains child ContentNodes for each item in the row. See \\[Data Bindings\\](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/rowlist.mddata-bindings) below for more details.",
                "name": "content",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Indicates which column of the currently focused row in a RowList component currently has focus. This field is typically used to implement a horizontal pagination mechanism for the currently focused row. If this value is set to 3.7, it means that item 3 occupies 30% of the currently focused row while item 4 occupies 70% of it. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render.",
                "name": "currFocusColumn",
                "type": "float"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "This field provides access to the current opacity of the focus feedback indicator. It can be used to have other items on the screen fade in/out when the focus feedback indicator fades in/out. Note: This field is defined on \\[ArrayGrid\\](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md and thus is inherited by all of the following components: LabelList, MarkupList, PosterGrid, MarkupGrid, RowList, CheckList, and RadioButtonList.",
                "name": "currFocusFeedbackOpacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether or not the focus indicator bitmap is displayed.",
                "name": "drawFocusFeedback",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the focus indicator bitmap is drawn below or on top of the list items.",
                "name": "drawFocusFeedbackOnTop",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "When set to true, the focus feedback indicator will quickly fade out when scrolling multiple items and fade back in when the scrolling ends. The focus feedback indicator will also after in and out when using the FFW/Rewind keys to scroll a page at a time. Note: This field is defined on \\[ArrayGrid\\](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md and thus is inherited by all of the following components: LabelList, MarkupList, PosterGrid, MarkupGrid, RowList, CheckList, and RadioButtonList.",
                "name": "fadeFocusFeedbackWhenAutoScrolling",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1.0",
                "description": "Specifies an opacity value used to render the failed bitmap.",
                "name": "failedBitmapOpacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies a bitmap file to display when a list item poster fails to load.",
                "name": "failedBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by \\`focusBitmapUri\\`.",
                "name": "focusBitmapBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list has focus. In most cases, this should be a \\[9-patch image\\](https://image.roku.com/ZHZscHItMTc2/focus-9.png) that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file used for the focus indicator when the list does not have focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "focusFootprintBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Blend the graphic image specified by \\`focusFootprintBitmapUri\\` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by \\`focusFootprintBitmapUri\\`.",
                "name": "focusFootprintBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the x-dimension offset of the first fully visible item in each row relative to the left edge of the list. In most cases, the first fully visible item in each row will be positioned at the left edge of the list, so this field does not need to be specified. If the array contains fewer elements than the number of rows in the data model, the last value in the array is used as the x-dimension offset for the extra rows. If the array contains no values, the default x-dimension offset of 0.0 is used.",
                "name": "focusXOffset",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file to use to suggest where images would appear for empty lists.",
                "name": "imageWellBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "For each row, a value of true indicates that a \"+\" character should be appended to the \"total\\\\\\_number\\\\\\_of\\\\\\_items\" label in the UI (which should be the case when there are unfetched pages beyond what is currently accessible/visible, e.g., \"Item 4 of 30+\").",
                "name": "indefiniteRowItemCount",
                "type": "array of Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the name of an XML component for the items in each row. An instance of this component is created on demand for each visible item of each row. The XML component must define a specific interface as detailed in \\[RowList XML Component\\](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/rowlist.mdrowlist-xml-component) below.",
                "name": "itemComponentName",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a row gains the key focus, set to the index of the focused row.",
                "name": "itemFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When an item is selected, set to the index of the selected row.",
                "name": "itemSelected",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Specifies the width and height of rows in the list. Note that this the width of the entire row, not the width of the posters in the row.",
                "name": "itemSize",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Specifies the spacing between rows in the list. The y-dimension of the vector specifies the vertical spacing between rows, and the x-dimension is ignored.",
                "name": "itemSpacing",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a row loses the key focus, set to the index of the unfocused row.",
                "name": "itemUnfocused",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, causes the list to immediately update so that the specified row moves into the focus position.",
                "name": "jumpToItem",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "[ ]",
                "description": "When set to a valid \\\\\\[ row, col \\\\\\] index pair, causes the list to immediately update so that the specified row, col item moves into the focus position.",
                "name": "jumpToRowItem",
                "type": "array of integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1.0",
                "description": "Specifies an opacity value used to render the loading bitmap.",
                "name": "loadingBitmapOpacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies a bitmap file to display while a list item poster is loading. To execute a seamless cross-fade transition between posters, set the \\*\\*loadingBitmapUri\\*\\* of the next poster to be shown to the uri of the currently displayed poster.",
                "name": "loadingBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the number of visible rows in the list. Note that the actual number of rows may be more or less than the number of visible rows depending on the number of items in the list content.",
                "name": "numRows",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Field provides greater control over the UX. When set, this value specifies the location of the right edge of the row counter relative to right edge of the RowList's clipping rectangle. If not set, the right edge of the row counter is positioned to equal the left offset of the row title.",
                "name": "rowCounterRightOffset",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "floatingFocus",
                "description": "Specifies the how the focus indicator moves in a row of items in response to the remote direction pad Left and Right key presses. The possible values are:\n\n| Option | Effect |\n| --- | --- |\n| floatingFocus | Causes the focus indicator to float left or right until it reaches the end of the row, at which point the focus indicator will stay fixed on the first or last item in the row, and the items will scroll left or right if there were items that were not visible. |\n| fixedFocusWrap | Causes the row to wrap around when the focus indicator reaches the first or last item in the row, as long as the row contains enough items to fill the row. If the row does not contain enough items to fill the row, the focus indicator will float left and right. |\n| fixedFocus | Causes the focus to stay fixed on the first item in each row. As the user scrolls, the previous selected item goes off the screen. Scrolling continues until the last item is reached with no wrapping. |",
                "name": "rowFocusAnimationStyle",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the heights of each row of the list. This allows the height of each row of the list to vary from row to row. The values override the height specified in the y-dimension value of the \\`itemSize\\` field. If the array contains fewer elements than the number of rows in the data model, the y-dimension value of the \\`itemSize\\` field is used as the height of the extra rows.",
                "name": "rowHeights",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "[ ]",
                "description": "When an item gains the key focus, set to a 2-element array, where element 0 contains the index of the focused row, and element 1 contains the index of the focused item in that row.",
                "name": "rowItemFocused",
                "type": "array of integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "[ ]",
                "description": "When an item is selected, set to a 2-element array, where element 0 contains the index of the row containing the selected item, and element 1 contains the index of the selected item in that row.",
                "name": "rowItemSelected",
                "type": "array of integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the width and height of the items in each row. The array of values must include at least one element. If the array contains fewer elements than the number of rows in the data model, the last value in the array is used as the size for the extra rows.",
                "name": "rowItemSize",
                "type": "array of vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the spacing between items in each row. The x-dimension of each array value specifies the horizontal spacing between list items in the corresponding row. If the array contains fewer elements than the number of rows in the data model, the last value in the array is used as the spacing for the extra rows. If the array contains no values, no space will be included between list items in all rows.",
                "name": "rowItemSpacing",
                "type": "array of vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xffffffff",
                "description": "Specifies the color of the row and \"\\`item\\_number of total\\_number\\_of\\_items\\`\" labels.",
                "name": "rowLabelColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the font for the row and \"\\`item\\_number of total\\_number\\_of\\_items\\`\" labels.",
                "name": "rowLabelFont",
                "type": "font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Specifies the offset of the row label for each row. The x-dimension specifies the horizontal offset of the label from the left edge of the row. The y-dimension component specifies the vertical spacing between the label and the list items in the row. If the array contains fewer elements than the number of rows in the data model, the last value in the array is used as the offset for the labels of the extra rows. If the array specified contains no values, a default offset value of \\\\\\[0,0\\\\\\] is used.",
                "name": "rowLabelOffset",
                "type": "array of vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the spacing after each row of the list. This allows the spacing between rows to vary from row to row. The values override the vertical spacing specified in y-dimension value of the \\`itemSpacing\\` field. If the array contains fewer elements than the number of rows in the data model, the y-dimension value of the \\`itemSpacing\\` field is used as the spacing after the extra rows.",
                "name": "rowSpacings",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the name of an XML component to render titles in place of the row label. This component must extend from \\[Group\\](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md. If this component defines a \"content\" field, it will be set to the row's content. If this component defines a \"rowCounterVertAlign\" field (possible values are \"top\", \"center\", and \"bottom\"), the row counter's vertical alignment is respective of the row title component.",
                "name": "rowTitleComponentName",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies whether the \"item\\\\\\_number of total\\\\\\_number\\\\\\_of\\\\\\_items\" label on the right edge of each row is displayed. Note that the \"item\\\\\\_number of total\\\\\\_number\\\\\\_of\\\\\\_items\" label is only displayed for the focused row even if the \\`showRowCounter\\` field value for that row is set to true. If the array contains fewer elements than the number of rows in the data model, the last value in array is used to control the display of the \"item\\\\\\_number of total\\\\\\_number\\\\\\_of\\\\\\_items\" label for the extra rows. If the array contains no values, no \"item\\\\\\_number of total\\\\\\_number\\\\\\_of\\\\\\_items\" labels are displayed.",
                "name": "showRowCounter",
                "type": "array of Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Field provides greater control over the UX. When set to true, the row counter is shown for all rows. When set to false, the row counter is not shown for rows where all items fit onscreen.",
                "name": "showRowCounterForShortRows",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies whether the row label on the left edge of each row is displayed. If the array contains fewer elements than the number of rows in the data model, the last value in array is used to control the display of the row label for the extra rows. If the array contains no values, no row labels are displayed.",
                "name": "showRowLabel",
                "type": "array of Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "This field is only supported when \\`rowFocusAnimationStyle = \"fixedFocusWrap\"\\` By default, all items in a row of the RowList node have the same width and height. By setting \\`variableWidthItems\\` to true for a row, the items in the row will continue to have the same height, but the width will be taken from the \\`\\[SD/HD/FHD\\]ItemWidth\\` field of the ContentNode associated with each item. See \\[Data Bindings\\](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/rowlist.mddata-bindings) below for more details. \\`variableWidthItems\\` is an array with one element per row in the RowList. If there are fewer elements than rows in the RowList, the last value in the array is repeated. If all rows of the RowList have variable widths, you can set \\`variableWidthItems=\"\\[true\\]\"\\` or \\`variableWidthItems=\"true\"\\`. The \\`\\[SD/HD/FHD\\]ItemWidth\\` values specified should match the \\`ui\\_resolutions\\` attribute in the manifest. Example: If you only specify \\`ui\\_resolutions=fhd\\`, you should only set \\`FHDItemWidth\\` and allow the device to autoscale when rendering for HD and SD display modes. If you specify \\`ui\\_resolutions=hd\\`,fhd, you can set \\`HDItemWidth\\` and \\`FHDItemWidth\\`. If any item does not specify the \\`\\[SD/HD/FHD\\]ItemWidth\\` in its ContentNode for a variable width row, the \\`x\\` value of the RowList's \\`rowItemSize\\` field for that row is used as the \\`width\\` for that item.",
                "name": "variableWidthItems",
                "type": "array of Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "fixedFocus",
                "description": "Specifies the how the focus indicator moves in a list or a column of grid items in response to the remote direction pad Up and Down key presses. The possible values are:\n\n| Option | Effect |\n| --- | --- |\n| floatingFocus | Causes the focus indicator to float up or down until it reaches the end of the list, at which point the focus indicator will stay fixed on the first or last row in the list, and the rows will scroll up or down if there are rows that were not visible. |\n| fixedFocusWrap | Causes the column to wrap around when the focus indicator reaches the first or last row in the list, as long as the list contains enough rows to fill the list. If the list does not contain enough rows to fill the list, the focus indicator will float up and down. |\n| fixedFocus | Causes the focus to stay fixed on the upper row. As the user scrolls down, the row containing the previously selected item scrolls up off screen. Scrolling continues until the last row is reached. |",
                "name": "vertFocusAnimationStyle",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the bitmap file to use as a visual separator between the last and first list items when the list wraps. In most case, this should be a 9-patch image that specifies both expandable regions. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.",
                "name": "wrapDividerBitmapUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the height of the divider. The wrap divider bitmap will be scaled to this height. The width of the wrap divider is set to the width of the list items (that is, the x-dimension value of the \\`itemSize\\` field).",
                "name": "wrapDividerHeight",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "RowList",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/rowlist.md"
    },
    "rsgpalette": {
        "availableSince": "9.4",
        "description": "Extends [Node](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe **RSGPalette** node allows developers to specify a named set of color values that can be shared among nodes that support RSGPalette colors.\n\nNodes that support RSGPalette colors include a **palette** field, which can be set to an **RSGPalette** node to override the default colors used by the node. The specific palette values used by those nodes are defined in each node's documentation.\n\nIf a node that supports a palette does not set its **palette** filed, the RSGPalette is inherited from ancestor nodes in the scene graph. Specifically, the node looks up the scene graph until it finds a **PaletteGroup** node with its **palette** field set. This may be found in the **Scene** itself.\n\nIf no node in the scene graph has its **palette** field set, the keyboard uses the default palette (gray background/white text).\n\nCurrently, the **RSGPalette** node is typically used in channels that customize the colors of the dynamic keyboard nodes. In this case, the channel assigns the RSGPalette node to the **palette** field of the [DynamicKeyboardBase](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md\"DynamicKeyboardBase\") node and lets the keyboard's **DynamicKeyGrid** and **VoiceTextEditBox** inherit that RSGPalette.\n\n> The colors in the RSGPalette do not cascade. If a child node overrides its parent's RSGPalette node, that RSGPalette should specify values for all the colors used by the node. Unspecified values will use the system default colors.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Specifies an associative array of color name/color key-value pairs. For example: \\`\\`\\` { PrimaryTextColor: 0x111111FF, FocusColor: 0x0000FFFF } \\`\\`\\` .",
                "name": "colors",
                "type": "associative array"
            }
        ],
        "interfaces": [],
        "name": "RSGPalette",
        "url": "https://developer.roku.com/en-ca/docs/references/scenegraph/scene.md"
    },
    "scene": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe **Scene** node class serves as the root of a SceneGraph node tree. Every **roSGScreen** object must have a **Scene** node, or a node that derives from the **Scene** node class as its root, including an XML markup component that extends the Scene node class or subclass. That node must be created using the **roSGScreen** createScene() function, with an argument that is a string of the name of the **Scene** node object created. For example:\n\n```\nscreen = CreateObject(\"roSGScreen\")\nscene = screen.CreateScene(\"Scene\")\n```\n\nWhile it is technically possible to have more than one scene per app, we recommend you only have one **roSGScreen** and one **Scene** node. Child nodes of the scene can be treated as different \"scenes\" where you can then implement transitions between them.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If true, a Back key press causes the scene to exit, back to the last user-focused item. If false, a Back key press does not cause the scene to exit. In order for the Back key to cause the scene to exit, the remote control focus must be explicitly set on the scene, or a child of the scene, using the \\[ifSGNodeFocus\\](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodefocus.md\"ifSGNodeFocus\") interface setFocus(true) function. A Home key press always causes the scene to exit.",
                "name": "backExitsScene",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0x000000FF",
                "description": "Loads an image using the provided background URI as-is and does not apply any scaling whatsoever when \"limitBackgroundToUIResolution\" is false. Specifies a background color for the scene. This color is only used if the backgroundURI field is set to an empty string. For example: scene.backgroundColor=\"0xEB1010FF\" scene.backgroundUri = \"\"",
                "name": "backgroundColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Specifies a graphic image file to be used for the Scene node background.",
                "name": "backgroundURI",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "This read-only field is set when the Scene is initialized. It indicates which of an app's design resolutions (per manifest's ui\\\\\\_resolutions value) is being used, based on the player model and connected display type. Previously, a developer could deduct the same information by using both \\[roDeviceInfo.GetUIResolution\\](https://developer.roku.com/docs/references/brightscript/interfaces/ifdeviceinfo.mdgetuiresolution-as-object() \"roDeviceInfo.GetUIResolution\") and \\[roAppInfo.getValue\\](https://developer.roku.com/docs/references/brightscript/interfaces/ifappinfo.mdgetvaluekey-as-string-as-string \"roAppInfo.getValue\")(\"ui\\\\\\_resolutions\"). This new field simplifies the process. The field is set to an AA with two numeric-valued keys — width and height — as well as a string value indicating the current design resolution (\"HD\", \"FHD\" or \"SD\"). \\`\\`\\` Brightscript Debugger> ? myNode.getScene().currentDesignResolution \\= { height: 720 resolution: \"HD\" width: 1280 } \\`\\`\\`",
                "name": "currentDesignResolution",
                "type": "assocarray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Setting this field to a node extended from a \\*\\*Dialog\\*\\* node causes the dialog to be displayed",
                "name": "dialog",
                "type": "Node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If the scene background URI is overridden with a non-theme value and this field is set to true, the \\*\\*backgroundURI\\*\\* image is limited to the current screen size after being loaded. if this field is set to false, the \\*\\*backgroundURI\\*\\* image is loaded without any scaling applied.",
                "name": "limitBackgroundToUIResolution",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not set",
                "description": "Defines the default color palette used by those nodes that have a \\*\\*palette\\*\\* field (for example, the \\*\\*Scene\\*\\* node, \\[standard dialogs\\](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md, \\[dynamic custom voice keyboards\\](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md, and so on). Apps typically set the \\*\\*Scene.palette\\*\\* field to consistently color the standard dialogs and keyboards in the app. Nodes that include a \\*\\*palette\\*\\* field can be set to an \\*\\*RSGPalette\\*\\* node to override the default colors specified in the \\*\\*Scene\\*\\* node. If a node that supports a palette does not set its \\*\\*palette\\*\\* filed, the node looks up the scene graph until it finds a node with its \\*\\*palette\\*\\* field set. If no ancestor node is found with its palette field set, the default color palette is used (grey with white text). The RSGPalette color values used by the Scene node are as follows:\n\n| Palette Color Name | Usages |\n| --- | --- |\n| PrimaryTextColor | The text color used for the entered text displayed in the VoiceTextEditBox node. |\n| SecondaryTextColor | The text color used for the hints displayed in the VoiceTextEditBox. |\n| InputFieldColor | The blend color applied to the VoiceTextEditBox background |\n| DialogBackgroundColor | Blend color for dialog's background bitmap. |\n| DialogItemColor | Blend color for the following items:    *   [StdDlgProgressItem's](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md spinner bitmap *   [StdDlgDeterminateProgressItem's](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md graphic   |\n| DialogTextColor | Color for the text in the following items:    *   [StdDlgTextItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md and [StdDlgGraphicItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md if the **namedTextStyle** field is set to \"normal\" or \"bold\". *   All [content area items](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md, except for [StdDlgTextItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md and [StdDlgGraphicItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md. *   [Title area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.mdfields). Unfocused button.   |\n| DialogFocusColor | Blend color for the following:    *   The [button area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.mdfields) focus bitmap. *   The focused scrollbar thumb.   |\n| DialogFocusItemColor | Color for the text of the focused button. |\n| DialogSecondaryTextColor | Color for the text of in the following items:    *   [StdDlgTextItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md and [StdDlgGraphicItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md if the **namedTextStyle** field is set to \"secondary\". *   Disabled button.   |\n| DialogSecondaryItemColor | Color for the following items:    *   The divider displayed below the title area. *   The unfilled portion of the [StdDlgDeterminateProgressItem's](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md graphic.   |\n| DialogInputFieldColor | The blend color for the text edit box background bitmap for keyboards used inside dialogs. |\n| DialogKeyboardColor | The blend color for the keyboard background bitmap for keyboards used inside dialogs |\n| DialogFootprintColor | The blend color for the following items:    *   The button focus footprint bitmap that is displayed when the [button area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.mdfields) does not have focus. *   Unfocused scrollbar thumb and scrollbar track.   |",
                "name": "palette",
                "type": "RSGPalette node"
            }
        ],
        "interfaces": [],
        "name": "Scene",
        "url": "https://developer.roku.com/docs/references/scenegraph/scene.md"
    },
    "scrollabletext": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe ScrollableText node class provides an interactive, vertically scrolling pane of text. This is typically used to display several paragraphs of text to the user that are too long to fit onto the display, such as a license agreement.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the text color",
                "name": "color",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the Font node to be used",
                "name": "font",
                "type": "Font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the height of the node. If the text to be displayed is larger than this height, a scrollbar is automatically added on the right, allowing users to scroll up and down using the remote's arrow keys",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "left",
                "description": "See \\[Horizontal Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Horizontal Alignment\")",
                "name": "horizAlign",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "8",
                "description": "If the text is displayed on more than one line, specifies the amount of additional space added between lines",
                "name": "lineSpacing",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the default scrollbar thumb. This should be a 9-patch image so that it can be stretched to the appropriate size",
                "name": "scrollbarThumbBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of an image file to be loaded to replace the default scrollbar track. This should be a 9-patch image so that it can be stretched to the appropriate height specifed by the height field",
                "name": "scrollbarTrackBitmapUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the text to be displayed",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "top",
                "description": "See \\[Vertical Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Vertical Alignment\")",
                "name": "vertAlign",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the width of the node. This includes both the area where the text is rendered in addition to the scroll bar on the right",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "ScrollableText",
        "url": "https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollabletext.md"
    },
    "scrollinglabel": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe ScrollingLabel node class provides an automatic way to make a string scroll horizontally if it does not fit within the specified width. If the string can be drawn within the specified maximum width it is just drawn. If it does not fit within the specified maximum width, it is drawn with an ellipsis (...) at the end, then it transitions to the full string, clipped to the maximum width that scrolls left to right until the end of the string is visible, then transition back to the partial string with the ellipsis at the end. By default, this repeats continuously unless the repeatCount field is set to limit the number of times the scrolling occurs.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the text color",
                "name": "color",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the Font node to be used",
                "name": "font",
                "type": "Font"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the height of the label. If set to zero, the actual height is determined by the value of the numLines field if it is greater than zero. See \\[Vertical Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Vertical Alignment\")",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "left",
                "description": "See \\[Horizontal Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Horizontal Alignment\")",
                "name": "horizAlign",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "500",
                "description": "Specifies the maximum width of the rendered text. If the rendered text exceeds the maximum width, the scrolling behavior is automatically triggered",
                "name": "maxWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "-1",
                "description": "If set to the default value of -1, the text scrolling behavior repeats continuously. If set to zero, the text will remain ellipsized and never scroll. If set to a value greater than zero, the text will scroll the specified number of times, at the end of which the text is rendered with an ellipsis at the end",
                "name": "repeatCount",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "100",
                "description": "Specifies the horizontal scrolling speed in pixels per second",
                "name": "scrollSpeed",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the text to be displayed",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "top",
                "description": "See \\[Vertical Alignment\\](https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.mdalignment \"Vertical Alignment\")",
                "name": "vertAlign",
                "type": "option string"
            }
        ],
        "interfaces": [],
        "name": "ScrollingLabel",
        "url": "https://developer.roku.com/docs/references/scenegraph/typographic-nodes/scrollinglabel.md"
    },
    "sequentialanimation": {
        "description": "Extends [**AnimationBase**](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/animationbase.md\n\nThe SequentialAnimation node class allows you to specify that a set of animations should occur sequentially. The children of the SequentialAnimation node specify the set of animations to be executed. Note that the use of the delay field in the child animations allows a delay between any two animations to be specified, if desired.\n\nThe state field is set to running when any of the child animations is in progress. Once all the animations have run to completion, the state field is set to stopped.",
        "events": [],
        "extends": {
            "name": "AnimationBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/abstract-nodes/animationbase.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "SequentialAnimation",
        "url": "https://developer.roku.com/docs/references/scenegraph/animation-nodes/sequentialanimation.md"
    },
    "simplelabel": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe SimpleLabel node class is used to display a single line of text. SimpleLabel is a lightweight complement to the Label node. It supports simplified font style specification and is more memory efficient than the Label node.\n\nThe SimpleLabel node class supports:\n\n*   Specifying either a built-in system font or a TrueType/OpenType font file\n*   Specifying the color of the font\n*   Customizable Horizontal and Vertical origin\n\nThe following shows a text layout derived from the SimpleLabel node:\n\n![roku815px - simpleLabel node](https://image.roku.com/ZHZscHItMTc2/simplelabel.png \"simplelabel\")\n\nWith ui\\_resolutions=hd specified in the manifest, the following displays the text string \"Application Development Made Easy!\" using the medium bold system font, centered horizontally on display, and with the baseline of the text at the vertical center of the display.\n\n```\n<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n\n<!--********** Copyright 2018 Roku Corp.  All Rights Reserved. **********-->\n\n<component name=\"simpleLabeltest\" extends=\"Group\" >\n\n<script type=\"text/brightscript\" >\n<![CDATA[\n\n  sub init()\n    m.top.setFocus(true)\n  end sub\n\n]]>\n</script>\n\n<SimpleLabel\n  id=\"testLabel\"\n  font=\"fontUri:MediumBoldSystemFont\"\n  text = \"Application Development Made Easy!\"\n  horizOrigin = \"left\"\n  vertOrigin = \"baseline\"\n  translation=\"[640,360]\" />\n\n</component>\n```",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "renderLast",
                "description": "| Option | Description |\n| --- | --- |\n| `\"renderFirst\"` | any drawing done by this node will be done **before** the node children are rendered |\n| `\"renderLast\"` | any drawing done by this node will be done **after** the node children are rendered |",
                "name": "childRenderOrder",
                "type": "option as string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ 0.0, 0.0, 0.0, 0.0 ]",
                "description": "Specifies a rectangle in the node local coordinate system that is used to limit the region where this node and its children can render. If a non-empty rectangle is specified, then all drawing by this node and its children will be limited to that rectangular area. \\* \\`ClippingRects\\` can be specified by the node or by any of its ancestors in the SceneGraph. \\* \\`ClippingRects\\` are automatically set by some nodes such as lists and grids. \\* \\`ClippingRects\\` are always clipped to the screen boundaries, so if a \\`clippingRect\\` is specified that is partially or completely offscreen, it will be clipped to the screen boundaries. With respect to render tracking, although the node could be completely within the bounds of the specified \\`clippingRect\\`, it's \\`renderTracking\\` field could be set to \\`\"none\"\\` if the portion of the \\`clippingRect\\` it occupies is completely offscreen.",
                "name": "clippingRect",
                "type": "array of float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xddddddff",
                "description": "Specifies the text color",
                "name": "color",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If true, renderTracking will be set to a string describing how much of the node is rendered on screen",
                "name": "enableRenderTracking",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies the size of the font in points. As noted in the description of the \\`fontUri\\` field, the use of fixed size system fonts ignores the value of the \\`fontSize\\` field.",
                "name": "fontSize",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Specifies either a path to a TrueType or OpenType font file or a built-in system font name. For TrueType or OpenType font files, the file must be included with the application (e.g. \\`pkg:/fonts/SomeFontFile.ttf\\`). If no fontUri is specified, the System Default font is used. The table below shows the options for using built-in system fonts. The \"\\*\\*Fixed Size?\"\\*\\* column indicates whether the \\`fontSize\\` field of the \\*\\*SimpleLabel\\*\\* is respected or not. For those where the size is fixed, the font size cannot be modified.\n\n| fontUri String | Fixed Size? |\n| --- | --- |\n| `font:SmallestSystemFont` | Yes |\n| `font:SmallSystemFont` | Yes |\n| `font:MediumSystemFont` | Yes |\n| `font:LargeSystemFont` | Yes |\n| `font:SmallestBoldSystemFont` | Yes |\n| `font:SmallBoldSystemFont` | Yes |\n| `font:MediumBoldSystemFont` | Yes |\n| `font:LargeBoldSystemFont` | Yes |\n| `font:SystemFontFile` | No |\n| `font:BoldSystemFontFile` | No |\n| System Default (field not set) | Yes |",
                "name": "fontUri",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "left",
                "description": "See \\[\\*\\*Horizontal Origin\\*\\*\\](https://developer.roku.com/docs/references/scenegraph/renderable-nodes/simplelabel.mdSimpleLabel-HorizontalOrigin)",
                "name": "horizOrigin",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If true, the node opacity is determined by multiplying opacity attribute of the node by the opacity of the parent node, which may have been determined by multiplying the opacity of its ancestor nodes. If false, the node opacity is determined by the opacity attribute set for the node or the default opacity attribute value",
                "name": "inheritParentOpacity",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If true, the node overall transformation is determined by combining the accumulated transformation matrix of all of its ancestors in the SceneGraph with the node local 2D transformation matrix described by its translation, rotation, scale and scaleRotateCenter fields. If false, the accumulated transformation of all of its ancestors in the SceneGraph is ignored and only the node local transformation matrix is used. This causes the node to be transformed relative to the root of the SceneGraph (that is, the Scene component)",
                "name": "inheritParentTransform",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Set to true to suppress the default CVAA text to speech. This allows apps to provide their own custom implementation",
                "name": "muteAudioGuide",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1.0",
                "description": "Sets the opacity of the node and its children. Opacity is the opposite of transparency. Opacity values range from 0.0 (fully transparent) to 1.0 (fully opaque). As the SceneGraph is traversed, the opacity values are combined by multiplying the current accumulated opacity with the node opacity, so that if the accumulated opacity of a node ancestors is 0.25 (75% transparent), the node will have opacity of 0.25 or less. This allows entire branches of the SceneGraph to fade in and out by animating the opacity of the node at the root of the branch",
                "name": "opacity",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Used in combination with the numRenderPasses field of nodes extended from the \\[ArrayGrid\\](https://developer.roku.com/docs/references/scenegraph/abstract-nodes/arraygrid.md\"ArrayGrid\") abstract node class, to optimize rendering of lists and grids. This should never be set to a non-zero value unless you are optimizing the performance of a list or grid rendering by specifying the sequence of rendering operations for sub-elements of the list or grid items, and have set the numRenderPasses field value for the list or grid to a value greater than 1. If the numRenderPasses field value for the list or grid is set to a value greater than 1, you must set this field to a value greater than 0 for all sub-elements of the list or grid items, and not greater than the numRenderPasses field value. If the numRenderPasses field is set to a value greater than 1, and you set this field for a list or grid item sub-element to 0 (the default), or a value greater than the numRenderPasses field value, the list or grid item sub-element will not render",
                "name": "renderPass",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "disabled",
                "description": "renderTracking is set to \"disabled\" when enableRenderTracking is set to false. The following options are only available when enableRenderTracking is set to true:\n\n| Option | Description |\n| --- | --- |\n| `\"none\"` | renderTracking is set to `\"none\"` if **one or more** of these conditions is true:   the node's `visible` field is set to `false`the node's `opacity` field is set to `0.0`no `clippingRect` is specified and the node is completely offscreena `clippingRect` is specified and the node lies completely outside that `clippingRect's` coordinates or is completely offscreen |\n| `\"partial\"` | renderTracking is set to `\"partial\"` if **all** of the following conditions are true:   the node's `visible` field is set to `true`the node's `opacity` field is greater than `0.0`no `clippingRect` is specified and the node is partially offscreena `clippingRect` is specified and the node lies partially inside the `clippingRect's` coordinates |\n| `\"full\"` | renderTracking is set to `\"full\"` if **all** of the following conditions are true:   the node's `visible` field is set to `true`the node's `opacity` field is greater than `0.0`no `clippingRect` is specified and the node is completely onscreena `clippingRect` is specified and the node lies completely inside the `clippingRect's` coordinates |",
                "name": "renderTracking",
                "type": "option as string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Defines the rotation angle about the scaleRotateCenter point (in radians) of the node local coordinate system. Positive values specify a counterclockwise rotation, negative values specify a clockwise rotation. For some Roku Player hardware, specifically Roku Players without OpenGL graphics support, only rotations of 0, 90, 180 and 270 degrees (in equivalent radians) are supported. (See \\[Roku Models and Features\\](/docs/specs/hardware.md#current-models \"Roku Models and Features\") for information on OpenGL support)",
                "name": "rotation",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[1.0,1.0]",
                "description": "Defines the scale factor to be applied to the node local coordinate",
                "name": "scale",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0.0,0.0]",
                "description": "Describes the location of a point in the node local coordinate that serves as the center of the scale and rotation operations",
                "name": "scaleRotateCenter",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the text to be displayed",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0.0,0.0]",
                "description": "Defines the origin of the node local coordinate system relative to its parent node",
                "name": "translation",
                "type": "vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "top",
                "description": "See \\[\\*\\*Vertical Origin\\*\\*\\](https://developer.roku.com/docs/references/scenegraph/renderable-nodes/simplelabel.mdSimpleLabel-VerticalOrigin)",
                "name": "vertOrigin",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If true, the node and its children are rendered. If false, the node and its children do not render",
                "name": "visible",
                "type": "Boolean"
            }
        ],
        "interfaces": [],
        "name": "SimpleLabel",
        "url": "https://developer.roku.com/docs/references/scenegraph/renderable-nodes/simplelabel.md"
    },
    "soundeffect": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe SoundEffect node class is used to play audio sound effects that can be triggered from events that occur in the UI. Typically, these sound effects are short audio clips, but there is no inherent limit on their length. Currently, up to four simultaneous sounds can be playing at any time, in addition to audio from streaming content and TextToSpeech audio.\n\nFiles can be installed locally as part of the package file or dynamically downloaded from the network. All files must be WAV (i.e. PCM) format.\n\nFor local files, the convention is to include the WAV files in a directory named \"sounds\".\n\nFor downloaded files, a least-recently-used (LRU) mechanism is used to keep the most recently downloaded/played sounds in temporary storage on the device. If the limits on the maximum number/size of downloaded sounds is exceeded, the least recently used sounds are removed from temporary storage. They will be automatically reloaded the next time the control field is set to \"play\".\n\nA sample demonstrating how to use the SoundEffect node can be found here: [SimpleSoundEffect](https://github.com/rokudev/samples/blob/master/media/SimpleSoundEffect)",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Set to control the audio playback. Getting the value of this field returns the most recent value set, or none if no value has been set.\n\n| Option | Effect |\n| --- | --- |\n| none | No effect |\n| play | Start playing the audio. If the audio is already playing, it will be restarted.      If the `loadStatus` field is not \"ready\", the sound will not be played and the `state` field will be set to \"notready\".      For networked files with the `loadStatus` field set to \"flushed\", setting `control` to \"play\" will automatically trigger a reload of the network file, but will not result in the sound being played, due to the time it takes to download the file again. In this case, the sound can be played once the `loadStatus` field changes from \"flushed\" to \"ready\" |\n| stop | If the audio is playing, stop playing the audio. If the audio is not playing, no effect. |",
                "name": "control",
                "type": "option string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "none",
                "description": "Indicates the status of the sound file.\n\n| Value | Meaning |\n| --- | --- |\n| none | No file has been requested. |\n| loading | (network files only) The file has been requested and is being downloaded. |\n| ready | The file is ready to be played (i.e. it is on the device and is a valid WAV file). |\n| failed | The file path or URI is incorrect or refers to a file that is not a valid WAV file. |\n| flushed | (network files only) The file was ready, but has been deleted from the LRU cache. Setting the `control` field to play will cause the file to be automatically reloaded, but not be played upon completion. |",
                "name": "loadStatus",
                "type": "value string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "none",
                "description": "Can be used to track the progress of current state of local and networked sound files When the field value changes to ready, the sound is ready to be played. The possible values are:\n\n| Value | Meaning |\n| --- | --- |\n| none | No current playback state |\n| playing | Audio is currently playing. |\n| stopped | The audio playback was stopped by setting control to \"stop\". The state will also be set to \"stopped\" if audio was playing and the uri is changed. |\n| finished | The audio playback reached the end of the audio |\n| toomanysounds | Control was to \"play\" while there were already the maximum number of SoundEffect sounds playing. Currently, this limit is 4. |\n| notready | The sound file is not on the device. This is set in response to the control field being set to \"play\".      For local WAV files included in a package file, it will be occur if the path to the file is not correct, or if the file is not a valid WAV file.      For network-accessed WAV files, this indicates one of these three conditions is true:       *   The file has been requested, but is not finished downloading. In this case, the `loadStatus` field will be set to \"loading\". *   The file request has completed, but the URL is incorrect or the downloaded file is not a valid WAV filed. In this case, the `loadStatus` field will be set to \"failed\" *   The file has previously been downloaded, but has been flushed from the LRU cache. In this case, the `loadStatus` field will be set to \"flushed\".   |",
                "name": "state",
                "type": "value string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the URI of the WAV file. Sounds included as part of the application package can be referenced using the \\`pkg:/sounds\\` prefix. This may also specify the location of a WAV file on a remote server.",
                "name": "uri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "50",
                "description": "The volume is a number between 0 and 100 (percentage of full volume). 50 should be used for normal volume.",
                "name": "volume",
                "type": "integer"
            }
        ],
        "interfaces": [],
        "name": "SoundEffect",
        "url": "https://developer.roku.com/docs/references/scenegraph/media-playback-nodes/soundeffect.md"
    },
    "standarddialog": {
        "description": "Extends [Group](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe **StandardDialog** node is the base for Roku's pre-built standard message, keyboard, pinpad, and progress dialogs. It can also be used directly with a custom dialog structure built with the **StdDialogItem** nodes.",
        "events": [],
        "extends": {
            "name": "DialogBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Indicates the index of the button that gained focus when the user moved the focus onto one of the buttons in the button area.",
                "name": "buttonFocused",
                "type": "int"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "Indicates the index of the selected button when the user selects one of the buttons in the button area.",
                "name": "buttonSelected",
                "type": "int"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "false",
                "description": "Dismisses the dialog. The dialog is dismissed whenever the close field is set, regardless of whether the field is set to true or false.",
                "name": "close",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0f",
                "description": "Sets the height of the dialog. If this field is set to greater than 0, and the layout of the dialog for the specified width results in a dialog with a height less than the value of this field, the dialog layout is increased so that the dialog height matches the value of this field. In this case, the button area is moved to the bottom of the dialog and a blank region exists between the content area and the button area.",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not set",
                "description": "Sets the color palette for the dialog's background, text, buttons, and other elements. By default, no palette is specified; therefore, the dialog inherits the color palette from the nodes higher in the scene graph (typically, from the dialog's \\[Scene\\](https://developer.roku.com/docs/references/scenegraph/scene.md node, which has a \\*\\*palette\\*\\* field that can be used to consistently color the standard dialogs and keyboards in the app). The RSGPalette color values used by the StandardDialog node are as follows:\n\n| Palette Color Name | Usages |\n| --- | --- |\n| DialogBackgroundColor | Blend color for dialog's background bitmap. |\n| DialogItemColor | Blend color for the following items:    *   [StdDlgProgressItem's](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md spinner bitmap *   [StdDlgDeterminateProgressItem's](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md graphic   |\n| DialogTextColor | Color for the text in the following items:    *   [StdDlgTextItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md and [StdDlgGraphicItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md if the **namedTextStyle** field is set to \"normal\" or \"bold\". *   All [content area items](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md, except for [StdDlgTextItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md and [StdDlgGraphicItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md. *   [Title area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.mdfields). Unfocused button.   |\n| DialogFocusColor | Blend color for the following:    *   The [button area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.mdfields) focus bitmap. *   The focused scrollbar thumb.   |\n| DialogFocusItemColor | Color for the text of the focused button. |\n| DialogSecondaryTextColor | Color for the text of in the following items:    *   [StdDlgTextItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md and [StdDlgGraphicItem](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md if the **namedTextStyle** field is set to \"secondary\". *   Disabled button.   |\n| DialogSecondaryItemColor | Color for the following items:    *   The divider displayed below the title area. *   The unfilled portion of the [StdDlgDeterminateProgressItem's](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md graphic.   |\n| DialogInputFieldColor | The blend color for the text edit box background bitmap for keyboards used inside dialogs. |\n| DialogKeyboardColor | The blend color for the keyboard background bitmap for keyboards used inside dialogs |\n| DialogFootprintColor | The blend color for the following items:    *   The button focus footprint bitmap that is displayed when the [button area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.mdfields) does not have focus. *   Unfocused scrollbar thumb and scrollbar track.   |",
                "name": "palette",
                "type": "RSGPalette node"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "N/A",
                "description": "An event that indicates the dialog was dismissed. This event is triggered when one of the following occurs: \\* The \\*\\*close\\*\\* field is set. \\* The Back, Home, or Options key is pressed. \\* Another dialog is displayed.",
                "name": "wasClosed",
                "type": "event"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0f",
                "description": "Sets the width of the dialog: \\* If set to 0, the standard system dialog width is used (1038 for FHD, 692 for HD). If the title or any button text is too wide to fit within the standard width, the dialog width will be automatically increased to show the full title or button text up to a preset maximum (1380 for FHD and 920 for HD). \\* If set to greater than 0, the specified width is used as the overall width of the dialog.",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "StandardDialog",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md"
    },
    "standardkeyboarddialog": {
        "description": "Extends [StandardDialog](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md\"**Standard Dialog**\")\n\nThe **StandardKeyboardDialog** node enables text and voice entry of strings consisting of alphanumeric characters as well as many commonly used symbols. It is similar to the legacy [KeyboardDialog](https://developer.roku.com/docs/references/scenegraph/dialog-nodes/keyboarddialog.md node, but includes voice entry functionality, which is provided through its internal **DynamicKeyboard** node.\n\n![roku815px - keyboard-dialog](https://image.roku.com/ZHZscHItMTc2/keyboard-dialog.jpg)",
        "events": [],
        "extends": {
            "name": "StandardDialog",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "List of buttons to be displayed in the button area at the bottom of the dialog. Each string in the buttons array adds a new button to the button area. > Minimize the number of buttons in the dialog to ensure that all buttons are visible without the user having to scroll up and down.",
                "name": "buttons",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"generic\"",
                "description": "The type of text to be entered. This may be used by the keyboard to modify the voice entry method and to determine when a valid string has been entered. This may be one of the following values: \\* \"email\": letter-by-letter dictation for emails. \\* \"numeric\": letter-by-letter dictation for PIN codes, zip codes, and other numeric input. \\* \"alphanumeric\": letter-by-letter dication for street addresses or other sequences of numbers and letters. \\* \"generic\": Full word input for search queries or other sequences of numbers, letters and symbols. \\* \"password\": letter-by-letter dication for passwords.",
                "name": "keyboardDomain",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "One or more blocks of text, which are typically used to describe information about the data to be entered. Each string in the array is displayed as a separate block of text with the standard amount of space left between the blocks. > Minimize the message length to avoid having a scrollbar automatically added to the content area. If multiple strings are specified or any string is too long, the dialog may not be able to fit within the height of the display.",
                "name": "message",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The default string to be displayed in the keyboard's text edit box. When the user enters the text, this field is updated with the currently entered string.",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ",
                "default": "The keyboard item's VoiceTextEditBox node",
                "description": "The internal VoiceTextEditBox node used by this dialog's internal keyboard. This field should be used only to access the fields of this internal node.",
                "name": "textEditBox",
                "type": "VoiceTextEditBox node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The title to be displayed at the top of the dialog.",
                "name": "title",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StandardKeyboardDialog",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-keyboard-dialog.md"
    },
    "standardmessagedialog": {
        "description": "Extends [StandardDialog](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md\"**Standard Dialog**\")\n\nThe **StandardMessageDialog** node is used to displays a message to the user. It is similar to the legacy [Dialog](https://developer.roku.com/docs/references/scenegraph/dialog-nodes/dialog.md node. It may contain the following items (from top to bottom):\n\n*   One or more blocks of text at the top.\n*   One bulleted / numbered list.\n*   One or more blocks of text at the bottom.\n\n![roku815px - standard-message-dialog](https://image.roku.com/ZHZscHItMTc2/standard-message-dialog.jpg)",
        "events": [],
        "extends": {
            "name": "StandardDialog",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "One or more blocks of informational text displayed at the bottom of the dialog's content area. Each string in the array is displayed as a separate block of text with the standard amount of space left between the blocks. > To separate lines of text, add each line as an element in the array. Do not use newline characters.",
                "name": "bottomMessage",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "An array of strings displayed as a bulleted or numbered list. The list is displayed in the content area below the message and above the bottom message.",
                "name": "bulletText",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"bullet\"",
                "description": "If the \\*\\*bulletText\\*\\* field is set, specifies the type of list item delimiter, which may be one of the following: \\* \"bullet\" (this is the default) \\* \"numbered\" \\* \"lettered\" .",
                "name": "bulletType",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "List of buttons to be displayed in the button area at the bottom of the dialog. Each string in the buttons array adds a new button to the button area. > Minimize the number of buttons in the dialog to ensure they are all visible when the dialog is displayed.",
                "name": "buttons",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "One or more blocks of informational text displayed at the top of the dialog's content area. Each string in the array is displayed as a separate block of text with the standard amount of space left between the blocks. > To separate lines of text, add each line as an element in the array. Do not use newline characters.",
                "name": "message",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The title to be displayed at the top of the dialog.",
                "name": "title",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StandardMessageDialog",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-message-dialog.md"
    },
    "standardpinpaddialog": {
        "description": "Extends [StandardDialog](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md\"**Standard Dialog**\")\n\nThe **StandardPinPadDialog** node enables text and voice entry of numeric characters—typically, short numeric PIN codes. It is similar to the legacy [PinDialog](https://developer.roku.com/docs/references/scenegraph/dialog-nodes/pindialog.md node, but includes additional voice entry of the numeric digits. This additional functionality is provided through the node's internal DynamicPinPad and VoiceTextEditBox nodes.\n\n![roku815px - pin-pad-dialog](https://image.roku.com/ZHZscHItMTc2/pin-pad-dialog.jpg)",
        "events": [],
        "extends": {
            "name": "StandardDialog",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "List of buttons to be displayed in the button area at the bottom of the dialog. Each string in the buttons array adds a new button to the button area. > Minimize the number of buttons in the dialog to ensure that all buttons are visible without the user having to scroll up and down.",
                "name": "buttons",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "One or more blocks of text, which are typically used to describe information about the data to be entered. Each string in the array is displayed as a separate block of text with the standard amount of space left between the blocks. > Minimize the message length to avoid having a scrollbar automatically added to the content area. If multiple strings are specified or any string is too long, the dialog may not be able to fit within the height of the display.",
                "name": "message",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Displays the entered PIN number in the text edit box. As the user enters each numeric digit, this field is updated with the currently entered value.",
                "name": "pin",
                "type": "string"
            },
            {
                "accessPermission": "READ",
                "default": "The keyboard item's VoiceTextEditBox node",
                "description": "The internal VoiceTextEditBox node used by this dialog's internal keyboard. This field should be used only to access the fields of this internal node > Use the \\*\\*textEditBox.maxTextLength\\*\\* field to limit the length of the pin to be entered.",
                "name": "textEditBox",
                "type": "VoiceTextEditBox node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The title to be displayed at the top of the dialog.",
                "name": "title",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StandardPinPadDialog",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-pinpad-dialog.md"
    },
    "standardprogressdialog": {
        "description": "Extends [StandardDialog](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md\"**Standard Dialog**\")\n\nThe StandardProgressDialog node displays a spinning progress indicator that includes a short progress message to the user. It is similar to the legacy [ProgressDialog](https://developer.roku.com/docs/references/scenegraph/dialog-nodes/progressdialog.md node.\n\n![roku815px - progress-dialog-title](https://image.roku.com/ZHZscHItMTc2/progress-dialog-title-v2.jpg)",
        "events": [],
        "extends": {
            "name": "StandardDialog",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "A string to be displayed next to the spinning progress indicator. It typically tells the user why they are waiting. > Minimize the message length.",
                "name": "message",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The title to be displayed at the top of the dialog.If no title is specified, the progress dialog will be displayed without a title area and will use the minimum width needed to show the spinning progress indicator and message",
                "name": "title",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StandardProgressDialog",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-progress-dialog.md"
    },
    "stddlgactioncarditem": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Indicates whether the \\*\\*StdDlgActionCardItem\\*\\* node is in the checked or unchecked state when the \\*\\*iconType\\*\\* field is set to \"checkbox\" or \"radiobutton\". The icon shown for an action card is based on the value of this field.",
                "name": "iconStatus",
                "type": "bool"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"none\"",
                "description": "Specifies the icon used for a \\*\\*StdDlgActionCardItem\\*\\* node. This may be one of the following values:\n\n| Value | Type | Description |\n| --- | --- | --- |\n| none | string | No icon is shown. |\n| more\\_info | string | A right arrow icon is displayed to the right of the **StdDlgActionCardItem** child nodes. This icon is typically used to indicate that more information will be shown when the action card is selected. Typically, this additional content is displayed in another dialog. |\n| checkbox | string | A checkbox icon is shown to the left of the StdDlgActionCardItem child nodes.When the **iconStatus** field is set to \"true\", this adds a checkmark inside the box.When the **iconStatus** field is set to \"false\", an empty box icon is displayed. |\n| radiobutton | string | A radio button icon is shown to the left of the StdDlgActionCardItem child nodes.When the **iconStatus** field is set to \"true\", this adds a filled circle inside the box.When the **iconStatus** field is set to \"false\", an empty circle icon is displayed. |",
                "name": "iconType",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StdDlgActionCardItem",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-action-card-item.md"
    },
    "stddlgareabase": {
        "description": "Extends [Group](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\n\nThe **StdDlgAreaBase** node is the base class and provides the common functionality for the three StandardDialog area nodes: [**StdDlgTitleArea**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.md, [**StdDlgContentArea**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md and [**StdDlgButtonArea**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "StdDlgAreaBase",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md"
    },
    "stddlgbullettextitem": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md\"**StdDlgItemBase**\")\n\nThe **StdDlgBulletTextItem** node is used to display a bulleted list of text in the dialog's content area. It should only be used as a child of a [**StdDlgContentArea**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md node.\n\n![roku815px - StdDlgBulletTextItem](https://image.roku.com/ZHZscHItMTc2/StdDlgBulletTextItem-v2.jpg)",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "An array of strings displayed as a bulleted or numbered list. The list is displayed in the content area below the message and above the bottom message.",
                "name": "bulletText",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"bullet\"",
                "description": "Specifies the type of list item delimiter, which may be one of the following: \\* \"bullet\" \\* \"numbered\" \\* \"lettered\"",
                "name": "bulletType",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StdDlgBulletTextItem",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-bullet-text-item.md"
    },
    "stddlgbutton": {
        "description": "Extends [Group](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\n**StdDlgButton** is the class used for each button in the [button area](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog-framework-overview.mdstructure). The buttons are displayed in the order in which they are listed as children of the [**StdDlgButtonArea** node](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md. The size and layout of each button are controlled by the StandardDialog layout algorithm. **StdDlgButton** nodes should only be used as children of a **StdDlgButtonArea** node.\n\n![roku815px - std-dlg-button](https://image.roku.com/ZHZscHItMTc2/std-dlg-button-3.jpg)",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the button can receive focus. If this field is set to true, the button has an inactive appearance and is unable to receive focus.",
                "name": "disabled",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The text to be displayed on the button",
                "name": "text",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StdDlgButton",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button.md"
    },
    "stddlgbuttonarea": {
        "description": "Extends [StdDlgAreaBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md\"**StdDlgAreaBase**\")\n\nThe **StdDlgButtonArea** node is always positioned at the bottom of the [StandardDialog](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md. It contains zero or more child nodes of type [**StdDlgButton**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button.md or a type that extends **StdDlgButton**. Each of the **StdDlgButton** nodes provides an option to perform some task related to the purpose of the dialog. For example, dialogs often have \"Continue\" and \"Cancel\" buttons in the bottom area. The buttons are positioned and sized so that they are arranged vertically in the order in which their **StdDlgButton** child nodes are listed.\n\nA dialog may only have a single button area, and the button area is optional.\n\n![roku815px - std-dlg-button-area](https://image.roku.com/ZHZscHItMTc2/std-dlg-button-area.jpg)",
        "events": [],
        "extends": {
            "name": "StdDlgAreaBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "StdDlgButtonArea",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md"
    },
    "stddlgcontentarea": {
        "description": "Extends [StdDlgAreaBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md\"**StdDlgAreaBase**\")\n\nThe **StdDlgContentArea** node contains the main body of the dialog. It is positioned between the title area and the button area.\n\nIt contains zero or more child nodes that extend [**StdDlgItemBase**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md (for example, [**StdDlgTextItem**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md, [**StdDlgProgressItem**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md, [**StdDlgGraphicItem**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md, and other dialog building blocks). The layout and position of the [**StdDlgItemBase** nodes](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md are based on the dialog's width; the nodes are arranged vertically from top to bottom in the content area based on the order in which they are listed. The content area should contain only [**StdDlgItemBase** nodes](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md; otherwise, its layout and rendering are undefined.\n\n![roku815px - content-area](https://image.roku.com/ZHZscHItMTc2/content-area.jpg)",
        "events": [],
        "extends": {
            "name": "StdDlgAreaBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md"
        },
        "fields": [],
        "interfaces": [],
        "name": "StdDlgContentArea",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md"
    },
    "stddlgcustomitem": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md\"**StdDlgItemBase**\")\n\nThe **StdDlgCustomItem** node is used to display free-form dialog items in the content area that require a custom layout.\n\n![roku400px -  - custom-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-custom-item-multi-column.jpeg)",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Specifies the desired width of the custom item, which is passed to the content area's layout algorithm. This field is typically specified when the custom item includes a \\[DynamicCustomKeyboard node\\](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-custom-keyboard.md, which has a width that is determined by the KDF file of the custom keyboard.",
                "name": "fixedWidthField",
                "type": "float"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The width of the custom item, which is enforced by the content area's layout algorithm.",
                "name": "widthField",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "StdDlgCustomItem",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-custom-item.md"
    },
    "stddlgdeterminateprogressitem": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md\"**StdDlgItemBase**\")\n\nThe **StdDlgDeterminateProgressItem** node is used to display a progress indicator in the dialog's content area. It provides the percentage of progress that has been completed for a task that takes a limited amount of time. It should only be used as a child of a [**StdDlgContentArea**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md node.\n\n![roku815px - std-dlg-determinate-progress-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-determinate-progress-item-2.jpg)",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"0\"",
                "description": "Specifies the current completion percentage text and graphic to be displayed (for example \"35%\" with more than a third of the indicator filled). If this is set to a number less than 0 or greater than 100, the progress indicator will display \"0%\" or \"100%\" completion, respectively.",
                "name": "percent",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the text to be displayed next to the progress graphic. If the text width does not fit within the width of the content area, the text will wrap onto multiple lines.",
                "name": "text",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StdDlgDeterminateProgressItem",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md"
    },
    "stddlggraphicitem": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md\"**StdDlgItemBase**\")\n\nThe **StdDlgGraphicItem** node is used to display an image in the dialog's content area with an optional text label displayed to the left, right, above, or below the image. It should only be used as a child of a [**StdDlgContentArea**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md node.\n\n![roku815px - std-dlg-graphic-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-graphic-item.jpg)",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"left\"",
                "description": "Specifies where to position and align the graphic and its text label, relative to the content area. This may be one of the following values:\n\n| Value | Text Position |\n| --- | --- |\n| left | The graphic is left-aligned in the content area.   The text label is positioned horizontally to the right of the graphic, and centered vertically. |\n| right | The graphic is right-aligned in the content area.   The text label is positioned horizontally to the left of the graphic, and centered vertically. |\n| center\\_below | The graphic and text label are centered horizontally in the content area.   The graphic is positioned below the text label. |\n| center\\_above | The graphic and text label are centered horizontally in the content area.   The graphic is positioned above the text label. |",
                "name": "graphicAlign",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "The image height to be used instead of the image's actual height.",
                "name": "graphicHeight",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The URI of the image to be displayed.",
                "name": "graphicUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "The image width to be used instead of the image's actual width.",
                "name": "graphicWidth",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the text to be displayed next to the graphic. If the text width does not fit within the width of the content area, the text will wrap onto multiple lines.",
                "name": "text",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StdDlgGraphicItem",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md"
    },
    "stddlgitembase": {
        "description": "Extends [Group](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\n\n**StdDlgItemBase** is the base class for all the content area items. It provides the common functionality for all StdDlg\\[_x_\\]Item nodes (for example, [**StdDlgBulletTextItem**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-bullet-text-item.md, [**StdDlgTextItem**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md, [**StdDlgKeyboardItem**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-keyboard-item.md, [**StdDlgProgressItem**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md, [**StdDlgGraphicItem**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md, and the other dialog building block nodes).",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Indicates whether the item can be scrolled vertically by the user. The StandardDialog layout algorithm reduces the height of a scrollable item as needed if the overall height of the dialog is too large to fit on the display.",
                "name": "scrollable",
                "type": "boolean"
            }
        ],
        "interfaces": [],
        "name": "StdDlgItemBase",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
    },
    "stddlgitemgroup": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md\n\nThe **StdDlgItemGroup** node is used to visually group a set of StdDlgAreaBase child nodes in a custom dialog. Developers can use this node to reduce the vertical spacing between the StdDlgItemBase child nodes. For [**StdDlgActionCardItem**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-action-card-item.md nodes, the **StdDlgItemGroup** node enforces the rule that when multiple items **StdDlgActionCardItem** nodes have their **iconType** field set to \"radiobutton\", only one may have its **selected** status be set to \"true\".\n\nThe **StdDlgItemGroup** node may contain one or more [**StdDlgItemBase**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md child nodes (for example, StdDlgTextItem, StdDlgGraphicItem, and so on) as its children. It will visually group those child **StdDlgItemBase** nodes by reducing the amount of vertical space between them. However, the primary benefit of the StdDlgItemGroup node is managing **StdDlgActionCardItem** child nodes that have their **iconType** field set to \"radiobutton\".\n\n![roku815px - actionCards-radio-checkbox-items](https://image.roku.com/ZHZscHItMTc2/actionCards-radio-checkbox-items.jpg)\n\n> See the [**stdDlgActionCardItem** documentation](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-action-card-item.mdradiobutton-icontype) for code demonstarting how to use the **StdDlgItemGroup** node in a custom dialog.",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "The index of the currently selected \\[StdDlgAreaBase\\](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md child node. This field is updated when the user selects any of the \\[StdDlgActionCardItem\\](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-action-card-item.md child nodes. This field can also be updated via BrightScript to change which child node in the StdDlgItemGroup is selected. When this field is updated and it corresponds to a \\[StdDlgActionCardItem\\](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-action-card-item.md node that has its \\*\\*iconType\\*\\* field set to \"radiobutton\", the \\*\\*StdDlgItemGroup\\*\\* node enforces the \"only 1 of \\_n\\_\" rule for radio buttons by setting the \\*\\*iconStatus\\*\\* field of the other radio button action card items to \"false\".",
                "name": "selectedIndex",
                "type": "integer"
            }
        ],
        "interfaces": [],
        "name": "StdDlgItemGroup",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-group.md"
    },
    "stddlgkeyboarditem": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md\"**StdDlgItemBase**\")\n\nThe **StdDlgKeyboardItem** node is used to display a keyboard or PINpad in the dialog's content area. It provides text and voice entry of strings containing alphanumeric characters and symbols or numeric digits. It should only be used as a child of a [**StdDlgContentArea**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md node.\n\n![roku815px - std-dlg-keyboard-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-keyboard-item.jpg)",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"unspecified\"",
                "description": "Specifies the type of keyboard to be displayed: \\* \"unspecified\": no keyboard is displayed. \\* \"keyboard\": A \\[\\*\\*DynamicKeyboard\\*\\*\\](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md node is displayed. \\* \"pinpad\": A \\[\\*\\*DynamicPinPad\\*\\*\\](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md node is displayed.",
                "name": "keyLayout",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The default string to be displayed in the keyboard's text edit box. When the user enters the text, this field is updated with the currently entered string.",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "READ",
                "default": "The [**VoiceTextEditBox**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) associated with the keyboard",
                "description": "The internal \\[\\*\\*VoiceTextEditBox\\*\\* node\\](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md used by this dialog's internal keyboard. This field should be used only to access the fields of this internal node.",
                "name": "textEditBox",
                "type": "VoiceTextEditBox node"
            }
        ],
        "interfaces": [],
        "name": "StdDlgKeyboardItem",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-keyboard-item.md"
    },
    "stddlgmultistyletextitem": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the string to be spoken when the screen reader reads the text item. By default, the screen reader reads the string specified in the \\*\\*text\\*\\* field.",
                "name": "audioGuideText",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "{}",
                "description": "Defines the size, URI, and color of a font style. This field may contain one or more font styles.",
                "name": "drawingStyles",
                "type": "associative array of associative arrays"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the text to be displayed",
                "name": "text",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StdDlgMultiStyleTextItem",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-multi-style-text-item.md"
    },
    "stddlgprogressitem": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md\"**StdDlgItemBase**\")\n\nThe **StdDlgProgressItem** node is used to display a spinning progress indicator in the dialog's content area. It provides the status of a task that takes an indeterminate amount of time. It should only be used as a child of a [**StdDlgContentArea**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md node.\n\n![roku815px - std-dlg-progress-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-progress-item.jpg)",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the text to be displayed next to the progress graphic. If the text width does not fit within the width of the content area, the text will wrap onto multiple lines.",
                "name": "text",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StdDlgProgressItem",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md"
    },
    "stddlgsidecardarea": {
        "description": "Extends [StdDlgAreaBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md",
        "events": [],
        "extends": {
            "name": "StdDlgAreaBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Specifies whether the \\*\\*StdDlgSideCardArea\\*\\* node extends to the edge of the dialog's background image or respects the background image's 9-patch margins. \\* \\*\\*true\\*\\*: The origin of the \\*\\*StdDlgSideCardArea\\*\\* node's coordinate system is set to the top/left edge of the dialog's background image. \\* \\*\\*false\\*\\*: The origin of the \\*\\*StdDlgSideCardArea\\*\\* node's coordinate system is based on the background image's 9-patch margins.",
                "name": "extendToDialogEdge",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"right\"",
                "description": "Specifies on which side of the custom dialog the StdDlgSideCardArea node appears: \"left\" or \"right\".",
                "name": "horizAlign",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether a thin vertical divider line is displayed between the \\*\\*StdDlgSideCardArea\\*\\* and the vertical column that contains the dialog's child \\*\\*StdDlgAreaBase\\*\\* nodes (\\[TitleArea\\](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.md, \\[StdDlgContentArea(s)\\](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md, and/or \\[StdDlgButtonArea\\](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md). The divider line, if shown, uses the \\*\\*DialogSecondaryItemColor\\*\\* field from the current \\[RSG palette\\](https://developer.roku.com/docs/references/scenegraph/scene.mdfields).",
                "name": "showDivider",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0f",
                "description": "Specifies the width of the \\*\\*StdDlgSideCardArea\\*\\* node. If this field is set to its default value (0.0), the width is set to the width of the \\[\\*\\*StdDlgContentArea\\*\\*\\](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md) node's bounding rectangle (the union of the width of all of its child nodes). If set to a value greater than 0.0, the width of the \\*\\*StdDlgSideCardArea\\*\\* node is fixed to that explicit value. The height of \\*\\*StdDlgSideCardArea\\*\\* node is based on the StandardDialog layout logic. This sets the height to a maximum of the height of the \\*\\*StdDlgSideCardArea\\*\\* bounding rectangle and the height of the vertical column containing the dialog's child \\[\\*\\*StdDlgAreaBase\\*\\*\\](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md nodes. This is constrained by the maximum permissible height of the dialog such that it is fully visible onscreen.",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "StdDlgSideCardArea",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-side-card-area.md"
    },
    "stddlgtextitem": {
        "description": "Extends [StdDlgItemBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md\"**StdDlgItemBase**\")\n\nThe **StdDlgTextItem** node is used to display a block of text. It should only be used as a child of a [**StdDlgContentArea**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md node.\n\n![roku815px - StdDlgTextItem](https://image.roku.com/ZHZscHItMTc2/std-dlg-text-item.jpg)\n\n> To separate lines of text, use multiple **StdDlgTextItem** nodes. Do not use newline characters.",
        "events": [],
        "extends": {
            "name": "StdDlgItemBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the string to be spoken when the screen reader reads the text item. By default, the screen reader reads the string specified in the \\*\\*text\\*\\* field.",
                "name": "audioGuideText",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"normal\"",
                "description": "Specifies a named style to be used for the displayed text's color and font. The supported styles include:\n\n| Style Name | Palette Color | Font |\n| --- | --- | --- |\n| \"normal\" | DialogTextColor | SmallSystemFont |\n| \"secondary\" | DialogSecondaryTextColor | SmallestSystemFont |\n| \"bold\" | DialogTextColor | SmallBoldSystemFont |",
                "name": "namedTextStyle",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the text to be displayed. If the text width does not fit within the width of the content area, the text will wrap onto multiple lines.",
                "name": "text",
                "type": "string"
            }
        ],
        "interfaces": [],
        "name": "StdDlgTextItem",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md"
    },
    "stddlgtitlearea": {
        "description": "Extends [StdDlgAreaBase](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md\"**StdDlgAreaBase**\")\n\nThe **StdDlgTitleArea** node contains the dialog's title information, which is always displayed at the top of the dialog. The title area may also include optional icons that appear left or right justified. The **StdDlgTitleArea** should only be used as a child node of a [**StandardDialog**](https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md.\n\nA dialog may contain a single title area, and the title area is optional (but is typically used in nearly all cases)\n\n![roku815px - title-area-icon](https://image.roku.com/ZHZscHItMTc2/title-area-icon.jpg)",
        "events": [],
        "extends": {
            "name": "StdDlgAreaBase",
            "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies a bitmap to be displayed at the left edge of the dialog's title area (to the left of dialog's primary title).",
                "name": "primaryIcon",
                "type": "URL"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0f",
                "description": "Adjusts the vertical position of the primary icon relative to the baseline of the dialog's primary title. By default, the bottom of the primary icon is aligned with the primary title's baseline.",
                "name": "primaryIconVertOffset",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the title to be displayed in the dialog's title area.",
                "name": "primaryTitle",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies a bitmap to be displayed at the right edge of the dialog's title area.",
                "name": "secondaryIcon",
                "type": "URL"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0f",
                "description": "Adjusts the vertical position of the secondary icon relative to the baseline of the dialog's primary title. By default, the bottom of the secondary icon is aligned with the primary title's baseline.",
                "name": "secondaryIconVertOffset",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "StdDlgTitleArea",
        "url": "https://developer.roku.com/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.md"
    },
    "targetgroup": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe TargetGroup node class associates a set of rectangular regions that children of the group will occupy. Like MarkupList, the TargetGroup has a content field containing the data for each item and an itemComponentName field that specifies an RSG component that will be used to render a content item. It also has a targetSet field that contains a [TargetSet](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/targetset.md\"TargetSet\") that define a set of rectangular targets where children of the TargetGroup will be rendered.\n\nThe TargetGroup node is typically used to create a scrolling list (or row) of items where the focused item occupies more space than the other items.\n\nFor example, a TargetGroup could be used to create a full screen vertical scrolling list of item where the focused item is larger than the other items in the list. As the list items scroll, the appearance of the item moving into the focus region would be dynamically adjusted to fill the larger focus region. Simultaneously, the appearance of the item leaving the focus region would be dynamically adjust to return to the unfocused size. To set up this use case, you might set the targetSet field to a TargetSet node that specifies nine rectangles. The first rectangle would be specified to have the width and height of an unfocused item and be positioned so that it's bottom is above the top of the screen. The last rectangle would be specified to have the width and height of an unfocused item and be positioned so that's top is below the bottom of the screen. The remaining seven rectangles would define the rectangular regions of the onscreen items. Suppose the design calls for the focus item to be centered vertically at the center of the screen. To do that, you would specify the 5th rectangle to be larger than the other eight and position it so that it is centered vertically, you would specify the remaining rectangles to form a column of rectangular regions where the top three and bottom three visible items would be located.\n\nThe second step of setting up this use case would be to implement an RSG component that will be used to render each item. The TargetGroup node manages the creation of the items for the visible components, associates each with a ContentNode, and updates fields of the item component with information such as the current width and height of the item and the focus status of the item.\n\nThe TargetGroup's jumpToItem field is set to identify which content item is to be located at the TargetSet's targetRects field target rectangle identified by the TargetSet's focusindex field.\n\nThe final step of setting up this use case would be to create a VerticalList component that extends TargetGroup, sets up the TargetGroup's TargetSet node, and as the user presses up and down buttons on the remote, sets the TargetGroup's animateToTargetItem field to the prior or next index. Setting the animateToTargetItem field causes the displayed items to smoothly animate from their current target region to another target region, such that the specified index ends up at the TargetSet's target rectangle that is identified by the TargetSet's focusIndex field.\n\nThe above use case specifies the most common use case for the TargetGroup node, but only hints at the possible uses. For example, you could create your own RSG components with various custom behaviors. There might include:\n\n*   A list where all the items are small when the list does not have the focus, but when the list receives the focus, all of the items smoothly adjust their size and position so that the focus item is largest, the items on either side of the focus item are slightly larger than the unfocused size and the remaining items remain the same size as the unfocused items. To do this, you would create two TargetSet's in your RSG component, one that defines the regions when the list is unfocused and one that defines the regions when the list is focused. Initially, the TargetGroup's targetSet field would be set to the unfocused TargetSet node. Then, when the list is focused, the targetSet's animateToTargetSet field would be set to the focused TargetSet node, causing all of the target regions to smoothly animate to their new size and position, taking along the associated item component's with them.\n*   A horizontal scrolling list of items where the focused region floats across the screen as the user presses left/right until the focus region reaches the edge of the display, at which point the focus region remains stationary and the items scroll left or right. This would require the use of several TargetSet nodes (one for each possible position of the focus region). Initally, the TargetGroup's targetSet field would be set to one of these TargetSet's. Then while the focus region is not at one of the edges, key presses would set the animateToTargetSet field to animate the focus region to its next location. Once the focus region reaches an edge, another key press in the same direction would set the animateToTargetIndex field to cause the items to scroll so that the next content item occupies the focus region.\n*   A list where when an item is selected, all of the items fly off the screen while the selected item zooms up and moves to the center of the screen. To set up this use case, you would specify a TargetSet for when the list items are onscreen and another TargetSet for the onscreen location of the focused item and the offscreen locations where each items will disappear.\n*   A circular arrangement of a fixed number of items with the item at the 6 o'clock position being larger and having the focus. Note that in this case, no offscreen targets would be specified.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Forces the item index to be interpolated in an advanced manner when animating between items. This only has an effect when the \\*\\*wrap\\*\\* field is set to true. For example, when the number of items is 10 and we are interpolating from item 9 to item 0, not enabling this option will result in the following sequence: 9 -> 8 -> 7 -> … -> 0, rather than 9 -> 0.",
                "name": "advancing",
                "type": "boolean"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, causes the group to quickly scroll so that the specified index moves into the to the target region specified by the TargetSet's focusIndex",
                "name": "animateToItem",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "invalid",
                "description": "When set to a valid TargetSet, causes the group to quickly animate so that the target regions of the initial TargetSet node are smoothly interpolated to the corresponding target regions of the new TargetSet node. If the two TargetSet's focusIndex fields are different, the focusIndex is also animated from the old to the new value",
                "name": "animateToTargetSet",
                "type": "TargetSet"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Specifies the content for the group. See \\[Data Bindings\\](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/targetgroup.mddata-bindings \"Data Bindings\") below for more details",
                "name": "content",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "-1.0",
                "description": "As the TargetGroup animation occurs, this field is constantly updated to represent the index of the ContentNode currently occupying the focus target region. When currFocusItemIndex is an integer value, the specified ContentNode occupies the focus target. When currFocusItemIndex has a fractional part, the value indicates that an animation is in process. For example, a value of 5.7 would indicate that items 5 and 6 are currently overlapping the focus region, with item 6 occupying 70% and item 5 the other 30%",
                "name": "currFocusItemIndex",
                "type": "float"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "As the TargetGroup animation occurs that is initiated by setting the animateToTargetSet field, currTargetSet contains the current values of the target regions as the animation proceeds from the initial TargetSet's targets to the new TargetSet's targets",
                "name": "currTargetSet",
                "type": "TargetSet"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "For TargetSet's that do not specify a focusIndex, this value will be used as the index of the TargetSet where the focused item is located. If a TargetSet specifies any value for the focusIndex, that value will be used instead of defaultTargetSetFocusIndex",
                "name": "defaultTargetSetFocusIndex",
                "type": "int"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.3 seconds",
                "description": "Specifies the time, in seconds, to perform the animation when the animateToItem or animateToTargetSet fields are set",
                "name": "duration",
                "type": "Time"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "inOutCubic",
                "description": "Specifies the interpolator used in TargetGroup animations between items.",
                "name": "easeFunction",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "Specifies the name of a XML component for the group items. An instance of this component is created on demand for each visible item of the group. The XML component must define a specific interface as detailed in \\[TargetGroup XML Component\\](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/targetgroup.mdtargetgroup-xml-component \"TargetGroup XML Component\") below",
                "name": "itemComponentName",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a group item gains the key focus, set to the index of the focused item",
                "name": "itemFocused",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a group item is selected, set to the index of the selected item",
                "name": "itemSelected",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "When a group item loses the key focus, set to the index of the unfocused item",
                "name": "itemUnfocused",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "0",
                "description": "When set to a valid item index, causes the group to immediately update so that the specified index moves to the target region specified by the TargetSet's focusIndex",
                "name": "jumpToItem",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Force the item index to be interpolated in a reverse manner when animating between items. This only has an effect when the \\*\\*wrap\\*\\* field is set to true. For example, when the number of items is 10 and we are interpolating from item 0 to item 9, not enabling this option will result in the following sequence: 0 -> 1 -> … -> 9 rather than 0 -> 9.",
                "name": "reversing",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the current target rectangles (as defined in the read-only currTargetSet field's TargetSet) are drawn or not. Typically this would only be set to true while debugging an app, although in some use cases its possible that you might want to display the current target rectangles. The rectangles are drawn using the color in the targetSet's TargetSet node's color field",
                "name": "showTargetRects",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Specifies the TargetSet to use to define the target regions of the items in the group. When set or modified, the target regions are immediately adjusted to use the new values",
                "name": "targetSet",
                "type": "TargetSet"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether the content items wraparound at the end of the TargetGroup to fill all of the targets rectangles",
                "name": "wrap",
                "type": "Boolean"
            }
        ],
        "interfaces": [],
        "name": "TargetGroup",
        "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/targetgroup.md"
    },
    "targetlist": {
        "description": "Extends [**TargetGroup**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/targetgroup.md\n\nThe TargetList node class adds useful functionality to the TargetGroup node by making is easy to set up lists and rows of items with limited amounts of scripting required. In particular, TargetList provides a built-in focused/unfocused transition, as well as a simple way to implement various focus management policies (i.e. fixed focus, floating focus, etc.). It also provides default key handling for navigating the list or row.",
        "events": [],
        "extends": {
            "name": "TargetGroup",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/targetgroup.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"down\"",
                "description": "Specifies which remote button will move the focus forward. For vertical lists, this will typically be set to \"down\". For horizontal rows, this will typically be set to \"right\".",
                "name": "advanceKey",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies one or more TargetSet's to be used when the TargetList has the focus. If a single TargetSet is specified, focus will stay fixed on the targetRect of that TargetSet that corresponds to the TargetGroup's focus index. The focus index will come from the TargetSet if explicitly specified or from the TargetGroup's defaultTargetSetFocusIndex field if not. If focusedTargetSet includes more than one TargetSet node, that defines a sequence of TargetSet's that will be advanced through as the user presses the advance or reverse key. When advancing, the focus floats from one TargetSet's to the next TargetSet in the array until the last element of the focusedTargetSet is reached, at which point the focus is fixed to the last element and the items begin to scroll. When reversing, the focus floats from one TargetSet to the previous TargetSet in the array until the first element of the focusedTargetSet is reached, at which point the focus is fixed to the first element and the items begin to scroll. See above for more discussion of setting up fixed and floating focus use cases.",
                "name": "focusedTargetSet",
                "type": "array of TargetSet nodes"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"up\"",
                "description": "Specifies which remote button will move the focus backward. For vertical lists, this will typically be set to \"up\". For horizontal rows, this will typically be set to \"left\".",
                "name": "reverseKey",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "invalid",
                "description": "Specifies the TargetSet to be used when the TargetList does not have the focus.",
                "name": "unfocusedTargetSet",
                "type": "TargetSet"
            }
        ],
        "interfaces": [],
        "name": "TargetList",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/targetlist.md"
    },
    "targetset": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe TargetSet node class is used to specify a set of target regions where items in a [TargetGroup](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/targetgroup.md node are rendered. This information includes an array of rectangles that is used to define the location and size of a region that will be occupied by an item in the TargetGroup as well as an optional index that identifies one rectangle in the array to be treated as the region where the item with focus is located.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFF80",
                "description": "If the TargetGroup using this TargetSet has its showTargetRects field set to true, the target rectangles of the current TargetSet will be drawn using the specified color. Drawing the TargetSet's target rectangles is generally only done when debugging an application.",
                "name": "color",
                "type": "Color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "-1",
                "description": "Identifies the index of an element of the targetRects array that will be treated as the region occupied by the focus item. The default of of -1 indicates that the TargetGroup's current focus index will not be changed when the TargetGroup is set to use the TargetSet to define its target regions.",
                "name": "focusIndex",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies an array of rectangles that define the target regions used by a TargetGroup node. To specify a rectangle, you can either specify a associative array with x, y, width and height elements or an array of 4 numeric values. For example, you could specify an array of two rectangles like this: \\\\\\[ \\\\\\[ x:10, y:5, width: 200, height:150 \\\\\\], \\\\\\[ x:10, y:160, width: 200, height:150 \\\\\\] \\\\\\] Alternately, you could specify the same array like this: \\\\\\[ \\\\\\[ 10, 5, 200, 150 \\\\\\], \\\\\\[ 10, 160, 200, 150 \\\\\\] \\\\\\]",
                "name": "targetRects",
                "type": "array of rectangles"
            }
        ],
        "interfaces": [],
        "name": "TargetSet",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/targetset.md"
    },
    "task": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe Task node class allows you to specify a function to be spawned in a different thread, and run asynchronously with respect to both the scene rendering thread and the main application thread. A Task node also allows you to run functions that cannot be run in SceneGraph node or component, typically BrightScript code functions involving operations such as reading data from servers and file system manipulation. (You also cannot, and should not, run functions in a SceneGraph application for operations that are functionally the same as SceneGraph nodes and components, such as playing videos.) A list of all the BrightScript functions and components that cannot be used in SceneGraph applications or can only be used in a Task node can be found in [BrightScript Support](/docs/developer-program/core-concepts/scenegraph-brightscript/brightscript-support.md \"BrightScript Support\").\n\nA Task node is typically used to read data from a server to create a ContentNode to configure a SceneGraph node or component (see [ContentNode](https://developer.roku.com/docs/references/scenegraph/control-nodes/contentnode.md\"ContentNode\")). A Task node used for this purpose can be thought of as a content reader. Since ContentNodes are required to configure many components rendered in a scene, such as lists, panels, and grids, and you will generally want to read the data for those types of nodes from your server, you should create a Task node as a content reader for each of those components that you use in your scene.\n\nThe Task node class was designed with three general development use cases:\n\n*   A new Task node object is created for each asynchronous operation. The input data needed for the operation is set in the Task node object [<interface>](https://developer.roku.com/docs/references/scenegraph/xml-elements/interface.md\"<interface>\") fields in the render thread, along with an observer of the output `<interface>` field data, and the Task node control field is set to RUN. After the output data is returned to the render thread, the Task node object is not used again.\n*   A Task node object is used multiple times for several identical asynchronous operations. In this case, the input data for each operation is set in the existing Task node object, with another observer for the output `<interface>` field data, and the Task node control field is again set to RUN. This may be more efficient than creating a new Task node object for each of the identical operations.\n*   A Task node observes its input `<interface>` fields using the port form of the ifSGNodeField [observeField()](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodefield.mdobservefieldfieldname-as-string-functionname-as-string-as-boolean \"observeField()\") method, and returns output data with each field change. In this case, the Task node acts like a continuous server.\n\nSince Task nodes launch asynchronous threads, and have no provisions for locks and mutexes, you must be careful to avoid race, deadlock, and other asynchronous thread errors. Here are a few tips for using Task nodes:\n\n*   Avoid accessing files which must be persistent before thread completion, to avoid a subsequent Task node or other thread access of the same file before the thread completes. It is easier and safer to use a dynamically-created string or other data object to hold temporary thread data to avoid having a subsequent or existing thread overwrite and corrupt the data.\n*   Be very careful if you access any object in a Task node that may exist in another thread. It is better to completely separate all objects in any other possible thread from the Task node thread by setting the `<interface>` fields of the Task node with copies of the minimum amount of data needed to run the thread.\n*   In the Task node init() function, perform the minimum required amount of initialization of the Task node and any included thread functions. If you intend to trigger an asynchronous task based on a Task node input`<interface>` field change, in many cases, you should only set up the observer for the field in init().\n*   Use the port form of the ifSGNodeField [observeField()](https://developer.roku.com/docs/references/brightscript/interfaces/ifsgnodefield.mdobservefieldfieldname-as-string-functionname-as-string-as-boolean \"observeField()\") rather than the onChange attribute. This will avoid triggering the thread in response to a render thread event before the Task node observers are set up.\n*   It is more efficient to use a persistent Task node that is triggered by an `<interface>` field change than to create a new Task node every time a particular asynchronous thread is required. If needed, you can communicate that the particular asynchronous thread is no longer required through an `<interface>` field as well, either through the triggering field, or a special field used for control of the Task node.\n*   You can use a single Task node object to run any number of different asynchronous threads by setting the functionName field to the Task node function you want before setting the control field to RUN. If you do not use the input data `<interface>` fields to trigger running the thread, this is equivalent to calling an asynchronous function, and passing the input data fields as arguments to the function. The output data `<interface>` fields can likewise be considered as the return value of a asynchronous function call, but to avoid blocking you must observe the fields, or the state field, as a callback event to handle the results in the calling thread.\n\nAlso review \"[SceneGraph threads](/docs/developer-program/core-concepts/threads.md \"SceneGraph\")\" for in-depth information on using Task nodes most efficiently.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "WRITE_ONLY",
                "default": "init",
                "description": "Requests a change in the run state of the spawned task. The valid options are the same as for the state field, but case-insensitive (i.e. can set \"RUN\" or \"run\")",
                "name": "control",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "The name of the function in the Task node component to be executed when the state field changes to RUN. The function must be declared within the scope of the Task node component",
                "name": "functionName",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "init",
                "description": "Inquires about the run state of the spawned task. Note that the values are in lowercase: \"init\", \"stop\", \"run\", \"done\"",
                "name": "state",
                "type": "value string"
            }
        ],
        "interfaces": [],
        "name": "Task",
        "url": "https://developer.roku.com/docs/references/scenegraph/control-nodes/task.md"
    },
    "texteditbox": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\"**Group**\")\n\nThe **TextEditBox** node class is intended to display a string of characters as they are typed. When focused, it displays a flashing cursor to indicate the text insertion position.\n\n**TextEditBox** nodes are automatically included in the [**Keyboard**](https://developer.roku.com/docs/references/scenegraph/widget-nodes/keyboard.md\"**Keyboard**\") and [**MiniKeyboard**](https://developer.roku.com/docs/references/scenegraph/widget-nodes/minikeyboard.md\"**MiniKeyboard**\") node classes.\n\nThe default appearance of the **TextEditBox** is very transparent, allowing it to pick up most of its color from what is rendered underneath it. The appearance can be customized by changing the backgroundUri and other fields.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "Read-Write",
                "default": "false",
                "description": "When active is set to true, the cursor is displayed. When set to false, the cursor is hidden. When used internal to the \\*\\*Keyboard\\*\\* and \\*\\*MiniKeyboard\\*\\* nodes, those nodes set this field to true when the keyboard has focus, and false when it does not.",
                "name": "active",
                "type": "boolean"
            },
            {
                "accessPermission": "Read-Write",
                "default": "\"\"",
                "description": "Specifies the URI of the image rendered as the background of the \\*\\*TextEditBox\\*\\* node.",
                "name": "backgroundUri",
                "type": "string"
            },
            {
                "accessPermission": "Read-Write",
                "default": "true",
                "description": "When clearOnDownKey is set to true, the textEditBox erases all the characters when down key is pressed (focus does not move down). When set to false, the characters are not erased and focus moves down.",
                "name": "clearOnDownKey",
                "type": "boolean"
            },
            {
                "accessPermission": "Read-Write",
                "default": "0",
                "description": "By default, this is set to the length of the text field, indicating that the next character to be entered should be appended at the end of the string. When used internal to the \\*\\*Keyboard\\*\\* and \\*\\*MiniKeyboard\\*\\* nodes, those nodes use this field to move the text insertion point.",
                "name": "cursorPosition",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "not specified",
                "description": "Specifies the size of the font in points for the text shown in the box (undocumented).",
                "name": "fontSize",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the URI of a TrueType or OpenType font file to be used for the text shown in the box (undocumented).",
                "name": "fontUri",
                "type": "string"
            },
            {
                "accessPermission": "Read-Write",
                "default": "\"\"",
                "description": "Specifies a string to be displayed if the length of the text field string is zero. The typical usage of this field is to prompt the user about what to enter (such as, \"Enter your WiFi password\").",
                "name": "hintText",
                "type": "string"
            },
            {
                "accessPermission": "Read-Write",
                "default": "0xffffffff",
                "description": "Specifies the color of the hint text string.",
                "name": "hintTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Specifies whether to display the end or beginning of text that overflows its available width: \\* \\*\\*true\\*\\*. The end of the text is shown. For example, \"the quick brown fox jumps over the lazy dog\" would be truncated to \"...jumps over the lazy dog\". \\* \\*\\*false\\*\\*. The start of the text is shown (for example, \"the quick brown fox jumps...\").",
                "name": "leadingEllipsis",
                "type": "Boolean"
            },
            {
                "accessPermission": "Read-Write",
                "default": "15",
                "description": "Specifies the maximum length of the string that can be displayed. When used internal to the \\*\\*Keyboard\\*\\* node, maxTextLength is initialized to 75. When used in the \\*\\*MiniKeyboard\\*\\* node, maxTextLength is initialized to 25.",
                "name": "maxTextLength",
                "type": "integer"
            },
            {
                "accessPermission": "Read-Write",
                "default": "false",
                "description": "When set to true, the characters entered are briefly displayed, then replaced with an asterisk. When set to false, the characters entered are always displayed. When used internal to the \\*\\*Keyboard\\*\\* and \\*\\*MiniKeyboard\\*\\* nodes, you can access the keyboard \\*\\*textEditBox\\*\\* field to set its secureMode field. For example: \\`myKeyboard.textEditBox.secureMode = true\\`",
                "name": "secureMode",
                "type": "boolean"
            },
            {
                "accessPermission": "Read-Write",
                "default": "\"\"",
                "description": "Contains the string of characters being displayed.",
                "name": "text",
                "type": "string"
            },
            {
                "accessPermission": "Read-Write",
                "default": "0xffffffff",
                "description": "Specifies the color of the text string displayed.",
                "name": "textColor",
                "type": "color"
            },
            {
                "accessPermission": "Read-Write",
                "default": "-1.0",
                "description": "Specifies the width of the \\*\\*TextEditBox\\*\\* node. When used internal to the \\*\\*Keyboard\\*\\* and \\*\\*MiniKeyboard\\*\\* nodes, those nodes set this field to match the width of the keyboard.",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "TextEditBox",
        "url": "https://developer.roku.com/docs/references/scenegraph/widget-nodes/texteditbox.md"
    },
    "timegrid": {
        "description": "OTT providers can use the TimeGrid node to implement an Electronic Program Guide (EPG) in their apps. In an EPG, channels are represented as horizontal rows, one for each channel. Each row has an channel name on the left, and a set of programs airing on that app to the right. The size of each program depends on its duration. One of these programs has a remote control focus highlight indicator on it, and this highlight can be moved around using the remote control (as long as the TimeGrid node has remote control focus).\n\nThe TimeGrid node also features an alternative Now/Next view that lists only the programs currently airing and airing next, with their respective start times. See [Now/Next mode](https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/timegrid.mdnownext-mode) for more information.\n\n![roku815px - time grid](https://image.roku.com/ZHZscHItMTc2/epg-standard.jpg \"time grid\")",
        "events": [],
        "fields": [],
        "interfaces": [],
        "name": "TimeGrid",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/timegrid.md"
    },
    "timer": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nThe Timer node class generates an observable event after a specified amount of time has elapsed.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Used to control the operation of the Timer node. Recognized values include:\n\n| Value | Effect |\n| --- | --- |\n| none | No effect |\n| start | Starts the **Timer** node operation |\n| stop | Stops a running **Timer** node |",
                "name": "control",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "1",
                "description": "Specifies the time in seconds before the Timer node fires after the control field value is set to start. To specify time values down to millisecond granularity, use a float type (0.001 equals one millisecond)",
                "name": "duration",
                "type": "time"
            },
            {
                "accessPermission": "OBSERVE_ONLY",
                "default": "N/A",
                "description": "Triggers observer callback functions when the Timer node fires. Please note that the timer observer callback executes on the render thread",
                "name": "fire",
                "type": "Event"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If set to true, the Timer node fires repeatedly, each time the specified duration field value elapses. If set to false, the Timer node only fires once until restarted",
                "name": "repeat",
                "type": "Boolean"
            }
        ],
        "interfaces": [],
        "name": "Timer",
        "url": "https://developer.roku.com/docs/references/scenegraph/control-nodes/timer.md"
    },
    "trickplaybar": {
        "description": "The visible TrickPlayBar node.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "This is blended with the marker for the current playback position. This is typically a small vertical bar displayed in the TrickPlayBar node when the user is fast-forwarding or rewinding through the video.",
                "name": "currentTimeMarkerBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "This color will be blended with the graphical image specified in the `filledBarImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.",
                "name": "filledBarBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "A 9-patch or ordinary PNG of the bar that represents the completed portion of the work represented by this ProgressBar node. This is typically displayed on the left side of the track. This will be blended with the color specified by the `filledBarBlendColor` field, if set to a non-default value.",
                "name": "filledBarImageUri",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "The color of the trickplay progress bar to be blended with the `filledBarImageUri` for live linear streams.",
                "name": "liveFilledBarBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Sets the color of the text next to the trickPlayBar node indicating the time elapsed/remaining.",
                "name": "textColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "Sets the blend color of the square image in the trickPlayBar node that shows the current position, with the current direction arrows or pause icon on top. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.",
                "name": "thumbBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0xFFFFFFFF",
                "description": "This color is blended with the graphical image specified by `trackImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.",
                "name": "trackBlendColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "A 9-patch or ordinary PNG of the track of the progress bar, which surrounds the filled and empty bars. This will be blended with the color specified by the `trackBlendColor` field, if set to a non-default value.",
                "name": "trackImageUri",
                "type": "uri"
            }
        ],
        "interfaces": [],
        "name": "TrickPlayBar",
        "url": "https://developer.roku.com/en-ca/docs/references/scenegraph/media-playback-nodes/video.md#ui-fields"
    },
    "vector2dfieldinterpolator": {
        "description": "Extends [**Node**](https://developer.roku.com/docs/references/scenegraph/node.md\n\nVector2DFieldInterpolator specifies a keyframe animation sequence to be applied to a pair Vector2D field of a node. Most typically, this is used to animate the (x,y) coordinates of a node's translation field.\n\nAll field interpolators include a set of key/keyValue pairs that define a keyframe of the animation. Field interpolators are generally used as children of an Animation node. As the animation progresses, it sets the fraction field of its field interpolators to a value between 0 and 1, indicating the percentage of the Animation's progress. The keyframes of the interpolator include a \"key\", the percentage where the keyframe should occur, and a \"keyValue\", the value that the field should have at that percentage.\n\nFor example, if a Vector2DFieldInterpolator had three keyframes, (0.0, \\[0.0, 0.0\\]), (0.4, \\[500.0, 0.0\\]) and (1.0, \\[500, 200.0\\]), then when the interpolator's fraction field was 0.0 (i.e. 0%), the field would be set to \\[0.0, 0.0\\]. When fraction was 0.4 (i.e. 40%), the field would be set to \\[500.0, 0.0\\]. When fraction was 1.0 (i.e. 100%), the field would be set to \\[500.0, 200.0\\].\n\nFor values of fraction between 0.0 and 0.4 (e.g. 0.2 or 20%), the field value is determined by linearly interpolating the keyValues for the first two keyframes. In this case, since the key of 0.2 is halfway between the key at 0.0 and the key at 0.4, the field would be set to \\[250.0, 0.0\\] (halfway between the point \\[0.0, 0.0\\] and \\[200.0, 0.0\\]. Similarly, when fraction is between the second and third keys (i.e. between 0.4 and 1.0), the field value is determined by linearly interpolating the keyValues of the second and third keyframes.\n\nFor this example, if the field being interpolated were the translation field of a Poster node parented to the Scene node, the Poster would originally be positioned with its top/left corner at the upper, left corner of the screen. As the animation proceeded from 0% to 40% complete, the Poster would slide horizontally to the right until it's top/left corner was at x=500.0, y=0.0. As the animation continued from 40% to 100% complete, the Poster would slide vertically down until its top/left corner was at x=500.0, y=200.0.\n\nIf the first keyframe has a key percentage greater than zero, then the field value will be equal to the keyValue of the first keyframe until fraction reaches the first keyframe's key percentage. Similarly, if the last keyframe has a key percentage less than one, the field value will be set to the keyValue of the last keyframe from when fraction equals the the last keyframe's key percentage and will not change as fraction increases from that value to 1.0.\n\n> While linearly interpolation is used to compute the keyValue's for fraction values between successive keys, non-linear easing functions may be applied to the fraction values computed by the Animation node, so the overall animation may vary in speed.",
        "events": [],
        "extends": {
            "name": "Node",
            "url": "https://developer.roku.com/docs/references/scenegraph/node.md"
        },
        "fields": [
            {
                "accessPermission": "READ_WRITE",
                "default": "\"\"",
                "description": "Specifies the field to interpolate. The string should contain the ID of a node in the scene and the name of a field of that node, separated by a dot \".\". For example, \"title.width\" would indicate that the interpolator should be applied to the width field of a node whose id field was \"title\". The specified field must be of type float",
                "name": "fieldToInterp",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Specifies the percentage to be used to compute a value for the field",
                "name": "fraction",
                "type": "float"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the key percentages for the interpolator's keyframes. Each key percentage should be a unique value from 0 to 1 indicating the percentage of the animation where the keyValue should occur. Behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field",
                "name": "key",
                "type": "array of floats"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "Specifies the key values or the interpolator's keyframes. Each value in the keyValue array corresponds to a value in the key field's array. The interpolator's behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field",
                "name": "keyValue",
                "type": "array of vector2d"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Enables animation to be played in reverse.",
                "name": "reverse",
                "type": "boolean"
            }
        ],
        "interfaces": [],
        "name": "Vector2DFieldInterpolator",
        "url": "https://developer.roku.com/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md"
    },
    "video": {
        "description": "Extends [**Group**](https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md\n\nThe Video node class provides a controlled play of live or VOD video.\n\nThe Video node includes a wide variety of internal nodes to support trick play, playback buffering indicators, and so forth. Playback buffering indicators, to indicate buffering before initial playback as well as re-buffering, use an internal instance of a ProgressBar node. For trick play, an internal instance of a TrickPlayBar node is provided. For display of BIF images for DVD-like chapter selection, an internal instance of a BIFDisplay node is provided.\n\nStarting from Roku OS 8, the behavior of the Roku system overlay is such that the system overlay now slides in whenever the \\* button is pressed, the Video node is in focus, and the app does not have its OnKeyEvent() handler fired. When the Video node is not in focus, the system overlay does not slide in and the OnKeyEvent() handler is fired.",
        "events": [],
        "extends": {
            "name": "Group",
            "url": "https://developer.roku.com/docs/references/scenegraph/layout-group-nodes/group.md"
        },
        "fields": [
            {
                "accessPermission": "WRITE",
                "default": "false",
                "description": "Indicates whether the \"STOP\" command is executed asynchronously (true) or synchronously (false). By default, the STOP command is executed synchronously, which blocks the UI thread. Enabling this field makes the STOP command non-blocking, which enables the video to be switched faster. When this field is enabled, the \\`state\\` field is set to \"stopping\" when the asynnchronous stop begins. The \\`state\\` field then changes to \"stopped\" once the stop has been completed. Any other media player component calls on the UI thread that require the Video node to be re-instantiated should be blocked until the asynnchronous stop has been completed (for example, updating the \\`control\\` field to \"Play\" or \"Prebuffer\" or updating the \\`seek\\` field). This is because a video node in the \"stopping\" state is still using the underlying media player, which is not available at that time. As a result, performing these types of operations on a different video while in the \"stopping\" state may result in a playback failure.",
                "name": "asyncStopSemantics",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "In all other cases they shouldn't .Contains the format of the currently playing audio.\n\n| Value | Meaning |\n| --- | --- |\n| \"\" | No stream playing |\n| none | Stream contains no playable audio |\n| unknown | Stream contains unknown audio |\n| aac | ISO/IEC 14496-3, Advanced Audio Coding |\n| aac\\_adif | ISO/IEC 14496-3, Advanced Audio Coding, ADIF container |\n| aac\\_adts | ISO/IEC 14496-3, Advanced Audio Coding, ADTS container |\n| aac\\_latm | ISO/IEC 14496-3, Advanced Audio Coding, LATM container |\n| ac3 | Dolby Digital |\n| ac4 | Dolby Audio - AC-4 |\n| alac | Apple Lossless |\n| dts | DTS Coherent Acoustics |\n| eac3 | Dolby Digital Plus |\n| flac | Free Lossless Audio Codec |\n| flac | Free Lossless Audio Codec |\n| mat | Dolby Audio - TrueHD |\n| mp3 | ISO/IEC 11172-3, MPEG Audio Layer III |\n| pcm | linear PCM |\n| vorbis | Ogg Vorbis |\n| wma | Microsoft Windows Media Audio (sunset as of Roku OS 12.5) |\n| wmapro | Microsoft Windows Media Pro Audio (sunset as of Roku OS 12.5) |",
                "name": "audioFormat",
                "type": "string"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "{ }",
                "description": "The significance and priority order of the attributes and values for the audio tracks available in the video stream. > A language matching any country code does not match a track that specifies the same language but with no country code. Provide the attribute fields from highest to lowest significance (for example, if the \\*\\*language\\*\\* should take precedence over the \\*\\*description\\*\\*, list \\*\\*language\\*\\* first. For the audio track languages, provide the language code values from highest to lowest priority (for example, if English for the United States \\\\\\[\"en-US\"\\\\\\] has precedence over English for the United Kingdom \\\\\\[\"en-UK\"\\\\\\], list the language codes in the following order: \\\\\\[\"en-US\", \"en-UK\"\\\\\\].\n\n| Field | Type | Description |\n| --- | --- | --- |\n| values | roArray of roAssociativeArrays | Specify values for the following audio track attributes. List the attributes from highest to lowest significance.    <table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>language</td><td>array of Strings</td><td>A list of (ISO-639)/country (ISO-3166) codes for the audio track. List the languages in priority order (highest to lowest).</td></tr><tr><td>descriptive</td><td>array of Strings</td><td>A flag indicating whether descriptives exist for the video playing in the stream. This is equivalent to the HLS \"public.accessibility.describes-video\" characteristic.</td></tr></tbody></table>   |\n| overrideSystem | boolean | Specify whether to use the app's preferences over the system preferences (true) or use the app's preferences only when the system preferences do not match any of the available tracks (false), which allows the app to provide additional rules in this case. The default value is false. |\n\n\\*\\*Example\\*\\* \\`\\`\\` video.audioSelectionPreferences = { values: \\[ { language: \\[\"en-US\", \"en-UK\", \"en\", \"en-\\*\"\\] }, { descriptive: \"false\" } \\], overrideSystem: true } \\`\\`\\` \\*\\*Explanation\\*\\* The audio language with the highest priority is \"en-US\". The next highest priority language is \"en-UK\", then \"en\" with no country code, and finally \"en\" with any country code.",
                "name": "audioSelectionPreferences",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "The track identifier of the selected audio track. Reading this field will return the track identifier of the audio selected by the user. Writing this value will change the audio track. However, apps should not do this unless they are implementing their own track selection menu that users control. This is because the Roku OS selects the best track automatically based on preferred language setting on the device. See \\[Automatic audio track selection\\](#automatic-audio-track-selection) for more information.",
                "name": "audioTrack",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "Enables video content to automatically play after rebuffering. Setting this flag to false disables this default behavior.",
                "name": "autoplayAfterSeek",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "[ ] empty array",
                "description": "Each associative array has the following entries:\n\n| Key | Type | Value |\n| --- | --- | --- |\n| Language | string | ISO 639-2 three-letter language code |\n| Name | string | Descriptive name of the audio track |\n| Track | string | The track identifier. The value of this field may be used to select the audio track. |\n| HasAccessibilityDescription      _Available since Roku OS 13.0_ | boolean | HLS: represents \"public.accessibility.describes-video.\"      DASH: Audio track contains a textual description (intended for audio synthesis) or an audio description describing a visual component. |\n| HasAccessibilityEAI      _Available since Roku OS 13.0_ | boolean | DASH: Audio track contains an element for improved intelligibility of the dialogue \\[Enhanced Audio Intelligibility\\]. |\n\nThe field also retrieves audio description tracks which are typically seen on broadcast TV. An audio description track is mixed with the main audio track.",
                "name": "availableAudioTracks",
                "type": "array of associative arrays"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "[ ] empty array",
                "description": "The list of subtitle tracks available in the video stream. The array is initially populated with the tracks specified in the Content Meta-Data, and additional tracks are added if they are detected by the digital video player. Each associative array has the following entries:\n\n| Key | Type | Value |\n| --- | --- | --- |\n| Description | string | Descriptive name of the subtitle track |\n| Language | string | ISO 639-2 three-letter language code |\n| TrackName | string | The track identifier. The value of this field may be used to select the subtitle track. |\n| HasAccessibilityDescription      _Available since Roku OS 13.0_ | boolean | HLS: represents \"public.accessibility.describes-music-and-sound.\" |\n| HasAccessibilityCaption      _Available since Roku OS 13.0_ | boolean | HLS: represents \"public.accessibility.transcribes-spoken-dialog.\"      DASH: Subtitle track contains captions |\n| HasAccessibilitySign      _Available since Roku OS 13.0_ | boolean | DASH: Subtitle track contains a sign-language interpretation of an audio component info. |",
                "name": "availableSubtitleTracks",
                "type": "array of associative arrays"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "internal instance default",
                "description": "Component that displays BIFs and allows navigation. The fields of this internal node are as follows:\n\n| Field | Type | Default | Use |\n| --- | --- | --- | --- |\n| frameBgBlendColor | color | 0xFFFFFFFF | A color to be blended with the image displayed behind individual BIF images displayed on the screen. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place. |\n| frameBgImageUri | uri | \"\" | The URI of an image to be displayed behind individual frames on the screen. The actual frame image is displayed opaquely on top of this background, so only the outer edges of this image are visible. Because of that, this background image typically appears as a border around the video frame. If the frameBgBlendColor field is set to a value other than the default, that color will be blended with the background image. |\n| getNearestFrame | time | invalid | **Write-Only**   Requests the nearest BIF to the time specified. This would normally be an offset from the current playback position. The getNearestFrame request is passed to the BifCache which uses the getNearestFrame() method implemented on all BIF storage classes. Existing BifCache functionality is then used to retrieve the bitmap data and load it into the texture manager. |\n| nearestFrame | string | \"\" | **Read-Only**   Contains the URI of the requested BIF. The returned URIs will be of the form 'memory://BIF_%d_%d'. These URIs can then be used directly in the 'uri' field of a Poster SGN (or similar). |",
                "name": "bifDisplay",
                "type": "BifDisplay node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "internal instance default",
                "description": "Component that shows the progress of re-buffering, after video playback has started. The fields of this internal node are as follows:\n\n| Field | Type | Default | Use |\n| --- | --- | --- | --- |\n| width | float | system default | Sets a custom width for an instance of the ProgressBar node |\n| height | float | system default | Sets a custom height for an instance of the ProgressBar node |\n| emptyBarBlendColor | color | 0xFFFFFFFF | A color to be blended with the graphical image specified in the `emptyBarImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place. |\n| emptyBarImageUri | uri | \"\" | A 9-patch or ordinary PNG of the bar presenting the remaining work to be done. This is typically displayed on the right side of the track, and is blended with the color specified in the `emptyBarBlendColor` field, if set to a non-default value. |\n| filledBarBlendColor | color | 0xFFFFFFFF | This color will be blended with the graphical image specified in the `filledBarImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place. |\n| filledBarImageUri | uri | \"\" | A 9-patch or ordinary PNG of the bar that represents the completed portion of the work represented by this ProgressBar node. This is typically displayed on the left side of the track. This will be blended with the color specified by the `filledBarBlendColor` field, if set to a non-default value. |\n| trackBlendColor | color | 0xFFFFFFFF | This color is blended with the graphical image specified by `trackImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place. |\n| trackImageUri | uri | \"\" | A 9-patch or ordinary PNG of the track of the progress bar, which surrounds the filled and empty bars. This will be blended with the color specified by the `trackBlendColor` field, if set to a non-default value. |\n| percentage | integer | top | The percentage of the work that is done. Setting this field controls the visual appearance of the ProgressBar node. |",
                "name": "bufferingBar",
                "type": "ProgressBar node"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Contains information about stream buffering progress and status. This field is valid only while buffering is in progress, both at stream startup or when re-buffering is required. Observers will be notified when any element of the array changes, and also when buffering is complete and the field itself becomes invalid. The array contains the following name - value pairs.\n\n| Value | Meaning |\n| --- | --- |\n| percentage | Percent buffering complete as an integer. |\n| isUnderrun | Boolean value indicating if a stream underrun occurred. |\n| prebufferDone | A boolean value that indicates whether the player has buffered enough data to allow the player to begin playing immediately should \"control\" be set to \"play.\" |\n| actualStart | A time value that is automatically set when prebufferDone becomes true, specifying the actual time from which playback will resume. This may vary from the time requested in the content node's playStart field, depending on the capabilities of the player and the seekMode setting. |\n\n\\> While it is possible to use the Video node seek field to specify the seek time, it is recommended that apps do the following: > > 1. Set the content node field playStart in seek-to-pause scenarios. > 2. In the video node, set \"control\" to \"prebuffer\". > 3. Wait for \"prebufferDone\" to become \"true\". > 4. Check \"actualStart\" (if desired). > 5. Set \"control\" to \"play\".",
                "name": "bufferingStatus",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "The color of the text displayed near the buffering bar defined by the \\`bufferingBar\\` field, when the buffering bar is visible. If this is 0, the system default color is used. To set a custom color, set this field to a value other than 0x0.",
                "name": "bufferingTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "Allows apps to style closed captions. For any keys that are absent from the associative array, or for unexpected values, the Default value is assumed for that property. Following are the possible key names and values for this field:\n\n| Property | Possible Values |\n| --- | --- |\n| Text/Font    | Default   Serif Fixed Width   Serif Proportional   Sans Serif Fixed Width   Sans Serif Proportional   Casual   Cursive   Small Caps |\n| Text/Effect | Default   None   Raised   Depressed   Uniform   Drop shadow (left)   Drop shadow (right) |\n| Text/Size | Default   Large   Medium   Small |\n| Text/Color | Default   White   Black   Red   Green   Blue   Yellow   Magenta   Cyan |\n| Text/Opacity | Default   25%   50%   75%   100% |\n| Background/Color | Default   White   Black   Red   Green   Blue   Yellow   Magenta   Cyan |\n| Background/Opacity | Default   Off   25%   50%   75%   100% |\n| Window/Color | Default   White   Black   Red   Green   Blue   Yellow   Magenta   Cyan |\n| Window/Opacity | Default   Off   25%   50%   75%   100% |",
                "name": "captionStyle",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "Sets the CGMS (Copy Guard Management System) on analog outputs to the desired level. The valid values are:\n\n| Value | Effect |\n| --- | --- |\n| 0 | No copy restriction |\n| 1 | Copy no more |\n| 2 | Copy once allowed |\n| 3 | No copying permitted |",
                "name": "cgms",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The clip ID of the currently playing track.",
                "name": "clipId",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Information about the video stream that most recently completed playing, due to an error, user action, or end of the stream. The associative array consists of the same keys as for the \\`streaminfo\\` field, with one additional key, \\`isFullResult\\`, a Boolean type that, if true indicates the \\`stream\\` played to completion, or if false, was interrupted by an error or user action. This field is set prior to the \\`state\\` field being changed, so \\`state\\` field observer callback functions can assume that the associative array values are valid when the state field changes.",
                "name": "completedStreamInfo",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "NULL",
                "description": "The ContentNode with the \\[Content Meta-Data\\](/docs/developer-program/getting-started/architecture/content-metadata.md) for the video, or a video playlist (a sequence of videos) to be played. If a video playlist is to be played, the children of this ContentNode comprise the playlist, and each ContentNode child must have all attributes required to play that video. For example, if the videos \"A\" and \"B\" are to be played, three ContentNodes must be created: the parent ContentNode (which is largely ignored), one ContentNode child for \"A,\" and one ContentNode child for \"B.\" The parent node is set into this content field, and when video playback is started, all of its children will be played in sequence. Any changes made to the playlist after playback has started are ignored. See the \\`contentIsPlaylist\\` and \\`contentIndex\\` fields, for more information on playlists.",
                "name": "content",
                "type": "ContentNode"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "false",
                "description": "\\_Available since Roku OS 8.\\_ Determines whether the current content is blocked.",
                "name": "contentBlocked",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "-1",
                "description": "The index of the video in the video playlist that is currently playing. Generally, you would only want to check this field if video playlists are enabled (by setting the \\`contentIsPlaylist\\` field to true), but it is set to 0 when a single video is playing, and video playlists are not enabled.",
                "name": "contentIndex",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If set to true, enables video playlists (a sequence of videos to be played). See the \\`content\\` and \\`contentIndex\\` field for more information on playlists.",
                "name": "contentIsPlaylist",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "none",
                "description": "Sets the desired play state for the video, such as starting or stopping the video play. Getting the value of this field returns the most recent value set, or none if no value has been set. To dynamically monitor the actual state of the video, see the \\`state\\` field. The play and stop commands to commence and discontinue playback should not be used to implement trick modes like rewind, or replay. For that use the \\`seek\\` field.\n\n| Option | Effect |\n| --- | --- |\n| none | No play state set |\n| play | Start video play |\n| stop | Stop video play |\n| pause | Pause video play |\n| resume | Resume video play after a pause |\n| replay | Replay video |\n| prebuffer | Starts buffering the video stream before the Video node actually begins playback. Only one video stream can be buffering in the application at any time. Setting the `control` field to `prebuffer` for another video stream after setting `prebuffer` for a previous video stream stops the buffering of the previous video stream. |\n| skipcontent | Skip the currently-playing content and begin playing the next content in the playlist. If the content is not a playlist, or if the current content is the end of the playlist, this will end playback. |",
                "name": "control",
                "type": "option string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "The track identifier of the audio being played. Reading this field will return the track that is being played, which may be different than the track being selected (for example, when the Roku media player cannot play a certain format). When the user has not selected an audio track, the platform will select a track based on the preferred audio language setting.",
                "name": "currentAudioTrack",
                "type": "String"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "The identifier of the selected subtitle track. Subtitles may or may not be visible on the screen, depending upon the user's caption mode setting. Reading this field will return the identifier of the subtitle track that is playing. When the user has not selected a track, the Roku media player will select a track based on the preferred caption language system setting.",
                "name": "currentSubtitleTrack",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "{}",
                "description": "Provides the following video decoder statistics related to the start of video playback:\n\n| Key | Type | Value |\n| --- | --- | --- |\n| renderCount | integer | The number of frames that have been rendered since playback was started. This value is incremented each time a new frame is rendered |\n| repeatCount | integer | The number of frames that have been repeated since playback was started.This value is incremented each time a new frame is not available in time and the current frame is rendered an additional frame period. |\n| frameDropCount | integer | The number of frames that have been dropped since playback was started.This value is incremented each time the presentation time of a decoded frame is too old to be rendered and the next frame is rendered instead. |\n| streamErrorCount | integer | The number of bitstream errors since playback was started.This value is incremented each time the decoder detects a bitstream error. |\n\nSet the \\*\\*enableDecoderStats\\*\\* field to true to enable updates to this field.",
                "name": "decoderStats",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Set this to true to suppress the screensaver. This is typically used to suppress the screensaver when playing audio-only streams.",
                "name": "disableScreenSaver",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Information about the video segment that was just downloaded. This is only meaningful for segmented video transports, such as DASH and HLS. The associative array has the following entries:\n\n| Key | Type | Value |\n| --- | --- | --- |\n| Status | integer | Status of the download: 0 = success, nonzero = error |\n| SegSequence | integer | Stream segment sequence number |\n| SegUrl | string | Stream segment URL (i.e., .ts file for HLS, stream fragment URL for smooth) |\n| DownloadDuration | integer | Amount of time spent downloading the segment, in milliseconds |\n| SegSize | integer | Segment size, in bytes |\n| SegType | integer | Type of data in the segment: 1=audio, 2=video, 3=captions, 0=mux |\n| BitrateBPS | integer | Bitrate of the segment, in bits per second |\n| SegStart | time | The start time of the segment from the start of the video, specified in seconds |\n| SegDuration | string | The duration of the segment in milliseconds. |\n| Path | string | A path indicating the Period, AdaptationSet and Representation that is played. This is in UNIX directory notation as: /// |\n| Width | integer | For video segments, the width of the encoded video picture |\n| Height | integer | For video segments, the height of the encoded video picture |\n| HdrMode |  | Indicates the HDR format of the content, which may be one of the following values:  *   0: UNKNOWN *   1: NONE (SDR) *   2: HDR10 *   3: DOLBY\\_VISION *   4: HLG10 *   5: HDR10\\_PLUS *   6: SL\\_HDR2   |",
                "name": "downloadedSegment",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The duration of the video being played, specified in seconds. This becomes valid when playback begins and may change if the video is dynamic content, such as a live event.",
                "name": "duration",
                "type": "time"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Enables updates to the \\*\\*decoderStats\\*\\* field.",
                "name": "enableDecoderStats",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "False",
                "description": "Enables the scrubbing of the trickplay bar during the availability window of live linear streams.",
                "name": "enableLiveAvailabilityWindow",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Set this to true to allow the screensaver to activate even if video is playing, as long as that video does not cover 50% or more of the screen. Set to false to block the screensaver activating if any video is playing. Note that this field has no effect when the video node plays audio only streams. For screensaver control with audio only streams, use the disableScreenSaver field.",
                "name": "enableScreenSaverWhilePlaying",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "False",
                "description": "Enables the \\*\\*thumbnailTiles\\*\\* field to be set and updated in the case of live HLS and DASH streams, which contain thumbnails as the thumbnails become available. By default and when this is set to false, the \\*\\*thumbnailTiles\\*\\* field is not written during live streams to maintain backwards compatibility with older applications and to avoid performance or memory issues. This is becuase they might not be expecting constant updates to the \\*\\*thumbnailTiles\\*\\* field if they were written to handle VOD streams, which rarely update the \\*\\*thumbnailTiles\\*\\* field.",
                "name": "enableThumbnailTilesDuringLive",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "\\*\\*Controls whether trickplay is allowed during playback. When set to false the user trickplay buttons on the remote will have no effect. This only applies when enableUI is set to true.\\*\\*",
                "name": "enableTrickPlay",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "true",
                "description": "If set to true (the default), the entire Video node user interface (such as ProgressBar and TrickPlayBar nodes, and BIF navigation) appear in response to stream events and remote control key presses. If set to false, most of the Video node user interface will not be shown, and the application is expected to implement the UI. The one exception is the closed-caption dialog, which always appears when the video is playing fullscreen (either full height or full width) and the user presses the Options (\\\\\\*) button. When using the \\[Roku Advertising Framework (RAF)\\](/docs/developer-program/advertising/roku-advertising-framework.md), the RAF library may temporarily set this field to false while playing ads.",
                "name": "enableUI",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The error code associated with the video play error set in the \\`state\\` field: \\* 0 no error \\* \\\\-1 network error (server down or unresponsive, server is unreachable, network setup problem on the client). \\* \\\\-2 connection timed out \\* \\\\-3 unknown/unspecified or generic Error \\* \\\\-4 empty list; no streams were specified to play \\* \\\\-5 media error; the media format is unknown or unsupported \\* \\\\-6 DRM error Use the \\*\\*errorStr\\*\\* and and \\*\\*errorInfo\\*\\* fields for more descriptive diagnostic information to help identify and resolve the cause of the error.",
                "name": "errorCode",
                "type": "integer"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "A diagnostic message to help resolve the video play error set in the \\`state\\` field. The roAssociativeArray contains the following fields:\n\n| Field | Type | Description |\n| --- | --- | --- |\n| clipId | integer | The unique ID for the clip |\n| ignored | integer | Indicates whether the error generated an exception (0) or was ignored resulting in the next item in the content list being played (1). |\n| source | string | The module that generated the error. |\n| category | String | The type of error, which includes: \"http\", \"drm\", \"mediaerror\", or \"mediaplayer\". |\n| errcode | integer | The internal Roku code associated with the error. Use the **dbgmsg** field for debugging. |\n| dbgmsg | string | A verbose debug message that can help identify the root cause of the error. |\n| drmerrcode | integer | The error code returned by the DRM system, if any, when a video player error occurs |",
                "name": "errorInfo",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "An error message describing the video play error set in the \\`state\\` field. Use the \\*\\*errorStr\\*\\* and and \\*\\*errorInfo\\*\\* fields for more descriptive diagnostic information to help identify and resolve the cause of the error.",
                "name": "errorMsg",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "A diagnostic message to help resolve the video play error set in the \\`state\\` field. The format of the errorStr is as follows: category:{category\\\\\\_name}:error:{error\\\\\\_code}:ignored:{0|1}:{source}:{source\\\\\\_name}:{additional catcher comment}:{error\\\\\\_string}:extra:{error\\\\\\_attributes}\n\n| errorStr Field | Type | Description |\n| --- | --- | --- |\n| category\\_name | string | The type of error, which includes: \"http\", \"drm\", \"mediaerror\", or \"mediaplayer\". |\n| error\\_code | integer | The unique code associated with the error. |\n| ignored | integer | Indicates whether the error generated an exception (0) or was ignored resulting in the next item in the content list being played (1). |\n| source | string | The module that generated the error. |\n| source\\_name | string | The module that generated the error. |\n| additional catcher comment | string | Typically, the comment added when the exception is caught. |\n| error\\_string | string | A text message describing the video play error. |\n| error\\_attributes | string | The error attribute, which includes the clipId (the unique ID of the clip that failed to play). |",
                "name": "errorStr",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "Off",
                "description": "Sets the value of the global Roku closed-caption mode. This can be used to allow the user or the application to change the closed-caption mode in an application just before or during video playback. The possible options are:\n\n| Option | Effect |\n| --- | --- |\n| \"Off\" | Turns the global Roku closed-caption mode off. |\n| \"On\" | Turns the global Roku closed-caption mode on. |\n| \"Instant replay\" | Sets the global Roku closed-caption setting to display captions only during instant replay. |\n| \"When mute\" | Sets the global Roku closed-caption setting to display captions only when the volume is muted. (This only applies to Roku TVs.) |\n\nThe app should set the \\`subtitleTrack\\` field regardless of the selected Caption Mode.",
                "name": "globalCaptionMode",
                "type": "option string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Sets the height of the video play window in pixels. If set to 0.0 (the default), the video play window is set to the height of the entire display screen.",
                "name": "height",
                "type": "float"
            },
            {
                "accessPermission": "READ_ONL",
                "default": "",
                "description": "Indicates whether the DRM license was acquired. If a failure occurs, this field provides additional details about the error. The roAssociativeArray contains the following fields:\n\n| Key | Type | Value |\n| --- | --- | --- |\n| response | string | The server response. If a license is not retrieved, the response is empty and the HTTP response code is returned instead. |\n| status | string | The HTTP response code. |\n| keysystem | string | The DRM technology used. |\n| duration | string | The total time elapsed in sending a request to the license server and receiving a response (in milliseconds). |",
                "name": "licenseStatus",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "If set to true, the video or video playlist (if the \\`contentIsPlaylist\\` field is set to true to enable video playlists) will be restarted from the beginning after the end is reached.",
                "name": "loop",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[0,0]",
                "description": "Sets the max resolution required by your video. Video decode memory is a shared resource with OpenGL texture memory. The Brightscript 2D APIs are implemented using OpenGL texture memory on Roku models that support the Open GL APIs (see \\[Hardware specifications\\](/docs/specs/hardware.md) for a list of these models). On models that do not support Open GL APIs, this field exists for API compatibility but has no effect on actual memory allocations. Video decode memory allocation is based on a resolution of 1920x1080 or 1280x720 as the maximum supported resolution for a particular Roku model (see \\[Hardware specifications\\](/docs/specs/hardware.md) for a list of these models). This field enables applications that want to use both the 2D APIs and video playback with a lower resolution than 1080p. Without this field, these applications are likely to not have enough memory for either video playback or UI rendering. If width is 0 (the default), it is unlimited. If height is 0 (the default), it is unlimited.",
                "name": "MaxVideoDecodeResolution",
                "type": "vector2d (width, height)"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Set to true to mute the audio of the video currently playing in the Video node. Set to false to restore audio.",
                "name": "mute",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "-1",
                "description": "If the \\`contentIsPlaylist\\` field is set to true to enable video playlists, sets the index of the next video in the playlist to be played. Setting this field does not immediately change the video being played, but takes effect when the current video is completed or skipped. By default, this value is -1, which performs the default index increment operation. After the video specified by the index in this field begins playing, the field is set to the default -1 again, so the next video played will be set by the default index increment operation unless the field is set again to a different index.",
                "name": "nextContentIndex",
                "type": "integer"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.5",
                "description": "The interval between notifications to observers of the position field, specified as the number of seconds. If the value is 0, no notifications are delivered. This value may be read or modified at any time.",
                "name": "notificationInterval",
                "type": "time"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The ending position of the video buffered when paused. This field is only valid for live video.",
                "name": "pauseBufferEnd",
                "type": "time"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Enables apps to translate the relative time provided in the \\*\\*pauseBuffer\\*\\* fields to UTC time based on the wall-clock timing provided in live manifests/playlists.",
                "name": "pauseBufferEpochOffset",
                "type": "double"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "false",
                "description": "Indicates that the video buffer was not able to save all video since being paused. This field is only valid for live video.",
                "name": "pauseBufferOverflow",
                "type": "Boolean"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The current presentation position of the video buffered when paused. This field is only valid for live video.",
                "name": "pauseBufferPosition",
                "type": "time"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The beginning position of the video buffered when paused. This field is only valid for live video.",
                "name": "pauseBufferStart",
                "type": "time"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "-",
                "description": "The visible pivot node. This is a generic renderable node that can be used to display any component. This node is only displayed when video is paused.",
                "name": "pivotNode",
                "type": "renderable node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "The index of the button that has focus in the \\*\\*playbackActionButtons\\*\\* field.",
                "name": "playbackActionButtonFocused",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE",
                "default": "OX121212FF",
                "description": "Specifies the color of the button label text when the button has key focus.",
                "name": "playbackActionButtonFocusedTextColor",
                "type": "Color"
            },
            {
                "accessPermission": "WRITE",
                "default": "SmallBoldSystemFont",
                "description": "Specifies the font of the button label when the button has key focus.",
                "name": "playbackActionButtonFocusedTextFont",
                "type": "Font"
            },
            {
                "accessPermission": "WRITE",
                "default": "-",
                "description": "Specifies the button background color when the button has key focus.",
                "name": "playbackActionButtonFocusIndicatorBlendColor",
                "type": "Color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[]",
                "description": "Component that shows the buttons and other specified UI elements on the pause screen at the start of playback. Each element in the array has following fields:\n\n| Field | Type | Default | Description |\n| --- | --- | --- | --- |\n| text | string | system default | Text for the button label |\n| icon | uri | \"\" | A 9-patch or PNG of the icon to be displayed when the button does not have. |\n| focusIcon | uri | \"\" | A 9-patch or PNG of the icon to be displayed when the button has focus. |\n| buttonIsDisabled | Boolean | false | Controls whether the button is disabled (true) or enabled (false). A disabled button is skipped and does not have focus while the user navigates the different playback action buttons with the directional pad on the Roku remote control. |",
                "name": "playbackActionButtons",
                "type": "roArray of roAssociativeArrays"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0",
                "description": "The index of the button that is selected in the \\*\\*playbackActionButtons\\*\\* field.",
                "name": "playbackActionButtonSelected",
                "type": "integer"
            },
            {
                "accessPermission": "WRITE",
                "default": "0xEFEFEFFF",
                "description": "Specifies the color of the button label text when the button does not have key focus.",
                "name": "playbackActionButtonUnfocusedTextColor",
                "type": "Color"
            },
            {
                "accessPermission": "WRITE",
                "default": "SmallSystemFont",
                "description": "Specifies the font of the button label when the button does not have key focus.",
                "name": "playbackActionButtonUnfocusedTextFont",
                "type": "Font"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "Provides timing measurements related to the start of video playback. All measurements are in seconds. The roAssociativeArray contains the following fields:\n\n| Field | Type | Access Permission | Description |\n| --- | --- | --- | --- |\n| total\\_dur | float | READ\\_ONLY | Total video start duration. |\n| manifest\\_dur | float | READ\\_ONLY | Manifest download and parsing. |\n| drm\\_load\\_dur | float | READ\\_ONLY | DRM system initialization. |\n| drm\\_lic\\_acq\\_dur | float | READ\\_ONLY | License acquisition. This typically includes interactions with the license server. |\n| prebuf\\_dur | float | READ\\_ONLY | Prebuffer content. |\n| manifest\\_start | Float | READ\\_ONLY | Point at which manifest download and parsing begins. |\n| drm\\_load\\_start | Float | READ\\_ONLY | Point at which DRM system initialization begins. |\n| drm\\_lic\\_acq\\_start | Float | READ\\_ONLY | Point at which license acquisition begins. |\n| prebuf\\_start | Float | READ\\_ONLY | Point at which content pre-buffering begins. |\n\n\\> The \\\\\\_start fields correspond to the similarly named \\\\\\_dur (duration) fields in this structure. In each case, the \\\\\\_start point is the number of milliseconds elapsed from the initialization of the media player (t=0.000). If required, ending points for each interval can be derived from its associated starting-point and duration.",
                "name": "playStartInfo",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Time of the current position in the stream. Either UTC time or elapsed since start of stream depending on content type. As of Roku OS 9.3, when the video is paused, the position is recorded for that pause event. This means that playing, pausing, and resuming a video generates three separate positions.",
                "name": "position",
                "type": "time"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Contains the following fields that provide information about the last rendered video and audio samples.\n\n| Field | Type | Default | Access Permission | Description |\n| --- | --- | --- | --- | --- |\n| audio | double | invalid | READ\\_ONLY | Position of the last rendered audio sample, specified in seconds |\n| clip\\_id | integer | invalid | READ\\_ONLY | The unique ID of the clip |\n| epoch | integer | invalid | READ\\_ONLY | 0 means positions are relative to videoStart; 1 means that positions are utc |\n| video | double | invalid | READ\\_ONLY | The value of this field is double/float, in seconds since epoch.Position of the last rendered video sample, specified in seconds |",
                "name": "positionInfo",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "internal instance default",
                "description": "Component that shows the progress of initial retrieving of the video, prior to starting playback. The fields of this internal node are the same as for the \\`bufferingBar\\` field, which are the fields of the internal ProgressBar node.",
                "name": "retrievingBar",
                "type": "ProgressBar node"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "system default",
                "description": "The color of the text displayed near the retrieving bar, when the retrieving bar defined in the \\`retrievingBar\\` field is visible. If this is 0, the system default color is used. To set a custom color, set this field to a value other than 0x0.",
                "name": "retrievingTextColor",
                "type": "color"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Enables apps to continuously play video when the audio track is switched. This feature currently supports HLS only. \\* \\*\\*true\\*\\*: Continues video playback when the audio track changes (provided that HLS is being used and the audio format of the new audio track is the same as the original one). In this case, a brief period of no audio may occur while the audio tracks are switched. \\* \\*\\*false\\*\\*: Pauses video playback for approximately 1 second when the audio track changes (default behavior). In this case, a black screen and/or buffering appears while the audio tracks are switched. To enable this feature, you must set this field before sending any command to the Video node. This field may not be changed during video playback.",
                "name": "seamlessAudioTrackSelection",
                "type": "Boolean"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "invalid",
                "description": "Sets the current position in the video. The value is the number seconds from the beginning of the stream, specified as a double.",
                "name": "seek",
                "type": "time"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"default\"",
                "description": "Determines the desired level of accuracy for seek behavior:\n\n| Value | Meaning |\n| --- | --- |\n| default | Seek to the closest sync frame (segment, or I-frame of a multi-frame segment) that is earlier than the requested seek time. |\n| accurate | Seek to the exact time requested if platform support (video decoder step function) is available. |",
                "name": "seekMode",
                "type": "string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "none",
                "description": "Describes the current video play state, such as if the video play has been paused.\n\n| Value | Meaning |\n| --- | --- |\n| none | No current play state |\n| buffering | Video stream is currently buffering |\n| playing | Video is currently playing |\n| paused | Video is currently paused |\n| stopping      _Available since Roku OS 12.5_ | Video is in the process of being stopped. This value is only returned if the `asyncStopSemantics` field is enabled. |\n| stopped | Video is currently stopped |\n| finished | Video has successfully completed playback |\n| error | An error has occurred in the video play. The error code, message, and diagnostics can be found in the `errorCode`, `errorMsg`, and `errorStr` fields respectively. |",
                "name": "state",
                "type": "value string"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "invalid",
                "description": "Information about the video stream that is currently playing or buffering.\n\n| Key | Type | Value |\n| --- | --- | --- |\n| isUnderrun | Boolean | If true, the stream was downloaded due to an underrun |\n| isResume | Boolean | If true, playback was resumed after trickplay |\n| measuredBItrate | Integer | The measured bitrate (bps) of the network when the stream was selected |\n| streamBitrate | Integer | The bitrate of the stream |\n| streamUrl | URI | The URL of the stream |",
                "name": "streamInfo",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "{ }",
                "description": "Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS. The associative array has the following entries:\n\n| Key | Type | Value |\n| --- | --- | --- |\n| hdrModeStr | string | HDR format of the content, which may be one of the following values: \"invalid\", \"unknown\", \"none\", \"hdr10\", \"dolby\\_vision\", \"hlg10\", \"hdr10\", \"sl-hdr2\". |\n| segBitrateBps | integer | Bitrate of the segment in bits per second |\n| segSequence | integer | The sequence number of the segment in the video |\n| segStart | time | The start time of the segment from the start of the video, specified in seconds |\n| segUrl | string | URL of the segment |\n| segType | integer | Type of data in the segment: 1=audio, 2=video, 3=captions, 0=mux |\n| segTypeStr | String | Type of data in the segment: \"audio\", \"video\", \"captions\", \"mux\" |\n| latency | integer | The time, in milliseconds, between the current live edge (or most recent available media segment on the CDN) and the segment currently being played. |\n| path | string | A path indicating the Period, AdaptationSet and Representation that is played. This is in UNIX directory notation as: /// |\n| width | integer | For video segments, the width of the encoded video picture |\n| height | integer | For video segments, the height of the encoded video picture |",
                "name": "streamingSegment",
                "type": "associative array"
            },
            {
                "accessPermission": "WRITE_ONLY",
                "default": "{ }",
                "description": "The significance and priority order of the attributes and values for the subtitle tracks available in the video stream. Provide the attribute fields from highest to lowest significance (for example, if \\*\\*language\\*\\* should take precedence over all other attributes, list it first). For the subtitle track languages, provide the language codes from highest to lowest priority (for example, if Spanish for Latin America and the Caribbean \\\\\\[\"es-419\"\\\\\\] has precedence over Spanish \\\\\\[\"es\"\\\\\\], list the language codes in the following order: \\\\\\[\"es-419\", \"es\"\\\\\\].\n\n| Field | Type | Description |\n| --- | --- | --- |\n| values | roArray of roAssociativeArrays | Specify values for the following subtitle track attributes. List the attributes from highest to lowest significance.    <table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>language</td><td>array of Strings</td><td>A list of language (ISO-639)/country (ISO-3166) codes for the subtitles. List the language codes in priority order (highest to lowest).</td></tr><tr><td>caption</td><td>string</td><td>A flag indicating whether captions exist for the video stream. This is equivalent to the HLS \"public.accessibility.transcribes-spoken-dialog\" characteristic.</td></tr><tr><td>descriptive</td><td>string</td><td>A flag indicating whether descriptives exist for the music and sounds in the video stream. This is equivalent to the HLS \"public.accessibility.describes-music-and-sound\" characteristic.</td></tr><tr><td>easyReader</td><td>string</td><td>A flag indicating whether subtitles are easy to read.</td></tr></tbody></table>   |\n| overrideSystem | boolean | Specify whether to use the app's preferences over the system preferences (true) or use the app's preferences only when the system preferences do not match any of the available tracks (false), which allows the app to provide additional rules in this case. The default value is false. |\n\n\\*\\*Example\\*\\* \\`\\`\\` video.subtitleSelectionPreferences = { values: \\[ { language: \\[\"es-419\", \"es\", \"es-\\*\", \"fr\", \"en-US\", \"en-UK\", \"en\"\\] }, { caption: \"true\" }, { descriptive: \\[\"false\"\\] }, { easyReader: \"true\" } \\], overrideSystem: true } \\`\\`\\` \\*\\*Explanation\\*\\* The subititle language with the highest priority is \"es\" with a country code of \"419\". The next highest priority language is \"es\" with no country code, and then \"es\" with any country code.",
                "name": "subtitleSelectionPreferences",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "",
                "description": "The identifier of the selected subtitle track. Subtitles may or may not be visible on the screen, depending upon the user's caption mode setting. Reading this field will return the identifier of the subtitle track selected by the user. Writing this the field will change the track. See also: \\[globalCaptionMode\\](#closed-caption-fields)",
                "name": "subtitleTrack",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "50",
                "description": "Sets the volume of the description tracks separately from the main audio track. The field value can range from 0 to 100.",
                "name": "supplementaryAudioVolume",
                "type": "int"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Suppresses the closed caption for the purpose of resolving conflicts in cases where UI elements are drawn. Note that most of the disabling/enabling of the captions are done by the Roku OS, including enabling closed caption for Instant Replay.",
                "name": "suppressCaptions",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[]",
                "description": "Contains the information about HLS and DASH standard thumbnail tiles as they are discovered within the manifest for streams which contain them. This field was first introduced (for VOD only) starting in Roku OS 9.1. Starting with Roku OS 11.0, the app can enable this field for HLS and DASH live streams containing standard thumbnails by setting enableThumbnailTilesDuringLive to true. > For Roku OS releases before 9.4, the \\*\\*thumbnailTiles\\*\\* associative array has the following structure: {tile\\\\\\_id: tile\\\\\\_set} (string to associative array) > > For Roku OS 9.4 and later, the \\*\\*thumbnailTiles\\*\\* associative array has the following structure: {tile\\\\\\_id: \\\\\\[tile\\\\\\_set, tile\\\\\\_set, tile\\\\\\_set,...\\\\\\]}(string to array of associative arrays). This format allows discontinuous tile\\\\\\_sets of the same resolution to be grouped together as a \"choice\" for display. The \\*\\*tile\\\\\\_id\\*\\* field is a unique string identifier for the \\*\\*tile\\\\\\_set\\*\\*, which is an associative array containing the attributes of the tile set as well as information about the thumbnails. The \\*\\*tile\\\\\\_set\\*\\* field contains the following fields:\n\n| Field | Type | Default | Description |\n| --- | --- | --- | --- |\n| htiles | integer | 0 | Horizontal number of thumbnails in a tile (columns.) |\n| vtiles | integer | 0 | Vertical number of thumbnails in a tile (rows.) |\n| width | integer | 0 | Number of horizontal pixels in a thumbnail (this is not the tile as the one in the DASH spec). |\n| height | integer | 0 | Number of vertical pixels in a thumbnail (this is not the same tile as the one in the DASH spec). |\n| bandwidth | integer | 0 | Max tile size in bits / duration. |\n| duration | float | 0.0 | Duration of one tile in seconds (assuming a full tile). |\n| initial\\_time    | float | 0.0 | Presentation start time of current **tile\\_set** in seconds. Thumbnails in tiles beginning before this time should be skipped, and the first relevant thumbnail duration should be updated accordingly. |\n| final\\_time | float | 0.0 | End time of current tile\\_set in seconds. |\n| tiles | roArray | \\[\\] | Contains information about each tile in the **tile\\_set**. This contains the following fields:    *   url (index 0). A string with the URL of the tile. *   start\\_time (index 1). A float with the start time of the tile in seconds.<br/ *   format (index 2). Typically, an empty string, but it may contain the tile format \"jpeg\", \"png\", and so on.   |",
                "name": "thumbnailTiles",
                "type": "roAssociativeArray"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "{ }",
                "description": "The most recent timed meta data that has been decoded from the video stream. Only meta data with a key that matches an entry in timedMetaDataSelectionKeys will be set into this field. The value of this field is an associative array which contains arbitrary keys and values, as found in the video stream.",
                "name": "timedMetaData",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "{ }",
                "description": "This field contains all the same information included in the \\*\\*timedMetaData\\*\\* field and the following additional fields:\n\n| Key | Type | Value |\n| --- | --- | --- |\n| data | associative array | The values from the stream's metadata tag, as defined by video provider. |\n| position | time | The Presentation Time Stamp (PTS) when the tag was seen. |\n| source | enum | This may be one of the following string values:  *   \"emsg\" *   \"id3\" *   \"hls\" *   \"unk\"   |",
                "name": "timedMetaData2",
                "type": "associative array"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "[ ]",
                "description": "If the video stream contains timed meta data such as ID3 tags, any meta data with a key matching an entry in this array is set into the timedMetaData field. For EMSG data, if any entry in this array is \"\\\\\\*\", then all timed meta data is selected. HLS tags must be defined separately.",
                "name": "timedMetaDataSelectionKeys",
                "type": "array of strings"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "0",
                "description": "The time in seconds from playback being started until the video actually began playing. The minimum valid value is 1 millisecond, and this is only valid if the current value of the \\`state\\` field is \\`playing\\`. When the state field value is not \\`playing\\`, the value will be 0. This field is updated prior to the \\`state\\` field changing, so \\`state\\` field observer callback functions can assume this field is valid after the \\`state\\` field value changes to \\`playing\\`.",
                "name": "timeToStartStreaming",
                "type": "time"
            },
            {
                "accessPermission": "WRITE",
                "default": "\"\"",
                "description": "The background overlay to be displayed whenever the playback UI is visible during the video playback experience.",
                "name": "trickPlayBackgroundOverlay",
                "type": "uri"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "internal instance default",
                "description": "The visible TrickPlayBar node. The fields of this internal node are as follows:\n\n| Field | Type | Default | Use |\n| --- | --- | --- | --- |\n| currentTimeMarkerBlendColor | color | 0xFFFFFFFF | This is blended with the marker for the current playback position. This is typically a small vertical bar displayed in the TrickPlayBar node when the user is fast-forwarding or rewinding through the video. |\n| textColor | color | system default | Sets the color of the text next to the trickPlayBar node indicating the time elapsed/remaining. |\n| thumbBlendColor | color | 0xFFFFFFFF | Sets the blend color of the square image in the trickPlayBar node that shows the current position, with the current direction arrows or pause icon on top. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place. |\n| filledBarBlendColor | color | 0xFFFFFFFF | This color will be blended with the graphical image specified in the `filledBarImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place. |\n| liveFilledBarBlendColor | Color | 0xFFFFFFFF | The color of the trickplay progress bar to be blended with the **filledBarImageUri** for live linear streams. |\n| filledBarImageUri | uri | \"\" | A 9-patch or ordinary PNG of the bar that represents the completed portion of the work represented by this ProgressBar node. This is typically displayed on the left side of the track. This will be blended with the color specified by the `filledBarBlendColor` field, if set to a non-default value. |\n| trackBlendColor | color | 0xFFFFFFFF | This color is blended with the graphical image specified by `trackImageUri` field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place. |\n| trackImageUri | uri | \"\" | A 9-patch or ordinary PNG of the track of the progress bar, which surrounds the filled and empty bars. This will be blended with the color specified by the `trackBlendColor` field, if set to a non-default value. |",
                "name": "trickPlayBar",
                "type": "TrickPlayBar node"
            },
            {
                "accessPermission": "READ_ONLY",
                "default": "",
                "description": "Contains the format of the currently playing video stream.\n\n| Value | Meaning |\n| --- | --- |\n| \"\" | No stream playing |\n| none | Stream contains no playable video |\n| unknown | Stream contains unknown video |\n| hevc | ISO/IEC 23008-2, H.265, HEVC |\n| hevc\\_b | ISO/IEC 23008-2 Annex-B, H.265, HEVC |\n| mpeg1 | ISO/IEC 11172-2, MPEG-1 part 2, H.261 |\n| mpeg2 | ISO/IEC 13818-2, MPEG-2 part 2, H.262 |\n| mpeg4\\_2 | ISO/IEC 14496-2, MPEG-4 part 2, H.263 |\n| mpeg4\\_10b | ISO/IEC 14496-10, MPEG-4 part 10 Annex-B, H.264, vc-1 |\n| mpeg4\\_15 | ISO/IEC 14496-15, MPEG-4 part 15, H.264, vc-1 |\n| AVC vc1 | vc-1 |\n| wmv | Microsoft Windows Media Video |\n| vp8 | VP8 codec |\n| vp9 | VP9 codec |",
                "name": "videoFormat",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "0.0",
                "description": "Sets the width of the video play window in pixels. If set to 0.0 (the default), the video play window is set to the width of the entire display screen.",
                "name": "width",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "Video",
        "url": "https://developer.roku.com/docs/references/scenegraph/media-playback-nodes/video.md"
    },
    "voicetexteditbox": {
        "description": "Extends [TextEditBox](https://developer.roku.com/docs/references/scenegraph/widget-nodes/texteditbox.md\n\nThe **VoiceTextEditBox** node is similar to the [legacy **TextEditBox** node](https://developer.roku.com/docs/references/scenegraph/widget-nodes/texteditbox.md, but with additional voice entry functionality. Only one voice-enabled **VoiceTextEditBox** node may be on the screen at a time. If another VoiceTextEditBox is rendered on the screen, its voice functionality is disabled implicitly.",
        "events": [],
        "extends": {
            "name": "TextEditBox",
            "url": "https://developer.roku.com/docs/references/scenegraph/widget-nodes/texteditbox.md"
        },
        "fields": [
            {
                "accessPermission": "READ-ONLY",
                "default": "false",
                "description": "Checks whether the user is currently dictating to the keyboard.",
                "name": "isDictating",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "false",
                "description": "Enables the text box to be voice-enabled. In this case, it will display a mic icon and have a voice UI with voice hints.",
                "name": "voiceEnabled",
                "type": "boolean"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "\"generic\"",
                "description": "The type of voice entry mode to be used: \\* \"email\": letter-by-letter dictation for emails. \\* \"numeric\": letter-by-letter dictation for PIN codes, zip codes, and other numeric input. \\* \"alphanumeric\": letter-by-letter dication for street addresses or other sequences of numbers and letters. \\* \"generic\": Full word input for search queries or other sequences of numbers, letters and symbols. \\* \"password\": letter-by-letter dication for passwords.",
                "name": "voiceEntryType",
                "type": "string"
            },
            {
                "accessPermission": "WRITE-ONLY",
                "default": "\"\"",
                "description": "Specify which characters may or may not be entered on the keyboard via dictation. For example, setting this field to \"^\\\\\\[A-Za-z0-9\\\\\\_-\\\\\\]\\\\\\*$\" prevents any special characters from being entered.",
                "name": "voiceInputRegexFilter",
                "type": "string"
            },
            {
                "accessPermission": "READ_WRITE",
                "default": "FHD: 321HD: 214",
                "description": "The maximum width of the voice hint tootip. The height scales based on the specified width.",
                "name": "voiceToolTipWidth",
                "type": "float"
            }
        ],
        "interfaces": [],
        "name": "VoiceTextEditBox",
        "url": "https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md"
    },
    "zoomrowlist": {
        "description": "The ZoomRowList node allows a row of the Row-Row Grid to smoothly zoom up to a larger size when that row has focus. Rows in this node are capable of gaining the focus while scrolling, and smoothly zooming up by the specified amount. The amount to zoom can be specified on a per row basis so that some rows can zoom up by a larger amount than others.",
        "events": [],
        "fields": [],
        "interfaces": [],
        "name": "ZoomRowList",
        "url": "https://developer.roku.com/docs/references/scenegraph/list-and-grid-nodes/zoomrowlist.md"
    }
}
