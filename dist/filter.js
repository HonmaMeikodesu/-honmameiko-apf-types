"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterKind = exports.OriginFilterOption = exports.StatusFilterOption = exports.HasSolveFilterOption = void 0;
var HasSolveFilterOption;
(function (HasSolveFilterOption) {
    HasSolveFilterOption[HasSolveFilterOption["\u6709\u9898\u89E3"] = 0] = "\u6709\u9898\u89E3";
    HasSolveFilterOption[HasSolveFilterOption["\u65E0\u9898\u89E3"] = 1] = "\u65E0\u9898\u89E3";
})(HasSolveFilterOption = exports.HasSolveFilterOption || (exports.HasSolveFilterOption = {}));
var StatusFilterOption;
(function (StatusFilterOption) {
    StatusFilterOption[StatusFilterOption["\u672A\u505A"] = 0] = "\u672A\u505A";
    StatusFilterOption[StatusFilterOption["\u5C1D\u8BD5\u8FC7"] = 1] = "\u5C1D\u8BD5\u8FC7";
    StatusFilterOption[StatusFilterOption["\u5DF2AC"] = 2] = "\u5DF2AC";
})(StatusFilterOption = exports.StatusFilterOption || (exports.StatusFilterOption = {}));
var OriginFilterOption;
(function (OriginFilterOption) {
    OriginFilterOption[OriginFilterOption["\u81EA\u5DF1"] = 0] = "\u81EA\u5DF1";
    OriginFilterOption[OriginFilterOption["\u522B\u4EBA"] = 1] = "\u522B\u4EBA";
})(OriginFilterOption = exports.OriginFilterOption || (exports.OriginFilterOption = {}));
var FilterKind;
(function (FilterKind) {
    FilterKind[FilterKind["hasSolve"] = 0] = "hasSolve";
    FilterKind[FilterKind["status"] = 1] = "status";
    FilterKind[FilterKind["difficultyRange"] = 2] = "difficultyRange";
    FilterKind[FilterKind["origin"] = 3] = "origin";
})(FilterKind = exports.FilterKind || (exports.FilterKind = {}));
