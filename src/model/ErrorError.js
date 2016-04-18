(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ErrorError = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ErrorError model module.
   * @module model/ErrorError
   * @version 1
   */

  /**
   * Constructs a new <code>ErrorError</code>.
   * @alias module:model/ErrorError
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ErrorError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorError} obj Optional instance to populate.
   * @return {module:model/ErrorError} The populated <code>ErrorError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('errorKey')) {
        obj['errorKey'] = ApiClient.convertToType(data['errorKey'], 'String');
      }
      if (data.hasOwnProperty('briefSummary')) {
        obj['briefSummary'] = ApiClient.convertToType(data['briefSummary'], 'String');
      }
      if (data.hasOwnProperty('descriptionURL')) {
        obj['descriptionURL'] = ApiClient.convertToType(data['descriptionURL'], 'String');
      }
      if (data.hasOwnProperty('stackTrace')) {
        obj['stackTrace'] = ApiClient.convertToType(data['stackTrace'], 'String');
      }
      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {String} errorKey
   */
  exports.prototype['errorKey'] = undefined;

  /**
   * @member {String} briefSummary
   */
  exports.prototype['briefSummary'] = undefined;

  /**
   * @member {String} descriptionURL
   */
  exports.prototype['descriptionURL'] = undefined;

  /**
   * @member {String} stackTrace
   */
  exports.prototype['stackTrace'] = undefined;

  /**
   * @member {Integer} statusCode
   */
  exports.prototype['statusCode'] = undefined;




  return exports;
}));