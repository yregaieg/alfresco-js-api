/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

export class QueryVariable {
    name?: string;
    operation?: string;
    type?: string;
    value?: any;
    variableOperation?: QueryVariable.VariableOperationEnum | string;

    constructor(input?: any) {

        if (input) {
            Object.assign(this, input);
        }
    }

}
export namespace QueryVariable {
    export type VariableOperationEnum = 'EQUALS' | 'NOT_EQUALS' | 'EQUALS_IGNORE_CASE' | 'NOT_EQUALS_IGNORE_CASE' | 'LIKE' | 'LIKE_IGNORE_CASE' | 'GREATER_THAN' | 'GREATER_THAN_OR_EQUALS' | 'LESS_THAN' | 'LESS_THAN_OR_EQUALS';
    export const VariableOperationEnum = {
        EQUALS: 'EQUALS' as VariableOperationEnum,
        NOTEQUALS: 'NOT_EQUALS' as VariableOperationEnum,
        EQUALSIGNORECASE: 'EQUALS_IGNORE_CASE' as VariableOperationEnum,
        NOTEQUALSIGNORECASE: 'NOT_EQUALS_IGNORE_CASE' as VariableOperationEnum,
        LIKE: 'LIKE' as VariableOperationEnum,
        LIKEIGNORECASE: 'LIKE_IGNORE_CASE' as VariableOperationEnum,
        GREATERTHAN: 'GREATER_THAN' as VariableOperationEnum,
        GREATERTHANOREQUALS: 'GREATER_THAN_OR_EQUALS' as VariableOperationEnum,
        LESSTHAN: 'LESS_THAN' as VariableOperationEnum,
        LESSTHANOREQUALS: 'LESS_THAN_OR_EQUALS' as VariableOperationEnum
    };
}
