/**
 * Copyright 2020 FlowSquad GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  registerBpmnJSPlugin,
  registerDmnJSPlugin
} from 'camunda-modeler-plugin-helpers';

import i18nExtensionModule from './i18n-extension';

// Register plugin for the BPMN part
registerBpmnJSPlugin(i18nExtensionModule);

// Register plugin for the DMN part
registerDmnJSPlugin(i18nExtensionModule, ['drd','decisionTable','literalExpression']);