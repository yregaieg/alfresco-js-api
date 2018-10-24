/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RequestDefaults', '../model/RequestFacetFields', '../model/RequestFacetIntervals', '../model/RequestFacetQueries', '../model/RequestFields', '../model/RequestFilterQueries', '../model/RequestHighlight', '../model/RequestInclude', '../model/RequestLimits', '../model/RequestLocalization', '../model/RequestPagination', '../model/RequestPivot', '../model/RequestQuery', '../model/RequestRange', '../model/RequestScope', '../model/RequestSortDefinition', '../model/RequestSpellcheck', '../model/RequestStats', '../model/RequestTemplates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RequestDefaults'), require('./RequestFacetFields'), require('./RequestFacetIntervals'), require('./RequestFacetQueries'), require('./RequestFields'), require('./RequestFilterQueries'), require('./RequestHighlight'), require('./RequestInclude'), require('./RequestLimits'), require('./RequestLocalization'), require('./RequestPagination'), require('./RequestPivot'), require('./RequestQuery'), require('./RequestRange'), require('./RequestScope'), require('./RequestSortDefinition'), require('./RequestSpellcheck'), require('./RequestStats'), require('./RequestTemplates'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.SearchRequest = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.RequestDefaults, root.AlfrescoContentServicesRestApi.RequestFacetFields, root.AlfrescoContentServicesRestApi.RequestFacetIntervals, root.AlfrescoContentServicesRestApi.RequestFacetQueries, root.AlfrescoContentServicesRestApi.RequestFields, root.AlfrescoContentServicesRestApi.RequestFilterQueries, root.AlfrescoContentServicesRestApi.RequestHighlight, root.AlfrescoContentServicesRestApi.RequestInclude, root.AlfrescoContentServicesRestApi.RequestLimits, root.AlfrescoContentServicesRestApi.RequestLocalization, root.AlfrescoContentServicesRestApi.RequestPagination, root.AlfrescoContentServicesRestApi.RequestPivot, root.AlfrescoContentServicesRestApi.RequestQuery, root.AlfrescoContentServicesRestApi.RequestRange, root.AlfrescoContentServicesRestApi.RequestScope, root.AlfrescoContentServicesRestApi.RequestSortDefinition, root.AlfrescoContentServicesRestApi.RequestSpellcheck, root.AlfrescoContentServicesRestApi.RequestStats, root.AlfrescoContentServicesRestApi.RequestTemplates);
  }
}(this, function(ApiClient, RequestDefaults, RequestFacetFields, RequestFacetIntervals, RequestFacetQueries, RequestFields, RequestFilterQueries, RequestHighlight, RequestInclude, RequestLimits, RequestLocalization, RequestPagination, RequestPivot, RequestQuery, RequestRange, RequestScope, RequestSortDefinition, RequestSpellcheck, RequestStats, RequestTemplates) {
  'use strict';




  /**
   * The SearchRequest model module.
   * @module model/SearchRequest
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SearchRequest</code>.
   * @alias module:model/SearchRequest
   * @class
   * @param query {module:model/RequestQuery}
   */
  var exports = function(query) {
    var _this = this;

    _this['query'] = query;



















  };

  /**
   * Constructs a <code>SearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {any} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchRequest} obj Optional instance to populate.
   * @return {module:model/SearchRequest} The populated <code>SearchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('query')) {
        obj['query'] = RequestQuery.constructFromObject(data['query']);
      }
      if (data.hasOwnProperty('paging')) {
        obj['paging'] = RequestPagination.constructFromObject(data['paging']);
      }
      if (data.hasOwnProperty('include')) {
        obj['include'] = RequestInclude.constructFromObject(data['include']);
      }
      if (data.hasOwnProperty('includeRequest')) {
        obj['includeRequest'] = ApiClient.convertToType(data['includeRequest'], 'Boolean');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = RequestFields.constructFromObject(data['fields']);
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = RequestSortDefinition.constructFromObject(data['sort']);
      }
      if (data.hasOwnProperty('templates')) {
        obj['templates'] = RequestTemplates.constructFromObject(data['templates']);
      }
      if (data.hasOwnProperty('defaults')) {
        obj['defaults'] = RequestDefaults.constructFromObject(data['defaults']);
      }
      if (data.hasOwnProperty('localization')) {
        obj['localization'] = RequestLocalization.constructFromObject(data['localization']);
      }
      if (data.hasOwnProperty('filterQueries')) {
        obj['filterQueries'] = RequestFilterQueries.constructFromObject(data['filterQueries']);
      }
      if (data.hasOwnProperty('facetQueries')) {
        obj['facetQueries'] = RequestFacetQueries.constructFromObject(data['facetQueries']);
      }
      if (data.hasOwnProperty('facetFields')) {
        obj['facetFields'] = RequestFacetFields.constructFromObject(data['facetFields']);
      }
      if (data.hasOwnProperty('facetIntervals')) {
        obj['facetIntervals'] = RequestFacetIntervals.constructFromObject(data['facetIntervals']);
      }
      if (data.hasOwnProperty('pivots')) {
        obj['pivots'] = ApiClient.convertToType(data['pivots'], [RequestPivot]);
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = ApiClient.convertToType(data['stats'], [RequestStats]);
      }
      if (data.hasOwnProperty('spellcheck')) {
        obj['spellcheck'] = RequestSpellcheck.constructFromObject(data['spellcheck']);
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = RequestScope.constructFromObject(data['scope']);
      }
      if (data.hasOwnProperty('limits')) {
        obj['limits'] = RequestLimits.constructFromObject(data['limits']);
      }
      if (data.hasOwnProperty('highlight')) {
        obj['highlight'] = RequestHighlight.constructFromObject(data['highlight']);
      }
      if (data.hasOwnProperty('ranges')) {
        obj['ranges'] = ApiClient.convertToType(data['ranges'], [RequestRange]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RequestQuery} query
   */
  exports.prototype['query'] = undefined;
  /**
   * @member {module:model/RequestPagination} paging
   */
  exports.prototype['paging'] = undefined;
  /**
   * @member {module:model/RequestInclude} include
   */
  exports.prototype['include'] = undefined;
  /**
   * When true, include the original request in the response
   * @member {boolean} includeRequest
   * @default false
   */
  exports.prototype['includeRequest'] = false;
  /**
   * @member {module:model/RequestFields} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * @member {module:model/RequestSortDefinition} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * @member {module:model/RequestTemplates} templates
   */
  exports.prototype['templates'] = undefined;
  /**
   * @member {module:model/RequestDefaults} defaults
   */
  exports.prototype['defaults'] = undefined;
  /**
   * @member {module:model/RequestLocalization} localization
   */
  exports.prototype['localization'] = undefined;
  /**
   * @member {module:model/RequestFilterQueries} filterQueries
   */
  exports.prototype['filterQueries'] = undefined;
  /**
   * @member {module:model/RequestFacetQueries} facetQueries
   */
  exports.prototype['facetQueries'] = undefined;
  /**
   * @member {module:model/RequestFacetFields} facetFields
   */
  exports.prototype['facetFields'] = undefined;
  /**
   * @member {module:model/RequestFacetIntervals} facetIntervals
   */
  exports.prototype['facetIntervals'] = undefined;
  /**
   * @member {module:model/RequestPivot[]} pivots
   */
  exports.prototype['pivots'] = undefined;
  /**
   * @member {module:model/RequestStats[]} stats
   */
  exports.prototype['stats'] = undefined;
  /**
   * @member {module:model/RequestSpellcheck} spellcheck
   */
  exports.prototype['spellcheck'] = undefined;
  /**
   * @member {module:model/RequestScope} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * @member {module:model/RequestLimits} limits
   */
  exports.prototype['limits'] = undefined;
  /**
   * @member {module:model/RequestHighlight} highlight
   */
  exports.prototype['highlight'] = undefined;
  /**
   * @member {module:model/RequestRange[]} ranges
   */
  exports.prototype['ranges'] = undefined;



  return exports;
}));

