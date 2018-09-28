webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "li{\r\n  margin-left: 8%;\r\n}\r\n\r\nli a{\r\n  font-size: 130%;\r\n}\r\n\r\na.active {\r\n  color: crimson;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <!-- navBar -->\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" ><img src=\"../assets/logo.png\" alt=\"logo\" /></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/search\" >البحث</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/documents\" >الوثائق</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/binders\" >الملفات</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/statistics\" >الإحصائيات</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<br>\n  <router-outlet></router-outlet>\n <!-- <footer><p>Copyright © 2018. Designer by <a href=\"http://mounach.com\">Mounach</a>. All Rights Reserved.</p></footer>-->\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__binder_binder_component__ = __webpack_require__("./src/app/binder/binder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__document_document_component__ = __webpack_require__("./src/app/document/document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__statistics_statistics_component__ = __webpack_require__("./src/app/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_binder_service__ = __webpack_require__("./src/app/services/binder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_document_service__ = __webpack_require__("./src/app/services/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_statistics_service__ = __webpack_require__("./src/app/services/statistics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_binder_edit_binder_component__ = __webpack_require__("./src/app/edit-binder/edit-binder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_document_edit_document_component__ = __webpack_require__("./src/app/edit-document/edit-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_upload_service__ = __webpack_require__("./src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_safePipe_pipe__ = __webpack_require__("./src/app/services/safePipe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: 'binders', component: __WEBPACK_IMPORTED_MODULE_3__binder_binder_component__["a" /* BinderComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */] },
    { path: 'documents', component: __WEBPACK_IMPORTED_MODULE_4__document_document_component__["a" /* DocumentComponent */] },
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_7__statistics_statistics_component__["a" /* StatisticsComponent */] },
    { path: 'editBinder/:id', component: __WEBPACK_IMPORTED_MODULE_13__edit_binder_edit_binder_component__["a" /* EditBinderComponent */] },
    { path: 'editDocument/:id', component: __WEBPACK_IMPORTED_MODULE_14__edit_document_edit_document_component__["a" /* EditDocumentComponent */] },
    { path: '', redirectTo: '/search', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__binder_binder_component__["a" /* BinderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__document_document_component__["a" /* DocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__statistics_statistics_component__["a" /* StatisticsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__edit_binder_edit_binder_component__["a" /* EditBinderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__edit_document_edit_document_component__["a" /* EditDocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__services_safePipe_pipe__["a" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_binder_service__["a" /* BinderService */], __WEBPACK_IMPORTED_MODULE_11__services_document_service__["a" /* DocumentService */], __WEBPACK_IMPORTED_MODULE_12__services_statistics_service__["a" /* StatisticsService */], __WEBPACK_IMPORTED_MODULE_15__services_upload_service__["a" /* UploadService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/binder/binder.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-lg{\r\n  padding-left: 20%;\r\n  padding-right: 20%;\r\n  margin-top: 10%;\r\n}\r\n\r\nh3{\r\n  padding-bottom: 3%;\r\n}\r\n\r\n.toLeft{\r\n  margin-right: 4%;\r\n}\r\n\r\n.fa-file-text-o , .fa-book{\r\n  margin-left: 2%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/binder/binder.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngNativeValidate (ngSubmit)=\"saveBinder()\">\n  <h3><i class=\"fa fa-book\" aria-hidden=\"true\"></i>إضافة الملفات</h3>\n  <div class=\"toLeft\">\n\n    <!-- -->\n\n\n\n    <!-- -->\n\n    <div class=\"form-group row\">\n      <label for=\"subject\" class=\"col-sm-1 col-form-label\">الموضوع</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"title\" required [(ngModel)]=\"binder.title\" class=\"form-control\" id=\"subject\" placeholder=\"الموضوع\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"description\" class=\"col-sm-1 col-form-label\">الوصف</label>\n      <div class=\"col-sm-10\">\n        <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"binder.description\" id=\"description\" rows=\"3\" placeholder=\"الوصف\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\">\n        <button type=\"submit\" name=\"submit\"  class=\"btn btn-outline-primary btn-lg\">حفظ <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/binder/binder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model_binder__ = __webpack_require__("./src/app/model/model.binder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_binder_service__ = __webpack_require__("./src/app/services/binder.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BinderComponent = /** @class */ (function () {
    function BinderComponent(binderService) {
        this.binderService = binderService;
        this.binder = new __WEBPACK_IMPORTED_MODULE_1__model_model_binder__["a" /* Binder */]();
    }
    BinderComponent.prototype.ngOnInit = function () {
    };
    BinderComponent.prototype.saveBinder = function () {
        var _this = this;
        this.binderService.saveBinder(this.binder)
            .subscribe(function (data) {
            alert("تمت الإضافة بنجاح");
            console.log(data);
            _this.binder.title = "";
            _this.binder.description = "";
        }, function (err) {
            console.log(err);
            alert("لم يحفظ");
        });
    };
    BinderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-binder',
            template: __webpack_require__("./src/app/binder/binder.component.html"),
            styles: [__webpack_require__("./src/app/binder/binder.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_binder_service__["a" /* BinderService */]])
    ], BinderComponent);
    return BinderComponent;
}());



/***/ }),

/***/ "./src/app/document/document.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.btn-lg{\r\n  padding-left: 20%;\r\n  padding-right: 20%;\r\n  margin-top: 10%;\r\n}\r\n\r\nh3{\r\n  padding-bottom: 3%;\r\n}\r\n\r\n.toLeft{\r\n  margin-right: 4%;\r\n}\r\n\r\n.fa-file-text-o{\r\n  margin-left: 2%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/document/document.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngNativeValidate  (ngSubmit)=\"saveDocument()\">\n  <h3><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>إضافة الوثائق</h3>\n  <div class=\"toLeft\">\n  <div class=\"form-group row\">\n    <label for=\"subject\" class=\"col-sm-1 col-form-label\">الموضوع</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" name=\"title\" required [(ngModel)]=\"document.title\" class=\"form-control\" id=\"subject\" placeholder=\"الموضوع\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"sender\" class=\"col-sm-1 col-form-label\">المرسل</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" name=\"sender\" required [(ngModel)]=\"document.sender\" class=\"form-control\" id=\"sender\" placeholder=\"المرسل\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"description\" class=\"col-sm-1 col-form-label\">الوصف</label>\n    <div class=\"col-sm-10\">\n      <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"document.description\" id=\"description\" rows=\"3\" placeholder=\"الوصف\"></textarea>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"binder\" class=\"col-sm-1 col-form-label\">الملف</label>\n    <div class=\"col-sm-10\">\n      <select id=\"binder\" required [(ngModel)]=\"document.binder.title\" class=\"form-control\" name=\"binderTitle\">\n        <option  disabled selected value></option>\n        <option *ngFor=\"let b of pageBinders\">{{b.title}}</option>\n      </select>\n    </div>\n  </div>\n\n    <div class=\"form-group row\">\n  <fieldset class=\"form-group col-sm-5\">\n    <div class=\"row\">\n      <legend class=\"col-form-label col-sm-2 pt-0\">أصلي</legend>\n      <div class=\"col-sm-4\">\n        <div class=\"form-check\">\n          <label class=\"form-check-label col-sm-9\" for=\"original\" >نعم</label>\n          <input class=\"form-check-input yes col-sm-3\" type=\"radio\" required [(ngModel)]=\"document.original\" name=\"original\" id=\"yes\" value=\"نعم\">\n        </div>\n        <div class=\"form-check\">\n          <label class=\"form-check-label col-sm-9\" for=\"original\">لا</label>\n          <input class=\"form-check-input no col-sm-3\" type=\"radio\" required [(ngModel)]=\"document.original\" name=\"original\" id=\"no\" value=\"لا\">\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n      <div class=\"form-group col-sm-6\">\n        <div class=\"row\">\n        <label for=\"pdf\" class=\"col-sm-3 col-form-label\">تحميل الوثيقة</label>\n        <div class=\"col-sm-9\">\n          <input type=\"file\" required (change)=\"selectFile($event)\" class=\"form-control\" name=\"pdf\" [(ngModel)]=\"path\"  id=\"pdf\" placeholder=\"pdf\">\n        </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-3\">\n      <button type=\"submit\" name=\"submit\"  class=\"btn btn-outline-primary btn-lg\">حفظ <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/document/document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_binder_service__ = __webpack_require__("./src/app/services/binder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_model_document__ = __webpack_require__("./src/app/model/model.document.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_document_service__ = __webpack_require__("./src/app/services/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_service__ = __webpack_require__("./src/app/services/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(http, binderService, documentService, uploadService) {
        this.http = http;
        this.binderService = binderService;
        this.documentService = documentService;
        this.uploadService = uploadService;
        this.document = new __WEBPACK_IMPORTED_MODULE_4__model_model_document__["a" /* Document */]();
    }
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fillCombbobox binders
        this.binderService.getAllBinders()
            .subscribe(function (data) {
            _this.pageBinders = data;
        }, function (err) {
            alert("غير موجود");
        });
    };
    DocumentComponent.prototype.saveDocument = function () {
        var _this = this;
        this.i = this.pageBinders.findIndex(function (b) { return b.title == _this.document.binder.title; });
        this.document.binder.id = this.pageBinders[this.i].id;
        this.document.binder.description = this.pageBinders[this.i].description;
        this.documentService.saveDocument(this.document)
            .subscribe(function (data) {
            _this.upload(data.id);
            alert("تمت الإضافة بنجاح");
            console.log(data.id);
            _this.document.title = "";
            _this.document.sender = "";
            _this.document.description = "";
            _this.document.binder.title = "";
            _this.document.original = null;
            _this.path = "";
        }, function (err) {
            console.log(err);
            alert("لم يحفظ");
        });
    };
    DocumentComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    DocumentComponent.prototype.upload = function (id) {
        this.currentFileUpload = this.selectedFiles.item(0);
        this.uploadService.pushFileToStorage(this.currentFileUpload, id).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log("progresssss");
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    };
    DocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-document',
            template: __webpack_require__("./src/app/document/document.component.html"),
            styles: [__webpack_require__("./src/app/document/document.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_binder_service__["a" /* BinderService */], __WEBPACK_IMPORTED_MODULE_5__services_document_service__["a" /* DocumentService */],
            __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/edit-binder/edit-binder.component.css":
/***/ (function(module, exports) {

module.exports = ".fa-book{\r\n  margin-left: 2%;\r\n  margin-bottom: 2%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/edit-binder/edit-binder.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngNativeValidate (ngSubmit)=\"updateBinder()\">\n  <h3><i class=\"fa fa-book\" aria-hidden=\"true\"></i>تحديث الملفات</h3>\n  <div class=\"toLeft\">\n\n\n    <div class=\"form-group row\">\n      <label for=\"subject\" class=\"col-sm-2 col-form-label\">الموضوع</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"title\" required [(ngModel)]=\"binder.title\" class=\"form-control\" id=\"subject\" placeholder=\"الموضوع\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"description\" class=\"col-sm-2 col-form-label\">الوصف</label>\n      <div class=\"col-sm-10\">\n        <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"binder.description\" id=\"description\" rows=\"3\" placeholder=\"الوصف\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\">\n        <button type=\"submit\" name=\"submit\"  class=\"btn btn-outline-primary btn-lg\">تحديث <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/edit-binder/edit-binder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBinderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model_binder__ = __webpack_require__("./src/app/model/model.binder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_binder_service__ = __webpack_require__("./src/app/services/binder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBinderComponent = /** @class */ (function () {
    function EditBinderComponent(binderService, activatedRoute, router) {
        this.binderService = binderService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.binder = new __WEBPACK_IMPORTED_MODULE_1__model_model_binder__["a" /* Binder */]();
        this.id = activatedRoute.snapshot.params['id'];
        console.log(activatedRoute.snapshot.params['id']);
    }
    EditBinderComponent.prototype.ngOnInit = function () {
        this.getBinder();
    };
    EditBinderComponent.prototype.getBinder = function () {
        var _this = this;
        this.binderService.getBinder(this.id)
            .subscribe(function (data) {
            _this.binder = data;
        }, function (err) {
            alert("غير موجود");
        });
    };
    EditBinderComponent.prototype.updateBinder = function () {
        var _this = this;
        this.binderService.updateBinder(this.id, this.binder)
            .subscribe(function (data) {
            alert("تم التحديث بنجاح");
            _this.router.navigate(['statistics']);
        }, function (err) {
            alert("غير موجود");
        });
    };
    EditBinderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-binder',
            template: __webpack_require__("./src/app/edit-binder/edit-binder.component.html"),
            styles: [__webpack_require__("./src/app/edit-binder/edit-binder.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_binder_service__["a" /* BinderService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], EditBinderComponent);
    return EditBinderComponent;
}());



/***/ }),

/***/ "./src/app/edit-document/edit-document.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-lg{\r\n  padding-left: 20%;\r\n  padding-right: 20%;\r\n  margin-top: 10%;\r\n}\r\n\r\nh3{\r\n  padding-bottom: 3%;\r\n}\r\n\r\n.toLeft{\r\n  margin-right: 4%;\r\n}\r\n\r\n.fa-file-text-o {\r\n  margin-left: 2%;\r\n}\r\n\r\n.spacer{\r\n  margin-bottom: 0%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/edit-document/edit-document.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngNativeValidate  (ngSubmit)=\"updateDocument()\">\n  <h3><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>تحديث الوثائق</h3>\n  <div class=\"toLeft\">\n    <div class=\"form-group row\">\n      <label for=\"subject\" class=\"col-sm-1 col-form-label\">الموضوع</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"title\" id=\"subject\" [(ngModel)]=\"fullDocument.title\" placeholder=\"الموضوع\">\n      </div>\n    </div>\n    <div class=\"form-group row spacer\">\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <label for=\"binder\" class=\"col-sm-2 col-form-label\">الملف</label>\n          <div class=\"col-sm-8\">\n            <select id=\"binder\" class=\"form-control\" name=\"binderTitle\" [(ngModel)]=\"fullDocument.binder.title\">\n              <option  disabled selected value></option>\n              <option *ngFor=\"let b of pageBinders\">{{b.title}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <fieldset class=\"form-group\">\n          <div class=\"row\">\n            <legend class=\"col-form-label col-sm-2 pt-0\">أصلي</legend>\n            <div class=\"col-sm-8\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label col-sm-2\" for=\"gridRadios1\">نعم</label>\n                <input class=\"form-check-input yes col-sm-2\" type=\"radio\" [(ngModel)]=\"fullDocument.original\" name=\"original\" id=\"yes\" value=\"نعم\">\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label col-sm-2\" for=\"gridRadios2\">لا</label>\n                <input class=\"form-check-input no col-sm-2\" type=\"radio\" [(ngModel)]=\"fullDocument.original\" name=\"original\" id=\"yes\" value=\"لا\">\n              </div>\n            </div>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n\n\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <label for=\"sender\" class=\"col-sm-2 col-form-label\">المرسل</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" name=\"sender\" [(ngModel)]=\"fullDocument.sender\" id=\"sender\" placeholder=\"المرسل\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <label for=\"sender\" class=\"col-sm-3 col-form-label\">المرسل اليه</label>\n          <div class=\"col-sm-7\">\n            <input type=\"text\" class=\"form-control\" name=\"receiver\" [(ngModel)]=\"fullDocument.receiver\" id=\"receiver\" placeholder=\"المرسل اليه\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"form-group row\">\n      <label for=\"description\" class=\"col-sm-1 col-form-label\">الوصف</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"fullDocument.description\" id=\"description\" placeholder=\"الوصف\">\n      </div>\n    </div>\n\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <label for=\"date\" class=\"col-sm-2 col-form-label\">تاريخ الحفظ</label>\n          <div class=\"col-sm-8\">\n            <input type=\"date\" class=\"form-control\" name=\"date_entree\" [(ngModel)]=\"fullDocument.date_entree\" id=\"date_entree\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <label for=\"date\" class=\"col-sm-2 col-form-label\">تاريخ الارسال</label>\n          <div class=\"col-sm-8\">\n            <input type=\"date\" class=\"form-control\" name=\"date_sortie\" [(ngModel)]=\"fullDocument.date_sortie\" id=\"date_sortie\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\">\n        <button type=\"submit\" name=\"submit\"  class=\"btn btn-outline-primary btn-lg\">تحديث <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/edit-document/edit-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_binder_service__ = __webpack_require__("./src/app/services/binder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_document_service__ = __webpack_require__("./src/app/services/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_model_fullDocument__ = __webpack_require__("./src/app/model/model.fullDocument.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditDocumentComponent = /** @class */ (function () {
    function EditDocumentComponent(http, binderService, documentService, activatedRoute, router) {
        this.http = http;
        this.binderService = binderService;
        this.documentService = documentService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fullDocument = new __WEBPACK_IMPORTED_MODULE_5__model_model_fullDocument__["a" /* FullDocument */]();
        this.id = activatedRoute.snapshot.params['id'];
        console.log(activatedRoute.snapshot.params['id']);
    }
    EditDocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fillCombbobox binders
        this.binderService.getAllBinders()
            .subscribe(function (data) {
            _this.pageBinders = data;
        }, function (err) {
            alert("غير موجود");
        });
        this.getDocument();
    };
    EditDocumentComponent.prototype.getDocument = function () {
        var _this = this;
        this.documentService.getDocument(this.id)
            .subscribe(function (data) {
            _this.fullDocument = data;
        }, function (err) {
            alert("غير موجود");
        });
    };
    EditDocumentComponent.prototype.updateDocument = function () {
        var _this = this;
        this.i = this.pageBinders.findIndex(function (b) { return b.title == _this.fullDocument.binder.title; });
        this.fullDocument.binder.id = this.pageBinders[this.i].id;
        this.fullDocument.binder.description = this.pageBinders[this.i].description;
        this.documentService.updateDocument(this.id, this.fullDocument)
            .subscribe(function (data) {
            alert("تم التحديث بنجاح");
            _this.router.navigate(['search']);
        }, function (err) {
            console.log(err);
            alert("لم يحفظ");
        });
    };
    EditDocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-document',
            template: __webpack_require__("./src/app/edit-document/edit-document.component.html"),
            styles: [__webpack_require__("./src/app/edit-document/edit-document.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__services_binder_service__["a" /* BinderService */], __WEBPACK_IMPORTED_MODULE_3__services_document_service__["a" /* DocumentService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], EditDocumentComponent);
    return EditDocumentComponent;
}());



/***/ }),

/***/ "./src/app/model/model.binder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Binder; });
var Binder = /** @class */ (function () {
    function Binder() {
        this.title = "";
        this.description = "";
    }
    return Binder;
}());



/***/ }),

/***/ "./src/app/model/model.document.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
var Document = /** @class */ (function () {
    function Document() {
        this.title = "";
        this.description = "";
        this.sender = "";
        this.original = "";
        this.binder = {
            id: null,
            title: "",
            description: ""
        };
    }
    return Document;
}());



/***/ }),

/***/ "./src/app/model/model.fullDocument.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullDocument; });
var FullDocument = /** @class */ (function () {
    function FullDocument() {
        this.title = "";
        this.description = "";
        this.sender = "";
        this.original = "";
        this.receiver = "";
        this.path = "";
        this.binder = {
            id: null,
            title: "",
            description: ""
        };
    }
    return FullDocument;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".fa-search{\r\n  margin-left: 2%;\r\n}\r\n\r\n.btn-lg{\r\n  padding-left: 20%;\r\n  padding-right: 20%;\r\n  margin-top: 0%;\r\n}\r\n\r\nh3{\r\n  padding-bottom: 3%;\r\n}\r\n\r\n.toLeft{\r\n  margin-right: 4%;\r\n}\r\n\r\n.center{\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.a1{\r\n  font-size: 20px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n\r\n.card{\r\n  margin-top: 5%;\r\n}\r\n\r\n.spacer{\r\n  margin-bottom: 0%;\r\n}\r\n\r\n.pdf{\r\n  cursor: pointer;\r\n  font-size: 150%;\r\n  color: black;\r\n}\r\n\r\n.pdf:hover{\r\n  color: blue;\r\n}\r\n\r\n.card{\r\n  margin-bottom: 5%;\r\n}\r\n\r\ntd{\r\n  word-wrap: break-word;\r\n  min-width: 200px;\r\n  max-width: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <h3><i class=\"fa fa-search\" aria-hidden=\"true\"></i>البحث</h3>\n  <div class=\"toLeft\">\n    <div class=\"form-group row\">\n      <label for=\"subject\" class=\"col-sm-1 col-form-label\">الموضوع</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"title\" id=\"subject\" [(ngModel)]=\"fullDocument.title\" placeholder=\"الموضوع\">\n      </div>\n    </div>\n\n\n    <!-- -->\n    <div class=\"collapse\" id=\"collapse1\">\n\n      <div class=\"form-group row spacer\">\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n        <label for=\"binder\" class=\"col-sm-2 col-form-label\">الملف</label>\n        <div class=\"col-sm-8\">\n          <select id=\"binder\" class=\"form-control\" name=\"binderTitle\" [(ngModel)]=\"fullDocument.binder.title\">\n            <option></option>\n            <option *ngFor=\"let b of pageBinders\">{{b.title}}</option>\n          </select>\n        </div>\n        </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <fieldset class=\"form-group\">\n            <div class=\"row\">\n              <legend class=\"col-form-label col-sm-2 pt-0\">أصلي</legend>\n              <div class=\"col-sm-8\">\n                <div class=\"form-check\">\n                  <label class=\"form-check-label col-sm-2\" for=\"gridRadios1\">نعم</label>\n                  <input class=\"form-check-input yes col-sm-2\" type=\"radio\" [(ngModel)]=\"fullDocument.original\" name=\"original\" id=\"yes\" value=\"نعم\">\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label col-sm-2\" for=\"gridRadios2\">لا</label>\n                  <input class=\"form-check-input no col-sm-2\" type=\"radio\" [(ngModel)]=\"fullDocument.original\" name=\"original\" id=\"yes\" value=\"لا\">\n                </div>\n              </div>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n\n\n\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n            <label for=\"sender\" class=\"col-sm-2 col-form-label\">المرسل</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" name=\"sender\" [(ngModel)]=\"fullDocument.sender\" id=\"sender\" placeholder=\"المرسل\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n            <label for=\"sender\" class=\"col-sm-3 col-form-label\">المرسل اليه</label>\n            <div class=\"col-sm-7\">\n              <input type=\"text\" class=\"form-control\" name=\"receiver\" [(ngModel)]=\"fullDocument.receiver\" id=\"receiver\" placeholder=\"المرسل اليه\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n      <div class=\"form-group row\">\n        <label for=\"description\" class=\"col-sm-1 col-form-label\">الوصف</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"fullDocument.description\" id=\"description\" placeholder=\"الوصف\">\n        </div>\n      </div>\n\n\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n            <label for=\"date\" class=\"col-sm-2 col-form-label\">تاريخ الحفظ</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" class=\"form-control\" name=\"date_entree\" [(ngModel)]=\"date_entree\" id=\"date_entree\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n            <label for=\"date\" class=\"col-sm-2 col-form-label\">تاريخ الارسال</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" class=\"form-control\" name=\"date_sortie\" [(ngModel)]=\"date_sortie\" id=\"date_sortie\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n\n    <!-- -->\n\n\n\n\n    <div class=\"row\">\n      <div class=\"col-sm-4\"></div>\n      <div class=\"col-sm-4 center\">\n        <a class=\"btn a1\" data-toggle=\"collapse\" href=\"#collapse1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapse1\">\n          بالتفصيل <br> <i class=\"fa fa-arrows-v\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <div class=\"col-sm-4\"></div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\">\n        <button type=\"submit\" (click)=\"search()\"  class=\"btn btn-outline-primary btn-lg\">بحث <i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n  </div>\n\n  <!-- search results -->\n\n  <div id=\"myCard\" class=\"card\"  *ngFor=\"let d of pageDocuments?.content; let i = index\">\n     <div class=\"card-header row\">\n       <div class=\"col-sm-10\">\n         <a class=\"btn a1 pdf\" data-toggle=\"collapse\" href=\"#collapse+{{d.id}}\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapse\">معاينة <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></a>\n       </div>\n\n       <div class=\"col-sm-2\">\n         <div class=\"row\"><span class=\"pdf\" (click)=\"onEditDocument(d.id)\">تحديث <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span></div>\n         <div class=\"row\"><span class=\"pdf\" (click)=\"confirmDelete(d.id,i)\">حــــذف <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span></div>\n       </div>\n     </div>\n\n\n\n\n\n    <div class=\"collapse\" id=\"collapse+{{d.id}}\">\n\n      <div class=\"embed-responsive embed-responsive-21by9\">\n        <iframe type=\"application/pdf\" class=\"embed-responsive-item\" [src]=\"'assets/'+d.id+'.pdf#zoom=110' | safe\"></iframe>\n      </div>\n\n\n    </div>\n\n    <!-- -->\n    <div class=\"card-body\">\n\n      <table class=\"table table-hover\">\n        <tbody>\n        <tr>\n          <th>الموضوع</th>\n          <td>{{d.title}}</td>\n          <th>الملف</th>\n          <td>{{d.binder.title}}</td>\n        </tr>\n        <tr>\n          <th>المرسل</th>\n          <td>{{d.sender}}</td>\n          <th>المرسل اليه</th>\n          <td>{{d.receiver}}</td>\n        </tr>\n        <tr>\n          <th>أصلي</th>\n          <td>{{d.original}}</td>\n          <th>الوصف</th>\n          <td>{{d.description}}</td>\n        </tr>\n        <tr>\n          <th>تاريخ الحفظ</th>\n          <td>{{d.date_entree}}</td>\n          <th>تاريخ الارسال</th>\n          <td>{{d.date_sortie}}</td>\n        </tr>\n        </tbody>\n      </table>\n\n    </div>\n    </div>\n\n  <nav aria-label=\"Page navigation\">\n    <ul class=\"pagination justify-content-center pagination-lg\">\n      <li  class=\"page-item\" [ngClass]=\"{'active':i==page}\" *ngFor=\"let p of pages;let i = index\" >\n        <a class=\"page-link\" (click)=\"gotoPage(i)\" >{{i+1}}</a>\n      </li>\n    </ul>\n  </nav>\n\n</form>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_binder_service__ = __webpack_require__("./src/app/services/binder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_document_service__ = __webpack_require__("./src/app/services/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_model_fullDocument__ = __webpack_require__("./src/app/model/model.fullDocument.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_service__ = __webpack_require__("./src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchComponent = /** @class */ (function () {
    function SearchComponent(http, binderService, documentService, router, uploadService) {
        this.http = http;
        this.binderService = binderService;
        this.documentService = documentService;
        this.router = router;
        this.uploadService = uploadService;
        this.fullDocument = new __WEBPACK_IMPORTED_MODULE_4__model_model_fullDocument__["a" /* FullDocument */]();
        this.page = 0;
        this.size = 5;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fillCombbobox binders
        this.binderService.getAllBinders()
            .subscribe(function (data) {
            _this.pageBinders = data;
        }, function (err) {
            alert("غير موجود");
        });
    };
    SearchComponent.prototype.searchDocument1 = function () {
        var _this = this;
        this.documentService.searchDocument1(this.fullDocument, this.page, this.size)
            .subscribe(function (data) {
            _this.pageDocuments = data;
            _this.pages = new Array(data.totalPages);
        }, function (err) {
            alert("غير موجود");
        });
    };
    SearchComponent.prototype.searchDocument2 = function () {
        var _this = this;
        this.documentService.searchDocument2(this.fullDocument, this.page, this.size)
            .subscribe(function (data) {
            _this.pageDocuments = data;
            _this.pages = new Array(data.totalPages);
        }, function (err) {
            alert("غير موجود");
        });
    };
    SearchComponent.prototype.searchDocument3 = function () {
        var _this = this;
        this.documentService.searchDocument3(this.fullDocument, this.page, this.size)
            .subscribe(function (data) {
            _this.pageDocuments = data;
            _this.pages = new Array(data.totalPages);
        }, function (err) {
            alert("غير موجود");
        });
    };
    SearchComponent.prototype.searchDocument4 = function () {
        var _this = this;
        this.documentService.searchDocument4(this.fullDocument, this.page, this.size)
            .subscribe(function (data) {
            _this.pageDocuments = data;
            _this.pages = new Array(data.totalPages);
        }, function (err) {
            alert("غير موجود");
        });
    };
    SearchComponent.prototype.search = function () {
        this.fullDocument.date_entree = this.date_entree;
        this.fullDocument.date_sortie = this.date_sortie;
        if ((this.date_entree === undefined || this.date_entree == "")
            && (this.date_sortie === undefined || this.date_sortie == "")) {
            console.log(this.fullDocument.date_entree, this.fullDocument.date_sortie, 1);
            this.searchDocument1();
        }
        else if ((this.date_entree != undefined || this.date_entree != "")
            && (this.date_sortie === undefined || this.date_sortie == "")) {
            console.log(this.fullDocument.date_entree, this.fullDocument.date_sortie, 2);
            this.searchDocument2();
        }
        else if ((this.date_entree === undefined || this.date_entree == "")
            && (this.date_sortie != undefined || this.date_sortie != "")) {
            console.log(this.fullDocument.date_entree, this.fullDocument.date_sortie, 3);
            this.searchDocument3();
        }
        else if ((this.date_entree != undefined || this.date_entree != "")
            && (this.date_sortie != undefined || this.date_sortie != "")) {
            console.log(this.fullDocument.date_entree, this.fullDocument.date_sortie, 4);
            this.searchDocument4();
        }
    };
    SearchComponent.prototype.onEditDocument = function (id) {
        this.router.navigate(['editDocument', id]);
        console.log(id);
    };
    SearchComponent.prototype.onDeleteDocument = function (id, i) {
        var _this = this;
        this.documentService.deleteDocument(id)
            .subscribe(function (data) {
            _this.pageDocuments.content.splice(i, 1);
            _this.deleteFile(id);
            alert("تم الحذف بنجاح");
        }, function (err) {
            alert("غير موجود");
        });
    };
    SearchComponent.prototype.confirmDelete = function (id, i) {
        if (confirm("تأكيد الحذف")) {
            this.onDeleteDocument(id, i);
        }
    };
    SearchComponent.prototype.gotoPage = function (i, element) {
        this.page = i;
        this.search();
    };
    SearchComponent.prototype.deleteFile = function (id) {
        this.uploadService.deleteFile(id).subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["e" /* HttpResponse */]) {
                console.log('File is completely deleted!');
            }
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__services_binder_service__["a" /* BinderService */], __WEBPACK_IMPORTED_MODULE_3__services_document_service__["a" /* DocumentService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/binder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BinderService = /** @class */ (function () {
    function BinderService(http) {
        this.http = http;
    }
    BinderService.prototype.getAllBinders = function () {
        return this.http.get("/binder").map(function (resp) { return resp.json(); });
    };
    BinderService.prototype.getStatBinders = function () {
        return this.http.get("/countDocumentByBinder").map(function (resp) { return resp.json(); });
    };
    BinderService.prototype.getBinder = function (id) {
        return this.http.get("/binder/" + id).map(function (resp) { return resp.json(); });
    };
    BinderService.prototype.saveBinder = function (binder) {
        return this.http.post("/binder", binder).map(function (resp) { return resp.json(); });
    };
    BinderService.prototype.updateBinder = function (id, binder) {
        return this.http.put("/binder/" + id, binder).map(function (resp) { return resp.json(); });
    };
    BinderService.prototype.deleteBinder = function (id) {
        return this.http.delete("/binder/" + id).map(function (resp) { return resp.json(); });
    };
    BinderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BinderService);
    return BinderService;
}());



/***/ }),

/***/ "./src/app/services/document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
    }
    DocumentService.prototype.saveDocument = function (document) {
        return this.http.post("/document", document).map(function (resp) { return resp.json(); });
    };
    DocumentService.prototype.getAllDocument = function () {
        return this.http.get("/document").map(function (resp) { return resp.json(); });
    };
    DocumentService.prototype.getDocument = function (id) {
        return this.http.get("/document/" + id).map(function (resp) { return resp.json(); });
    };
    DocumentService.prototype.updateDocument = function (id, fullDocument) {
        return this.http.put("/document/" + id, fullDocument).map(function (resp) { return resp.json(); });
    };
    DocumentService.prototype.deleteDocument = function (id) {
        return this.http.delete("/document/" + id).map(function (resp) { return resp.json(); });
    };
    //no date
    DocumentService.prototype.searchDocument1 = function (fullDocument, page, size) {
        return this.http.get("/searchDocument?title=" + fullDocument.title +
            "&desc=" + fullDocument.description + "&binder=" + fullDocument.binder.title +
            "&sender=" + fullDocument.sender + "&original=" + fullDocument.original +
            "&receiver=" + fullDocument.receiver + "&page=" + page + "&size=" + size + "").map(function (resp) { return resp.json(); });
    };
    //date entree
    DocumentService.prototype.searchDocument2 = function (fullDocument, page, size) {
        return this.http.get("/searchDocument2?title=" + fullDocument.title +
            "&desc=" + fullDocument.description + "&binder=" + fullDocument.binder.title +
            "&sender=" + fullDocument.sender + "&original=" + fullDocument.original +
            "&receiver=" + fullDocument.receiver + "&date_entree=" + fullDocument.date_entree + "&page=" + page + "&size=" + size + "").map(function (resp) { return resp.json(); });
    };
    //date sortie
    DocumentService.prototype.searchDocument3 = function (fullDocument, page, size) {
        return this.http.get("/searchDocument3?title=" + fullDocument.title +
            "&desc=" + fullDocument.description + "&binder=" + fullDocument.binder.title +
            "&sender=" + fullDocument.sender + "&original=" + fullDocument.original +
            "&receiver=" + fullDocument.receiver + "&date_sortie=" + fullDocument.date_sortie + "&page=" + page + "&size=" + size + "").map(function (resp) { return resp.json(); });
    };
    //both date
    DocumentService.prototype.searchDocument4 = function (fullDocument, page, size) {
        return this.http.get("/searchDocument4?title=" + fullDocument.title +
            "&desc=" + fullDocument.description + "&binder=" + fullDocument.binder.title +
            "&sender=" + fullDocument.sender + "&original=" + fullDocument.original +
            "&receiver=" + fullDocument.receiver + "&date_entree=" + fullDocument.date_entree +
            "&date_sortie=" + fullDocument.date_sortie + "&page=" + page + "&size=" + size + "").map(function (resp) { return resp.json(); });
    };
    DocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/services/safePipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/statistics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatisticsService = /** @class */ (function () {
    function StatisticsService(http) {
        this.http = http;
    }
    StatisticsService.prototype.totalBinders = function () {
        return this.http.get("/totalBinders").map(function (resp) { return resp.json(); });
    };
    StatisticsService.prototype.totalDocuments = function () {
        return this.http.get("/totalDocuments").map(function (resp) { return resp.json(); });
    };
    //search documents by binder.id
    StatisticsService.prototype.searchDocument5 = function (id) {
        return this.http.get("/searchDocument5?binder=" + id + "").map(function (resp) { return resp.json(); });
    };
    StatisticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StatisticsService);
    return StatisticsService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.pushFileToStorage = function (file, id) {
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpRequest */]('POST', '/upload/' + id, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadService.prototype.deleteFile = function (id) {
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpRequest */]('DELETE', '/delete/' + id, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.css":
/***/ (function(module, exports) {

module.exports = ".fa-file-text-o , .fa-book{\r\n  margin-left: 2%;\r\n}\r\n\r\n.nbr{\r\n  font-size: 200%;\r\n}\r\n\r\n.table{\r\n  margin-top: 3%;\r\n}\r\n\r\n.fa-pencil , .fa-trash-o{\r\n  cursor: pointer;\r\n  font-size: 150%;\r\n}\r\n\r\n.fa-pencil:hover ,\r\n.fa-trash-o:hover{\r\n  color: blue;\r\n}\r\n\r\ntd.text{\r\n  word-wrap: break-word;\r\n  min-width: 160px;\r\n  max-width: 160px;\r\n}\r\n\r\n.noText{\r\n  width: 50px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\"></div>\n    <div class=\"col-sm-4\">\n      <h3><i class=\"fa fa-book\" aria-hidden=\"true\"></i> مجموع الملفات<span class=\"nbr\"> {{countBinders}}</span></h3>\n    </div>\n\n    <div class=\"col-sm-5\">\n      <h3><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> مجموع الوثائق<span class=\"nbr\"> {{countDocuments}}</span></h3>\n    </div>\n  </div>\n\n  <table class=\"table table-hover\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">الموضوع</th>\n      <th scope=\"col\">الوصف</th>\n      <th scope=\"col\">#</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let b of pageBinders; let i = index\" >\n      <th class=\"noText\" scope=\"row\">{{b.id}}</th>\n      <td class=\"text\">{{b.title}}</td>\n      <td class=\"text\">{{b.description}}</td>\n      <td class=\"noText\">\n        <div class=\"row\"><span (click)=\"onEditBinder(b.id)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span></div>\n        <div class=\"row\"><span (click)=\"onDeleteBinder(b.id,i)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span></div>\n       </td>\n     </tr>\n     </tbody>\n   </table>\n\n </div>\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_binder_service__ = __webpack_require__("./src/app/services/binder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_statistics_service__ = __webpack_require__("./src/app/services/statistics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(http, binderService, statisticsService, router) {
        this.http = http;
        this.binderService = binderService;
        this.statisticsService = statisticsService;
        this.router = router;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.getAllBinders();
        this.totalBinders();
        this.totalDocuments();
    };
    StatisticsComponent.prototype.getAllBinders = function () {
        var _this = this;
        this.binderService.getAllBinders()
            .subscribe(function (data) {
            _this.pageBinders = data;
        }, function (err) {
            alert("غير موجود");
        });
    };
    StatisticsComponent.prototype.totalBinders = function () {
        var _this = this;
        this.statisticsService.totalBinders()
            .subscribe(function (data) {
            _this.countBinders = data;
        }, function (err) {
            alert("غير موجود");
        });
    };
    StatisticsComponent.prototype.totalDocuments = function () {
        var _this = this;
        this.statisticsService.totalDocuments()
            .subscribe(function (data) {
            _this.countDocuments = data;
        }, function (err) {
            alert("غير موجود");
        });
    };
    StatisticsComponent.prototype.onEditBinder = function (id) {
        this.router.navigate(['editBinder', id]);
    };
    StatisticsComponent.prototype.onDeleteBinder = function (id, i) {
        var _this = this;
        this.statisticsService.searchDocument5(id)
            .subscribe(function (data) {
            if (data.totalElements == 0) {
                if (confirm("تأكيد الحذف")) {
                    _this.binderService.deleteBinder(id)
                        .subscribe(function (data) {
                        _this.pageBinders.splice(i, 1);
                        alert("تم الحذف بنجاح");
                    }, function (err) {
                        alert("غير موجود");
                    });
                }
            }
            else {
                alert("لا يمكن حذف هذا الملف");
            }
            console.log(data.totalElements);
        }, function (err) {
            console.log(err);
        });
    };
    StatisticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-statistics',
            template: __webpack_require__("./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__("./src/app/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__services_binder_service__["a" /* BinderService */], __WEBPACK_IMPORTED_MODULE_3__services_statistics_service__["a" /* StatisticsService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map