// window.addEventListener("load", () => loadEdit(), false);

// async function loadEdit() {
//   console.log("Hello World!");
//   // geoFindMe();
//   var p = await getLatitude();
//   var q = await getLongitude();
//   console.log("Lattitude" + p + "Longitude" + q);
// }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

window.addEventListener(
  "load",
  function() {
    return loadEdit();
  },
  false
);

function loadEdit() {
  return _loadEdit.apply(this, arguments);
}

function _loadEdit() {
  _loadEdit = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var p, q;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              console.log("Hello World!"); // geoFindMe();

              _context.next = 3;
              return getLatitude();

            case 3:
              p = _context.sent;
              _context.next = 6;
              return getLongitude();

            case 6:
              q = _context.sent;
              console.log("Lattitude " + p + " Longitude " + q);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _loadEdit.apply(this, arguments);
}

// function geoFindLocation() {
//   if (!navigator.geolocation) {
//     console.log("Geolocation is not supported by your browser");
//     return;
//   }

//   return new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function getLatitude() {
//   let latitude = "";
//   await geoFindLocation()
//     .then(position => {
//       latitude = position.coords.latitude.toFixed(6);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   console.log(latitude);
//   return latitude;
// }

function geoFindLocation() {
  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
    return;
  }

  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function getLatitude() {
  return _getLatitude.apply(this, arguments);
}

function _getLatitude() {
  _getLatitude = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var latitude;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              latitude = "";
              _context.next = 3;
              return geoFindLocation()
                .then(function(position) {
                  latitude = position.coords.latitude.toFixed(6);
                })
                ["catch"](function(err) {
                  console.log(err);
                });

            case 3:
              console.log(latitude);
              return _context.abrupt("return", latitude);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _getLatitude.apply(this, arguments);
}

// async function getLongitude() {
//   let longitude = "";
//   await geoFindLocation()
//     .then(position => {
//       longitude = position.coords.longitude.toFixed(6);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   console.log(longitude);
//   return longitude;
// }

function getLongitude() {
  return _getLongitude.apply(this, arguments);
}

function _getLongitude() {
  _getLongitude = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var longitude;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              longitude = "";
              _context.next = 3;
              return geoFindLocation()
                .then(function(position) {
                  longitude = position.coords.longitude.toFixed(6);
                })
                ["catch"](function(err) {
                  console.log(err);
                });

            case 3:
              console.log(longitude);
              return _context.abrupt("return", longitude);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _getLongitude.apply(this, arguments);
}
