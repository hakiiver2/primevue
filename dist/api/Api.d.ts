export const FilterMatchMode: {
    STARTS_WITH?: string,
    CONTAINS?: string,
    NOT_CONTAINS?: string,
    ENDS_WITH?: string,
    EQUALS?: string,
    NOT_EQUALS?: string,
    IN?: string,
    LESS_THAN?: string,
    LESS_THAN_OR_EQUAL_TO?: string,
    GREATER_THAN?: string,
    GREATER_THAN_OR_EQUAL_TO?: string,
    BETWEEN?: string,
    DATE_IS?: string,
    DATE_IS_NOT?: string,
    DATE_BEFORE?: string,
    DATE_AFTER?: string
}

export const FilterOperator: {
    AND?: string,
    OR?: string
}

interface FiltersOptions {
    startsWith?(value: any, filter: any, filterLocale: string): boolean,
    contains?(value: any, filter: any, filterLocale: string): boolean,
    notContains?(value: any, filter: any, filterLocale: string): boolean,
    endsWith?(value: any, filter: any, filterLocale: string): boolean,
    equals?(value: any, filter: any, filterLocale: string): boolean,
    notEquals?(value: any, filter: any, filterLocale: string): boolean,
    in?(value: any, filter: any): boolean,
    between?(value: any, filter: any): boolean,
    lt?(value: any, filter: any): boolean,
    lte?(value: any, filter: any): boolean,
    gt?(value: any, filter: any): boolean,
    gte?(value: any, filter: any): boolean,
    dateIs?(value: any, filter: any): boolean,
    dateIsNot?(value: any, filter: any): boolean,
    dateBefore?(value: any, filter: any): boolean,
    dateAfter?(value: any, filter: any): boolean
}

interface FilterServiceOptions {
    filter?(value: any[], fields: any[], filterValue: any, filterMatchMode: string, filterLocale: string): any[],
    filters?: FiltersOptions,
    register?(rule: string, fn: any): void
}

export const FilterService: FilterServiceOptions;

export const PrimeIcons: {
    ALIGN_CENTER?: string,
    ALIGN_JUSTIFY?: string,
    ALIGN_LEFT?: string,
    ALIGN_RIGHT?: string,
    AMAZON?: string,
    ANDROID?: string,
    ANGLE_DOUBLE_DOWN?: string,
    ANGLE_DOUBLE_LEFT?: string,
    ANGLE_DOUBLE_RIGHT?: string,
    ANGLE_DOUBLE_UP?: string,
    ANGLE_DOWN?: string,
    ANGLE_LEFT?: string,
    ANGLE_RIGHT?: string,
    ANGLE_UP?: string,
    APPLE?: string,
    ARROW_CIRCLE_DOWN?: string,
    ARROW_CIRCLE_LEFT?: string,
    ARROW_CIRCLE_RIGHT?: string,
    ARROW_CIRCLE_UP?: string,
    ARROW_DOWN?: string,
    ARROW_LEFT?: string,
    ARROW_RIGHT?: string,
    ARROW_UP?: string,
    BACKWARD?: string,
    BAN?: string,
    BARS?: string,
    BELL?: string,
    BOOK?: string,
    BOOKMARK?: string,
    BRIEFCASE?: string,
    CALENDAR_MINUS?: string,
    CALENDAR_PLUS?: string,
    CALENDAR_TIMES?: string,
    CALENDAR?: string,
    CAMERA?: string,
    CARET_DOWN?: string,
    CARET_LEFT?: string,
    CARET_RIGHT?: string,
    CARET_UP?: string,
    CHART_BAR?: string,
    CHART_LINE?: string,
    CHECK_CIRCLE?: string,
    CHECK_SQUARE?: string,
    CHECK?: string,
    CHEVRON_CIRCLE_DOWN?: string,
    CHEVRON_CIRCLE_LEFT?: string,
    CHEVRON_CIRCLE_RIGHT?: string,
    CHEVRON_CIRCLE_UP?: string,
    CHEVRON_DOWN?: string,
    CHEVRON_LEFT?: string,
    CHEVRON_RIGHT?: string,
    CHEVRON_UP?: string,
    CLOCK?: string,
    CLONE?: string,
    CLOUD_DOWNLOAD?: string,
    CLOUD_UPLOAD?: string,
    CLOUD?: string,
    COG?: string,
    COMMENT?: string,
    COMMENTS?: string,
    COMPASS?: string,
    COPY?: string,
    CREDIT_CARD?: string,
    DESKTOP?: string,
    DISCORD?: string,
    DIRECTIONS_ALT?: string,
    DIRECTIONS?: string,
    DOLLAR?: string,
    DOWNLOAD?: string,
    EJECT?: string,
    ELLIPSIS_H?: string,
    ELLIPSIS_V?: string,
    ENVELOPE?: string,
    EXCLAMATION_CIRCLE?: string,
    EXCLAMATION_TRIANGLE?: string,
    EXTERNAL_LINK?: string,
    EYE_SLASH?: string,
    EYE?: string,
    FACEBOOK?: string,
    FAST_BACKWARD?: string,
    FAST_FORWARD?: string,
    FILE_EXCEL?: string,
    FILE_O?: string,
    FILE_PDF?: string,
    FILE?: string,
    FILTER?: string,
    FILTER_SLASH?: string,
    FLAG?: string,
    FOLDER_OPEN?: string,
    FOLDER?: string,
    FORWARD?: string,
    GITHUB?: string,
    GLOBE?: string,
    GOOGLE?: string,
    HEART?: string,
    HOME?: string,
    ID_CARD?: string,
    IMAGE?: string,
    IMAGES?: string,
    INBOX?: string,
    INFO_CIRCLE?: string,
    INFO?: string,
    KEY?: string,
    LINK?: string,
    LIST?: string,
    LOCK_OPEN?: string,
    LOCK?: string,
    MAP?: string,
    MAP_MARKER?: string,
    MICROSOFT?: string,
    MINUS_CIRCLE?: string,
    MINUS?: string,
    MOBILE?: string,
    MONEY_BILL?: string,
    MOON?: string,
    PALETTE?: string,
    PAPERCLIP?: string,
    PAUSE?: string,
    PAYPAL?: string,
    PENCIL?: string,
    PERCENTAGE?: string,
    PHONE?: string,
    PLAY?: string,
    PLUS_CIRCLE?: string,
    PLUS?: string,
    POWER_OFF?: string,
    PRINT?: string,
    QUESTION_CIRCLE?: string,
    QUESTION?: string,
    RADIO_OFF?: string,
    RADIO_ON?: string,
    REFRESH?: string,
    REPLAY?: string,
    REPLY?: string,
    SAVE?: string,
    SEARCH_MINUS?: string,
    SEARCH_PLUS?: string,
    SEARCH?: string,
    SEND?: string,
    SHARE_ALT?: string,
    SHIELD?: string,
    SHOPPING_CART?: string,
    SIGN_IN?: string,
    SIGN_OUT?: string,
    SITEMAP?: string,
    SLACK?: string,
    SLIDERS_H?: string,
    SLIDERS_V?: string,
    SORT_ALPHA_ALT_DOWN?: string,
    SORT_ALPHA_ALT_UP?: string,
    SORT_ALPHA_DOWN?: string,
    SORT_ALPHA_UP?: string,
    SORT_ALT?: string,
    SORT_AMOUNT_DOWN_ALT?: string,
    SORT_AMOUNT_DOWN?: string,
    SORT_AMOUNT_UP_ALT?: string,
    SORT_AMOUNT_UP?: string,
    SORT_DOWN?: string,
    SORT_NUMERIC_ALT_DOWN?: string,
    SORT_NUMERIC_ALT_UP?: string,
    SORT_NUMERIC_DOWN?: string,
    SORT_NUMERIC_UP?: string,
    SORT_UP?: string,
    SORT?: string,
    SPINNER?: string,
    STAR_O?: string,
    STAR?: string,
    STEP_BACKWARD_ALT?: string,
    STEP_BACKWARD?: string,
    STEP_FORWARD_ALT?: string,
    STEP_FORWARD?: string,
    SUN?: string,
    TABLE?: string,
    TABLET?: string,
    TAG?: string,
    TAGS?: string,
    TH_LARGE?: string,
    THUMBS_DOWN?: string,
    THUMBS_UP?: string,
    TICKET?: string,
    TIMES_CIRCLE?: string,
    TIMES?: string,
    TRASH?: string,
    TWITTER?: string,
    UNDO?: string,
    UNLOCK?: string,
    UPLOAD?: string,
    USER_EDIT?: string,
    USER_MINUS?: string,
    USER_PLUS?: string,
    USER?: string,
    USERS?: string,
    VIDEO?: string,
    VIMEO?: string,
    VOLUME_DOWN?: string,
    VOLUME_OFF?: string,
    VOLUME_UP?: string,
    YOUTUBE?: string,
    WALLET?: string,
    WIFI?: string,
    WINDOW_MAXIMIZE?: string,
    WINDOW_MINIMIZE?: string
}
