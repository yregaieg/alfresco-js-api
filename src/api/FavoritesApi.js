(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FavoriteEntry', '../model/FavoriteBody', '../model/Error', '../model/Favorite', '../model/FavoritePaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FavoriteEntry'), require('../model/FavoriteBody'), require('../model/Error'), require('../model/Favorite'), require('../model/FavoritePaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoritesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoriteEntry, root.AlfrescoCoreRestApi.FavoriteBody, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.Favorite, root.AlfrescoCoreRestApi.FavoritePaging);
  }
}(this, function(ApiClient, FavoriteEntry, FavoriteBody, Error, Favorite, FavoritePaging) {
  'use strict';

  /**
   * Favorites service.
   * @module api/FavoritesApi
   * @version 1
   */

  /**
   * Constructs a new FavoritesApi. 
   * @alias module:api/FavoritesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addFavorite operation.
     * @callback module:api/FavoritesApi~addFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FavoriteEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a favorite
     * Favorite a **site**, **file**, or **folder** in the repository.
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteBody} favoriteBody An object identifying the entity to be favorited. \nThe object consists of a single property which is an object with the name &#x60;site&#x60;, &#x60;file&#x60;, or &#x60;folder&#x60;. \nThe content of that object is the &#x60;guid&#x60; of the target entity.\n
     * @param {module:api/FavoritesApi~addFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FavoriteEntry}
     */
    this.addFavorite = function(personId, favoriteBody, callback) {
      var postBody = favoriteBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling addFavorite";
      }

      // verify the required parameter 'favoriteBody' is set
      if (favoriteBody == undefined || favoriteBody == null) {
        throw "Missing the required parameter 'favoriteBody' when calling addFavorite";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFavorite operation.
     * @callback module:api/FavoritesApi~getFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Favorite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a favorite
     * Returns favorite **favoriteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/FavoritesApi~getFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Favorite}
     */
    this.getFavorite = function(personId, favoriteId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling getFavorite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Favorite;

      return this.apiClient.callApi(
        '/people/{personId}/favorites/{favoriteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFavorites operation.
     * @callback module:api/FavoritesApi~getFavoritesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FavoritePaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get favorites
     * Returns a list of favorites for person **personId**.\n\nYou can us the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to get the favorites of the currently authenticated user.        \n\nYou can use the **where** parameter to restrict the list in the response\nto entries of a specific kind. The **where** parameter takes a value.\nThe value is a single predicate that can include one or more **EXISTS** \nconditions. The **EXISTS** condition uses a single operand to limit the\nlist to include entries that include that one property. The property values are:\n\n*   &#x60;target/file&#x60;\n*   &#x60;target/folder&#x60;\n*   &#x60;target/site&#x60;\n\nFor example, the following **where** parameter restricts the returned list to the file favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file))\n&#x60;&#x60;&#x60;\nYou can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.\n\n\nFor example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file) OR EXISTS(target/folder))\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.where A string to restrict the returned objects by using a predicate.
     * @param {Array.<String>} opts.fields A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/FavoritesApi~getFavoritesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FavoritePaging}
     */
    this.getFavorites = function(personId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorites";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'where': opts['where'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoritePaging;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeFavoriteSite operation.
     * @callback module:api/FavoritesApi~removeFavoriteSiteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a favorite
     * Removes **favoriteId** as a favorite of person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     * @param {module:api/FavoritesApi~removeFavoriteSiteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeFavoriteSite = function(personId, favoriteId, callback) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling removeFavoriteSite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling removeFavoriteSite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/favorites/{favoriteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));