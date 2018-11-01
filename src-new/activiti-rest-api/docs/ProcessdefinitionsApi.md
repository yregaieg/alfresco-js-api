# .ProcessdefinitionsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIdentityLinkUsingPOST**](ProcessdefinitionsApi.md#createIdentityLinkUsingPOST) | **POST** /enterprise/process-definitions/{processDefinitionId}/identitylinks | Add a user or group involvement to a process definition
[**deleteIdentityLinkUsingDELETE**](ProcessdefinitionsApi.md#deleteIdentityLinkUsingDELETE) | **DELETE** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Remove a user or group involvement from a process definition
[**getIdentityLinkTypeUsingGET**](ProcessdefinitionsApi.md#getIdentityLinkTypeUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Get a user or group involvement with a process definition
[**getIdentityLinksForFamilyUsingGET**](ProcessdefinitionsApi.md#getIdentityLinksForFamilyUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family} | List either the users or groups involved with a process definition
[**getIdentityLinksUsingGET**](ProcessdefinitionsApi.md#getIdentityLinksUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks | List the users and groups involved with a process definition
[**getProcessDefinitionDecisionTablesUsingGET**](ProcessdefinitionsApi.md#getProcessDefinitionDecisionTablesUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/decision-tables | List the decision tables associated with a process definition
[**getProcessDefinitionFormsUsingGET**](ProcessdefinitionsApi.md#getProcessDefinitionFormsUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/forms | List the forms associated with a process definition
[**getProcessDefinitionStartFormUsingGET**](ProcessdefinitionsApi.md#getProcessDefinitionStartFormUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
[**getProcessDefinitionsUsingGET**](ProcessdefinitionsApi.md#getProcessDefinitionsUsingGET) | **GET** /enterprise/process-definitions | Retrieve a list of process definitions
[**getRestFieldValuesUsingGET**](ProcessdefinitionsApi.md#getRestFieldValuesUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
[**getRestTableFieldValuesUsingGET**](ProcessdefinitionsApi.md#getRestTableFieldValuesUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)


<a name="createIdentityLinkUsingPOST"></a>
# **createIdentityLinkUsingPOST**
> IdentityLinkRepresentation createIdentityLinkUsingPOST(processDefinitionIdidentityLinkRepresentation)

Add a user or group involvement to a process definition

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIdentityLinkUsingPOST(processDefinitionIdidentityLinkRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 
 **identityLinkRepresentation** | [**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)| identityLinkRepresentation | 

### Return type

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteIdentityLinkUsingDELETE"></a>
# **deleteIdentityLinkUsingDELETE**
> deleteIdentityLinkUsingDELETE(processDefinitionIdfamilyidentityId)

Remove a user or group involvement from a process definition

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteIdentityLinkUsingDELETE(processDefinitionIdfamilyidentityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| Process definition ID | 
 **family** | **string**| Identity type | 
 **identityId** | **string**| User or group ID | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIdentityLinkTypeUsingGET"></a>
# **getIdentityLinkTypeUsingGET**
> IdentityLinkRepresentation getIdentityLinkTypeUsingGET(processDefinitionIdfamilyidentityId)

Get a user or group involvement with a process definition

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIdentityLinkTypeUsingGET(processDefinitionIdfamilyidentityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| Process definition ID | 
 **family** | **string**| Identity type | 
 **identityId** | **string**| User or group ID | 

### Return type

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIdentityLinksForFamilyUsingGET"></a>
# **getIdentityLinksForFamilyUsingGET**
> any getIdentityLinksForFamilyUsingGET(processDefinitionIdfamily)

List either the users or groups involved with a process definition

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIdentityLinksForFamilyUsingGET(processDefinitionIdfamily, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 
 **family** | **string**| Identity type | 

### Return type

[**any**](IdentityLinkRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIdentityLinksUsingGET"></a>
# **getIdentityLinksUsingGET**
> any getIdentityLinksUsingGET(processDefinitionId)

List the users and groups involved with a process definition

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIdentityLinksUsingGET(processDefinitionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 

### Return type

[**any**](IdentityLinkRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessDefinitionDecisionTablesUsingGET"></a>
# **getProcessDefinitionDecisionTablesUsingGET**
> ResultListDataRepresentationRuntimeDecisionTableRepresentation getProcessDefinitionDecisionTablesUsingGET(processDefinitionId)

List the decision tables associated with a process definition

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessDefinitionDecisionTablesUsingGET(processDefinitionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 

### Return type

[**ResultListDataRepresentationRuntimeDecisionTableRepresentation**](ResultListDataRepresentationRuntimeDecisionTableRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessDefinitionFormsUsingGET"></a>
# **getProcessDefinitionFormsUsingGET**
> ResultListDataRepresentationRuntimeFormRepresentation getProcessDefinitionFormsUsingGET(processDefinitionId)

List the forms associated with a process definition

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessDefinitionFormsUsingGET(processDefinitionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 

### Return type

[**ResultListDataRepresentationRuntimeFormRepresentation**](ResultListDataRepresentationRuntimeFormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessDefinitionStartFormUsingGET"></a>
# **getProcessDefinitionStartFormUsingGET**
> FormDefinitionRepresentation getProcessDefinitionStartFormUsingGET()

Retrieve the start form for a process definition

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessDefinitionStartFormUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessDefinitionsUsingGET"></a>
# **getProcessDefinitionsUsingGET**
> ResultListDataRepresentationProcessDefinitionRepresentation getProcessDefinitionsUsingGET(opts)

Retrieve a list of process definitions

Get a list of process definitions (visible within the tenant of the user)

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();

var opts = { 
  'latest': true // boolean | latest
  'appDefinitionId': 789 // number | appDefinitionId
  'deploymentId': deploymentId_example // string | deploymentId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessDefinitionsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latest** | **boolean**| latest | [optional] 
 **appDefinitionId** | **number**| appDefinitionId | [optional] 
 **deploymentId** | **string**| deploymentId | [optional] 

### Return type

[**ResultListDataRepresentationProcessDefinitionRepresentation**](ResultListDataRepresentationProcessDefinitionRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRestFieldValuesUsingGET"></a>
# **getRestFieldValuesUsingGET**
> any getRestFieldValuesUsingGET()

Retrieve field values (eg. the typeahead field)

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRestFieldValuesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**any**](FormValueRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRestTableFieldValuesUsingGET"></a>
# **getRestTableFieldValuesUsingGET**
> any getRestTableFieldValuesUsingGET()

Retrieve field values (eg. the table field)

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessdefinitionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRestTableFieldValuesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**any**](FormValueRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
