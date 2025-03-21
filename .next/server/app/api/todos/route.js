/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/todos/route";
exports.ids = ["app/api/todos/route"];
exports.modules = {

/***/ "(rsc)/./app/api/todos/route.js":
/*!********************************!*\
  !*** ./app/api/todos/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/dbConnect */ \"(rsc)/./lib/dbConnect.js\");\n/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Todo */ \"(rsc)/./models/Todo.js\");\n// app/api/todos/route.js\n\n\nasync function GET() {\n    try {\n        await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const todos = await _models_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        return new Response(JSON.stringify({\n            success: true,\n            data: todos\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            success: false,\n            error: error.message\n        }), {\n            status: 400\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await request.json();\n        const todo = await _models_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(body);\n        return new Response(JSON.stringify({\n            success: true,\n            data: todo\n        }), {\n            status: 201\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            success: false,\n            error: error.message\n        }), {\n            status: 400\n        });\n    }\n}\nasync function PATCH(request) {\n    try {\n        await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await request.json();\n        const { id, text, completed, dueDate } = body;\n        const todo = await _models_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, {\n            text,\n            completed,\n            dueDate\n        }, {\n            new: true\n        });\n        return new Response(JSON.stringify({\n            success: true,\n            data: todo\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            success: false,\n            error: error.message\n        }), {\n            status: 400\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await request.json();\n        const { id } = body;\n        if (!id) return new Response(JSON.stringify({\n            success: false,\n            error: 'ID is missing'\n        }), {\n            status: 400\n        });\n        await _models_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n        return new Response(JSON.stringify({\n            success: true\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            success: false,\n            error: error.message\n        }), {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RvZG9zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlCQUF5QjtBQUNzQjtBQUNQO0FBRWpDLGVBQWVFO0lBQ3BCLElBQUk7UUFDRixNQUFNRiwwREFBU0E7UUFDZixNQUFNRyxRQUFRLE1BQU1GLG9EQUFJQSxDQUFDRyxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUlDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1lBQU1DLE1BQU1OO1FBQU0sSUFBSTtZQUFFTyxRQUFRO1FBQUk7SUFDcEYsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTyxJQUFJTixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztZQUFPRyxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsSUFBSTtZQUFFRixRQUFRO1FBQUk7SUFDOUY7QUFDRjtBQUVPLGVBQWVHLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1kLDBEQUFTQTtRQUNmLE1BQU1lLE9BQU8sTUFBTUQsUUFBUUUsSUFBSTtRQUMvQixNQUFNQyxPQUFPLE1BQU1oQixvREFBSUEsQ0FBQ2lCLE1BQU0sQ0FBQ0g7UUFDL0IsT0FBTyxJQUFJVixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztZQUFNQyxNQUFNUTtRQUFLLElBQUk7WUFBRVAsUUFBUTtRQUFJO0lBQ25GLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU8sSUFBSU4sU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7WUFBT0csT0FBT0EsTUFBTUMsT0FBTztRQUFDLElBQUk7WUFBRUYsUUFBUTtRQUFJO0lBQzlGO0FBQ0Y7QUFFTyxlQUFlUyxNQUFNTCxPQUFPO0lBQ2pDLElBQUk7UUFDRixNQUFNZCwwREFBU0E7UUFDZixNQUFNZSxPQUFPLE1BQU1ELFFBQVFFLElBQUk7UUFDL0IsTUFBTSxFQUFFSSxFQUFFLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUUsR0FBR1I7UUFDekMsTUFBTUUsT0FBTyxNQUFNaEIsb0RBQUlBLENBQUN1QixpQkFBaUIsQ0FDdkNKLElBQ0E7WUFBRUM7WUFBTUM7WUFBV0M7UUFBUSxHQUMzQjtZQUFFRSxLQUFLO1FBQUs7UUFFZCxPQUFPLElBQUlwQixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztZQUFNQyxNQUFNUTtRQUFLLElBQUk7WUFBRVAsUUFBUTtRQUFJO0lBQ25GLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU8sSUFBSU4sU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7WUFBT0csT0FBT0EsTUFBTUMsT0FBTztRQUFDLElBQUk7WUFBRUYsUUFBUTtRQUFJO0lBQzlGO0FBQ0Y7QUFFTyxlQUFlZ0IsT0FBT1osT0FBTztJQUNsQyxJQUFJO1FBQ0YsTUFBTWQsMERBQVNBO1FBQ2YsTUFBTWUsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO1FBQy9CLE1BQU0sRUFBRUksRUFBRSxFQUFFLEdBQUdMO1FBQ2YsSUFBSSxDQUFDSyxJQUFJLE9BQU8sSUFBSWYsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7WUFBT0csT0FBTztRQUFnQixJQUFJO1lBQUVELFFBQVE7UUFBSTtRQUN2RyxNQUFNVCxvREFBSUEsQ0FBQzBCLGlCQUFpQixDQUFDUDtRQUM3QixPQUFPLElBQUlmLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1FBQUssSUFBSTtZQUFFRSxRQUFRO1FBQUk7SUFDdkUsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTyxJQUFJTixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztZQUFPRyxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsSUFBSTtZQUFFRixRQUFRO1FBQUk7SUFDOUY7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2FwcGxlL215LXRvZG8tYXBwL2FwcC9hcGkvdG9kb3Mvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS90b2Rvcy9yb3V0ZS5qc1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi9saWIvZGJDb25uZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4uLy4uLy4uL21vZGVscy9Ub2RvJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgICBjb25zdCB0b2RvcyA9IGF3YWl0IFRvZG8uZmluZCh7fSk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRvZG9zIH0pLCB7IHN0YXR1czogMjAwIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSksIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xuICB0cnkge1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB0b2RvID0gYXdhaXQgVG9kby5jcmVhdGUoYm9keSk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRvZG8gfSksIHsgc3RhdHVzOiAyMDEgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUEFUQ0gocmVxdWVzdCkge1xuICB0cnkge1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQsIGR1ZURhdGUgfSA9IGJvZHk7XG4gICAgY29uc3QgdG9kbyA9IGF3YWl0IFRvZG8uZmluZEJ5SWRBbmRVcGRhdGUoXG4gICAgICBpZCxcbiAgICAgIHsgdGV4dCwgY29tcGxldGVkLCBkdWVEYXRlIH0sXG4gICAgICB7IG5ldzogdHJ1ZSB9XG4gICAgKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdG9kbyB9KSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pLCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdCkge1xuICB0cnkge1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IGlkIH0gPSBib2R5O1xuICAgIGlmICghaWQpIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJRCBpcyBtaXNzaW5nJyB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICBhd2FpdCBUb2RvLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgc3VjY2VzczogdHJ1ZSB9KSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pLCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiVG9kbyIsIkdFVCIsInRvZG9zIiwiZmluZCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJkYXRhIiwic3RhdHVzIiwiZXJyb3IiLCJtZXNzYWdlIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsInRvZG8iLCJjcmVhdGUiLCJQQVRDSCIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsImR1ZURhdGUiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIm5ldyIsIkRFTEVURSIsImZpbmRCeUlkQW5kRGVsZXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/todos/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/dbConnect.js":
/*!**************************!*\
  !*** ./lib/dbConnect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        }).then((mongoose)=>mongoose);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGJDb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFBTTtBQUNsQjtBQUVBLElBQUlDLFNBQVNDLE9BQU9OLFFBQVE7QUFFNUIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFFBQVEsR0FBRztRQUFFTyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUVBLGVBQWVDO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFLE9BQU9GLE9BQU9FLElBQUk7SUFFbkMsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkJILE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWE7WUFDN0NVLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3RCLEdBQUdDLElBQUksQ0FBQ2IsQ0FBQUEsV0FBWUE7SUFDdEI7SUFDQUssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYXBwbGUvbXktdG9kby1hcHAvbGliL2RiQ29ubmVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnKTtcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm47XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pLnRoZW4obW9uZ29vc2UgPT4gbW9uZ29vc2UpO1xuICB9XG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/dbConnect.js\n");

/***/ }),

/***/ "(rsc)/./models/Todo.js":
/*!************************!*\
  !*** ./models/Todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TodoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    text: {\n        type: String,\n        required: [\n            true,\n            'Please provide todo text.'\n        ]\n    },\n    completed: {\n        type: Boolean,\n        default: false\n    },\n    dueDate: {\n        type: Date,\n        default: null\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Todo || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Todo', TodoSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTRCO0lBQy9DO0lBQ0FDLFdBQVc7UUFDVEgsTUFBTUk7UUFDTkMsU0FBUztJQUNYO0lBQ0FDLFNBQVM7UUFDUE4sTUFBTU87UUFDTkYsU0FBUztJQUNYO0FBQ0YsR0FBRztJQUNERyxZQUFZO0FBQ2Q7QUFFQSxpRUFBZVosd0RBQWUsQ0FBQ2MsSUFBSSxJQUFJZCxxREFBYyxDQUFDLFFBQVFDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9teS10b2RvLWFwcC9tb2RlbHMvVG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBUb2RvU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHRleHQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHByb3ZpZGUgdG9kbyB0ZXh0LiddXG4gIH0sXG4gIGNvbXBsZXRlZDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGR1ZURhdGU6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH1cbn0sIHtcbiAgdGltZXN0YW1wczogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Ub2RvIHx8IG1vbmdvb3NlLm1vZGVsKCdUb2RvJywgVG9kb1NjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJUb2RvU2NoZW1hIiwiU2NoZW1hIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvbXBsZXRlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiZHVlRGF0ZSIsIkRhdGUiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiVG9kbyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Todo.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=%2FUsers%2Fapple%2Fmy-todo-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fapple%2Fmy-todo-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=%2FUsers%2Fapple%2Fmy-todo-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fapple%2Fmy-todo-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_apple_my_todo_app_app_api_todos_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/todos/route.js */ \"(rsc)/./app/api/todos/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/todos/route\",\n        pathname: \"/api/todos\",\n        filename: \"route\",\n        bundlePath: \"app/api/todos/route\"\n    },\n    resolvedPagePath: \"/Users/apple/my-todo-app/app/api/todos/route.js\",\n    nextConfigOutput,\n    userland: _Users_apple_my_todo_app_app_api_todos_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0b2RvcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdG9kb3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0b2RvcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmFwcGxlJTJGbXktdG9kby1hcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYXBwbGUlMkZteS10b2RvLWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FwcGxlL215LXRvZG8tYXBwL2FwcC9hcGkvdG9kb3Mvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RvZG9zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdG9kb3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3RvZG9zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FwcGxlL215LXRvZG8tYXBwL2FwcC9hcGkvdG9kb3Mvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=%2FUsers%2Fapple%2Fmy-todo-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fapple%2Fmy-todo-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=%2FUsers%2Fapple%2Fmy-todo-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fapple%2Fmy-todo-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();