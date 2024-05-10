import { LexicalComposer } from '@lexical/react/LexicalComposer';
import React__default, { createElement, Suspense, lazy, useMemo, useRef, useLayoutEffect, useEffect, useContext, createContext, useState, useCallback, Fragment } from 'react';
import { CodeNode, CodeHighlightNode, $isCodeNode, $createCodeNode, $isCodeHighlightNode, registerCodeHighlighting } from '@lexical/code';
import { HashtagNode } from '@lexical/hashtag';
import { AutoLinkNode, LinkNode, $isLinkNode, TOGGLE_LINK_COMMAND, $createAutoLinkNode } from '@lexical/link';
import { ListNode, ListItemNode, $isListNode, $getListDepth, $isListItemNode, INSERT_UNORDERED_LIST_COMMAND, REMOVE_LIST_COMMAND, INSERT_CHECK_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND } from '@lexical/list';
import { MarkNode } from '@lexical/mark';
import { OverflowNode } from '@lexical/overflow';
import { HorizontalRuleNode, $isHorizontalRuleNode, $createHorizontalRuleNode, INSERT_HORIZONTAL_RULE_COMMAND } from '@lexical/react/LexicalHorizontalRuleNode';
import { HeadingNode, QuoteNode, DRAG_DROP_PASTE, $createHeadingNode, $createQuoteNode, $isHeadingNode } from '@lexical/rich-text';
import { TableNode, TableCellNode, TableRowNode, $isTableNode, $isTableRowNode, $createTableNode, $createTableRowNode, $createTableCellNode, TableCellHeaderStates, $isTableCellNode, $getTableNodeFromLexicalNodeOrThrow, $getTableRowIndexFromTableCellNode, $getTableColumnIndexFromTableCellNode, getCellFromTarget, $getTableCellNodeFromLexicalNode, getTableSelectionFromTableElement, $getElementGridForTableNode, $insertTableRow, $insertTableColumn, $removeTableRowAtIndex, $deleteTableColumn, INSERT_TABLE_COMMAND } from '@lexical/table';
import { TextNode, $applyNodeReplacement, DecoratorNode, createEditor, $getNodeByKey, $setSelection, $isElementNode, $isParagraphNode, $isTextNode, $createParagraphNode, $createTextNode, createCommand, $getSelection, $isRangeSelection, COMMAND_PRIORITY_EDITOR, REDO_COMMAND, UNDO_COMMAND, $getRoot, CLEAR_EDITOR_COMMAND, SELECTION_CHANGE_COMMAND, COMMAND_PRIORITY_LOW as COMMAND_PRIORITY_LOW$1, FORMAT_TEXT_COMMAND, $getNearestNodeFromDOMNode, INDENT_CONTENT_COMMAND, COMMAND_PRIORITY_CRITICAL, FOCUS_COMMAND, $insertNodes, $isRootOrShadowRoot, DRAGSTART_COMMAND, COMMAND_PRIORITY_HIGH, DRAGOVER_COMMAND, DROP_COMMAND, $createRangeSelection, $isNodeSelection, FORMAT_ELEMENT_COMMAND, OUTDENT_CONTENT_COMMAND, CAN_UNDO_COMMAND, CAN_REDO_COMMAND, $isRootNode, DEPRECATED_$isGridSelection } from 'lexical';
import { useCollaborationContext } from '@lexical/react/LexicalCollaborationContext';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { CollaborationPlugin } from '@lexical/react/LexicalCollaborationPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalNestedComposer } from '@lexical/react/LexicalNestedComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { createPortal } from 'react-dom';
import { WebsocketProvider } from 'y-websocket';
import { Doc } from 'yjs';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { BlockWithAlignableContents } from '@lexical/react/LexicalBlockWithAlignableContents';
import { DecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';
import { createInstance } from 'i18next';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { importFile, exportFile } from '@lexical/file';
import { CHECK_LIST, ELEMENT_TRANSFORMERS, TEXT_FORMAT_TRANSFORMERS, TEXT_MATCH_TRANSFORMERS, $convertFromMarkdownString, $convertToMarkdownString } from '@lexical/markdown';
import { mergeRegister, $wrapNodeInElement, mediaFileReader, isMimeType, $getNearestNodeOfType } from '@lexical/utils';
import { CONNECTED_COMMAND, TOGGLE_CONNECT_COMMAND } from '@lexical/yjs';
import { AutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin';
import { $isAtNodeEnd, $wrapNodes, $isParentElementRTL, $getSelectionStyleValueForProperty, $patchStyleText } from '@lexical/selection';
import '@lexical/text';
import { useLexicalTextEntity } from '@lexical/react/useLexicalTextEntity';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import useChild from 'use-child';
import { useBasicTypeaheadTriggerMatch, LexicalTypeaheadMenuPlugin, TypeaheadOption } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';

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
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var __className = 'EmojiNode';
class EmojiNode extends TextNode {
  static getType() {
    return 'emoji';
  }

  static clone(node) {
    return new EmojiNode(__className, node.__text, node.__key);
  }

  constructor(className, text, key) {
    super(text, key);
    __className = className;
  }

  createDOM(config) {
    var dom = document.createElement('span');
    var inner = super.createDOM(config);
    dom.className = __className;
    inner.className = 'emoji-inner';
    dom.appendChild(inner);
    return dom;
  }

  updateDOM(prevNode, dom, config) {
    var inner = dom.firstChild;

    if (inner === null) {
      return true;
    }

    super.updateDOM(prevNode, inner, config);
    return false;
  }

  static importJSON(serializedNode) {
    var node = $createEmojiNode(serializedNode.className, serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  exportJSON() {
    return _extends({}, super.exportJSON(), {
      className: this.getClassName(),
      type: 'emoji'
    });
  }

  getClassName() {
    var self = this.getLatest();
    return self.__className;
  }

}
function $isEmojiNode(node) {
  return node instanceof EmojiNode;
}
function $createEmojiNode(className, emojiText) {
  return new EmojiNode(className, emojiText).setMode('token');
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var ImageComponent = /*#__PURE__*/lazy( // @ts-ignore
() => Promise.resolve().then(function () { return ImageComponent$2; }));

function convertImageElement(domNode) {
  if (domNode instanceof HTMLImageElement) {
    var {
      alt: altText,
      src,
      width,
      height
    } = domNode;
    var node = $createImageNode({
      altText,
      height,
      src,
      width
    });
    return {
      node
    };
  }

  return null;
}

class ImageNode extends DecoratorNode {
  constructor(src, altText, maxWidth, width, height, showCaption, caption, captionsEnabled, key) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__maxWidth = maxWidth;
    this.__width = width || 'inherit';
    this.__height = height || 'inherit';
    this.__showCaption = showCaption || false;
    this.__caption = caption || createEditor();
    this.__captionsEnabled = captionsEnabled || captionsEnabled === undefined;
  }

  static getType() {
    return 'image';
  }

  static clone(node) {
    return new ImageNode(node.__src, node.__altText, node.__maxWidth, node.__width, node.__height, node.__showCaption, node.__caption, node.__captionsEnabled, node.__key);
  }

  static importJSON(serializedNode) {
    var {
      altText,
      height,
      width,
      maxWidth,
      caption,
      src,
      showCaption
    } = serializedNode;
    var node = $createImageNode({
      altText,
      height,
      maxWidth,
      showCaption,
      src,
      width
    });
    var nestedEditor = node.__caption;
    var editorState = nestedEditor.parseEditorState(caption.editorState);

    if (!editorState.isEmpty()) {
      nestedEditor.setEditorState(editorState);
    }

    return node;
  }

  exportDOM() {
    var element = document.createElement('img');
    element.setAttribute('src', this.__src);
    element.setAttribute('alt', this.__altText);
    element.setAttribute('width', this.__width.toString());
    element.setAttribute('height', this.__height.toString());
    return {
      element
    };
  }

  static importDOM() {
    return {
      img: node => ({
        conversion: convertImageElement,
        priority: 0
      })
    };
  }

  exportJSON() {
    return {
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: this.__height === 'inherit' ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: 'image',
      version: 1,
      width: this.__width === 'inherit' ? 0 : this.__width
    };
  }

  setWidthAndHeight(width, height) {
    var writable = this.getWritable();
    writable.__width = width;
    writable.__height = height;
  }

  setShowCaption(showCaption) {
    var writable = this.getWritable();
    writable.__showCaption = showCaption;
  } // View


  createDOM(config) {
    var span = document.createElement('span');
    var theme = config.theme;
    var className = theme.image;

    if (className !== undefined) {
      span.className = className;
    }

    return span;
  }

  updateDOM() {
    return false;
  }

  getSrc() {
    return this.__src;
  }

  getAltText() {
    return this.__altText;
  }

  decorate() {
    return /*#__PURE__*/createElement(Suspense, {
      fallback: null
    }, /*#__PURE__*/createElement(ImageComponent, {
      src: this.__src,
      altText: this.__altText,
      width: this.__width,
      height: this.__height,
      maxWidth: this.__maxWidth,
      nodeKey: this.getKey(),
      showCaption: this.__showCaption,
      caption: this.__caption,
      captionsEnabled: this.__captionsEnabled,
      resizable: true
    }));
  }

}
function $createImageNode(_ref) {
  var {
    altText,
    height,
    maxWidth = 500,
    captionsEnabled,
    src,
    width,
    showCaption,
    caption,
    key
  } = _ref;
  return $applyNodeReplacement(new ImageNode(src, altText, maxWidth, width, height, showCaption, caption, captionsEnabled, key));
}
function $isImageNode(node) {
  return node instanceof ImageNode;
}

class KeywordNode extends TextNode {
  static getType() {
    return 'keyword';
  }

  static clone(node) {
    return new KeywordNode(node.__text, node.__key);
  }

  static importJSON(serializedNode) {
    var node = $createKeywordNode(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  exportJSON() {
    return _extends({}, super.exportJSON(), {
      type: 'keyword',
      version: 1
    });
  }

  createDOM(config) {
    var dom = super.createDOM(config);
    dom.style.cursor = 'default';
    dom.className = 'keyword';
    return dom;
  }

  canInsertTextBefore() {
    return false;
  }

  canInsertTextAfter() {
    return false;
  }

  isTextEntity() {
    return true;
  }

}
function $createKeywordNode(keyword) {
  return new KeywordNode(keyword);
}
function $isKeywordNode(node) {
  return node instanceof KeywordNode;
}

var mentionStyle = 'background-color: rgba(24, 119, 232, 0.2)';
class MentionNode extends TextNode {
  constructor(mentionName, text, key) {
    super(text != null ? text : mentionName, key);
    this.__mention = mentionName;
  }

  static getType() {
    return 'mention';
  }

  static clone(node) {
    return new MentionNode(node.__mention, node.__text, node.__key);
  }

  static importJSON(serializedNode) {
    var node = $createMentionNode(serializedNode.mentionName);
    node.setTextContent(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  exportJSON() {
    return _extends({}, super.exportJSON(), {
      mentionName: this.__mention,
      type: 'mention',
      version: 1
    });
  }

  createDOM(config) {
    var dom = super.createDOM(config);
    dom.style.cssText = mentionStyle;
    dom.className = 'mention';
    return dom;
  }

  isTextEntity() {
    return true;
  }

}
function $createMentionNode(mentionName) {
  var mentionNode = new MentionNode(mentionName);
  mentionNode.setMode('segmented').toggleDirectionless();
  return mentionNode;
}
function $isMentionNode(node) {
  return node instanceof MentionNode;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.PollNode__container {\n  border: 1px solid #eee;\n  background-color: #fcfcfc;\n  padding: 15px;\n  border-radius: 10px;\n  max-width: 600px;\n  min-width: 400px;\n}\n.PollNode__heading {\n  margin-left: 0px;\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 15px;\n  color: #444;\n  text-align: center;\n  font-size: 18px;\n}\n.PollNode__optionContainer {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  align-items: center;\n}\n.PollNode__optionInputWrapper {\n  display: flex;\n  flex: 10px;\n  border: 1px solid rgb(61, 135, 245);\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.PollNode__optionInput {\n  display: flex;\n  flex: 1px;\n  border: 0px;\n  padding: 7px;\n  color: rgb(61, 135, 245);\n  background-color: transparent;\n  font-weight: bold;\n  outline: 0px;\n  z-index: 0;\n}\n.PollNode__optionInput::placeholder {\n  font-weight: normal;\n  color: #999;\n}\n.PollNode__optionInputVotes {\n  background-color: rgb(236, 243, 254);\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  transition: width 1s ease;\n  z-index: 0;\n}\n.PollNode__optionInputVotesCount {\n  color: rgb(61, 135, 245);\n  position: absolute;\n  right: 15px;\n  font-size: 12px;\n  top: 5px;\n}\n.PollNode__optionCheckboxWrapper {\n  position: relative;\n  display: flex;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #999;\n  margin-right: 10px;\n  border-radius: 5px;\n}\n.PollNode__optionCheckboxChecked {\n  border: 1px solid rgb(61, 135, 245);\n  background-color: rgb(61, 135, 245);\n  background-position: 3px 3px;\n  background-repeat: no-repeat;\n}\n.PollNode__optionCheckbox {\n  border: 0px;\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.PollNode__optionDelete {\n  display: flex;\n  width: 28px;\n  height: 28px;\n  margin-left: 6px;\n  border: 0px;\n  background-color: transparent;\n  background-position: 6px 6px;\n  background-repeat: no-repeat;\n  z-index: 0;\n  cursor: pointer;\n  border-radius: 5px;\n  opacity: 0.3;\n}\n.PollNode__optionDelete:hover {\n  opacity: 1;\n  background-color: #eee;\n}\n.PollNode__optionDeleteDisabled {\n  cursor: not-allowed;\n}\n.PollNode__optionDeleteDisabled:hover {\n  opacity: 0.3;\n  background-color: transparent;\n}\n.PollNode__footer {\n  display: flex;\n  justify-content: center;\n}\n";
styleInject(css_248z);

var css_248z$1 = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.Button__root {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  border: 0px;\n  background-color: #eee;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.Button__root:hover {\n  background-color: #ddd;\n}\n.Button__small {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 13px;\n}\n.Button__disabled {\n  cursor: not-allowed;\n}\n.Button__disabled:hover {\n  background-color: #eee;\n}\n";
styleInject(css_248z$1);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function joinClasses() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(Boolean).join(' ');
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function Button(_ref) {
  var {
    'data-test-id': dataTestId,
    children,
    className,
    onClick,
    disabled,
    small,
    title
  } = _ref;
  return /*#__PURE__*/createElement("button", Object.assign({
    disabled: disabled,
    className: joinClasses('Button__root', disabled && 'Button__disabled', small && 'Button__small', className),
    onClick: onClick,
    title: title,
    "aria-label": title
  }, dataTestId && {
    'data-test-id': dataTestId
  }), children);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function createUID() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

function createPollOption(text) {
  if (text === void 0) {
    text = '';
  }

  return {
    text,
    uid: createUID(),
    votes: []
  };
}

function cloneOption(option, text, votes) {
  return {
    text,
    uid: option.uid,
    votes: votes || Array.from(option.votes)
  };
}

function getTotalVotes(options) {
  return options.reduce((totalVotes, next) => {
    return totalVotes + next.votes.length;
  }, 0);
}

function PollOptionComponent(_ref) {
  var {
    option,
    index,
    options,
    totalVotes,
    withPollNode
  } = _ref;
  var {
    clientID
  } = useCollaborationContext();
  var checkboxRef = useRef(null);
  var votesArray = option.votes;
  var checkedIndex = votesArray.indexOf(clientID);
  var checked = checkedIndex !== -1;
  var votes = votesArray.length;
  var text = option.text;
  return /*#__PURE__*/createElement("div", {
    className: "PollNode__optionContainer"
  }, /*#__PURE__*/createElement("div", {
    className: joinClasses('PollNode__optionCheckboxWrapper', checked && 'PollNode__optionCheckboxChecked')
  }, /*#__PURE__*/createElement("input", {
    ref: checkboxRef,
    className: "PollNode__optionCheckbox",
    type: "checkbox",
    onChange: e => {
      withPollNode(node => {
        node.toggleVote(option, clientID);
      });
    },
    checked: checked
  })), /*#__PURE__*/createElement("div", {
    className: "PollNode__optionInputWrapper"
  }, /*#__PURE__*/createElement("div", {
    className: "PollNode__optionInputVotes",
    style: {
      width: (votes === 0 ? 0 : votes / totalVotes * 100) + "%"
    }
  }), /*#__PURE__*/createElement("span", {
    className: "PollNode__optionInputVotesCount"
  }, votes > 0 && (votes === 1 ? '1 vote' : votes + " votes")), /*#__PURE__*/createElement("input", {
    className: "PollNode__optionInput",
    type: "text",
    value: text,
    onChange: e => {
      withPollNode(node => {
        node.setOptionText(option, e.target.value);
      });
    },
    placeholder: "Option " + (index + 1)
  })), /*#__PURE__*/createElement("button", {
    disabled: options.length < 3,
    className: joinClasses('PollNode__optionDelete', options.length < 3 && 'PollNode__optionDeleteDisabled'),
    "arial-label": "Remove",
    onClick: () => {
      withPollNode(node => {
        node.deleteOption(option);
      });
    }
  }));
}

function PollComponent(_ref2) {
  var {
    question,
    options,
    nodeKey
  } = _ref2;
  var [editor] = useLexicalComposerContext();
  var totalVotes = useMemo(() => getTotalVotes(options), [options]);

  var withPollNode = cb => {
    editor.update(() => {
      var node = $getNodeByKey(nodeKey);

      if ($isPollNode(node)) {
        cb(node);
      }
    });
  };

  var addOption = () => {
    withPollNode(node => {
      node.addOption(createPollOption());
    });
  };

  return /*#__PURE__*/createElement("div", {
    className: "PollNode__container"
  }, /*#__PURE__*/createElement("h2", {
    className: "PollNode__heading"
  }, question), options.map((option, index) => {
    var key = option.uid;
    return /*#__PURE__*/createElement(PollOptionComponent, {
      key: key,
      withPollNode: withPollNode,
      option: option,
      index: index,
      options: options,
      totalVotes: totalVotes
    });
  }), /*#__PURE__*/createElement("div", {
    className: "PollNode__footer"
  }, /*#__PURE__*/createElement(Button, {
    onClick: addOption,
    small: true
  }, "Add Option")));
}

function convertPollElement(domNode) {
  var question = domNode.getAttribute('data-lexical-poll-question');
  var node = $createPollNode(question);
  return {
    node
  };
}

class PollNode extends DecoratorNode {
  constructor(question, options, key) {
    super(key);
    this.__question = question;
    this.__options = options || [createPollOption(), createPollOption()];
  }

  static getType() {
    return 'poll';
  }

  static clone(node) {
    return new PollNode(node.__question, node.__options, node.__key);
  }

  static importJSON(serializedNode) {
    var node = $createPollNode(serializedNode.question);
    serializedNode.options.forEach(node.addOption);
    return node;
  }

  exportJSON() {
    return {
      options: this.__options,
      question: this.__question,
      type: 'poll',
      version: 1
    };
  }

  addOption(option) {
    var self = this.getWritable();
    var options = Array.from(self.__options);
    options.push(option);
    self.__options = options;
  }

  deleteOption(option) {
    var self = this.getWritable();
    var options = Array.from(self.__options);
    var index = options.indexOf(option);
    options.splice(index, 1);
    self.__options = options;
  }

  setOptionText(option, text) {
    var self = this.getWritable();
    var clonedOption = cloneOption(option, text);
    var options = Array.from(self.__options);
    var index = options.indexOf(option);
    options[index] = clonedOption;
    self.__options = options;
  }

  toggleVote(option, clientID) {
    var self = this.getWritable();
    var votes = option.votes;
    var votesClone = Array.from(votes);
    var voteIndex = votes.indexOf(clientID);

    if (voteIndex === -1) {
      votesClone.push(clientID);
    } else {
      votesClone.splice(voteIndex, 1);
    }

    var clonedOption = cloneOption(option, option.text, votesClone);
    var options = Array.from(self.__options);
    var index = options.indexOf(option);
    options[index] = clonedOption;
    self.__options = options;
  }

  static importDOM() {
    return {
      span: domNode => {
        if (!domNode.hasAttribute('data-lexical-poll-question')) {
          return null;
        }

        return {
          conversion: convertPollElement,
          priority: 2
        };
      }
    };
  }

  exportDOM() {
    var element = document.createElement('span');
    element.setAttribute('data-lexical-poll-question', this.__question);
    return {
      element
    };
  }

  createDOM() {
    var elem = document.createElement('span');
    elem.style.display = 'inline-block';
    return elem;
  }

  updateDOM() {
    return false;
  }

  decorate() {
    return /*#__PURE__*/createElement(PollComponent, {
      question: this.__question,
      options: this.__options,
      nodeKey: this.__key
    });
  }

}
function $createPollNode(question) {
  return new PollNode(question);
}
function $isPollNode(node) {
  return node instanceof PollNode;
}

var css_248z$2 = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n.StickyNode__contentEditable {\n  min-height: 20px;\n  border: 0;\n  resize: none;\n  cursor: text;\n  font-size: 24px;\n  caret-color: rgb(5, 5, 5);\n  display: block;\n  position: relative;\n  tab-size: 1;\n  outline: 0;\n  padding: 10px;\n  user-select: text;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.StickyNode__placeholder {\n  font-size: 24px;\n  color: #999;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  top: 30px;\n  left: 20px;\n  width: 120px;\n  user-select: none;\n  white-space: nowrap;\n  display: inline-block;\n  pointer-events: none;\n}\n";
styleInject(css_248z$2);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */
var CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */
var useLayoutEffectImpl = CAN_USE_DOM ? useLayoutEffect : useEffect;

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var url = /*#__PURE__*/new URL(window.location.href);
var params = /*#__PURE__*/new URLSearchParams(url.search);
var WEBSOCKET_ENDPOINT = 'ws://localhost:1234';
var WEBSOCKET_SLUG = 'playground';
var WEBSOCKET_ID = /*#__PURE__*/params.get('collabId') || '0'; // parent dom -> child doc

function createWebsocketProvider(id, yjsDocMap) {
  var doc = yjsDocMap.get(id);

  if (doc === undefined) {
    doc = new Doc();
    yjsDocMap.set(id, doc);
  } else {
    doc.load();
  } // @ts-ignore


  return new WebsocketProvider(WEBSOCKET_ENDPOINT, WEBSOCKET_SLUG + '/' + WEBSOCKET_ID + '/' + id, doc, {
    connect: false
  });
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var Context = /*#__PURE__*/createContext({
  historyState: {
    current: null,
    redoStack: [],
    undoStack: []
  }
});
var useSharedHistoryContext = () => {
  return useContext(Context);
};

var css_248z$3 = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.StickyEditorTheme__paragraph {\n  margin: 0;\n  position: 'relative';\n}\n";
styleInject(css_248z$3);

var css_248z$4 = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.PlaygroundEditorTheme__ltr {\n  text-align: left;\n}\n.PlaygroundEditorTheme__rtl {\n  text-align: right;\n}\n.PlaygroundEditorTheme__paragraph {\n  margin: 0;\n  margin-bottom: 8px;\n  position: relative;\n}\n.PlaygroundEditorTheme__paragraph:last-child {\n  margin-bottom: 0;\n}\n.PlaygroundEditorTheme__quote {\n  margin: 0;\n  margin-left: 20px;\n  margin-bottom: 10px;\n  font-size: 15px;\n  color: rgb(101, 103, 107);\n  border-left-color: rgb(206, 208, 212);\n  border-left-width: 4px;\n  border-left-style: solid;\n  padding-left: 16px;\n}\n.PlaygroundEditorTheme__h1 {\n  font-size: 24px;\n  color: rgb(5, 5, 5);\n  font-weight: 400;\n  margin: 0;\n  margin-bottom: 12px;\n  padding: 0;\n}\n.PlaygroundEditorTheme__h2 {\n  font-size: 15px;\n  color: rgb(101, 103, 107);\n  font-weight: 700;\n  margin: 0;\n  margin-top: 10px;\n  padding: 0;\n  text-transform: uppercase;\n}\n.PlaygroundEditorTheme__h3 {\n  font-size: 12px;\n  margin: 0;\n  margin-top: 10px;\n  padding: 0;\n  text-transform: uppercase;\n}\n.PlaygroundEditorTheme__textBold {\n  font-weight: bold;\n}\n.PlaygroundEditorTheme__textItalic {\n  font-style: italic;\n}\n.PlaygroundEditorTheme__textUnderline {\n  text-decoration: underline;\n}\n.PlaygroundEditorTheme__textStrikethrough {\n  text-decoration: line-through;\n}\n.PlaygroundEditorTheme__textUnderlineStrikethrough {\n  text-decoration: underline line-through;\n}\n.PlaygroundEditorTheme__textSubscript {\n  font-size: 0.8em;\n  vertical-align: sub !important;\n}\n.PlaygroundEditorTheme__textSuperscript {\n  font-size: 0.8em;\n  vertical-align: super;\n}\n.PlaygroundEditorTheme__textCode {\n  background-color: rgb(240, 242, 245);\n  padding: 1px 0.25rem;\n  font-family: Menlo, Consolas, Monaco, monospace;\n  font-size: 94%;\n}\n.PlaygroundEditorTheme__hashtag {\n  background-color: rgba(88, 144, 255, 0.15);\n  border-bottom: 1px solid rgba(88, 144, 255, 0.3);\n}\n.PlaygroundEditorTheme__link, .PlaygroundEditorTheme__link > span {\n  color: rgb(33, 111, 219);\n  text-decoration: none;\n}\n\n.PlaygroundEditorTheme__link:hover, .PlaygroundEditorTheme__link > span:hover {\n  text-decoration: underline;\n}\n.PlaygroundEditorTheme__code {\n  background-color: rgb(240, 242, 245);\n  font-family: Menlo, Consolas, Monaco, monospace;\n  display: block;\n  padding: 8px 8px 8px 52px;\n  line-height: 1.53;\n  font-size: 13px;\n  margin: 0;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  tab-size: 2;\n  /* white-space: pre; */\n  overflow-x: auto;\n  position: relative;\n}\n.PlaygroundEditorTheme__code:before {\n  content: attr(data-gutter);\n  position: absolute;\n  background-color: #eee;\n  left: 0;\n  top: 0;\n  border-right: 1px solid #ccc;\n  padding: 8px;\n  color: #777;\n  white-space: pre-wrap;\n  text-align: right;\n  min-width: 25px;\n}\n.PlaygroundEditorTheme__code:after {\n  content: attr(data-highlight-language);\n  top: 0;\n  right: 3px;\n  padding: 3px;\n  font-size: 10px;\n  text-transform: uppercase;\n  position: absolute;\n  color: rgba(0, 0, 0, 0.5);\n}\n.PlaygroundEditorTheme__table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  max-width: 100%;\n  overflow-y: scroll;\n  table-layout: fixed;\n  width: 100%;\n}\n.PlaygroundEditorTheme__tableCell {\n  border: 1px solid black;\n  padding: 6px 8px;\n  min-width: 75px;\n  vertical-align: top;\n  text-align: start;\n}\n.PlaygroundEditorTheme__tableCellHeader {\n  background-color: #f2f3f5;\n  text-align: start;\n}\n.PlaygroundEditorTheme__characterLimit {\n  display: inline;\n  background-color: #ffbbbb !important;\n}\n.PlaygroundEditorTheme__ol1 {\n  padding: 0;\n  margin: 0;\n  margin-left: 16px;\n}\n.PlaygroundEditorTheme__ol2 {\n  padding: 0;\n  margin: 0;\n  margin-left: 16px;\n  list-style-type: upper-alpha;\n}\n.PlaygroundEditorTheme__ol3 {\n  padding: 0;\n  margin: 0;\n  margin-left: 16px;\n  list-style-type: lower-alpha;\n}\n.PlaygroundEditorTheme__ol4 {\n  padding: 0;\n  margin: 0;\n  margin-left: 16px;\n  list-style-type: upper-roman;\n}\n.PlaygroundEditorTheme__ol5 {\n  padding: 0;\n  margin: 0;\n  margin-left: 16px;\n  list-style-type: lower-roman;\n}\n.PlaygroundEditorTheme__ul {\n  padding: 0;\n  margin: 0;\n  margin-left: 16px;\n}\n.PlaygroundEditorTheme__listItem {\n  margin: 8px 32px;\n}\n.PlaygroundEditorTheme__listItemChecked,\n.PlaygroundEditorTheme__listItemUnchecked {\n  position: relative;\n  margin-left: 8px;\n  margin-right: 8px;\n  padding-left: 24px;\n  padding-right: 24px;\n  list-style-type: none;\n  outline: none;\n}\n.PlaygroundEditorTheme__listItemChecked {\n  text-decoration: line-through;\n}\n.PlaygroundEditorTheme__listItemUnchecked:before,\n.PlaygroundEditorTheme__listItemChecked:before {\n  content: '';\n  width: 16px;\n  height: 16px;\n  top: 2px;\n  left: 0;\n  cursor: pointer;\n  display: block;\n  background-size: cover;\n  position: absolute;\n}\n.PlaygroundEditorTheme__listItemUnchecked[dir='rtl']:before,\n.PlaygroundEditorTheme__listItemChecked[dir='rtl']:before {\n  left: auto;\n  right: 0;\n}\n.PlaygroundEditorTheme__listItemUnchecked:focus:before,\n.PlaygroundEditorTheme__listItemChecked:focus:before {\n  box-shadow: 0 0 0 2px #a6cdfe;\n  border-radius: 2px;\n}\n.PlaygroundEditorTheme__listItemUnchecked:before {\n  background-image: url(/src/images/icons/square.svg);\n}\n.PlaygroundEditorTheme__listItemChecked:before {\n  background-image: url(/src/images/icons/square-check.svg);\n}\n.PlaygroundEditorTheme__nestedListItem {\n  list-style-type: none;\n}\n.PlaygroundEditorTheme__nestedListItem:before,\n.PlaygroundEditorTheme__nestedListItem:after {\n  display: none;\n}\n.PlaygroundEditorTheme__tokenComment {\n  color: slategray;\n}\n.PlaygroundEditorTheme__tokenPunctuation {\n  color: #999;\n}\n.PlaygroundEditorTheme__tokenProperty {\n  color: #905;\n}\n.PlaygroundEditorTheme__tokenSelector {\n  color: #690;\n}\n.PlaygroundEditorTheme__tokenOperator {\n  color: #9a6e3a;\n}\n.PlaygroundEditorTheme__tokenAttr {\n  color: #07a;\n}\n.PlaygroundEditorTheme__tokenVariable {\n  color: #e90;\n}\n.PlaygroundEditorTheme__tokenFunction {\n  color: #dd4a68;\n}\n\n.PlaygroundEditorTheme__mark {\n  background: rgba(255, 212, 0, 0.14);\n  border-bottom: 2px solid rgba(255, 212, 0, 0.3);\n  padding-bottom: 2px;\n}\n\n.PlaygroundEditorTheme__markOverlap {\n  background: rgba(255, 212, 0, 0.3);\n  border-bottom: 2px solid rgba(255, 212, 0, 0.7);\n}\n\n.PlaygroundEditorTheme__mark.selected {\n  background: rgba(255, 212, 0, 0.5);\n  border-bottom: 2px solid rgba(255, 212, 0, 1);\n}\n\n.PlaygroundEditorTheme__markOverlap.selected {\n  background: rgba(255, 212, 0, 0.7);\n  border-bottom: 2px solid rgba(255, 212, 0, 0.7);\n}\n";
styleInject(css_248z$4);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var theme = {
  characterLimit: 'PlaygroundEditorTheme__characterLimit',
  code: 'PlaygroundEditorTheme__code',
  codeHighlight: {
    atrule: 'PlaygroundEditorTheme__tokenAttr',
    attr: 'PlaygroundEditorTheme__tokenAttr',
    boolean: 'PlaygroundEditorTheme__tokenProperty',
    builtin: 'PlaygroundEditorTheme__tokenSelector',
    cdata: 'PlaygroundEditorTheme__tokenComment',
    char: 'PlaygroundEditorTheme__tokenSelector',
    class: 'PlaygroundEditorTheme__tokenFunction',
    'class-name': 'PlaygroundEditorTheme__tokenFunction',
    comment: 'PlaygroundEditorTheme__tokenComment',
    constant: 'PlaygroundEditorTheme__tokenProperty',
    deleted: 'PlaygroundEditorTheme__tokenProperty',
    doctype: 'PlaygroundEditorTheme__tokenComment',
    entity: 'PlaygroundEditorTheme__tokenOperator',
    function: 'PlaygroundEditorTheme__tokenFunction',
    important: 'PlaygroundEditorTheme__tokenVariable',
    inserted: 'PlaygroundEditorTheme__tokenSelector',
    keyword: 'PlaygroundEditorTheme__tokenAttr',
    namespace: 'PlaygroundEditorTheme__tokenVariable',
    number: 'PlaygroundEditorTheme__tokenProperty',
    operator: 'PlaygroundEditorTheme__tokenOperator',
    prolog: 'PlaygroundEditorTheme__tokenComment',
    property: 'PlaygroundEditorTheme__tokenProperty',
    punctuation: 'PlaygroundEditorTheme__tokenPunctuation',
    regex: 'PlaygroundEditorTheme__tokenVariable',
    selector: 'PlaygroundEditorTheme__tokenSelector',
    string: 'PlaygroundEditorTheme__tokenSelector',
    symbol: 'PlaygroundEditorTheme__tokenProperty',
    tag: 'PlaygroundEditorTheme__tokenProperty',
    url: 'PlaygroundEditorTheme__tokenOperator',
    variable: 'PlaygroundEditorTheme__tokenVariable'
  },
  hashtag: 'PlaygroundEditorTheme__hashtag',
  heading: {
    h1: 'PlaygroundEditorTheme__h1',
    h2: 'PlaygroundEditorTheme__h2',
    h3: 'PlaygroundEditorTheme__h3',
    h4: 'PlaygroundEditorTheme__h4',
    h5: 'PlaygroundEditorTheme__h5'
  },
  image: 'editor-image',
  link: 'PlaygroundEditorTheme__link',
  list: {
    listitem: 'PlaygroundEditorTheme__listItem',
    listitemChecked: 'PlaygroundEditorTheme__listItemChecked',
    listitemUnchecked: 'PlaygroundEditorTheme__listItemUnchecked',
    nested: {
      listitem: 'PlaygroundEditorTheme__nestedListItem'
    },
    olDepth: ['PlaygroundEditorTheme__ol1', 'PlaygroundEditorTheme__ol2', 'PlaygroundEditorTheme__ol3', 'PlaygroundEditorTheme__ol4', 'PlaygroundEditorTheme__ol5'],
    ul: 'PlaygroundEditorTheme__ul'
  },
  ltr: 'PlaygroundEditorTheme__ltr',
  mark: 'PlaygroundEditorTheme__mark',
  markOverlap: 'PlaygroundEditorTheme__markOverlap',
  paragraph: 'PlaygroundEditorTheme__paragraph',
  quote: 'PlaygroundEditorTheme__quote',
  rtl: 'PlaygroundEditorTheme__rtl',
  table: 'PlaygroundEditorTheme__table',
  tableCell: 'PlaygroundEditorTheme__tableCell',
  tableCellHeader: 'PlaygroundEditorTheme__tableCellHeader',
  text: {
    bold: 'PlaygroundEditorTheme__textBold',
    code: 'PlaygroundEditorTheme__textCode',
    italic: 'PlaygroundEditorTheme__textItalic',
    strikethrough: 'PlaygroundEditorTheme__textStrikethrough',
    subscript: 'PlaygroundEditorTheme__textSubscript',
    superscript: 'PlaygroundEditorTheme__textSuperscript',
    underline: 'PlaygroundEditorTheme__textUnderline',
    underlineStrikethrough: 'PlaygroundEditorTheme__textUnderlineStrikethrough'
  }
};

var theme$1 = /*#__PURE__*/_extends({}, theme, {
  paragraph: 'StickyEditorTheme__paragraph'
});

var css_248z$5 = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.ContentEditable__root {\n  min-height: 150px;\n  border: 0;\n  resize: none;\n  cursor: text;\n  font-size: 15px;\n  display: block;\n  position: relative;\n  tab-size: 1;\n  outline: 0;\n  padding: 10px;\n  overflow: auto;\n  resize: vertical;\n}\n";
styleInject(css_248z$5);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function LexicalContentEditable(_ref) {
  var {
    className
  } = _ref;
  return /*#__PURE__*/createElement(ContentEditable, {
    className: className || 'ContentEditable__root'
  });
}

var css_248z$6 = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.Placeholder__root {\n  font-size: 15px;\n  color: #999;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  top: 10px;\n  left: 10px;\n  user-select: none;\n  white-space: nowrap;\n  display: inline-block;\n  pointer-events: none;\n}\n";
styleInject(css_248z$6);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function Placeholder(_ref) {
  var {
    children,
    className
  } = _ref;
  return /*#__PURE__*/createElement("div", {
    className: className || 'Placeholder__root'
  }, children);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function positionSticky(stickyElem, positioning) {
  var style = stickyElem.style;
  var rootElementRect = positioning.rootElementRect;
  var rectLeft = rootElementRect !== null ? rootElementRect.left : 0;
  var rectTop = rootElementRect !== null ? rootElementRect.top : 0;
  style.top = rectTop + positioning.y + 'px';
  style.left = rectLeft + positioning.x + 'px';
}

function StickyComponent(_ref) {
  var {
    x,
    y,
    nodeKey,
    color,
    caption
  } = _ref;
  var [editor] = useLexicalComposerContext();
  var stickyContainerRef = useRef(null);
  var positioningRef = useRef({
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  var {
    yjsDocMap
  } = useCollaborationContext();
  var isCollab = yjsDocMap.get('main') !== undefined;
  useEffect(() => {
    var position = positioningRef.current;
    position.x = x;
    position.y = y;
    var stickyContainer = stickyContainerRef.current;

    if (stickyContainer !== null) {
      positionSticky(stickyContainer, position);
    }
  }, [x, y]);
  useLayoutEffectImpl(() => {
    var position = positioningRef.current;
    var resizeObserver = new ResizeObserver(entries => {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var {
          target
        } = entry;
        position.rootElementRect = target.getBoundingClientRect();
        var stickyContainer = stickyContainerRef.current;

        if (stickyContainer !== null) {
          positionSticky(stickyContainer, position);
        }
      }
    });
    var removeRootListener = editor.registerRootListener((nextRootElem, prevRootElem) => {
      if (prevRootElem !== null) {
        resizeObserver.unobserve(prevRootElem);
      }

      if (nextRootElem !== null) {
        resizeObserver.observe(nextRootElem);
      }
    });

    var handleWindowResize = () => {
      var rootElement = editor.getRootElement();
      var stickyContainer = stickyContainerRef.current;

      if (rootElement !== null && stickyContainer !== null) {
        position.rootElementRect = rootElement.getBoundingClientRect();
        positionSticky(stickyContainer, position);
      }
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      removeRootListener();
    };
  }, [editor]);
  useEffect(() => {
    var stickyContainer = stickyContainerRef.current;

    if (stickyContainer !== null) {
      // Delay adding transition so we don't trigger the
      // transition on load of the sticky.
      setTimeout(() => {
        stickyContainer.style.setProperty('transition', 'top 0.3s ease 0s, left 0.3s ease 0s');
      }, 500);
    }
  }, []);

  var handlePointerMove = event => {
    var stickyContainer = stickyContainerRef.current;
    var positioning = positioningRef.current;
    var rootElementRect = positioning.rootElementRect;

    if (stickyContainer !== null && positioning.isDragging && rootElementRect !== null) {
      positioning.x = event.pageX - positioning.offsetX - rootElementRect.left;
      positioning.y = event.pageY - positioning.offsetY - rootElementRect.top;
      positionSticky(stickyContainer, positioning);
    }
  };

  var handlePointerUp = event => {
    var stickyContainer = stickyContainerRef.current;
    var positioning = positioningRef.current;

    if (stickyContainer !== null) {
      positioning.isDragging = false;
      stickyContainer.classList.remove('dragging');
      editor.update(() => {
        var node = $getNodeByKey(nodeKey);

        if ($isStickyNode(node)) {
          node.setPosition(positioning.x, positioning.y);
        }
      });
    }

    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
  };

  var handleDelete = () => {
    editor.update(() => {
      var node = $getNodeByKey(nodeKey);

      if ($isStickyNode(node)) {
        node.remove();
      }
    });
  };

  var handleColorChange = () => {
    editor.update(() => {
      var node = $getNodeByKey(nodeKey);

      if ($isStickyNode(node)) {
        node.toggleColor();
      }
    });
  };

  var {
    historyState
  } = useSharedHistoryContext();
  return /*#__PURE__*/createElement("div", {
    ref: stickyContainerRef,
    className: "sticky-note-container"
  }, /*#__PURE__*/createElement("div", {
    className: "sticky-note " + color,
    onPointerDown: event => {
      var stickyContainer = stickyContainerRef.current;

      if (stickyContainer == null || event.button === 2 || event.target !== stickyContainer.firstChild) {
        // Right click or click on editor should not work
        return;
      }

      var stickContainer = stickyContainer;
      var positioning = positioningRef.current;

      if (stickContainer !== null) {
        var {
          top,
          left
        } = stickContainer.getBoundingClientRect();
        positioning.offsetX = event.clientX - left;
        positioning.offsetY = event.clientY - top;
        positioning.isDragging = true;
        stickContainer.classList.add('dragging');
        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
        event.preventDefault();
      }
    }
  }, /*#__PURE__*/createElement("button", {
    onClick: handleDelete,
    className: "delete",
    "aria-label": "Delete sticky note",
    title: "Delete"
  }, "X"), /*#__PURE__*/createElement("button", {
    onClick: handleColorChange,
    className: "color",
    "aria-label": "Change sticky note color",
    title: "Color"
  }, /*#__PURE__*/createElement("i", {
    className: "bucket"
  })), /*#__PURE__*/createElement(LexicalNestedComposer, {
    initialEditor: caption,
    initialTheme: theme$1
  }, isCollab ? /*#__PURE__*/createElement(CollaborationPlugin, {
    id: caption.getKey(),
    providerFactory: createWebsocketProvider,
    shouldBootstrap: true
  }) : /*#__PURE__*/createElement(HistoryPlugin, {
    externalHistoryState: historyState
  }), /*#__PURE__*/createElement(PlainTextPlugin, {
    contentEditable: /*#__PURE__*/createElement(LexicalContentEditable, {
      className: "StickyNode__contentEditable"
    }),
    placeholder: /*#__PURE__*/createElement(Placeholder, {
      className: "StickyNode__placeholder"
    }, "What's up?"),
    ErrorBoundary: LexicalErrorBoundary
  }))));
}

class StickyNode extends DecoratorNode {
  constructor(x, y, color, caption, key) {
    super(key);
    this.__x = x;
    this.__y = y;
    this.__caption = caption || createEditor();
    this.__color = color;
  }

  static getType() {
    return 'sticky';
  }

  static clone(node) {
    return new StickyNode(node.__x, node.__y, node.__color, node.__caption, node.__key);
  }

  static importJSON(serializedNode) {
    return new StickyNode(serializedNode.xOffset, serializedNode.yOffset, serializedNode.color, serializedNode.caption);
  }

  exportJSON() {
    return {
      caption: this.__caption,
      color: this.__color,
      type: 'sticky',
      version: 1,
      xOffset: this.__x,
      yOffset: this.__y
    };
  }

  createDOM(config) {
    var div = document.createElement('div');
    div.style.display = 'contents';
    return div;
  }

  updateDOM() {
    return false;
  }

  setPosition(x, y) {
    var writable = this.getWritable();
    writable.__x = x;
    writable.__y = y;
    $setSelection(null);
  }

  toggleColor() {
    var writable = this.getWritable();
    writable.__color = writable.__color === 'pink' ? 'yellow' : 'pink';
  }

  decorate(editor) {
    return /*#__PURE__*/createPortal( /*#__PURE__*/createElement(StickyComponent, {
      color: this.__color,
      x: this.__x,
      y: this.__y,
      nodeKey: this.getKey(),
      caption: this.__caption
    }), document.body);
  }

  isIsolated() {
    return true;
  }

}
function $isStickyNode(node) {
  return node instanceof StickyNode;
}
function $createStickyNode(xOffset, yOffset) {
  return new StickyNode(xOffset, yOffset, 'yellow');
}

class TypeaheadNode extends TextNode {
  static clone(node) {
    return new TypeaheadNode(node.__text, node.__key);
  }

  static getType() {
    return 'typeahead';
  }

  static importJSON(serializedNode) {
    var node = $createTypeaheadNode(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  exportJSON() {
    return _extends({}, super.exportJSON(), {
      type: 'typeahead',
      version: 1
    });
  }

  createDOM(config) {
    var dom = super.createDOM(config);
    dom.style.cssText = 'color: #ccc;';
    return dom;
  }

}
function $createTypeaheadNode(text) {
  return new TypeaheadNode(text).setMode('token');
}

function YouTubeComponent(_ref) {
  var {
    className,
    format,
    nodeKey,
    videoID
  } = _ref;
  return /*#__PURE__*/createElement(BlockWithAlignableContents, {
    className: className,
    format: format,
    nodeKey: nodeKey
  }, /*#__PURE__*/createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/" + videoID,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: "YouTube video"
  }));
}

class YouTubeNode extends DecoratorBlockNode {
  constructor(id, format, key) {
    super(format, key);
    this.__id = id;
  }

  static getType() {
    return 'youtube';
  }

  static clone(node) {
    return new YouTubeNode(node.__id, node.__format, node.__key);
  }

  static importJSON(serializedNode) {
    var node = $createYouTubeNode(serializedNode.videoID);
    node.setFormat(serializedNode.format);
    return node;
  }

  exportJSON() {
    return _extends({}, super.exportJSON(), {
      type: 'youtube',
      version: 1,
      videoID: this.__id
    });
  }

  updateDOM() {
    return false;
  }

  getId() {
    return this.__id;
  }

  decorate(_editor, config) {
    var embedBlockTheme = config.theme.embedBlock || {};
    var className = {
      base: embedBlockTheme.base || '',
      focus: embedBlockTheme.focus || ''
    };
    return /*#__PURE__*/createElement(YouTubeComponent, {
      className: className,
      format: this.__format,
      nodeKey: this.getKey(),
      videoID: this.__id
    });
  }

  isTopLevel() {
    return true;
  }

}
function $createYouTubeNode(videoID) {
  return new YouTubeNode(videoID);
}
function $isYouTubeNode(node) {
  return node instanceof YouTubeNode;
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var PlaygroundNodes = [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, TableNode, TableCellNode, TableRowNode, HashtagNode, CodeHighlightNode, AutoLinkNode, LinkNode, OverflowNode, PollNode, StickyNode, ImageNode, MentionNode, EmojiNode, TypeaheadNode, KeywordNode, HorizontalRuleNode, YouTubeNode, MarkNode];

var css_248z$7 = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n@import 'https://fonts.googleapis.com/css?family=Reenie+Beanie';\n\n.verbum-editor-shell {\n  margin: 20px auto;\n  border-radius: 2px;\n  max-width: 1000px;\n  color: #000;\n  position: relative;\n  line-height: 20px;\n  font-weight: 400;\n}\n\n.verbum-editor-shell .verbum-editor-container {\n  background: #fff;\n  position: relative;\n  cursor: text;\n  display: block;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.verbum-editor-shell .verbum-editor-container.tree-view {\n  border-radius: 0;\n}\n\n.verbum-editor-shell .verbum-editor-container.plain-text {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.verbum-test-recorder-output {\n  margin: 20px auto 20px auto;\n  width: 100%;\n}\n\npre {\n  line-height: 1.1;\n  background: #222;\n  color: #fff;\n  margin: 0;\n  padding: 10px;\n  font-size: 12px;\n  overflow: auto;\n  white-space: pre-wrap;\n  max-height: 180px;\n}\n\n.verbum-tree-view-output {\n  display: block;\n  background: #222;\n  color: #fff;\n  padding: 0;\n  font-size: 12px;\n  white-space: pre-wrap;\n  margin: 1px auto 10px auto;\n  max-height: 250px;\n  position: relative;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  overflow: hidden;\n}\n\npre::-webkit-scrollbar {\n  background: transparent;\n  width: 10px;\n}\n\npre::-webkit-scrollbar-thumb {\n  background: #999;\n}\n\n.verbum-editor-dev-button {\n  position: relative;\n  display: block;\n  width: 40px;\n  height: 40px;\n  font-size: 12px;\n  border-radius: 20px;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);\n  background-color: #444;\n}\n\n.verbum-editor-dev-button::after {\n  content: '';\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  left: 10px;\n  display: block;\n  background-size: contain;\n  filter: invert(1);\n}\n\n.verbum-editor-dev-button:hover {\n  background-color: #555;\n}\n\n.verbum-editor-dev-button.active {\n  background-color: rgb(233, 35, 35);\n}\n\n.verbum-test-recorder-toolbar {\n  display: flex;\n}\n\n.verbum-test-recorder-button {\n  position: relative;\n  display: block;\n  width: 32px;\n  height: 32px;\n  font-size: 10px;\n  padding: 6px 6px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);\n  background-color: #222;\n  transition: box-shadow 50ms ease-out;\n}\n\n.verbum-test-recorder-button:active {\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);\n}\n\n.verbum-test-recorder-button + .verbum-test-recorder-button {\n  margin-left: 4px;\n}\n\n.verbum-test-recorder-button::after {\n  content: '';\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  bottom: 8px;\n  left: 8px;\n  display: block;\n  background-size: contain;\n  filter: invert(1);\n}\n\n#verbum-options-button {\n  position: fixed;\n  left: 20px;\n  bottom: 20px;\n}\n\n#verbum-test-recorder-button {\n  position: fixed;\n  left: 70px;\n  bottom: 20px;\n}\n\n#verbum-options-button::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-gear%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z%22%2F%3E  %3Cpath d%3D%22M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-test-recorder-button::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-journal-code%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z%22%2F%3E  %3Cpath d%3D%22M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z%22%2F%3E  %3Cpath d%3D%22M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-test-recorder-button-snapshot {\n  margin-right: auto;\n}\n\n#verbum-test-recorder-button-snapshot::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-camera%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z%22%2F%3E  %3Cpath d%3D%22M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-test-recorder-button-copy::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-clipboard%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z%22%2F%3E  %3Cpath d%3D%22M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-test-recorder-button-download::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-download%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z%22%2F%3E  %3Cpath d%3D%22M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-link-editor {\n  position: absolute;\n  z-index: 10;\n  top: -10000px;\n  left: -10000px;\n  margin-top: -6px;\n  max-width: 400px;\n  width: 100%;\n  opacity: 0;\n  background-color: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  transition: opacity 0.5s;\n}\n\n.verbum-link-editor .button {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  padding: 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n\n.verbum-link-editor .button.hovered {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  background-color: #eee;\n}\n\n.verbum-link-editor .button i,\n.verbum-actions i {\n  background-size: contain;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  vertical-align: -0.25em;\n}\n\ni.verbum-palette {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-palette%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z%22%2F%3E  %3Cpath d%3D%22M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-bucket {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-paint-bucket%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-bold {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-type-bold%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-italic {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-type-italic%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-code {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-code%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-underline {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-type-underline%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-strikethrough {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-type-strikethrough%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-subscript {\n  background-image: url(\"data:image/svg+xml,%3Csvg width%3D%2216%22 height%3D%2216%22 viewBox%3D%220 0 16 16%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d%3D%22M11.3537 14.5V13.8352L12.907 12.397C13.0391 12.2692 13.1499 12.1541 13.2393 12.0518C13.3303 11.9496 13.3991 11.8494 13.446 11.7514C13.4929 11.652 13.5163 11.5447 13.5163 11.4297C13.5163 11.3018 13.4872 11.1918 13.429 11.0994C13.3707 11.0057 13.2912 10.9339 13.1903 10.8842C13.0895 10.8331 12.9751 10.8075 12.8473 10.8075C12.7138 10.8075 12.5973 10.8345 12.4979 10.8885C12.3984 10.9425 12.3217 11.0199 12.2678 11.1207C12.2138 11.2216 12.1868 11.3416 12.1868 11.4808H11.3111C11.3111 11.1953 11.3757 10.9474 11.505 10.7372C11.6342 10.527 11.8153 10.3643 12.0483 10.2493C12.2813 10.1342 12.5497 10.0767 12.8537 10.0767C13.1662 10.0767 13.4382 10.1321 13.6697 10.2429C13.9027 10.3523 14.0838 10.5043 14.2131 10.6989C14.3423 10.8935 14.407 11.1165 14.407 11.3679C14.407 11.5327 14.3743 11.6953 14.3089 11.8558C14.245 12.0163 14.1307 12.1946 13.9659 12.3906C13.8011 12.5852 13.5689 12.8189 13.2692 13.0916L12.6321 13.7159V13.7457H14.4645V14.5H11.3537Z%22 fill%3D%22currentColor%22%2F%3E%3Cpath d%3D%22M5.03924 4.27273L6.96112 7.46875H7.0293L8.95969 4.27273H10.7623L8.07333 8.63636L10.8049 13H8.97248L7.0293 9.82528H6.96112L5.01793 13H3.19407L5.95117 8.63636L3.22816 4.27273H5.03924Z%22 fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-superscript {\n  background-image: url(\"data:image/svg+xml,%3Csvg width%3D%2216%22 height%3D%2216%22 viewBox%3D%220 0 16 16%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d%3D%22M11.3537 6V5.33523L12.907 3.89702C13.0391 3.76918 13.1499 3.65412 13.2393 3.55185C13.3303 3.44957 13.3991 3.34943 13.446 3.25142C13.4929 3.15199 13.5163 3.04474 13.5163 2.92969C13.5163 2.80185 13.4872 2.69176 13.429 2.59943C13.3707 2.50568 13.2912 2.43395 13.1903 2.38423C13.0895 2.3331 12.9751 2.30753 12.8473 2.30753C12.7138 2.30753 12.5973 2.33452 12.4979 2.38849C12.3984 2.44247 12.3217 2.51989 12.2678 2.62074C12.2138 2.72159 12.1868 2.84162 12.1868 2.98082H11.3111C11.3111 2.69531 11.3757 2.44744 11.505 2.23722C11.6342 2.02699 11.8153 1.86435 12.0483 1.74929C12.2813 1.63423 12.5497 1.5767 12.8537 1.5767C13.1662 1.5767 13.4382 1.6321 13.6697 1.7429C13.9027 1.85227 14.0838 2.00426 14.2131 2.19886C14.3423 2.39347 14.407 2.61648 14.407 2.8679C14.407 3.03267 14.3743 3.19531 14.3089 3.35582C14.245 3.51634 14.1307 3.6946 13.9659 3.89062C13.8011 4.08523 13.5689 4.31889 13.2692 4.59162L12.6321 5.21591V5.24574H14.4645V6H11.3537Z%22 fill%3D%22currentColor%22%2F%3E%3Cpath d%3D%22M5.03924 4.27273L6.96112 7.46875H7.0293L8.95969 4.27273H10.7623L8.07333 8.63636L10.8049 13H8.97248L7.0293 9.82528H6.96112L5.01793 13H3.19407L5.95117 8.63636L3.22816 4.27273H5.03924Z%22 fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-link {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-link%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z%22%2F%3E  %3Cpath d%3D%22M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-horizontal-rule {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-file-break%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM12 0H4a2 2 0 0 0-2 2v7h1V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h1V2a2 2 0 0 0-2-2zm2 12h-1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-plus {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-plus%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-dropdown-more {\n  background-image: url(\"data:image/svg+xml,%3Csvg width%3D%2216%22 height%3D%2216%22 viewBox%3D%220 0 16 16%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d%3D%22M4.64844 4.47461L1.82422 12.25H0.669922L3.92188 3.71875H4.66602L4.64844 4.47461ZM7.01562 12.25L4.18555 4.47461L4.16797 3.71875H4.91211L8.17578 12.25H7.01562ZM6.86914 9.0918V10.0176H2.07617V9.0918H6.86914ZM12.8926 11.166V7.90234C12.8926 7.65234 12.8418 7.43555 12.7402 7.25195C12.6426 7.06445 12.4941 6.91992 12.2949 6.81836C12.0957 6.7168 11.8496 6.66602 11.5566 6.66602C11.2832 6.66602 11.043 6.71289 10.8359 6.80664C10.6328 6.90039 10.4727 7.02344 10.3555 7.17578C10.2422 7.32812 10.1855 7.49219 10.1855 7.66797H9.10156C9.10156 7.44141 9.16016 7.2168 9.27734 6.99414C9.39453 6.77148 9.5625 6.57031 9.78125 6.39062C10.0039 6.20703 10.2695 6.0625 10.5781 5.95703C10.8906 5.84766 11.2383 5.79297 11.6211 5.79297C12.082 5.79297 12.4883 5.87109 12.8398 6.02734C13.1953 6.18359 13.4727 6.41992 13.6719 6.73633C13.875 7.04883 13.9766 7.44141 13.9766 7.91406V10.8672C13.9766 11.0781 13.9941 11.3027 14.0293 11.541C14.0684 11.7793 14.125 11.9844 14.1992 12.1562V12.25H13.0684C13.0137 12.125 12.9707 11.959 12.9395 11.752C12.9082 11.541 12.8926 11.3457 12.8926 11.166ZM13.0801 8.40625L13.0918 9.16797H11.9961C11.6875 9.16797 11.4121 9.19336 11.1699 9.24414C10.9277 9.29102 10.7246 9.36328 10.5605 9.46094C10.3965 9.55859 10.2715 9.68164 10.1855 9.83008C10.0996 9.97461 10.0566 10.1445 10.0566 10.3398C10.0566 10.5391 10.1016 10.7207 10.1914 10.8848C10.2812 11.0488 10.416 11.1797 10.5957 11.2773C10.7793 11.3711 11.0039 11.418 11.2695 11.418C11.6016 11.418 11.8945 11.3477 12.1484 11.207C12.4023 11.0664 12.6035 10.8945 12.752 10.6914C12.9043 10.4883 12.9863 10.291 12.998 10.0996L13.4609 10.6211C13.4336 10.7852 13.3594 10.9668 13.2383 11.166C13.1172 11.3652 12.9551 11.5566 12.752 11.7402C12.5527 11.9199 12.3145 12.0703 12.0371 12.1914C11.7637 12.3086 11.4551 12.3672 11.1113 12.3672C10.6816 12.3672 10.3047 12.2832 9.98047 12.1152C9.66016 11.9473 9.41016 11.7227 9.23047 11.4414C9.05469 11.1562 8.9668 10.8379 8.9668 10.4863C8.9668 10.1465 9.0332 9.84766 9.16602 9.58984C9.29883 9.32812 9.49023 9.11133 9.74023 8.93945C9.99023 8.76367 10.291 8.63086 10.6426 8.54102C10.9941 8.45117 11.3867 8.40625 11.8203 8.40625H13.0801Z%22 fill%3D%22black%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-font-color {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2214%22 height%3D%2214%22 viewBox%3D%220 0 512 512%22%3E%3Cpath fill%3D%22%23777%22 d%3D%22M221.631 109L109.92 392h58.055l24.079-61h127.892l24.079 61h58.055L290.369 109Zm-8.261 168L256 169l42.63 108Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-bg-color {\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2216%22 height%3D%2216%22 viewBox%3D%220 0 48 48%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect width%3D%2248%22 height%3D%2248%22 fill%3D%22white%22 fill-opacity%3D%220.01%22%2F%3E%3Cpath fill-rule%3D%22evenodd%22 clip-rule%3D%22evenodd%22 d%3D%22M37 37C39.2091 37 41 35.2091 41 33C41 31.5272 39.6667 29.5272 37 27C34.3333 29.5272 33 31.5272 33 33C33 35.2091 34.7909 37 37 37Z%22 fill%3D%22%23777%22%2F%3E%3Cpath d%3D%22M20.8535 5.50439L24.389 9.03993%22 stroke%3D%22%23777%22 stroke-width%3D%224%22 stroke-linecap%3D%22round%22%2F%3E%3Cpath d%3D%22M23.6818 8.33281L8.12549 23.8892L19.4392 35.2029L34.9955 19.6465L23.6818 8.33281Z%22 stroke%3D%22%23777%22 stroke-width%3D%224%22 stroke-linejoin%3D%22round%22%2F%3E%3Cpath d%3D%22M12 20.0732L28.961 25.6496%22 stroke%3D%22%23777%22 stroke-width%3D%224%22 stroke-linecap%3D%22round%22%2F%3E%3Cpath d%3D%22M4 43H44%22 stroke%3D%22%23777%22 stroke-width%3D%224%22 stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-image {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-file-image%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z%22%2F%3E  %3Cpath d%3D%22M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-table {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-table%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-poll {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-card-checklist%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z%22%2F%3E  %3Cpath d%3D%22M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-tweet {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-twitter%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-youtube {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-youtube%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-left-align,\ni.verbum-left-align {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-left%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-center-align {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-center%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-right-align {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-right%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-justify-align {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-justify%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-indent {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-indent-left%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-markdown {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-markdown%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z%22%2F%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708z%22%2F%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z%22%2F%3E  %3Cpath d%3D%22M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-outdent {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-indent-right%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-undo {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-arrow-counterclockwise%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z%22%2F%3E  %3Cpath d%3D%22M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-redo {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-arrow-clockwise%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z%22%2F%3E  %3Cpath d%3D%22M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-sticky {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-sticky%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-mic {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-mic%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z%22%2F%3E  %3Cpath d%3D%22M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-import {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-upload%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z%22%2F%3E  %3Cpath d%3D%22M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-export {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-download%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z%22%2F%3E  %3Cpath d%3D%22M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-diagram-2 {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-diagram-2%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-equation {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-plus-slash-minus%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\ni.verbum-gif {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-filetype-gif%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M14 4.5V14a2 2 0 0 1-2 2H9v-1h3a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.278 13.124a1.403 1.403 0 0 0-.14-.492 1.317 1.317 0 0 0-.314-.407 1.447 1.447 0 0 0-.48-.275 1.88 1.88 0 0 0-.636-.1c-.361 0-.67.076-.926.229a1.48 1.48 0 0 0-.583.632 2.136 2.136 0 0 0-.199.95v.506c0 .272.035.52.105.745.07.224.177.417.32.58.142.162.32.288.533.377.215.088.466.132.753.132.268 0 .5-.037.697-.111a1.29 1.29 0 0 0 .788-.77c.065-.174.097-.358.097-.551v-.797H1.717v.589h.823v.255c0 .132-.03.254-.09.363a.67.67 0 0 1-.273.264.967.967 0 0 1-.457.096.87.87 0 0 1-.519-.146.881.881 0 0 1-.305-.413 1.785 1.785 0 0 1-.096-.615v-.499c0-.365.078-.648.234-.85.158-.2.38-.301.665-.301a.96.96 0 0 1 .3.044c.09.03.17.071.236.126a.689.689 0 0 1 .17.19.797.797 0 0 1 .097.25h.776Zm1.353 2.801v-3.999H3.84v4h.79Zm1.493-1.59v1.59h-.791v-3.999H7.88v.653H6.124v1.117h1.605v.638H6.124Z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-link-editor .button.active,\n.verbum-toolbar .button.active {\n  background-color: rgb(223, 232, 250);\n}\n\n.verbum-link-editor .verbum-link-input {\n  display: block;\n  width: calc(100% - 24px);\n  box-sizing: border-box;\n  margin: 8px 12px;\n  padding: 8px 12px;\n  border-radius: 15px;\n  background-color: #eee;\n  font-size: 15px;\n  color: rgb(5, 5, 5);\n  border: 0;\n  outline: 0;\n  position: relative;\n  font-family: inherit;\n}\n\n.verbum-link-editor div.verbum-link-edit {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-pencil-fill%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z%22%2F%3E%3C%2Fsvg%3E\");\n  background-size: 16px;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 35px;\n  vertical-align: -0.25em;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  cursor: pointer;\n}\n\n.verbum-link-editor .verbum-link-input a {\n  color: rgb(33, 111, 219);\n  text-decoration: none;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-right: 30px;\n  text-overflow: ellipsis;\n}\n\n.verbum-link-editor .verbum-link-input a:hover {\n  text-decoration: underline;\n}\n\nselect.verbum-font-size,\nselect.verbum-font-family {\n  cursor: pointer;\n}\n\n.verbum-link-editor .verbum-font-size-wrapper,\n.verbum-link-editor .verbum-font-family-wrapper {\n  display: flex;\n  margin: 0 4px;\n}\n\n.verbum-link-editor select {\n  padding: 6px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.075);\n  border-radius: 4px;\n}\n\n#verbum-block-controls {\n  display: block;\n  position: absolute;\n  right: 10px;\n  width: 32px;\n  height: 32px;\n  box-sizing: border-box;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;\n  top: 16px;\n  z-index: 10;\n  border-radius: 8px;\n  border: 1px solid rgb(206, 208, 212);\n  overflow: hidden;\n}\n\n#verbum-block-controls button {\n  border: 1px solid white;\n  background-color: #fff;\n  display: block;\n  transition: background-color 0.1s ease;\n  cursor: pointer;\n  outline: none;\n  border-radius: 8px;\n  padding: 3px;\n}\n\n#verbum-block-controls button:hover {\n  background-color: #efefef;\n}\n\n#verbum-block-controls button:focus-visible {\n  border-color: blue;\n}\n\n#verbum-block-controls span.block-type {\n  background-size: contain;\n  display: block;\n  width: 18px;\n  height: 18px;\n  margin: 2px;\n}\n\n#verbum-block-controls span.block-type.verbum-paragraph {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-paragraph%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-block-controls span.block-type.verbum-h1 {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-type-h1%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-block-controls span.block-type.verbum-h2 {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-type-h2%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-block-controls span.block-type.verbum-quote {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-chat-square-quote%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z%22%2F%3E  %3Cpath d%3D%22M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-block-controls span.block-type.ul {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-list-ul%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-block-controls span.block-type.ol {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-list-ol%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z%22%2F%3E  %3Cpath d%3D%22M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n#verbum-block-controls span.block-type.verbum-code {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-code%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-characters-limit {\n  color: #888;\n  font-size: 12px;\n  text-align: right;\n  display: block;\n  position: absolute;\n  left: 12px;\n  bottom: 5px;\n}\n\n.verbum-characters-limit.characters-limit-exceeded {\n  color: red;\n}\n\n.verbum-dropdown {\n  z-index: 10;\n  display: block;\n  position: absolute;\n  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),\n    inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n  border-radius: 8px;\n  min-width: 100px;\n  min-height: 40px;\n  background-color: #fff;\n}\n\n.verbum-dropdown .verbum-item {\n  margin: 0 8px 0 8px;\n  padding: 8px;\n  color: #050505;\n  cursor: pointer;\n  line-height: 16px;\n  font-size: 15px;\n  display: flex;\n  align-content: center;\n  flex-direction: row;\n  flex-shrink: 0;\n  justify-content: space-between;\n  background-color: #fff;\n  border-radius: 8px;\n  border: 0;\n  max-width: 250px;\n}\n\n.verbum-dropdown .verbum-item .active {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  background-size: contain;\n}\n\n.verbum-dropdown .verbum-item:first-child {\n  margin-top: 8px;\n}\n\n.verbum-dropdown .verbum-item:last-child {\n  margin-bottom: 8px;\n}\n\n.verbum-dropdown .verbum-item:hover {\n  background-color: #eee;\n}\n\n.verbum-dropdown .verbum-item .verbum-text {\n  display: flex;\n  line-height: 20px;\n  flex-grow: 1;\n  min-width: 150px;\n}\n\n.verbum-dropdown .verbum-item .verbum-icon {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  user-select: none;\n  margin-right: 12px;\n  line-height: 16px;\n  background-size: contain;\n}\n\n.verbum-dropdown .verbum-divider {\n  width: auto;\n  background-color: #eee;\n  margin: 4px 8px;\n  height: 1px;\n}\n\n@media screen and (max-width: 1000px) {\n  .verbum-dropdown-button-text {\n    display: none !important;\n  }\n}\n\n.verbum-icon.verbum-paragraph {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-paragraph%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-h1 {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-type-h1%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-h2 {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-type-h2%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-h3 {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-type-h3%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-bullet-list,\n.verbum-icon.verbum-bullet {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-list-ul%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-check-list,\n.verbum-icon.verbum-check {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-check-square%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z%22%2F%3E  %3Cpath d%3D%22M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-numbered-list,\n.verbum-icon.verbum-number {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-list-ol%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z%22%2F%3E  %3Cpath d%3D%22M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-quote {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-chat-square-quote%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z%22%2F%3E  %3Cpath d%3D%22M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-icon.verbum-code {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-code%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-switches {\n  z-index: 6;\n  position: fixed;\n  left: 10px;\n  bottom: 70px;\n  animation: slide-in 0.4s ease;\n}\n\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.verbum-switch {\n  display: block;\n  color: #444;\n  margin: 5px 0;\n  background-color: rgba(238, 238, 238, 0.7);\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n#rich-text-switch {\n  right: 0;\n}\n\n#character-count-switch {\n  right: 130px;\n}\n\n.verbum-switch label {\n  margin-right: 5px;\n  line-height: 24px;\n  width: 100px;\n  font-size: 14px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.verbum-switch button {\n  background-color: rgb(206, 208, 212);\n  height: 24px;\n  box-sizing: border-box;\n  border-radius: 12px;\n  width: 44px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.1s;\n  border: 2px solid transparent;\n}\n\n.verbum-switch button:focus-visible {\n  border-color: blue;\n}\n\n.verbum-switch button span {\n  top: 0px;\n  left: 0px;\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 12px;\n  background-color: white;\n  transition: transform 0.2s;\n}\n\n.verbum-switch button[aria-checked='true'] {\n  background-color: rgb(24, 119, 242);\n}\n\n.verbum-switch button[aria-checked='true'] span {\n  transform: translateX(20px);\n}\n\n.verbum-editor-shell span.verbum-editor-image {\n  cursor: default;\n  display: inline-block;\n  position: relative;\n}\n\n.verbum-editor-shell .verbum-editor-image img {\n  max-width: 100%;\n}\n\n.verbum-editor-shell .verbum-editor-image img.focused {\n  outline: 2px solid rgb(60, 132, 244);\n  user-select: none;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-caption-container .verbum-tree-view-output {\n  margin: 0;\n  border-radius: 0;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-caption-container {\n  display: block;\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  border-top: 1px solid #fff;\n  background-color: rgba(255, 255, 255, 0.9);\n  min-width: 100px;\n  color: #000;\n  overflow: hidden;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-caption-button {\n  display: block;\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  width: 30%;\n  padding: 10px;\n  margin: 0 auto;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  min-width: 100px;\n  color: #fff;\n  cursor: pointer;\n  user-select: none;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-caption-button:hover {\n  background-color: rgba(60, 132, 244, 0.5);\n}\n\n.verbum-editor-shell .verbum-editor-image .image-resizer {\n  display: block;\n  width: 7px;\n  height: 7px;\n  position: absolute;\n  background-color: rgb(60, 132, 244);\n  border: 1px solid #fff;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-resizer.image-resizer-n {\n  top: -6px;\n  left: 48%;\n  cursor: n-resize;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-resizer.image-resizer-ne {\n  top: -6px;\n  right: -6px;\n  cursor: ne-resize;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-resizer.image-resizer-e {\n  bottom: 48%;\n  right: -6px;\n  cursor: e-resize;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-resizer.image-resizer-se {\n  bottom: -2px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-resizer.image-resizer-s {\n  bottom: -2px;\n  left: 48%;\n  cursor: s-resize;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-resizer.image-resizer-sw {\n  bottom: -2px;\n  left: -6px;\n  cursor: sw-resize;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-resizer.image-resizer-w {\n  bottom: 48%;\n  left: -6px;\n  cursor: w-resize;\n}\n\n.verbum-editor-shell .verbum-editor-image .image-resizer.image-resizer-nw {\n  top: -6px;\n  left: -6px;\n  cursor: nw-resize;\n}\n\n.verbum-emoji-menu {\n  width: 200px;\n}\n\n.verbum-emoji {\n  color: transparent;\n  caret-color: rgb(5, 5, 5);\n  background-size: 16px 16px;\n  background-position: center;\n  background-repeat: no-repeat;\n  vertical-align: middle;\n  margin: 0 -1px;\n}\n\n.verbum-emoji-inner {\n  padding: 0 0.15em;\n}\n\n.verbum-emoji-inner::selection {\n  color: transparent;\n  background-color: rgba(150, 150, 150, 0.4);\n}\n\n.verbum-emoji-inner::moz-selection {\n  color: transparent;\n  background-color: rgba(150, 150, 150, 0.4);\n}\n\n.verbum-emoji.happysmile {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAACE1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD86isAAAB2bRQBAQD25CoaGAT15CqFfBdIQwwZFwTSwyTTxCStoR4KCQKGfRfz4in04yoMCwJHQgxRSw5STA7r2ijj0yeDehammhylmRwjIAYiHwbv3ikYFgR1bBQbGQV3bhRlXhGXjBpOSA355yrq2SjVxiTn1yewox776SvMvSM/OwtzahQODQJcVRACAgALCgKonB1FQAxEPwynmxxTTQ5GQQzs2yjQwSPOvyPNviNUTg62qR8kIQZPSQ3PwCO5rCB+dRW6rSDu3Sm3qh9YUg8lIgaBeBaUihmqnh2rnx3p2SiQhhmvoh4HBgHo2CgIBwHk1CeRhxlQSg6xpB6CeRZJRAySiBlXUQ9WUA/w3ynt3ChaVA+Vixl180CkAAAAU3RSTlMABfwYE47z9P75uJBWWWtt8e746+zt2djatrUWjcvIxxVs9Y8bjHcZZ/IaUHPQJ83OJHVPYPvcVdtuF1gUycoSTczxz2TzI3YEJiVodCgGTmVTUqncTiEAAALWSURBVFjD7ZfVWxtBFMUhJNkI2lIoBYoVLVaou7vvyQQIwZPgVJC2uLtDsbp7+ycWHtjsJuzsJF/7tQ85T7N3d377jdw7Z/z8fPLJp3+vgCCjISJMrw+LMBiPHfWWcvxILCQ6kaD2ArMnKRGoshS1l1SbzdUlr4psVQCnyfAQ45/CgVgGKnmRKoctBNwlf0842VnA1DjvpjkHcO4KO+eOFiuL/Jaan8GFvayc/Qfg+MHLqGkZqmtsnDSQBZ6icoIQFs5dFfnFU7VGVAyj2xeKIl5Bq9DeUOLczMJPXlHfkKu0C1Kw8l0Z9LQBeQr7mcMiz6AlaFOpoCSM8EyyI4bGUSeScTbQBOFoGRyCzzyjbAimgGIxsPmh+X5xgcks7iqN1GE3pY7pqoR8N21UIJMYJI1U9OuiZUFBsAjdije63RODXCKDCJQFGUWbumCj2wMxyCVSC40syICP0oE8dBuaM1KKXbKgg3jsnFpTgetkSyMl2CkL2oFHPLOeYLssSA8zO6gQ2/4+6I8N7bBoshVFm2wD2tlBtOU3KldZnmlDBsHGDhrCIaakVVJFmS5ePv1PYlj4sqNwiyXvEJr1iKMWNmf69/Z0v5Niarp7eoWHUWphU3NkTshRgrf2urHNx+r6D69BhHI0SS+1fho4hH92OvrW072htdlkam5tXG/2jXQKL2eRTD1FMrSYF43lZVfZpl3r73pf43wzjfQA+sGWh5km8by0WZ+1lJe3PLe2SQ7IRmQqWbVcLCuv/RRy/BlMxKoSZwHabGU7kq8ia3TOF6husRik2y7HkJvRgu48s/Wzj8lav69QpbGayPxQNCxtzZluxNnT7Lb2ag5gn3DHTM4CZy56ZNiva0FsdRWSfK8fJUjPvOyh90/VcEDZYG2p9YW58I219NPQ+ibnkgO8uI2oE3brxHcaXVzwKW8vSNGBmqjIcL0+PDIqJjDed+30yaf/QL8BILNaoYqaEPoAAAAASUVORK5CYII=);\n}\n\n.verbum-emoji.veryhappysmile {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAACzVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD86isAAADqWkf///8BAAB2bRT25CoaGATw3ykyLwmFfBdIQwxHQgwJCALz4in45ir04yrMzMwBAQEZFwTTxCR3bhQMCwKtoR4kIQaonB1YUg8IBwEMDAzt3CiDehbr2ij15Cqwox5TTQ5STA7u3SlRSw62qR+4qx/OvyNFQAzQwSOSiBlEPwx+dRUOBQQEBAEDAgEjIAZDGhQ4ODh1bBQbGQUYFgTn1yfVxiSnmxylmRymmhxGQQzPwCO5rCBWUA8iHwaGfRfNviO6rSCBeBZPSQ2UihnSwyTo2Cjx4ClAGBNNHhfk1Ce+sCB6cRVJRAyCeRZqamosLCzPTz54bxTCtCHWxyUYCQcWCQczFA8WFATKTj2hlhtMHRfIyMhfJB0eHh5aWlpJSUkGBgZFRUUvLy8iIiLd3d319fWxpB6voh5aVA8TEQOVixkwEg5LRg0oJQfSUUCrnx3FtyKXjBrfzybZyiUuKgiPhRj35SqSOCzg0CaWOi3x8fFBPQv55yp8cxVJHBZOSA3UxSQGAgJeVxB/dhYGBQHZ2dkUCAa0RTdkJh7RUD+fn5/GTDyoqKgqEA2vQzUMBQQqKiohDQq9ryB4eHh+fn7aVEKFhYWjPzFVVVVIHBbR0dGCMiePj4+wRDbXyCVUIBpsKSGKNSo2FRA1FBA6OjoEBAT9/f09PT0PDw8fHAUZGRkpKSnp6el6XgltAAAAP3RSTlMABfxr+ROO9P7zF5C47FbIthnP8VkVFM1td9Ajde747dnc2/XYjY8bjE1Q8mdzJWQm+2BPblgSycsEaCgGU1L0HiQRAAADp0lEQVRYw+2X5VsUURTGYVk26BSxFVuxu+aFYRFYUBEpkVwQBEm7GxSwC1Swu7vF7u7urr/BmXEXZxd35sKjj37Y99M+Z8797XPPPefcc83MTDLJpH8vKxdrm3q1pdLa9WysO1pVlVKtQxfoqbOFZRUwTRp7AKEB/nEhMSpVTMhmf3UoIJc5VhJj7i4HHRDRl+Kp7+gAGnJ388pw2tQA4odQFTQ+AXBqQ87pqUT4VOq3mhAOZXNSTru2SBhEGZEmEpJuZJyWoIdSAppMozoJp5eE3kYJagYtIdhdTWf4UyKaBmV3MU6PGthCiWoinMSywB3hvcVBmizUEslnOaZSBEqCUjjHGyOeIlIiGglxLD3oIWSgZFouVMHVMYcilBoWAqAuiNA5qob19/VR8ZfqW8bCXqCPKULL692H7UA+fJC+JShU4WoU5IKA8mX92WUj+CADSwrsjIKseUntyy4bzgcZWKIhMwqywSb9jQyosLVfljA4GAXVx6hfofXxNQy2viUEDYyC6iKGItZI2BoFSaEiB8Wizt8H/bGtNeAFW1RCwbZBHDlI6Ph1CanZndzHKGBfnEY0IV2g5nwGAAP9Is8tv/uSf9VqFi9avvCUry4p0wRKRFe0sxEVrB0cAouz/Dh9CdRaMjGbK9pAgaJl2sho1ukg5h0ruXpv1af1a3jDSNT694/vX78wD6mszxihNsI0Nq78CzHfW6uN3zf047Rho9YyH4WszzjBxmYpp8czTn0GIur2quclH70N9PTh6pUIZA9iinCrNZMhgf27A9rdfIj6+m1dztrVa3Ny1q38vOZn4HayHtPRVPAWcVRiAuO2PwM37twKhqHo9CXIXMxdRy1EJsFaCGfTpAxLr3l5PXjx5vWrFdlvi95lZz8pffZomdeyJVjIZsIkeIqNak6IZDxPpOHiTa8KurQUx9kIxcPNnGCImMamyRzQpQv0MVcuByNlJvNxKJQEY1t7CT2DPbm555F58nA5a9fR/DPIKDvEfEqFpBnJgNRae+mcPpvBxDd9+6z8/FlF6czPjEjuGp4MRWvi0S+Ra0wFe3cU6w5sqzr1CFdxEyFpSTpEtndGVpK2VPP2DI6ISFpUoBtDJsG5mRmxWrkBickVW8iU6YBbzUoN7J5K0OqxQXxK0JhxNFp4dq3k7O8okzNNJCU6LDdPFZuXGzY3jekj8qZVedlYWtgr+PWhsLfoVNUHkqudzKGhrVRq29ChkZ2r6dlpkkn/gX4AY/8OuDJyF4EAAAAASUVORK5CYII=);\n}\n\n.verbum-emoji.unhappysmile {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAACOlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD86isAAAD25Cp2bRQBAQAaGAQZFwSFfBdIQwzz4inTxCStoR5HQgz04yoMCwLv3in15CqDehYKCQJEPwxRSw7QwSNSTA5YUg9WUA82Mgl1bBQbGQV3bhQYFgTr2ijq2SjVxiTn1yewox7SwyRFQAyonB2lmRymmhynmxxGQQzOvyPo2CiGfRfNviM7NwpUTg7PwCMkIQa5rCC2qR9PSQ0lIga6rSC3qh/u3Sl+dRWBeBaUihkuKwgPDgPp2Sj76SuxpB6voh4LCgKCeRZJRAySiBkmIwYFBQEiHwZTTQ5XUQ/eziYhHwYiIAYjIAZaVA/s2yjw3ynt3CiVixlKRQ2NgxjUxSQEBAFOSA0HBgGpnR3IuSJmXxH45iohHgbWxyXRwiTy4SlAPAvm1ifZyiUGBgH55yrg0Caqnh1iWxHHuCIDAwFqoJzsAAAAUnRSTlMA/AUYjhPz9P75kLhZVmtt8vH47uzt69jZ2rUWtsvIxxWNbPWPGxl3jFAaZ3MkJ9DOdc1PYPvcVdtYFBduEsnKTczPZCYjdgTwdAYoJWhOZVNSPExHuwAAAtFJREFUWMPtl+VXG0EUxQkk2QhaaKHFpUCBonV317mbJQkQ3Cu0xaVokWJ1d3d3+d9aeg7sbtKdneS0p/2Q+23evPmdM/bmjo+PV1559e/l528yR4QajaERZtPylZ5SVqyKhkxrEnQeYOYnJQIldltjYQPPNxSetTlKAE6b5ibGN4WDYG8pJhIVt9sFcFt83eFkZgG91cRFfTXAhk3snH16DA2T32qgH8ELWDmLFqPmHlFQaS00u9k46RBGCUXHBQSxcPZrhPuEqnFBwzC7hSGwERWNQb9TjbMjC7eJquqQrXYKUjB0Vx108hZyVM4zh2HCoBHok6mgJFwlTKpCPI2jSxSq2UCdAke7wUG4QBjlQCAFFI2W6UT+gDXfwkuHyiNtiKHUMUPJzH23TFUgixQkjxScM0QqgvxhnxlmnRp2WApyijQjQBFkkhzq/KlhB6Ugp0g5tIogM87IJ3LIZWpipAjzFEFLcFRcWku+82LLI4WYqwiajSOEWccwRxFkBM8OKsOsvw/6Y1NbJllsVdEW24xGdhBt+03qVZYwHUh/OJzTP9sqrbh86cHDLueeSixlurS/9P7r92kH8fRFqayroMIQp3z916JdmvzNio+1X66f5h89e/IYr55L+1oRSy1sdknum0m8+zDdeF2PSWn17KAWNh0n9Im5E6j7JLZe1mFCbHXTS62PFjVick/9W9mq1PeIjUGkUl+RND0GWPb+BIL96A9bDvpLGR7IG8hQs2rZqFUH9SLXl8FEjKlxRqHPVLcjeRphnM65CM0eFoO01+kZcjFaMGxktn5VdxSt3zVo0llNZF4Ibo4o7PsVbFvHbmt35QJVna6Y7kFg/Wa3DPt2PQRHW4HsZLd2CAjO2Oqm90/WckBFc3lR0ym+rKup6Hxlxc8vRKqfB78RXUKMQfqnMcQGrvb0gxQZoI0KDzMaw8Kj4gPivN9Or7z6D/QDbi1VtzA+50wAAAAASUVORK5CYII=);\n}\n\n.verbum-emoji.heart {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAACrFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKBAMAAAAAAAAAAAAAAAAAAAAAAADqWkcAAAABAAACAQBtKiFrKSFqKSDfVkQaCghUIBkuEg4VCAbXU0HRUD8HAwLZU0LjV0XhVkTmWUYEAQECAQFoKB8wEg6DMihXIhqZOy6nQDPiV0RlJx8PBgXkWEXITT2YOy51LSMUCAboWUYxEw8sEQ0GAgIIAwKhPjEoEAxUIBrYU0GGNCmAMSeFMyh+MCZZIhtaIxsYCQdVIRqBMifSUUBRHxjQUD8tEQ6CMijeVUNmJx9pKCCXOi5dJByJNSkFAgJIHBY0FBDcVUOKNSokDguONys4FhEnDwzpWke4RzhNHhcXCQflWEacPC8NBQSiPjHUUkAhDQo3FRGVOS21Rje8SDnFTDzCSjsZCggLBANkJh66SDnnWUbaVEJsKiEeDAk/GBNEGhUEAgEbCwi/STofDAk8FxKePTCgPTCfPTCwRDXMTj7PUD8RBwUdGVw/AAAAdXRSTlMAs81bCHPz+j4B9TcHPcJ4+ftS/gusTXF3ZVk1aTB0isrDdYv9EixV3FFHtEUvrQk/S/Jd9F+rTMRnaK/3Nt7SUxPrDCCpXuFE1iTuvg6TSQQ0+DilCp/kFs8YBpID6Woha0A77AWadh5kG6HH5/6O/JC6ArUoUSe0AAACyklEQVRYw+2XVVcbURSFg05CIXiBtlAc6u5C3d3d3W32xLBA8BYprnV3d3d39/6RFtJCk8yduRN46EO+x71WvpU1c+eefWQyGzZsSKad3MHPP0DuY5r6yAP8/RzcHKk1jX07owbGroXib6jwsmOMqbNvNypNo+4AFx+Xod6dmQbY9/mT2gNpJXvUGXHxHKBsKu5pxiAh6wBbw7adsfBcWp26eyJ2e7Ix1R9JANNDzBMGTqNjazFoVFgrk62HSm2oS3XHOTQX+T9I2sKa8KUMTqFIqjBNTyShp+DzYTgzD8t+5daFqyrM0wKOEXpOIdCwFmgAtWWqhVLgvSNBZ/mTlMrKHMv0aBE6EEVtkcXykJrKl+5HV5LHsSN3iKVGzzmTzrgcmawE4uFGEDkgToroIJoQREHQShFp4UQQhfK9fGtEXbBZimgfOhFE7XFYiqgUcoLI1SU9kd6TmO7iSjpIrbCDXrQLdsST3RKxObSelL1oTRQp7HGMVpSLYIGvP9BDlU3nyVZ5tBG6kNyRl0/jyc+Du+ANqRiMC+fEPbrL6KUQvmsHxuBMsZjnyjUMHy12+w8agEIxUSFGjhCfR8M8uZvCntuq8LE0EzIITx8LeR7dIn6tZkzB62Sy5+VdTKKc/Y7BePOC5Cl+i+mTaVvEsjl8A8jIKyyaR19rFnpwBfyezxyzQEpBmo/y53yeD2swV1rVWoL3PHdT8keslNjZFitxb6vFpPyEVa5S29+Mqcg1Fz3D6hXSe+TECbho6rkPxs2aRjoEZVf/9Twsx3Lruu0YXNfXee48wSwrS/K4UThb+8BvXELITGvrdv++dSPzJIZOs764B7rgvNFzCr3H12cF6Of97lu158FpYvWgJAw/v7PsjyKxOizKxk0oTTGUYMPs+u43EdGoqkJ0RP03pUjn33tMZEPsXF7e3l4Ns71FRdk2WBs2/ht+ATukxXbBieGmAAAAAElFTkSuQmCC);\n}\n\n.verbum-keyword {\n  color: rgb(241, 118, 94);\n  font-weight: bold;\n}\n\n.verbum-actions {\n  position: relative;\n  text-align: right;\n  padding: 10px;\n}\n\n.verbum-actions i {\n  background-size: contain;\n  display: inline-block;\n  height: 15px;\n  width: 15px;\n  vertical-align: -0.25em;\n}\n\n.verbum-actions i.verbum-indent {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-indent-left%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.verbum-outdent {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-indent-right%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.lock {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-lock-fill%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.verbum-image {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-file-image%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z%22%2F%3E  %3Cpath d%3D%22M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.verbum-table {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-table%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.clear {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-trash%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z%22%2F%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.unlock {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-lock%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.verbum-left-align {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-left%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.verbum-center-align {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-center%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.verbum-right-align {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-text-right%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.verbum-justify-align {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-justify%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.disconnect {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-plug%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-actions i.connect {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-plug-fill%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-table-cell-action-button-container {\n  position: absolute;\n}\n\n.verbum-table-cell-action-button {\n  background-color: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  position: relative;\n  border-radius: 15px;\n  color: #222;\n  display: inline-block;\n  cursor: pointer;\n}\n\ni.verbum-chevron-down {\n  background-color: transparent;\n  background-size: contain;\n  display: inline-block;\n  height: 8px;\n  width: 8px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-chevron-down%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-action-button {\n  background-color: #eee;\n  border: 0;\n  padding: 8px 12px;\n  position: relative;\n  margin-left: 5px;\n  border-radius: 15px;\n  color: #222;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.verbum-action-button:hover {\n  background-color: #ddd;\n  color: #000;\n}\n\n.verbum-action-button-mic.active {\n  animation: verbum-mic-pulsate-color 3s infinite;\n}\nbutton.verbum-action-button:disabled {\n  opacity: 0.6;\n  background: #eee;\n  cursor: not-allowed;\n}\n\n@keyframes verbum-mic-pulsate-color {\n  0% {\n    background-color: #ffdcdc;\n  }\n  50% {\n    background-color: #ff8585;\n  }\n  100% {\n    background-color: #ffdcdc;\n  }\n}\n\n.verbum-debug-timetravel-panel {\n  overflow: hidden;\n  padding: 0 0 10px 0;\n  margin: auto;\n  display: flex;\n}\n\n.verbum-debug-timetravel-panel-slider {\n  padding: 0;\n  flex: 8;\n}\n\n.verbum-debug-timetravel-panel-button {\n  padding: 0;\n  border: 0;\n  background: none;\n  flex: 1;\n  color: #fff;\n  font-size: 12px;\n}\n\n.verbum-debug-timetravel-panel-button:hover {\n  text-decoration: underline;\n}\n\n.verbum-debug-timetravel-button {\n  border: 0;\n  padding: 0;\n  font-size: 12px;\n  top: 10px;\n  right: 15px;\n  position: absolute;\n  background: none;\n  color: #fff;\n}\n\n.verbum-debug-timetravel-button:hover {\n  text-decoration: underline;\n}\n\n.verbum-connecting {\n  font-size: 15px;\n  color: #999;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  top: 10px;\n  left: 10px;\n  user-select: none;\n  white-space: nowrap;\n  display: inline-block;\n  pointer-events: none;\n}\n\n.ltr {\n  text-align: left;\n}\n\n.rtl {\n  text-align: right;\n}\n\n.verbum-toolbar {\n  display: flex;\n  margin-bottom: 1px;\n  background: #fff;\n  padding: 4px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  vertical-align: middle;\n  min-height: 45px;\n  overflow: hidden;\n  max-width: 100%;\n  flex-wrap: wrap;\n}\n\n.verbum-toolbar button.verbum-toolbar-item {\n  border: 0;\n  display: flex;\n  background: none;\n  border-radius: 10px;\n  padding: 8px;\n  cursor: pointer;\n  vertical-align: middle;\n  flex-shrink: 0;\n}\n\n.verbum-toolbar button.verbum-toolbar-item:disabled {\n  cursor: not-allowed;\n}\n\n.verbum-toolbar button.verbum-toolbar-item.spaced {\n  margin-right: 2px;\n}\n\n.verbum-toolbar button.verbum-toolbar-item i.verbum-format {\n  background-size: contain;\n  display: inline-block;\n  height: 18px;\n  width: 18px;\n  vertical-align: -0.25em;\n  display: flex;\n  opacity: 0.6;\n}\n\n.verbum-toolbar button.verbum-toolbar-item:disabled i.verbum-format {\n  opacity: 0.2;\n}\n\n.verbum-toolbar button.verbum-toolbar-item.active {\n  background-color: rgba(223, 232, 250, 0.3);\n}\n\n.verbum-toolbar button.verbum-toolbar-item.active i {\n  opacity: 1;\n}\n\n.verbum-toolbar .verbum-toolbar-item:hover:not([disabled]) {\n  background-color: #eee;\n}\n\n.verbum-toolbar select.verbum-toolbar-item {\n  border: 0;\n  display: flex;\n  background: none;\n  border-radius: 10px;\n  padding: 8px;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 70px;\n  font-size: 14px;\n  color: #777;\n  text-overflow: ellipsis;\n}\n\n.verbum-toolbar select.verbum-code-language {\n  width: 150px;\n}\n\n.verbum-toolbar .verbum-toolbar-item .verbum-text {\n  display: flex;\n  line-height: 20px;\n  vertical-align: middle;\n  font-size: 14px;\n  color: #777;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 20px;\n  text-align: left;\n  padding-right: 10px;\n}\n\n.verbum-toolbar .verbum-toolbar-item .verbum-icon {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  user-select: none;\n  margin-right: 8px;\n  line-height: 16px;\n  background-size: contain;\n}\n\n.verbum-toolbar i.verbum-chevron-down {\n  margin-top: 3px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  user-select: none;\n}\n\n.verbum-toolbar i.verbum-chevron-down.inside {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  margin-left: -25px;\n  margin-top: 11px;\n  margin-right: 10px;\n  pointer-events: none;\n}\n\n.verbum-toolbar .verbum-divider {\n  width: 1px;\n  background-color: #eee;\n  margin: 0 4px;\n}\n\n.verbum-sticky-note-container {\n  position: absolute;\n  z-index: 9;\n  width: 120px;\n  display: inline-block;\n}\n\n.verbum-sticky-note {\n  line-height: 1;\n  text-align: left;\n  width: 120px;\n  margin: 25px;\n  padding: 20px 10px;\n  position: relative;\n  border: 1px solid #e8e8e8;\n  font-family: 'Reenie Beanie';\n  font-size: 24px;\n  border-bottom-right-radius: 60px 5px;\n  display: block;\n  cursor: move;\n}\n\n.verbum-sticky-note:after {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  right: -0px;\n  bottom: 20px;\n  width: 120px;\n  height: 25px;\n  background: rgba(0, 0, 0, 0.2);\n  box-shadow: 2px 15px 5px rgba(0, 0, 0, 0.4);\n  transform: matrix(-1, -0.1, 0, 1, 0, 0);\n}\n\n.verbum-sticky-note.yellow {\n  border-top: 1px solid #fdfd86;\n  background: linear-gradient(\n    135deg,\n    #ffff88 81%,\n    #ffff88 82%,\n    #ffff88 82%,\n    #ffffc6 100%\n  );\n}\n\n.verbum-sticky-note.pink {\n  border-top: 1px solid #e7d1e4;\n  background: linear-gradient(\n    135deg,\n    #f7cbe8 81%,\n    #f7cbe8 82%,\n    #f7cbe8 82%,\n    #e7bfe1 100%\n  );\n}\n\n.verbum-sticky-note-container.dragging {\n  transition: none !important;\n}\n\n.verbum-sticky-note div {\n  cursor: text;\n}\n\n.verbum-sticky-note .verbum-sticky-note-delete {\n  border: 0;\n  background: none;\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  font-size: 10px;\n  cursor: pointer;\n  opacity: 0.5;\n}\n\n.verbum-sticky-note .verbum-sticky-note-delete:hover {\n  font-weight: bold;\n  opacity: 1;\n}\n\n.verbum-sticky-note .verbum-sticky-note-color {\n  border: 0;\n  background: none;\n  position: absolute;\n  top: 8px;\n  right: 25px;\n  cursor: pointer;\n  opacity: 0.5;\n}\n\n.verbum-sticky-note .verbum-sticky-note-color:hover {\n  opacity: 1;\n}\n\n.verbum-sticky-note .verbum-sticky-note-color i {\n  display: block;\n  width: 12px;\n  height: 12px;\n  background-size: contain;\n}\n\n.PollNode__optionCheckboxChecked {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22%23fff%22 class%3D%22bi bi-check-lg%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.PollNode__optionDelete {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-x-lg%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z%22%2F%3E  %3Cpath fill-rule%3D%22evenodd%22 d%3D%22M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.verbum-character-style-popup {\n  display: flex;\n  margin-bottom: 1px;\n  background: #fff;\n  padding: 4px;\n  vertical-align: middle;\n  position: absolute;\n  z-index: 10;\n  top: -10000px;\n  left: -10000px;\n  margin-top: -6px;\n  opacity: 0;\n  background-color: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  transition: opacity 0.5s;\n}\n\n.verbum-character-style-popup button.verbum-popup-item {\n  border: 0;\n  display: flex;\n  background: none;\n  border-radius: 10px;\n  padding: 8px;\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n.verbum-character-style-popup button.verbum-popup-item:disabled {\n  cursor: not-allowed;\n}\n\n.verbum-character-style-popup button.verbum-popup-item.spaced {\n  margin-right: 2px;\n}\n\n.verbum-character-style-popup button.verbum-popup-item i.verbum-format {\n  background-size: contain;\n  display: inline-block;\n  height: 18px;\n  width: 18px;\n  vertical-align: -0.25em;\n  display: flex;\n  opacity: 0.6;\n}\n\n.verbum-character-style-popup button.verbum-popup-item:disabled i.verbum-format {\n  opacity: 0.2;\n}\n\n.verbum-character-style-popup button.verbum-popup-item.active {\n  background-color: rgba(223, 232, 250, 0.3);\n}\n\n.verbum-character-style-popup button.verbum-popup-item.active i {\n  opacity: 1;\n}\n\n.verbum-character-style-popup .verbum-popup-item:hover:not([disabled]) {\n  background-color: #eee;\n}\n\n.verbum-character-style-popup select.verbum-popup-item {\n  border: 0;\n  display: flex;\n  background: none;\n  border-radius: 10px;\n  padding: 8px;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 70px;\n  font-size: 14px;\n  color: #777;\n  text-overflow: ellipsis;\n}\n\n.verbum-character-style-popup select.verbum-code-language {\n  text-transform: capitalize;\n  width: 130px;\n}\n\n.verbum-character-style-popup .verbum-popup-item .verbum-text {\n  display: flex;\n  line-height: 20px;\n  width: 200px;\n  vertical-align: middle;\n  font-size: 14px;\n  color: #777;\n  text-overflow: ellipsis;\n  width: 70px;\n  overflow: hidden;\n  height: 20px;\n  text-align: left;\n}\n\n.verbum-character-style-popup .verbum-popup-item .verbum-icon {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  user-select: none;\n  margin-right: 8px;\n  line-height: 16px;\n  background-size: contain;\n}\n\n.verbum-character-style-popup i.verbum-chevron-down {\n  margin-top: 3px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  user-select: none;\n}\n\n.verbum-character-style-popup i.verbum-chevron-down.inside {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  margin-left: -25px;\n  margin-top: 11px;\n  margin-right: 10px;\n  pointer-events: none;\n}\n\n.verbum-character-style-popup .verbum-divider {\n  width: 1px;\n  background-color: #eee;\n  margin: 0 4px;\n}\n\n.verbum-excalidraw-button {\n  border: 0;\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n}\n\n.verbum-excalidraw-button.selected {\n  outline: 2px solid rgb(60, 132, 244);\n  user-select: none;\n}\n\n.verbum-embed-block.focused {\n  outline: 2px solid rgb(60, 132, 244);\n  user-select: none;\n}\n\n.verbum-github-corner:hover .verbum-octo-arm {\n  animation: verbum-octocat-wave 560ms ease-in-out;\n}\n@keyframes verbum-octocat-wave {\n  0%,\n  100% {\n    transform: rotate(0);\n  }\n  20%,\n  60% {\n    transform: rotate(-25deg);\n  }\n  40%,\n  80% {\n    transform: rotate(10deg);\n  }\n}\n@media (max-width: 500px) {\n  .verbum-github-corner:hover .verbum-octo-arm {\n    animation: none;\n  }\n  .verbum-github-corner .verbum-octo-arm {\n    animation: verbum-octocat-wave 560ms ease-in-out;\n  }\n}\n\n.verbum-spacer {\n  letter-spacing: -2px;\n}\n\nbutton.verbum-item.verbum-dropdown-item-active {\n  background-color: rgba(223, 232, 250, 0.3);\n}\n\nbutton.verbum-item.verbum-dropdown-item-active i {\n  opacity: 1;\n}\n";
styleInject(css_248z$7);

var toolbar = {
	alignDropdown: {
		Title: "Align",
		Description: "Formatting options for text alignment",
		LeftAlign: "Left Align",
		CenterAlign: "Center Align",
		RightAlign: "Right Align",
		JustifyAlign: "Justify Align",
		Outdent: "Outdent",
		Indent: "Indent"
	},
	backgroundColorPicker: {
		Description: "Formatting background color"
	},
	blockFormatDropdown: {
		Description: "Formatting options for text style",
		paragraph: "Normal",
		h1: "Heading 1",
		h2: "Heading 2",
		h3: "Heading 3",
		bullet: "Bullet List",
		number: "Numbered List",
		check: "Check List",
		quote: "Quote",
		code: "Code Block"
	},
	boldButton: {
		Title: "Bold",
		Description: "Format text as bold. Shortcut:"
	},
	codeFormatButton: {
		Description: "Insert code block"
	},
	insertLinkButton: {
		Description: "Insert link"
	},
	italicButton: {
		Title: "Italic",
		Description: "Format text as italics. Shortcut:"
	},
	redoButton: {
		Title: "Redo",
		Description: "Redo"
	},
	underlineButton: {
		Title: "Underline",
		Description: "Format text to underlined. Shortcut:"
	},
	undoButton: {
		Title: "Undo",
		Description: "Undo"
	},
	textColorPicker: {
		Description: "Formatting text color"
	},
	textFormatDropdown: {
		Description: "Formatting options for additional text styles",
		Options: {
			Strikethrough: {
				Label: "Strikethrough",
				Description: "Format text with a strikethrough"
			},
			Subscript: {
				Label: "Subscript",
				Description: "Format text with a subscript"
			},
			Superscript: {
				Label: "Superscript",
				Description: "Format text with a superscript"
			}
		}
	},
	insertDropdown: {
		Title: "Insert",
		Description: "Insert specialized editor node",
		Mode: {
			Sample: "Sample",
			URL: "URL",
			File: "File"
		},
		No_of_rows: "No of rows",
		No_of_columns: "No of columns",
		Question: "Question",
		Tweet_URL: "Tweet URL",
		Image_URL: "Image URL",
		Image_URL_Alt_Text: "Alt Text",
		Image_URL_Placeholder: "Random unsplash image",
		Image_Upload: "Image Upload",
		Image_Upload_Alt_Text: "Alt Text",
		Image_Upload_Placeholder: "Descriptive alternative text",
		YouTube_URL: "YouTube URL",
		Horizontal_Rule: "Horizontal Rule",
		Image: "Image",
		Insert_Image: "Insert Image",
		Excalidraw: "Excalidraw",
		Table: "Table",
		Insert_Table: "Insert Table",
		Poll: "Poll",
		Insert_Poll: "Insert Poll",
		Tweet: "Tweet",
		Insert_Tweet: "Insert Tweet",
		YouTube_Video: "YouTube Video",
		Insert_YouTube_Video: "Insert YouTube Video",
		Equation: "Equation",
		Insert_Equation: "Insert Equation",
		Sticky_Note: "Sticky Note"
	},
	mentionsPlugin: {
		Suggested_mentions: "Suggested mentions"
	},
	characterStylesPopupPlugin: {
		Format_text_as_bold: "Format text as bold",
		Format_text_as_italics: "Format text as italics",
		Format_text_to_underlined: "Format text to underlined",
		Format_text_with_a_strikethrough: "Format text with a strikethrough",
		Format_Subscript: "Format Subscript",
		Format_Superscript: "Format Superscript",
		Insert_code_block: "Insert code block",
		Insert_link: "Insert link",
		Add_comment: "Add comment"
	},
	commentPlugin: {
		Hide_Comments: "Hide Comments",
		Show_Comments: "Show Comments",
		Comments: "Comments",
		No_Comments: "No Comments",
		Reply_to_comment: "Reply to comment...",
		Delete_Thread: "Delete Thread",
		Delete_Comment: "Delete Comment",
		Delete_Comment_Description: "Are you sure you want to delete this",
		Type_a_comment: "Type a comment..."
	},
	testRecorderPlugin: {
		Disable_test_recorder: "Disable test recorder",
		Enable_test_recorder: "Enable test recorder",
		Insert_snapshot: "Insert snapshot",
		Copy_to_clipboard: "Copy to clipboard",
		Download_as_a_file: "Download as a file"
	},
	tableActionMenuPlugin: {
		column_header: "column header",
		row_header: "row header",
		Insert: "Insert",
		above: "above",
		below: "below",
		left: "left",
		right: "right",
		Delete_column: "Delete column",
		Delete_row: "Delete row",
		Delete_table: "Delete table",
		column: "column",
		row: "row",
		columns: "columns",
		rows: "rows"
	}
};
var action = {
	Confirm: "Confirm",
	Cancel: "Cancel",
	Discard: "Discard",
	Save: "Save",
	Add: "Add",
	Remove: "Remove",
	Delete: "Delete",
	Enable: "Enable",
	Disable: "Disable",
	Import: "Import",
	Speech_To_Text: "Speech To Text",
	speech_To_Text: "speech to text",
	Import_Description: "Import editor state from JSON",
	Export: "Export",
	Export_Description: "Export editor state to JSON",
	Clear: "Clear",
	Clear_Editor: "Clear Editor",
	Clear_Description: "Clear editor contents",
	"Read-Only_Mode": "Read-Only Mode",
	Unlock: "Unlock",
	Lock: "Lock",
	"read-Only_Mode": "read-only mode",
	Confirm_Clear: "Are you sure you want to clear the editor?",
	Confirm_Discard: "Are you sure you want to discard the changes?",
	Convert_From_Markdown: "Convert From Markdown",
	Convert_From_Markdown_Description: "Convert from markdown",
	Disconnect: "Disconnect",
	Connect: "Connect",
	Collaborative: "Collaborative Editing",
	disconnect: "disconnect",
	connect: "connect",
	Disconnect_From: "Disconnect From",
	Connect_To: "Connect To",
	Server: "a collaborative editing server"
};
var EN = {
	toolbar: toolbar,
	action: action
};

var toolbar$1 = {
	alignDropdown: {
		Title: "Aligner",
		Description: "Options de formatage pour l'alignement du texte",
		LeftAlign: "Aligner à gauche",
		CenterAlign: "Aligner au centre",
		RightAlign: "Aligner à droite",
		JustifyAlign: "Justifier alignement",
		Outdent: "Supprimer l'intentation",
		Indent: "Indenter"
	},
	backgroundColorPicker: {
		Description: "Mise en forme de la couleur de fond"
	},
	blockFormatDropdown: {
		Description: "Options de mise en forme pour le style de texte",
		paragraph: "Normal",
		h1: "Titre 1",
		h2: "Titre 2",
		h3: "Titre 3",
		bullet: "Liste à puces",
		number: "Liste numérotée",
		check: "Liste de contrôle",
		quote: "Citation",
		code: "Bloc de code"
	},
	boldButton: {
		Title: "Gras",
		Description: "Formatez le texte en gras. Raccourci :"
	},
	codeFormatButton: {
		Description: "Insérer un bloc de code"
	},
	insertLinkButton: {
		Description: "Insérer un lien"
	},
	italicButton: {
		Title: "Italique",
		Description: "Formatez le texte en italique. Raccourci :"
	},
	redoButton: {
		Title: "Refaire",
		Description: "Refaire"
	},
	underlineButton: {
		Title: "Souligner",
		Description: "Formatez le texte en le soulignant. Raccourci:"
	},
	undoButton: {
		Title: "Annuler",
		Description: "Annuler"
	},
	textColorPicker: {
		Description: "Mise en forme de la couleur du texte"
	},
	textFormatDropdown: {
		Description: "Options de formatage pour les styles de texte supplémentaires",
		Options: {
			Strikethrough: {
				Label: "Barré",
				Description: "Formater le texte avec une barre oblique"
			},
			Subscript: {
				Label: "Indice",
				Description: "Formater le texte avec un indice"
			},
			Superscript: {
				Label: "Exposant",
				Description: "Formater le texte avec un exposant"
			}
		}
	},
	insertDropdown: {
		Title: "Insérer",
		Description: "Insérer un nœud d'éditeur spécialisé",
		Mode: {
			Sample: "Exemple",
			URL: "URL",
			File: "Fichier"
		},
		No_of_rows: "No de lignes",
		No_of_columns: "No de columns",
		Question: "Question",
		Tweet_URL: "URL du Tweet",
		Image_URL: "URL de l'image",
		Image_URL_Alt_Text: "Alt Text",
		Image_URL_Placeholder: "Image aléatoire sur unsplash",
		Image_Upload: "Charger une image",
		Image_Upload_Alt_Text: "Alt Text",
		Image_Upload_Placeholder: "Texte alternatif descriptif",
		YouTube_URL: "URL YouTube",
		Horizontal_Rule: "Ligne horizontale",
		Image: "Image",
		Insert_Image: "Insérer une Image",
		Excalidraw: "Excalidraw",
		Table: "Table",
		Insert_Table: "Insérer une Table",
		Poll: "Sondage",
		Insert_Poll: "Insérer un Sondage",
		Tweet: "Tweet",
		Insert_Tweet: "Insérer un Tweet",
		YouTube_Video: "Vidéo YouTube",
		Insert_YouTube_Video: "Insérer une vidéo YouTube",
		Equation: "Equation",
		Insert_Equation: "Insérer une équation",
		Sticky_Note: "Note autocollante"
	},
	mentionsPlugin: {
		Suggested_mentions: "Mentions suggérées"
	},
	characterStylesPopupPlugin: {
		Format_text_as_bold: "Formater le texte en gras",
		Format_text_as_italics: "Formater le texte en italique",
		Format_text_to_underlined: "Souligner le texte",
		Format_text_with_a_strikethrough: "Barrer le texte",
		Format_Subscript: "Mettre en indice",
		Format_Superscript: "Mettre en exposant",
		Insert_code_block: "Convertir en bloc de code",
		Insert_link: "Insérer un lien",
		Add_comment: "Ajouter un commentaire"
	},
	commentPlugin: {
		Hide_Comments: "Masquer les commentaires",
		Show_Comments: "Afficher les commentaires",
		Comments: "Commentaires",
		No_Comments: "Aucun commentaire",
		Reply_to_comment: "Répondre au commentaire...",
		Delete_Thread: "Supprimer le fil",
		Delete_Comment: "Supprimer le commentaire",
		Delete_Comment_Description: "Etes-vous sûr de vouloir supprimer ce",
		Type_a_comment: "Tapez un commentaire..."
	},
	testRecorderPlugin: {
		Disable_test_recorder: "Désactiver l'enregistreur de test",
		Enable_test_recorder: "Activer l'enregistreur de test",
		Insert_snapshot: "Insérer un instantané",
		Copy_to_clipboard: "Copier dans le presse-papiers",
		Download_as_a_file: "Télécharger en tant que fichier"
	},
	tableActionMenuPlugin: {
		column_header: "en-tête de colonne",
		row_header: "en-tête de ligne",
		Insert: "Insérer",
		above: "au-dessus",
		below: "en dessous",
		left: "à gauche",
		right: "à droite",
		Delete_column: "Supprimer la colonne",
		Delete_row: "Supprimer une ligne",
		Delete_table: "Supprimer la table",
		column: "colonne",
		row: "ligne",
		columns: "colonnes",
		rows: "lignes"
	}
};
var action$1 = {
	Confirm: "Confirmer",
	Cancel: "Annuler",
	Discard: "Abandonner",
	Save: "Sauvegarder",
	Add: "Ajouter",
	Remove: "Supprimer",
	Delete: "Supprimer",
	Enable: "Activer",
	Disable: "Disable",
	Import: "Importer",
	Speech_To_Text: "Voix vers texte",
	speech_To_Text: "voix vers texte",
	Import_Description: "Importer l'état de l'éditeur depuis JSON",
	Export: "Exporter",
	Export_Description: "Exporter l'état de l'éditeur en JSON",
	Clear: "Effacer",
	Clear_Editor: "Effacer l'éditeur",
	Clear_Description: "Effacer le contenu de l'éditeur",
	"Read-Only_Mode": "Mode lecture seule",
	Unlock: "Déverrouiller",
	Lock: "Verrouiller",
	"read-Only_Mode": "mode lecture seule",
	Confirm_Clear: "Etes-vous sûr de vouloir effacer l'éditeur ?",
	Confirm_Discard: "Êtes-vous sûr de vouloir abandonner les modifications ?",
	Convert_From_Markdown: "Convertir à partir de Markdown",
	Convert_From_Markdown_Description: "Convertir à partir de markdown",
	Disconnect: "Déconnecter",
	Connect: "Connecter",
	Collaborative: "Édition collaborative",
	disconnect: "déconnecter",
	Connecter: "connecter",
	Disconnect_From: "Déconnecter de",
	Connect_To: "Connecter à",
	Server: "un serveur d'édition collaborative",
	Add_Option: "Ajouter une option"
};
var FR = {
	toolbar: toolbar$1,
	action: action$1
};

var toolbar$2 = {
	alignDropdown: {
		Title: "Alinhar",
		Description: "Opções de alinhamento de texto",
		LeftAlign: "Alinhar à esquerda",
		CenterAlign: "Centralizar",
		RightAlign: "Alinhar à direita",
		JustifyAlign: "Justificar",
		Outdent: "Recuar",
		Indent: "Indentar"
	},
	backgroundColorPicker: {
		Description: "Cor de fundo do texto"
	},
	blockFormatDropdown: {
		Description: "Formatação do estilo do texto",
		paragraph: "Normal",
		h1: "Cabeçalho 1",
		h2: "Cabeçalho 2",
		h3: "Cabeçalho 3",
		bullet: "Lista desordenada",
		number: "Lista ordenada",
		check: "Lista de controle",
		quote: "Citação",
		code: "Bloco de código"
	},
	boldButton: {
		Title: "Negrito",
		Description: "Formata o texto em negrito. Atalho:"
	},
	codeFormatButton: {
		Description: "Insere um bloco de código"
	},
	insertLinkButton: {
		Description: "Insere um link"
	},
	italicButton: {
		Title: "Itálico",
		Description: "Formata o texto em itálico. Atalho:"
	},
	redoButton: {
		Title: "Refazer",
		Description: "Refaz a última alteração"
	},
	underlineButton: {
		Title: "Sublinhado",
		Description: "Formata o texto como sublinhado. Atalho:"
	},
	undoButton: {
		Title: "Desfazer",
		Description: "Desfaz a última alteração"
	},
	textColorPicker: {
		Description: "Altera a cor do texto"
	},
	textFormatDropdown: {
		Description: "Opções adicionis para formatação do estilo do texto",
		Options: {
			Strikethrough: {
				Label: "Tachado",
				Description: "Formata o texto como tachado"
			},
			Subscript: {
				Label: "Subscrito",
				Description: "Formata o texto como subscrito"
			},
			Superscript: {
				Label: "Sobrescrito",
				Description: "Formata o texto como sobrescrito"
			}
		}
	},
	insertDropdown: {
		Title: "Inserir",
		Description: "Inserir nó de editor especializado",
		Mode: {
			Sample: "Exemplo",
			URL: "URL",
			File: "Arquivo"
		},
		No_of_rows: "Nº de linhas",
		No_of_columns: "Nº de colunas",
		Question: "Pergunta",
		Tweet_URL: "URL do Tweet",
		Image_URL: "URL da imagem",
		Image_URL_Alt_Text: "Texto alternativo",
		Image_URL_Placeholder: "Imagem de abertura aleatória",
		Image_Upload: "Upload da imagem",
		Image_Upload_Alt_Text: "Texto alternativo",
		Image_Upload_Placeholder: "Texto descritivo alternativo",
		YouTube_URL: "URL do YouTube",
		Horizontal_Rule: "Linha horizontal",
		Image: "Imagem",
		Insert_Image: "Inserir imagem",
		Excalidraw: "Excalidraw",
		Table: "Tabela",
		Insert_Table: "Inserir tablela",
		Poll: "Votação",
		Insert_Poll: "Inserir votação",
		Tweet: "Tweet",
		Insert_Tweet: "Inserir tweet",
		YouTube_Video: "Vídeo do YouTube",
		Insert_YouTube_Video: "Inserir vídeo YouTube",
		Equation: "Equação",
		Insert_Equation: "Inserir equação",
		Sticky_Note: "Nota adesiva"
	},
	mentionsPlugin: {
		Suggested_mentions: "Menções sugeridas"
	},
	characterStylesPopupPlugin: {
		Format_text_as_bold: "Formata o texto como negrito",
		Format_text_as_italics: "Formata o texto como itálico",
		Format_text_to_underlined: "Formata o texto como sublinado",
		Format_text_with_a_strikethrough: "Formata o texto como tachado",
		Format_Subscript: "Formatar sobrescrito",
		Format_Superscript: "Formatar sobrescrito",
		Insert_code_block: "Inserir bloco de código",
		Insert_link: "Inserir link",
		Add_comment: "Adicionar comentário"
	},
	commentPlugin: {
		Hide_Comments: "Esconder comentários",
		Show_Comments: "Mostrar comentários",
		Comments: "Comentários",
		No_Comments: "Sem comentários",
		Reply_to_comment: "Responder comentário...",
		Delete_Thread: "Deletar discução",
		Delete_Comment: "Deletar Comentário",
		Delete_Comment_Description: "Tem certeza que deseja deletar isso",
		Type_a_comment: "Digite um comentário..."
	},
	testRecorderPlugin: {
		Disable_test_recorder: "Desativar gravador de teste",
		Enable_test_recorder: "Ativar gravador de teste",
		Insert_snapshot: "Inserir instantâneo",
		Copy_to_clipboard: "Copiar para área de transferência",
		Download_as_a_file: "Download como arquivo"
	},
	tableActionMenuPlugin: {
		column_header: "cabeçalho de coluna",
		row_header: "cabeçalho de linha",
		Insert: "Inserir",
		above: "acima",
		below: "abaixo",
		left: "esquerda",
		right: "direita",
		Delete_column: "Deletar coluna",
		Delete_row: "Deletar linha",
		Delete_table: "Deletar tabela",
		column: "coluna",
		row: "linha",
		columns: "colunas",
		rows: "linhas"
	}
};
var action$2 = {
	Confirm: "Confirmar",
	Cancel: "Cancelar",
	Discard: "Descartar",
	Save: "Salvar",
	Add: "Adicionar",
	Remove: "Remover",
	Delete: "Deletar",
	Enable: "Ativar",
	Disable: "Desativar",
	Import: "Importar",
	Speech_To_Text: "Fala para Texto",
	speech_To_Text: "fala para texto",
	Import_Description: "Importar estado do editor de JSON",
	Export: "Exportar",
	Export_Description: "Exportar estado do editor para JSON",
	Clear: "Limpar",
	Clear_Editor: "Limpar Editor",
	Clear_Description: "Limpar conteúdos do editor",
	"Read-Only_Mode": "Modo Somente Leitura",
	Unlock: "Liberar",
	Lock: "Bloquear",
	"read-Only_Mode": "modo somente leitura",
	Confirm_Clear: "Tem certeza que deseja limpar o editor?",
	Confirm_Discard: "Tem certeza que deseja descartar as alterações?",
	Convert_From_Markdown: "Converter de uma Remarcação",
	Convert_From_Markdown_Description: "Converter de uma remarcação",
	Disconnect: "Desconectar",
	Connect: "Conectar",
	Collaborative: "Edição Colaborativa",
	disconnect: "desconectar",
	connect: "conectar",
	Disconnect_From: "Desconectar de",
	Connect_To: "Conectar a",
	Server: "um servidor de edição colaborativa"
};
var PTBR = {
	toolbar: toolbar$2,
	action: action$2
};

var toolbar$3 = {
	alignDropdown: {
		Title: "Выравнивание",
		Description: "Параметры форматирования для выравнивания текста",
		LeftAlign: "По левому краю",
		CenterAlign: "По центру",
		RightAlign: "По правому краю",
		JustifyAlign: "По ширине",
		Outdent: "Выступ",
		Indent: "Отступ"
	},
	backgroundColorPicker: {
		Description: "Цвет фона"
	},
	blockFormatDropdown: {
		Description: "Форматирование текста",
		paragraph: "Обычный",
		h1: "Заголовок 1",
		h2: "Заголовок 2",
		h3: "Заголовок 3",
		bullet: "Маркированный список",
		number: "Нумерованный список",
		check: "Список задач",
		quote: "Цитата",
		code: "Программый код"
	},
	boldButton: {
		Title: "Жирный",
		Description: "Выделить текст жирным шрифтом"
	},
	codeFormatButton: {
		Description: "Вставить блок кода"
	},
	insertLinkButton: {
		Description: "Вставить ссылку"
	},
	italicButton: {
		Title: "Курсив",
		Description: "Выделить текст курсивом"
	},
	redoButton: {
		Title: "Повторить",
		Description: "Сделать шаг вперед"
	},
	underlineButton: {
		Title: "Подчеркнутый",
		Description: "Выделить текст подчеркиванием"
	},
	undoButton: {
		Title: "Отменить",
		Description: "Сделать шаг назад"
	},
	textColorPicker: {
		Description: "Цвет текста"
	},
	textFormatDropdown: {
		Description: "Дополнительное форматирование текста",
		Options: {
			Strikethrough: {
				Label: "Зачеркнутый",
				Description: "Выделить текст зачеркиванием"
			},
			Subscript: {
				Label: "Подстрочный индекс",
				Description: "Выделить текст как подстрочный индекс"
			},
			Superscript: {
				Label: "Верхний индекс",
				Description: "Выделить текст как верхний индекс"
			}
		}
	},
	insertDropdown: {
		Title: "Вставить",
		Description: "Вставить спец. блок",
		Mode: {
			Sample: "Шаблон",
			URL: "URL",
			File: "Файл"
		},
		No_of_rows: "Количество строк",
		No_of_columns: "Количество столбцов",
		Question: "Вопрос",
		Tweet_URL: "Ссылка на твит",
		Image_URL: "Ссылка на изображение",
		Image_URL_Alt_Text: "Подпись к изображению",
		Image_URL_Placeholder: "Заполнение",
		Image_Upload: "Загрузить изображение",
		Image_Upload_Alt_Text: "Подпись к изображению",
		Image_Upload_Placeholder: "Подробное описание",
		YouTube_URL: "YouTube ссылка",
		Horizontal_Rule: "Горизонтальная линия",
		Image: "Изображение",
		Insert_Image: "Вставить изображение",
		Excalidraw: "Блок-схема",
		Table: "Таблица",
		Insert_Table: "Вставить таблицу",
		Poll: "Опрос",
		Insert_Poll: "Вставить опрос",
		Tweet: "Твит",
		Insert_Tweet: "Вставить твит",
		YouTube_Video: "YouTube видео",
		Insert_YouTube_Video: "Вставить YouTube видео",
		Equation: "Уравнение",
		Insert_Equation: "Вставить уравнение",
		Sticky_Note: "Заметка"
	},
	mentionsPlugin: {
		Suggested_mentions: "Предлагаемые упоминания"
	},
	characterStylesPopupPlugin: {
		Format_text_as_bold: "Выделить текст жирным шрифтом",
		Format_text_as_italics: "Выделить текст курсивом",
		Format_text_to_underlined: "Выделить текст подчеркиванием",
		Format_text_with_a_strikethrough: "Выделить текст зачеркиванием",
		Format_Subscript: "Выделить текст как подстрочный индекс",
		Format_Superscript: "Выделить текст как верхний индекс",
		Insert_code_block: "Вставить блок кода",
		Insert_link: "Вставить ссылку",
		Add_comment: "Добавить комментарий"
	},
	commentPlugin: {
		Hide_Comments: "Скрыть комментарии",
		Show_Comments: "Показать комментарии",
		Comments: "Комментарии",
		No_Comments: "Нет комментариев",
		Reply_to_comment: "Ответить на комментарий...",
		Delete_Thread: "Удалить обсуждение",
		Delete_Comment: "Удалить комментарий",
		Delete_Comment_Description: "Вы уверены, что хотите удалить это?",
		Type_a_comment: "Введите комментарий..."
	},
	testRecorderPlugin: {
		Disable_test_recorder: "Отключить тестовую запись",
		Enable_test_recorder: "Включить тестовую запись",
		Insert_snapshot: "Вставить снимок",
		Copy_to_clipboard: "Скопировать в буфер обмена",
		Download_as_a_file: "Сохранить как..."
	},
	tableActionMenuPlugin: {
		column_header: "заголовок столбца",
		row_header: "заголовок строки",
		Insert: "Вставить",
		above: "выше",
		below: "ниже",
		left: "левее",
		right: "правее",
		Delete_column: "Удалить столбец",
		Delete_row: "Удалить строку",
		Delete_table: "Удалить таблицу",
		column: "столбец",
		row: "строка",
		columns: "столбцы",
		rows: "строки"
	}
};
var action$3 = {
	Confirm: "Подтвердить",
	Cancel: "Отменить",
	Discard: "Сбросить",
	Save: "Сохранить",
	Add: "Добавить",
	Remove: "Убрать",
	Delete: "Удалить",
	Enable: "Включить",
	Disable: "Отключить",
	Import: "Импорт",
	Speech_To_Text: "Голосовой ввод",
	speech_To_Text: "голосовой ввод",
	Import_Description: "Импорт состояния редактора из JSON",
	Export: "Экспорт",
	Export_Description: "Экспорт состояния редактора в JSON",
	Clear: "Очистить",
	Clear_Editor: "Очистить редактор",
	Clear_Description: "Очистить содержимое редактора",
	"Read-Only_Mode": "Режим только для чтения",
	Unlock: "Разблокировать",
	Lock: "Заблокировать",
	"read-Only_Mode": "режим только для чтения",
	Confirm_Clear: "Вы уверены, что хотите очистить редактор?",
	Confirm_Discard: "Вы уверены, что хотите отменить изменения?",
	Convert_From_Markdown: "Конвертировать из Markdown",
	Convert_From_Markdown_Description: "Конвертировать в MarkDown",
	Disconnect: "Отключить",
	Connect: "Подключить",
	Collaborative: "Совместное редактирование",
	disconnect: "отключить",
	connect: "подключить",
	Disconnect_From: "Отключиться от",
	Connect_To: "Подключиться к",
	Server: "сервер для совместного редактирования"
};
var RU = {
	toolbar: toolbar$3,
	action: action$3
};

var resources = {
  ar: {},
  de: {},
  en: EN,
  es: {},
  fr: FR,
  it: {},
  ja: {},
  nl: {},
  pl: {},
  pt: {},
  ptBr: PTBR,
  ru: RU,
  ukr: {},
  zh: {}
};
var languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    var language = navigator.language;
    callback(language.substring(0, 2));
  },
  init: () => {},
  cacheUserLanguage: () => {}
};
var i18n = /*#__PURE__*/createInstance({
  ns: ['toolbar', 'action'],
  resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  }
}, // We must provide a function as second parameter, otherwise i18next errors
(err, t) => {}).use(languageDetector);

var EditorComposer = _ref => {
  var {
    children,
    initialEditorState
  } = _ref;
  var initialConfig = {
    namespace: 'VerbumEditor',
    nodes: [...PlaygroundNodes],
    onError: error => {
      throw error;
    },
    theme: theme,
    editorState: initialEditorState
  };
  return /*#__PURE__*/React__default.createElement(LexicalComposer, {
    initialConfig: initialConfig
  }, /*#__PURE__*/React__default.createElement(I18nextProvider, {
    i18n: i18n
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "verbum-editor-shell"
  }, children)));
};

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var hostName = window.location.hostname;
var isDevPlayground = hostName !== 'playground.lexical.dev' && hostName !== 'lexical-playground.vercel.app';
var DEFAULT_SETTINGS = {
  disableBeforeInput: false,
  emptyEditor: isDevPlayground,
  isAutocomplete: false,
  isCharLimit: false,
  isCharLimitUtf8: false,
  isCollab: false,
  isRichText: true,
  measureTypingPerf: false,
  showNestedEditorTreeView: false,
  showTreeView: true
};

var Context$1 = /*#__PURE__*/createContext({
  setOption: (name, value) => {
    return;
  },
  settings: DEFAULT_SETTINGS
});
var useSettings = () => {
  return useContext(Context$1);
};

var css_248z$8 = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.Modal__overlay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  flex-direction: column;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  background-color: rgba(40, 40, 40, 0.6);\n  flex-grow: 0px;\n  flex-shrink: 1px;\n  z-index: 100;\n}\n.Modal__modal {\n  padding: 20px;\n  min-height: 100px;\n  min-width: 300px;\n  display: flex;\n  flex-grow: 0px;\n  background-color: #fff;\n  flex-direction: column;\n  position: relative;\n  box-shadow: 0 0 20px 0 #444;\n  border-radius: 10px;\n}\n.Modal__title {\n  color: #444;\n  margin: 0px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.Modal__closeButton {\n  border: 0px;\n  position: absolute;\n  right: 20px;\n  border-radius: 20px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  cursor: pointer;\n  background-color: #eee;\n}\n.Modal__closeButton:hover {\n  background-color: #ddd;\n}\n.Modal__content {\n  padding-top: 20px;\n}\n";
styleInject(css_248z$8);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function PortalImpl(_ref) {
  var {
    onClose,
    children,
    title,
    closeOnClickOutside
  } = _ref;
  var modalRef = useRef();
  useEffect(() => {
    if (modalRef.current !== null) {
      modalRef.current.focus();
    }
  }, []);
  useEffect(() => {
    var modalOverlayElement = null;

    var handler = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    var clickOutsideHandler = event => {
      var target = event.target;

      if (modalRef.current !== null && !modalRef.current.contains(target) && closeOnClickOutside) {
        onClose();
      }
    };

    if (modalRef.current !== null) {
      var _modalRef$current;

      modalOverlayElement = (_modalRef$current = modalRef.current) == null ? void 0 : _modalRef$current.parentElement;

      if (modalOverlayElement !== null) {
        var _modalOverlayElement;

        (_modalOverlayElement = modalOverlayElement) == null ? void 0 : _modalOverlayElement.addEventListener('click', clickOutsideHandler);
      }
    }

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);

      if (modalOverlayElement !== null) {
        var _modalOverlayElement2;

        (_modalOverlayElement2 = modalOverlayElement) == null ? void 0 : _modalOverlayElement2.removeEventListener('click', clickOutsideHandler);
      }
    };
  }, [closeOnClickOutside, onClose]);
  return /*#__PURE__*/createElement("div", {
    className: "Modal__overlay",
    role: "dialog"
  }, /*#__PURE__*/createElement("div", {
    className: "Modal__modal",
    tabIndex: -1,
    ref: modalRef
  }, /*#__PURE__*/createElement("h2", {
    className: "Modal__title"
  }, title), /*#__PURE__*/createElement("button", {
    className: "Modal__closeButton",
    "aria-label": "Close modal",
    type: "button",
    onClick: onClose
  }, "X"), /*#__PURE__*/createElement("div", {
    className: "Modal__content"
  }, children)));
}

function Modal(_ref2) {
  var {
    onClose,
    children,
    title,
    closeOnClickOutside = false
  } = _ref2;
  return /*#__PURE__*/createPortal( /*#__PURE__*/createElement(PortalImpl, {
    onClose: onClose,
    title: title,
    closeOnClickOutside: closeOnClickOutside
  }, children), document.body);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function useModal() {
  var [modalContent, setModalContent] = useState(null);
  var onClose = useCallback(() => {
    setModalContent(null);
  }, []);
  var modal = useMemo(() => {
    if (modalContent === null) {
      return null;
    }

    var {
      title,
      content,
      closeOnClickOutside
    } = modalContent;
    return /*#__PURE__*/createElement(Modal, {
      onClose: onClose,
      title: title,
      closeOnClickOutside: closeOnClickOutside
    }, content);
  }, [modalContent, onClose]);
  var showModal = useCallback(function (title, // eslint-disable-next-line no-shadow
  getContent, closeOnClickOutside) {
    if (closeOnClickOutside === void 0) {
      closeOnClickOutside = false;
    }

    setModalContent({
      closeOnClickOutside,
      content: getContent(onClose),
      title
    });
  }, [onClose]);
  return [modal, showModal];
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var HR = {
  dependencies: [HorizontalRuleNode],
  export: node => {
    return $isHorizontalRuleNode(node) ? '***' : null;
  },
  regExp: /^(---|\*\*\*|___)\s?$/,
  replace: (parentNode, _1, _2, isImport) => {
    var line = $createHorizontalRuleNode(); // TODO: Get rid of isImport flag

    if (isImport || parentNode.getNextSibling() != null) {
      parentNode.replace(line);
    } else {
      parentNode.insertBefore(line);
    }

    line.selectNext();
  },
  type: 'element'
};
var IMAGE = {
  dependencies: [ImageNode],
  export: (node, exportChildren, exportFormat) => {
    if (!$isImageNode(node)) {
      return null;
    }

    return "![" + node.getAltText() + "](" + node.getSrc() + ")";
  },
  importRegExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))/,
  regExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))$/,
  replace: (textNode, match) => {
    var [, altText, src] = match;
    var imageNode = $createImageNode({
      altText,
      maxWidth: 800,
      src
    });
    textNode.replace(imageNode);
  },
  trigger: ')',
  type: 'text-match'
}; // Very primitive table setup

var TABLE_ROW_REG_EXP = /^(?:\|)(.+)(?:\|)\s?$/;
var TABLE = {
  dependencies: [TableNode, TableRowNode, TableCellNode],
  export: (node, exportChildren) => {
    if (!$isTableNode(node)) {
      return null;
    }

    var output = [];

    for (var row of node.getChildren()) {
      var rowOutput = [];

      if ($isTableRowNode(row)) {
        for (var cell of row.getChildren()) {
          // It's TableCellNode (hence ElementNode) so it's just to make flow happy
          if ($isElementNode(cell)) {
            rowOutput.push(exportChildren(cell));
          }
        }
      }

      output.push("| " + rowOutput.join(' | ') + " |");
    }

    return output.join('\n');
  },
  regExp: TABLE_ROW_REG_EXP,
  replace: (parentNode, _1, match) => {
    var matchCells = mapToTableCells(match[0]);

    if (matchCells == null) {
      return;
    }

    var rows = [matchCells];
    var sibling = parentNode.getPreviousSibling();
    var maxCells = matchCells.length;

    while (sibling) {
      if (!$isParagraphNode(sibling)) {
        break;
      }

      if (sibling.getChildrenSize() !== 1) {
        break;
      }

      var firstChild = sibling.getFirstChild();

      if (!$isTextNode(firstChild)) {
        break;
      }

      var cells = mapToTableCells(firstChild.getTextContent());

      if (cells == null) {
        break;
      }

      maxCells = Math.max(maxCells, cells.length);
      rows.unshift(cells);

      var _previousSibling = sibling.getPreviousSibling();

      sibling.remove();
      sibling = _previousSibling;
    }

    var table = $createTableNode();

    for (var _cells of rows) {
      var tableRow = $createTableRowNode();
      table.append(tableRow);

      for (var i = 0; i < maxCells; i++) {
        tableRow.append(i < _cells.length ? _cells[i] : createTableCell(null));
      }
    }

    var previousSibling = parentNode.getPreviousSibling();

    if ($isTableNode(previousSibling) && getTableColumnsSize(previousSibling) === maxCells) {
      previousSibling.append(...table.getChildren());
      parentNode.remove();
    } else {
      parentNode.replace(table);
    }

    table.selectEnd();
  },
  type: 'element'
};

function getTableColumnsSize(table) {
  var row = table.getFirstChild();
  return $isTableRowNode(row) ? row.getChildrenSize() : 0;
}

var createTableCell = textContent => {
  var cell = $createTableCellNode(TableCellHeaderStates.NO_STATUS);
  var paragraph = $createParagraphNode();

  if (textContent != null) {
    paragraph.append($createTextNode(textContent.trim()));
  }

  cell.append(paragraph);
  return cell;
};

var mapToTableCells = textContent => {
  // TODO:
  // For now plain text, single node. Can be expanded to more complex content
  // including formatted text
  var match = textContent.match(TABLE_ROW_REG_EXP);

  if (!match || !match[1]) {
    return null;
  }

  return match[1].split('|').map(text => createTableCell(text));
};

var PLAYGROUND_TRANSFORMERS = [TABLE, HR, IMAGE, CHECK_LIST, ...ELEMENT_TRANSFORMERS, ...TEXT_FORMAT_TRANSFORMERS, ...TEXT_MATCH_TRANSFORMERS];

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var getElement = () => {
  var element = document.getElementById('report-container');

  if (element === null) {
    element = document.createElement('div');
    element.id = 'report-container';
    element.style.position = 'fixed';
    element.style.top = '50%';
    element.style.left = '50%';
    element.style.fontSize = '32px';
    element.style.transform = 'translate(-50%, -50px)';
    element.style.padding = '20px';
    element.style.background = 'rgba(240, 240, 240, 0.4)';
    element.style.borderRadius = '20px';

    if (document.body) {
      document.body.appendChild(element);
    }
  }

  return element;
};

function useReport() {
  var timer = useRef(null);
  var cleanup = useCallback(() => {
    clearTimeout(timer.current);

    if (document.body) {
      document.body.removeChild(getElement());
    }
  }, []);
  useEffect(() => {
    return cleanup;
  }, [cleanup]);
  return useCallback(content => {
    // eslint-disable-next-line no-console
    console.log(content);
    var element = getElement();
    clearTimeout(timer.current);
    element.innerHTML = content;
    timer.current = setTimeout(cleanup, 1000);
    return timer.current;
  }, [cleanup]);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var SPEECH_TO_TEXT_COMMAND = /*#__PURE__*/createCommand();
var VOICE_COMMANDS = {
  '\n': _ref => {
    var {
      selection
    } = _ref;
    selection.insertParagraph();
  },
  redo: _ref2 => {
    var {
      editor
    } = _ref2;
    editor.dispatchCommand(REDO_COMMAND, undefined);
  },
  undo: _ref3 => {
    var {
      editor
    } = _ref3;
    editor.dispatchCommand(UNDO_COMMAND, undefined);
  }
};
var SUPPORT_SPEECH_RECOGNITION = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;

function SpeechToTextPlugin() {
  var [editor] = useLexicalComposerContext();
  var [isEnabled, setIsEnabled] = useState(false);
  var SpeechRecognition = // @ts-ignore
  window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = useRef(null);
  var report = useReport();
  useEffect(() => {
    if (isEnabled && recognition.current === null) {
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;
      recognition.current.addEventListener('result', event => {
        var resultItem = event.results.item(event.resultIndex);
        var {
          transcript
        } = resultItem.item(0);
        report(transcript);

        if (!resultItem.isFinal) {
          return;
        }

        editor.update(() => {
          var selection = $getSelection();

          if ($isRangeSelection(selection)) {
            var command = VOICE_COMMANDS[transcript.toLowerCase().trim()];

            if (command) {
              command({
                editor,
                selection
              });
            } else if (transcript.match(/\s*\n\s*/)) {
              selection.insertParagraph();
            } else {
              selection.insertText(transcript);
            }
          }
        });
      });
    }

    if (recognition.current) {
      if (isEnabled) {
        recognition.current.start();
      } else {
        recognition.current.stop();
      }
    }

    return () => {
      if (recognition.current !== null) {
        recognition.current.stop();
      }
    };
  }, [SpeechRecognition, editor, isEnabled, report]);
  useEffect(() => {
    return editor.registerCommand(SPEECH_TO_TEXT_COMMAND, _isEnabled => {
      setIsEnabled(_isEnabled);
      return true;
    }, COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

var SpeechToTextPlugin$1 = SUPPORT_SPEECH_RECOGNITION ? SpeechToTextPlugin : () => null;

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function ActionsPlugin(_ref) {
  var [editor] = useLexicalComposerContext();
  var [isEditable, setIsEditable] = useState(() => editor.isEditable());
  var [isSpeechToText, setIsSpeechToText] = useState(false);
  var [connected, setConnected] = useState(false);
  var [isEditorEmpty, setIsEditorEmpty] = useState(true);
  var [modal, showModal] = useModal();
  var {
    yjsDocMap
  } = useCollaborationContext();
  var isCollab = yjsDocMap.get('main') !== undefined;
  var {
    t
  } = useTranslation(['action']);
  useEffect(() => {
    return mergeRegister(editor.registerEditableListener(editable => {
      setIsEditable(editable);
    }), editor.registerCommand(CONNECTED_COMMAND, payload => {
      var isConnected = payload;
      setConnected(isConnected);
      return false;
    }, COMMAND_PRIORITY_EDITOR));
  }, [editor]);
  useEffect(() => {
    return editor.registerUpdateListener(() => {
      editor.getEditorState().read(() => {
        var root = $getRoot();
        var children = root.getChildren();

        if (children.length > 1) {
          setIsEditorEmpty(false);
        } else {
          if ($isParagraphNode(children[0])) {
            var paragraphChildren = children[0].getChildren();
            setIsEditorEmpty(paragraphChildren.length === 0);
          } else {
            setIsEditorEmpty(false);
          }
        }
      });
    });
  }, [editor]);
  var handleMarkdownToggle = useCallback(() => {
    editor.update(() => {
      var root = $getRoot();
      var firstChild = root.getFirstChild();

      if ($isCodeNode(firstChild) && firstChild.getLanguage() === 'markdown') {
        $convertFromMarkdownString(firstChild.getTextContent(), PLAYGROUND_TRANSFORMERS);
      } else {
        var markdown = $convertToMarkdownString(PLAYGROUND_TRANSFORMERS);
        root.clear().append($createCodeNode('markdown').append($createTextNode(markdown)));
      }

      root.selectEnd();
    });
  }, [editor]);
  return /*#__PURE__*/createElement("div", {
    className: "verbum-actions"
  }, SUPPORT_SPEECH_RECOGNITION && /*#__PURE__*/createElement("button", {
    onClick: () => {
      editor.dispatchCommand(SPEECH_TO_TEXT_COMMAND, !isSpeechToText);
      setIsSpeechToText(!isSpeechToText);
    },
    className: 'action-button action-button-mic ' + (isSpeechToText ? 'active' : ''),
    title: t('action:Speech_To_Text'),
    "aria-label": (isSpeechToText ? t('action:Enable') : t('action:Disable')) + " " + t('action:speech_To_Text'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-mic"
  })), /*#__PURE__*/createElement("button", {
    className: "verbum-action-button import",
    onClick: () => importFile(editor),
    title: t('action:Import'),
    "aria-label": t('action:Import_Description'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-import"
  })), /*#__PURE__*/createElement("button", {
    className: "verbum-action-button export",
    onClick: () => exportFile(editor, {
      fileName: "Playground " + new Date().toISOString(),
      source: 'Playground'
    }),
    title: t('action:Export'),
    "aria-label": t('action:Export_Description'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-export"
  })), /*#__PURE__*/createElement("button", {
    className: "verbum-action-button clear",
    disabled: isEditorEmpty,
    onClick: () => {
      showModal(t('action:Clear_Editor'), onClose => /*#__PURE__*/createElement(ShowClearDialog, {
        editor: editor,
        onClose: onClose,
        t: t
      }));
    },
    title: t('action:Clear'),
    "aria-label": t('action:Clear_Description'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "clear"
  })), /*#__PURE__*/createElement("button", {
    className: "verbum-action-button " + (isEditable ? 'unlock' : 'lock'),
    onClick: () => {
      editor.setEditable(!editor.isEditable());
    },
    title: t('action:Read-Only_Mode'),
    "aria-label": (isEditable ? t('action:Unlock') : t('action:Lock')) + " " + t('action:Read-Only_Mode'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: isEditable ? 'unlock' : 'lock'
  })), /*#__PURE__*/createElement("button", {
    className: "verbum-action-button",
    onClick: handleMarkdownToggle,
    title: t('action:Convert_From_Markdown'),
    "aria-label": t('action:Convert_From_Markdown_Description'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-markdown"
  })), isCollab && /*#__PURE__*/createElement("button", {
    className: "verbum-action-button connect",
    onClick: () => {
      editor.dispatchCommand(TOGGLE_CONNECT_COMMAND, !connected);
    },
    title: (connected ? t('action:Disconnect') : t('action:Connect')) + " " + t('action:Collaborative'),
    "aria-label": (connected ? t('action:Disconnect_From') : t('action:Connect_To')) + " " + t('action:Server'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: connected ? t('action:disconnect') : t('action:connect')
  })), modal);
}

function ShowClearDialog(_ref2) {
  var {
    editor,
    onClose,
    t
  } = _ref2;
  return /*#__PURE__*/createElement(Fragment, null, t('action:Confirm_Clear'), /*#__PURE__*/createElement("div", {
    className: "Modal__content"
  }, /*#__PURE__*/createElement(Button, {
    onClick: () => {
      editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
      editor.focus();
      onClose();
    }
  }, t('action:Clear')), ' ', /*#__PURE__*/createElement(Button, {
    onClick: () => {
      editor.focus();
      onClose();
    }
  }, t('action:Cancel'))));
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
var EMAIL_MATCHER = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
var MATCHERS = [text => {
  var match = URL_MATCHER.exec(text);
  return match && {
    index: match.index,
    length: match[0].length,
    text: match[0],
    url: match[0]
  };
}, text => {
  var match = EMAIL_MATCHER.exec(text);
  return match && {
    index: match.index,
    length: match[0].length,
    text: match[0],
    url: "mailto:" + match[0]
  };
}];
function LexicalAutoLinkPlugin() {
  return /*#__PURE__*/createElement(AutoLinkPlugin, {
    matchers: MATCHERS
  });
}

var css_248z$9 = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.CommentPlugin_AddCommentBox {\n  display: block;\n  position: fixed;\n  border-radius: 20px;\n  background-color: white;\n  width: 40px;\n  height: 60px;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n}\n\n.CommentPlugin_AddCommentBox_button {\n  border-radius: 20px;\n  border: 0;\n  background: none;\n  width: 40px;\n  height: 60px;\n  position: relative;\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n}\n\n.CommentPlugin_AddCommentBox_button:hover {\n  background-color: #f6f6f6;\n}\n\ni.verbum-add-comment {\n  background-size: contain;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  vertical-align: -10px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-chat-left-text%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z%22%2F%3E  %3Cpath d%3D%22M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.CommentPlugin_CommentInputBox {\n  display: block;\n  position: fixed;\n  width: 250px;\n  min-height: 80px;\n  background-color: #fff;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  z-index: 24;\n  animation: show-input-box 0.4s ease;\n}\n\n.CommentPlugin_CommentInputBox::before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  margin-left: 0.5em;\n  right: -1em;\n  top: 0;\n  left: calc(50% + 0.25em);\n  box-sizing: border-box;\n  border: 0.5em solid black;\n  border-color: transparent transparent #fff #fff;\n  transform-origin: 0 0;\n  transform: rotate(135deg);\n  box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 0.05);\n}\n\n@keyframes show-input-box {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.CommentPlugin_CommentInputBox_Buttons {\n  display: flex;\n  flex-direction: row;\n  padding: 0 10px 10px 10px;\n  gap: 10px;\n}\n\n.CommentPlugin_CommentInputBox_Button {\n  flex: 1;\n}\n\n.CommentPlugin_CommentInputBox_Button.primary {\n  background-color: rgb(66, 135, 245);\n  font-weight: bold;\n  color: #fff;\n}\n\n.CommentPlugin_CommentInputBox_Button.primary:hover {\n  background-color: rgb(53, 114, 211);\n}\n\n.CommentPlugin_CommentInputBox_Button[disabled] {\n  background-color: #eee;\n  opacity: 0.5;\n  cursor: not-allowed;\n  font-weight: normal;\n  color: #444;\n}\n\n.CommentPlugin_CommentInputBox_Button[disabled]:hover {\n  opacity: 0.5;\n  background-color: #eee;\n}\n\n.CommentPlugin_CommentInputBox_EditorContainer {\n  position: relative;\n  margin: 10px;\n  border-radius: 5px;\n}\n\n.CommentPlugin_CommentInputBox_Editor {\n  position: relative;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  border-radius: 5px;\n  font-size: 15px;\n  caret-color: rgb(5, 5, 5);\n  display: block;\n  padding: 9px 10px 10px 9px;\n  min-height: 80px;\n}\n\n.CommentPlugin_CommentInputBox_Editor:focus {\n  outline: 1px solid rgb(66, 135, 245);\n}\n\n.CommentPlugin_ShowCommentsButton {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  background-color: #ddd;\n  border-radius: 10px;\n}\n\ni.comments {\n  background-size: contain;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  vertical-align: -10px;\n  background-image: url(\"data:image/svg+xml,%3Csvg width%3D%2216%22 height%3D%2216%22 viewBox%3D%220 0 16 16%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath fill-rule%3D%22evenodd%22 clip-rule%3D%22evenodd%22 d%3D%22M13.0001 5.88517V7.05116C13.0001 9.23213 11.2311 11.0001 9.05112 11.0001H6.91715C6.75515 11.0001 6.59715 11.0531 6.46715 11.1511L5.12216 12.1581C4.73417 12.4491 4.71417 13.0331 5.09016 13.3391C5.59716 13.7521 6.24415 14.0001 6.94915 14.0001H9.66612L12.2001 15.9011C12.2881 15.9661 12.3941 16.0001 12.5001 16.0001C12.5761 16.0001 12.6531 15.9831 12.7241 15.9481C12.8931 15.8631 13.0001 15.6901 13.0001 15.5001V14.0001H13.0511C14.6801 14.0001 16.0001 12.6801 16.0001 11.0511V8.00015C16.0001 6.69416 15.1651 5.58217 13.9991 5.17018C13.5131 4.99918 13.0001 5.36918 13.0001 5.88517%22 fill%3D%22%23050505%22%2F%3E%3Cpath fill-rule%3D%22evenodd%22 clip-rule%3D%22evenodd%22 d%3D%22M9.0509 1H2.94897C1.32299 1 0 2.32299 0 3.94897V7.05093C0 8.67691 1.32299 9.9999 2.94897 9.9999H2.99997V11.4999C2.99997 11.6889 3.10797 11.8619 3.27697 11.9469C3.34696 11.9819 3.42396 11.9999 3.49996 11.9999C3.60696 11.9999 3.71196 11.9659 3.79996 11.8999L6.33393 9.9999H9.0509C10.6769 9.9999 11.9999 8.67691 11.9999 7.05093V3.94897C11.9999 2.32299 10.6769 1 9.0509 1%22 fill%3D%22%23050505%22%2F%3E%3C%2Fsvg%3E\");\n  opacity: 0.5;\n  transition: opacity 0.2s linear;\n}\n\n.CommentPlugin_ShowCommentsButton:hover i.comments {\n  opacity: 1;\n}\n\n.CommentPlugin_ShowCommentsButton.active {\n  background-color: #ccc;\n}\n\n.CommentPlugin_CommentsPanel {\n  position: fixed;\n  right: 0;\n  width: 300px;\n  height: calc(100% - 88px);\n  top: 88px;\n  background-color: #fff;\n  border-top-left-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  animation: show-comments 0.2s ease;\n  z-index: 25;\n}\n\n@keyframes show-comments {\n  0% {\n    opacity: 0;\n    transform: translateX(300px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.CommentPlugin_CommentsPanel_Heading {\n  padding-left: 15px;\n  padding-top: 10px;\n  margin: 0;\n  height: 34px;\n  border-bottom: 1px solid #eee;\n  font-size: 20px;\n  display: block;\n  width: 100%;\n  color: #444;\n  overflow: hidden;\n}\n\n.CommentPlugin_CommentsPanel_Footer {\n  border-top: 1px solid #eee;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.CommentPlugin_CommentsPanel_Editor {\n  position: relative;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  border-radius: 5px;\n  font-size: 15px;\n  caret-color: rgb(5, 5, 5);\n  display: block;\n  padding: 9px 10px 10px 9px;\n  min-height: 20px;\n}\n\n.CommentPlugin_CommentsPanel_Editor::before {\n  content: '';\n  width: 30px;\n  height: 20px;\n  float: right;\n}\n\n.CommentPlugin_CommentsPanel_SendButton {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  background: none;\n}\n\n.CommentPlugin_CommentsPanel_SendButton:hover {\n  background: none;\n}\n\ni.send {\n  background-size: contain;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  vertical-align: -10px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-send%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z%22%2F%3E%3C%2Fsvg%3E\");\n  opacity: 0.5;\n  transition: opacity 0.2s linear;\n}\n\n.CommentPlugin_CommentsPanel_SendButton:hover i.send {\n  opacity: 1;\n  filter: invert(45%) sepia(98%) saturate(2299%) hue-rotate(201deg)\n    brightness(100%) contrast(92%);\n}\n\n.CommentPlugin_CommentsPanel_SendButton[disabled] i.send {\n  opacity: 0.3;\n}\n\n.CommentPlugin_CommentsPanel_SendButton:hover[disabled] i.send {\n  opacity: 0.3;\n  filter: none;\n}\n\n.CommentPlugin_CommentsPanel_Empty {\n  color: #777;\n  font-size: 15px;\n  text-align: center;\n  position: absolute;\n  top: calc(50% - 15px);\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.CommentPlugin_CommentsPanel_List {\n  padding: 0;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: absolute;\n  top: 45px;\n  overflow-y: auto;\n}\n\n.CommentPlugin_CommentsPanel_List_Comment {\n  padding: 15px 0 15px 15px;\n  margin: 0;\n  font-size: 14px;\n  position: relative;\n  transition: all 0.2s linear;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread.active\n  .CommentPlugin_CommentsPanel_List_Comment:hover {\n  background-color: inherit;\n}\n\n.CommentPlugin_CommentsPanel_List_Comment p {\n  margin: 0;\n  color: #444;\n}\n\n.CommentPlugin_CommentsPanel_List_Details {\n  color: #444;\n  padding-bottom: 5px;\n  vertical-align: top;\n}\n\n.CommentPlugin_CommentsPanel_List_Comment_Author {\n  font-weight: bold;\n  padding-right: 5px;\n}\n\n.CommentPlugin_CommentsPanel_List_Comment_Time {\n  color: #999;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread {\n  padding: 0 0 0 0;\n  margin: 0;\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  position: relative;\n  transition: all 0.2s linear;\n  border-left: 0 solid #eee;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread:first-child,\n.CommentPlugin_CommentsPanel_List_Thread\n  + .CommentPlugin_CommentsPanel_List_Thread {\n  border-top: none;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread.interactive {\n  cursor: pointer;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread.interactive:hover {\n  background-color: #fafafa;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread.active {\n  background-color: #fafafa;\n  border-left: 15px solid #eee;\n  cursor: inherit;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread_Quote {\n  padding-top: 10px;\n  margin: 0px 10px 0 10px;\n  color: #ccc;\n  display: block;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread_Quote span {\n  color: #222;\n  background-color: rgba(255, 212, 0, 0.4);\n  padding: 1px;\n  line-height: 1.4;\n  display: inline;\n  font-weight: bold;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread_Comments {\n  padding-left: 10px;\n  list-style-type: none;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread_Comments\n  .CommentPlugin_CommentsPanel_List_Comment:first-child {\n  border: none;\n  margin-left: 0;\n  padding-left: 5px;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread_Comments\n  .CommentPlugin_CommentsPanel_List_Comment:first-child.CommentPlugin_CommentsPanel_List_Comment:last-child {\n  padding-bottom: 5px;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread_Comments\n  .CommentPlugin_CommentsPanel_List_Comment {\n  padding-left: 10px;\n  border-left: 5px solid #eee;\n  margin-left: 5px;\n}\n\n.CommentPlugin_CommentsPanel_List_Thread_Editor {\n  position: relative;\n  padding-top: 1px;\n}\n\n.CommentPlugin_CommentsPanel_List_DeleteButton {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 30px;\n  height: 30px;\n  background-color: transparent;\n  opacity: 0;\n}\n\n.CommentPlugin_CommentsPanel_List_Comment:hover\n  .CommentPlugin_CommentsPanel_List_DeleteButton {\n  opacity: 0.5;\n}\n\n.CommentPlugin_CommentsPanel_List_DeleteButton:hover {\n  background-color: transparent;\n  opacity: 1;\n  filter: invert(45%) sepia(98%) saturate(2299%) hue-rotate(201deg)\n    brightness(100%) contrast(92%);\n}\n\n.CommentPlugin_CommentsPanel_List_DeleteButton i.verbum-sticky-note-delete {\n  background-size: contain;\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  height: 15px;\n  width: 15px;\n  vertical-align: -10px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22 fill%3D%22currentColor%22 class%3D%22bi bi-trash3%22 viewBox%3D%220 0 16 16%22%3E  %3Cpath d%3D%22M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z%22%2F%3E%3C%2Fsvg%3E\");\n  transition: opacity 0.2s linear;\n}\n";
styleInject(css_248z$9);

var css_248z$a = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.CommentEditorTheme__paragraph {\n  margin: 0;\n  position: 'relative';\n}\n";
styleInject(css_248z$a);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var INSERT_INLINE_COMMAND = /*#__PURE__*/createCommand();

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function setPopupPosition(editor, rect, rootElementRect) {
  var top = rect.top - 8 + window.pageYOffset;
  var left = rect.left + 340 + window.pageXOffset - editor.offsetWidth + rect.width;

  if (rect.width >= rootElementRect.width - 20 || left > rootElementRect.width - 150) {
    left = rect.left;
    top = rect.top - 50 + window.pageYOffset;
  }

  if (top < rootElementRect.top) {
    top = rect.bottom + 20;
  }

  editor.style.opacity = '1';
  editor.style.top = top + "px";
  editor.style.left = left + "px";
}

function FloatingCharacterStylesEditor(_ref) {
  var {
    editor,
    isLink,
    isBold,
    isItalic,
    isUnderline,
    isCode,
    isStrikethrough,
    isSubscript,
    isSuperscript,
    t
  } = _ref;
  var popupCharStylesEditorRef = useRef(null);
  var mouseDownRef = useRef(false);
  var insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  var insertComment = () => {
    editor.dispatchCommand(INSERT_INLINE_COMMAND, null);
  };

  var updateCharacterStylesEditor = useCallback(() => {
    var selection = $getSelection();
    var popupCharStylesEditorElem = popupCharStylesEditorRef.current;
    var nativeSelection = window.getSelection();

    if (popupCharStylesEditorElem === null) {
      return;
    }

    var rootElement = editor.getRootElement();

    if (selection !== null && nativeSelection !== null && !nativeSelection.isCollapsed && rootElement !== null && rootElement.contains(nativeSelection.anchorNode)) {
      var domRange = nativeSelection.getRangeAt(0);
      var rootElementRect = rootElement.getBoundingClientRect();
      var rect;

      if (nativeSelection.anchorNode === rootElement) {
        var inner = rootElement;

        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild;
        }

        rect = inner.getBoundingClientRect();
      } else {
        rect = domRange.getBoundingClientRect();
      }

      if (!mouseDownRef.current) {
        setPopupPosition(popupCharStylesEditorElem, rect, rootElementRect);
      }
    }
  }, [editor]);
  useEffect(() => {
    var onResize = () => {
      editor.getEditorState().read(() => {
        updateCharacterStylesEditor();
      });
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [editor, updateCharacterStylesEditor]);
  useEffect(() => {
    editor.getEditorState().read(() => {
      updateCharacterStylesEditor();
    });
    return mergeRegister(editor.registerUpdateListener(_ref2 => {
      var {
        editorState
      } = _ref2;
      editorState.read(() => {
        updateCharacterStylesEditor();
      });
    }), editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {
      updateCharacterStylesEditor();
      return false;
    }, COMMAND_PRIORITY_LOW$1));
  }, [editor, updateCharacterStylesEditor]);
  return /*#__PURE__*/createElement("div", {
    ref: popupCharStylesEditorRef,
    className: "verbum-character-style-popup"
  }, /*#__PURE__*/createElement("button", {
    onClick: () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
    },
    className: 'verbum-popup-item spaced ' + (isBold ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_text_as_bold'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-bold"
  })), /*#__PURE__*/createElement("button", {
    onClick: () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
    },
    className: 'verbum-popup-item spaced ' + (isItalic ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_text_as_italics'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-italic"
  })), /*#__PURE__*/createElement("button", {
    onClick: () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
    },
    className: 'verbum-popup-item spaced ' + (isUnderline ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_text_to_underlined'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-underline"
  })), /*#__PURE__*/createElement("button", {
    onClick: () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
    },
    className: 'verbum-popup-item spaced ' + (isStrikethrough ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_text_with_a_strikethrough'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-strikethrough"
  })), /*#__PURE__*/createElement("button", {
    onClick: () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript');
    },
    className: 'verbum-popup-item spaced ' + (isSubscript ? 'active' : ''),
    title: "Subscript",
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_Subscript'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-subscript"
  })), /*#__PURE__*/createElement("button", {
    onClick: () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript');
    },
    className: 'verbum-popup-item spaced ' + (isSuperscript ? 'active' : ''),
    title: "Superscript",
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_Superscript'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-superscript"
  })), /*#__PURE__*/createElement("button", {
    onClick: () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code');
    },
    className: 'verbum-popup-item spaced ' + (isCode ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Insert_code_block'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-code"
  })), /*#__PURE__*/createElement("button", {
    onClick: insertLink,
    className: 'verbum-popup-item spaced ' + (isLink ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Insert_link'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-link"
  })), /*#__PURE__*/createElement("button", {
    onClick: insertComment,
    className: 'verbum-popup-item spaced ' + (isLink ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Add_comment'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-add-comment"
  })));
}

function getSelectedNode(selection) {
  var anchor = selection.anchor;
  var focus = selection.focus;
  var anchorNode = selection.anchor.getNode();
  var focusNode = selection.focus.getNode();

  if (anchorNode === focusNode) {
    return anchorNode;
  }

  var isBackward = selection.isBackward();

  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

function useCharacterStylesPopup(editor) {
  var [isText, setIsText] = useState(false);
  var [isLink, setIsLink] = useState(false);
  var [isBold, setIsBold] = useState(false);
  var [isItalic, setIsItalic] = useState(false);
  var [isUnderline, setIsUnderline] = useState(false);
  var [isStrikethrough, setIsStrikethrough] = useState(false);
  var [isSubscript, setIsSubscript] = useState(false);
  var [isSuperscript, setIsSuperscript] = useState(false);
  var [isCode, setIsCode] = useState(false);
  var {
    t
  } = useTranslation(['toolbar']);
  var updatePopup = useCallback(() => {
    editor.getEditorState().read(() => {
      var selection = $getSelection();
      var nativeSelection = window.getSelection();
      var rootElement = editor.getRootElement();

      if (nativeSelection !== null && (!$isRangeSelection(selection) || rootElement === null || !rootElement.contains(nativeSelection.anchorNode))) {
        setIsText(false);
        return;
      }

      if (!$isRangeSelection(selection)) {
        return;
      }

      var node = getSelectedNode(selection); // Update text format

      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsSubscript(selection.hasFormat('subscript'));
      setIsSuperscript(selection.hasFormat('superscript'));
      setIsCode(selection.hasFormat('code')); // Update links

      var parent = node.getParent();

      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }

      if (!$isCodeHighlightNode(selection.anchor.getNode()) && selection.getTextContent() !== '') {
        setIsText($isTextNode(node));
      } else {
        setIsText(false);
      }
    });
  }, [editor]);
  useEffect(() => {
    document.addEventListener('selectionchange', updatePopup);
    return () => {
      document.removeEventListener('selectionchange', updatePopup);
    };
  }, [updatePopup]);
  useEffect(() => {
    return editor.registerUpdateListener(() => {
      updatePopup();
    });
  }, [editor, updatePopup]);

  if (!isText || isLink) {
    return null;
  }

  return /*#__PURE__*/createPortal( /*#__PURE__*/createElement(FloatingCharacterStylesEditor, {
    editor: editor,
    isLink: isLink,
    isBold: isBold,
    isItalic: isItalic,
    isStrikethrough: isStrikethrough,
    isSubscript: isSubscript,
    isSuperscript: isSuperscript,
    isUnderline: isUnderline,
    isCode: isCode,
    t: t
  }), document.body);
}

function CharacterStylesPopupPlugin() {
  var [editor] = useLexicalComposerContext();
  return useCharacterStylesPopup(editor);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function ClickableLinkPlugin(_ref) {
  var {
    filter,
    newTab = true
  } = _ref;
  var [editor] = useLexicalComposerContext();
  var hasMoved = useRef(false);
  useEffect(() => {
    var prevOffsetX;
    var prevOffsetY;

    function onPointerDown(event) {
      prevOffsetX = event.offsetX;
      prevOffsetY = event.offsetY;
    }

    function onPointerUp(event) {
      hasMoved.current = event.offsetX !== prevOffsetX || event.offsetY !== prevOffsetY;
    }

    function onClick(e) {
      // Based on pointerdown/up we can check if cursor moved during click event,
      // and ignore clicks with moves (to allow link text selection)
      var hasMovedDuringClick = hasMoved.current;
      hasMoved.current = false; // $FlowExpectedError[incompatible-cast] onClick handler will get MouseEvent, safe to cast

      var event = e;
      var linkDomNode = getLinkDomNode(event, editor);

      if (linkDomNode === null) {
        return;
      }

      var href = linkDomNode.getAttribute('href');

      if (linkDomNode.getAttribute('contenteditable') === 'false' || href === undefined) {
        return;
      }

      var linkNode = null;
      editor.update(() => {
        var maybeLinkNode = $getNearestNodeFromDOMNode(linkDomNode);

        if ($isLinkNode(maybeLinkNode)) {
          linkNode = maybeLinkNode;
        }
      });

      if (linkNode === null || filter !== undefined && !filter(event, linkNode)) {
        return;
      }

      if (hasMovedDuringClick) {
        return;
      }

      try {
        window.open(href, newTab || event.metaKey || event.ctrlKey ? '_blank' : '_self');
      } catch (_unused) {// It didn't work, which is better than throwing an exception!
      }
    }

    return editor.registerRootListener((rootElement, prevRootElement) => {
      if (prevRootElement !== null) {
        prevRootElement.removeEventListener('pointerdown', onPointerDown);
        prevRootElement.removeEventListener('pointerup', onPointerUp);
        prevRootElement.removeEventListener('click', onClick);
      }

      if (rootElement !== null) {
        rootElement.addEventListener('click', onClick);
        rootElement.addEventListener('pointerdown', onPointerDown);
        rootElement.addEventListener('pointerup', onPointerUp);
      }
    });
  }, [editor, filter, newTab]);
  return null;
}

function isLinkDomNode(domNode) {
  return domNode.nodeName.toLowerCase() === 'a';
}

function getLinkDomNode(event, editor) {
  return editor.getEditorState().read(() => {
    // $FlowExpectedError[incompatible-cast]
    var domNode = event.target;

    if (isLinkDomNode(domNode)) {
      // $FlowExpectedError[incompatible-cast]
      return domNode;
    }

    if (domNode.parentNode && isLinkDomNode(domNode.parentNode)) {
      // $FlowExpectedError[incompatible-cast]
      return domNode.parentNode;
    }

    return null;
  });
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function CodeHighlightPlugin() {
  var [editor] = useLexicalComposerContext();
  useEffect(() => {
    return registerCodeHighlighting(editor);
  }, [editor]);
  return null;
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var KEYWORDS_REGEX = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function KeywordsPlugin() {
  var [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!editor.hasNodes([KeywordNode])) {
      throw new Error('KeywordsPlugin: KeywordNode not registered on editor');
    }
  }, [editor]);
  var createKeywordNode = useCallback(textNode => {
    return $createKeywordNode(textNode.getTextContent());
  }, []);
  var getKeywordMatch = useCallback(text => {
    var matchArr = KEYWORDS_REGEX.exec(text);

    if (matchArr === null) {
      return null;
    }

    var hashtagLength = matchArr[2].length;
    var startOffset = matchArr.index + matchArr[1].length;
    var endOffset = startOffset + hashtagLength;
    return {
      end: endOffset,
      start: startOffset
    };
  }, []);
  useLexicalTextEntity(getKeywordMatch, KeywordNode, createKeywordNode);
  return null;
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function getElementNodesInSelection(selection) {
  var nodesInSelection = selection.getNodes();

  if (nodesInSelection.length === 0) {
    return new Set([selection.anchor.getNode().getParentOrThrow(), selection.focus.getNode().getParentOrThrow()]);
  }

  return new Set(nodesInSelection.map(n => $isElementNode(n) ? n : n.getParentOrThrow()));
}

function isIndentPermitted(maxDepth) {
  var selection = $getSelection();

  if (!$isRangeSelection(selection)) {
    return false;
  }

  var elementNodesInSelection = getElementNodesInSelection(selection);
  var totalDepth = 0;

  for (var elementNode of elementNodesInSelection) {
    if ($isListNode(elementNode)) {
      totalDepth = Math.max($getListDepth(elementNode) + 1, totalDepth);
    } else if ($isListItemNode(elementNode)) {
      var parent = elementNode.getParent();

      if (!$isListNode(parent)) {
        throw new Error('ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent.');
      }

      totalDepth = Math.max($getListDepth(parent) + 1, totalDepth);
    }
  }

  return totalDepth <= maxDepth;
}

function ListMaxIndentLevelPlugin(_ref) {
  var {
    maxDepth
  } = _ref;
  var [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerCommand(INDENT_CONTENT_COMMAND, () => !isIndentPermitted(maxDepth != null ? maxDepth : 7), COMMAND_PRIORITY_CRITICAL);
  }, [editor, maxDepth]);
  return null;
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */
function MarkdownPlugin() {
  return /*#__PURE__*/createElement(MarkdownShortcutPlugin, {
    transformers: PLAYGROUND_TRANSFORMERS
  });
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var COMMAND_PRIORITY_LOW = 1;
var TAB_TO_FOCUS_INTERVAL = 100;
var lastTabKeyDownTimestamp = 0;
var hasRegisteredKeyDownListener = false;

function registerKeyTimeStampTracker() {
  window.addEventListener('keydown', event => {
    // Tab
    if (event.keyCode === 9) {
      lastTabKeyDownTimestamp = event.timeStamp;
    }
  }, true);
}

function TabFocusPlugin() {
  var [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!hasRegisteredKeyDownListener) {
      registerKeyTimeStampTracker();
      hasRegisteredKeyDownListener = true;
    }

    return editor.registerCommand(FOCUS_COMMAND, event => {
      var selection = $getSelection();

      if ($isRangeSelection(selection)) {
        if (lastTabKeyDownTimestamp + TAB_TO_FOCUS_INTERVAL > event.timeStamp) {
          $setSelection(selection.clone());
        }
      }

      return false;
    }, COMMAND_PRIORITY_LOW);
  }, [editor]);
  return null;
}

var EditorContext = /*#__PURE__*/createContext(null);

var css_248z$b = ".DialogActions {\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n  margin-top: 20px;\n}\n\n.DialogButtonsList {\n  display: flex;\n  flex-direction: column;\n  justify-content: right;\n  margin-top: 20px;\n}\n\n.DialogButtonsList button {\n  margin-bottom: 20px;\n}";
styleInject(css_248z$b);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function DialogButtonsList(_ref) {
  var {
    children
  } = _ref;
  return /*#__PURE__*/createElement("div", {
    className: "DialogButtonsList"
  }, children);
}
function DialogActions(_ref2) {
  var {
    'data-test-id': dataTestId,
    children
  } = _ref2;
  return /*#__PURE__*/createElement("div", {
    className: "DialogActions",
    "data-test-id": dataTestId
  }, children);
}

var css_248z$c = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.Input__wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.Input__label {\n  display: flex;\n  flex: 1;\n  color: #666;\n}\n.Input__input {\n  display: flex;\n  flex: 2;\n  border: 1px solid #999;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n}\n";
styleInject(css_248z$c);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function FileInput(_ref) {
  var {
    accept,
    label,
    onChange: _onChange,
    'data-test-id': dataTestId
  } = _ref;
  return /*#__PURE__*/createElement("div", {
    className: "Input__wrapper"
  }, /*#__PURE__*/createElement("label", {
    className: "Input__label"
  }, label), /*#__PURE__*/createElement("input", {
    type: "file",
    accept: accept,
    className: "Input__input",
    onChange: e => _onChange(e.target.files),
    "data-test-id": dataTestId
  }));
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function TextInput(_ref) {
  var {
    label,
    value,
    onChange: _onChange,
    placeholder = '',
    'data-test-id': dataTestId
  } = _ref;
  return /*#__PURE__*/createElement("div", {
    className: "Input__wrapper"
  }, /*#__PURE__*/createElement("label", {
    className: "Input__label"
  }, label), /*#__PURE__*/createElement("input", {
    type: "text",
    className: "Input__input",
    placeholder: placeholder,
    value: value,
    onChange: e => {
      _onChange(e.target.value);
    },
    "data-test-id": dataTestId
  }));
}

var CAN_USE_DOM$1 = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

var getDOMSelection = targetWindow => CAN_USE_DOM$1 ? (targetWindow || window).getSelection() : null;

var INSERT_IMAGE_COMMAND = /*#__PURE__*/createCommand('INSERT_IMAGE_COMMAND');
function InsertImageUriDialogBody(_ref) {
  var {
    onClick: _onClick
  } = _ref;
  var [src, setSrc] = useState('');
  var [altText, setAltText] = useState('');
  var isDisabled = src === '';
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(TextInput, {
    label: "Image URL",
    placeholder: "i.e. https://source.unsplash.com/random",
    onChange: setSrc,
    value: src,
    "data-test-id": "image-modal-url-input"
  }), /*#__PURE__*/createElement(TextInput, {
    label: "Alt Text",
    placeholder: "Random unsplash image",
    onChange: setAltText,
    value: altText,
    "data-test-id": "image-modal-alt-text-input"
  }), /*#__PURE__*/createElement(DialogActions, null, /*#__PURE__*/createElement(Button, {
    "data-test-id": "image-modal-confirm-btn",
    disabled: isDisabled,
    onClick: () => _onClick({
      altText,
      src
    })
  }, "Confirm")));
}
function InsertImageUploadedDialogBody(_ref2) {
  var {
    onClick: _onClick2
  } = _ref2;
  var [src, setSrc] = useState('');
  var [altText, setAltText] = useState('');
  var isDisabled = src === '';

  var loadImage = files => {
    var reader = new FileReader();

    reader.onload = function () {
      if (typeof reader.result === 'string') {
        setSrc(reader.result);
      }

      return '';
    };

    if (files !== null) {
      reader.readAsDataURL(files[0]);
    }
  };

  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(FileInput, {
    label: "Image Upload",
    onChange: loadImage,
    accept: "image/*",
    "data-test-id": "image-modal-file-upload"
  }), /*#__PURE__*/createElement(TextInput, {
    label: "Alt Text",
    placeholder: "Descriptive alternative text",
    onChange: setAltText,
    value: altText,
    "data-test-id": "image-modal-alt-text-input"
  }), /*#__PURE__*/createElement(DialogActions, null, /*#__PURE__*/createElement(Button, {
    "data-test-id": "image-modal-file-upload-btn",
    disabled: isDisabled,
    onClick: () => _onClick2({
      altText,
      src
    })
  }, "Confirm")));
}
var InsertImageDialog = _ref3 => {
  var {
    activeEditor,
    onClose
  } = _ref3;
  var [mode, setMode] = useState(null);
  var hasModifier = useRef(false);
  useEffect(() => {
    hasModifier.current = false;

    var handler = e => {
      hasModifier.current = e.altKey;
    };

    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [activeEditor]);

  var onClick = payload => {
    activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
    onClose();
  };

  return /*#__PURE__*/createElement(Fragment, null, !mode && /*#__PURE__*/createElement(DialogButtonsList, null, /*#__PURE__*/createElement(Button, {
    "data-test-id": "image-modal-option-url",
    onClick: () => setMode('url')
  }, "URL"), /*#__PURE__*/createElement(Button, {
    "data-test-id": "image-modal-option-file",
    onClick: () => setMode('file')
  }, "File")), mode === 'url' && /*#__PURE__*/createElement(InsertImageUriDialogBody, {
    onClick: onClick
  }), mode === 'file' && /*#__PURE__*/createElement(InsertImageUploadedDialogBody, {
    onClick: onClick
  }));
};
function ImagesPlugin(_ref4) {
  var {
    captionsEnabled,
    maxWidth
  } = _ref4;
  var [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!editor.hasNodes([ImageNode])) {
      throw new Error('ImagesPlugin: ImageNode not registered on editor');
    }

    return mergeRegister(editor.registerCommand(INSERT_IMAGE_COMMAND, payload => {
      var imageNode = $createImageNode(_extends({}, payload, {
        maxWidth: maxWidth
      }));
      $insertNodes([imageNode]);

      if ($isRootOrShadowRoot(imageNode.getParentOrThrow())) {
        $wrapNodeInElement(imageNode, $createParagraphNode).selectEnd();
      }

      return true;
    }, COMMAND_PRIORITY_EDITOR), editor.registerCommand(DRAGSTART_COMMAND, event => {
      return onDragStart(event);
    }, COMMAND_PRIORITY_HIGH), editor.registerCommand(DRAGOVER_COMMAND, event => {
      return onDragover(event);
    }, COMMAND_PRIORITY_LOW$1), editor.registerCommand(DROP_COMMAND, event => {
      return onDrop(event, editor);
    }, COMMAND_PRIORITY_HIGH));
  }, [captionsEnabled, editor]);
  return null;
}
var TRANSPARENT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
var img = /*#__PURE__*/document.createElement('img');
img.src = TRANSPARENT_IMAGE;

function onDragStart(event) {
  var node = getImageNodeInSelection();

  if (!node) {
    return false;
  }

  var dataTransfer = event.dataTransfer;

  if (!dataTransfer) {
    return false;
  }

  dataTransfer.setData('text/plain', '_');
  dataTransfer.setDragImage(img, 0, 0);
  dataTransfer.setData('application/x-lexical-drag', JSON.stringify({
    data: {
      altText: node.__altText,
      caption: node.__caption,
      height: node.__height,
      key: node.getKey(),
      maxWidth: node.__maxWidth,
      showCaption: node.__showCaption,
      src: node.__src,
      width: node.__width
    },
    type: 'image'
  }));
  return true;
}

function onDragover(event) {
  var node = getImageNodeInSelection();

  if (!node) {
    return false;
  }

  if (!canDropImage(event)) {
    event.preventDefault();
  }

  return true;
}

function onDrop(event, editor) {
  var node = getImageNodeInSelection();

  if (!node) {
    return false;
  }

  var data = getDragImageData(event);

  if (!data) {
    return false;
  }

  event.preventDefault();

  if (canDropImage(event)) {
    var range = getDragSelection(event);
    node.remove();
    var rangeSelection = $createRangeSelection();

    if (range !== null && range !== undefined) {
      rangeSelection.applyDOMRange(range);
    }

    $setSelection(rangeSelection);
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, data);
  }

  return true;
}

function getImageNodeInSelection() {
  var selection = $getSelection();

  if (!$isNodeSelection(selection)) {
    return null;
  }

  var nodes = selection.getNodes();
  var node = nodes[0];
  return $isImageNode(node) ? node : null;
}

function getDragImageData(event) {
  var _event$dataTransfer;

  var dragData = (_event$dataTransfer = event.dataTransfer) == null ? void 0 : _event$dataTransfer.getData('application/x-lexical-drag');

  if (!dragData) {
    return null;
  }

  var {
    type,
    data
  } = JSON.parse(dragData);

  if (type !== 'image') {
    return null;
  }

  return data;
}

function canDropImage(event) {
  var target = event.target;
  return !!(target && target instanceof HTMLElement && !target.closest('code, span.editor-image') && target.parentElement && target.parentElement.closest('div.ContentEditable__root'));
}

function getDragSelection(event) {
  var range;
  var target = event.target;
  var targetWindow = target == null ? null : target.nodeType === 9 ? target.defaultView : target.ownerDocument.defaultView;
  var domSelection = getDOMSelection(targetWindow);

  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(event.clientX, event.clientY);
  } else if (event.rangeParent && domSelection !== null) {
    domSelection.collapse(event.rangeParent, event.rangeOffset || 0);
    range = domSelection.getRangeAt(0);
  } else {
    throw Error("Cannot get the selection when dragging");
  }

  return range;
}

var ACCEPTABLE_IMAGE_TYPES = ['image/', 'image/heic', 'image/heif', 'image/gif', 'image/webp'];
function DragDropPaste() {
  var [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerCommand(DRAG_DROP_PASTE, files => {
      _asyncToGenerator(function* () {
        var filesResult = yield mediaFileReader(files, [ACCEPTABLE_IMAGE_TYPES].flatMap(x => x));

        for (var {
          file,
          result
        } of filesResult) {
          if (isMimeType(file, ACCEPTABLE_IMAGE_TYPES)) {
            editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
              altText: file.name,
              src: result
            });
          }
        }
      })();

      return true;
    }, COMMAND_PRIORITY_LOW$1);
  }, [editor]);
  return null;
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var Editor = _ref => {
  var {
    children,
    hashtagsEnabled = false,
    autoFocusEnabled = false,
    autoLinkEnabled = false,
    emojisEnabled = false,
    actionsEnabled = false,
    speechToTextEnabled = false,
    listMaxIndent = 7,
    placeholder = '',
    isEditable = true,
    locale = null,
    onChange: _onChange
  } = _ref;
  var [editor] = useLexicalComposerContext();
  var [activeEditor, setActiveEditor] = useState(editor);
  var editorStateRef = useRef(null);
  var {
    historyState
  } = useSharedHistoryContext();
  var {
    settings: {
      isRichText
    }
  } = useSettings();
  var placeholderComponent = /*#__PURE__*/React__default.createElement(Placeholder, null, placeholder);
  var {
    i18n
  } = useTranslation();
  useEffect(() => {
    editor.setEditable(isEditable);
    if (locale) i18n.changeLanguage(locale);
  }, []);
  return /*#__PURE__*/React__default.createElement(EditorContext.Provider, {
    value: {
      initialEditor: editor,
      activeEditor,
      setActiveEditor
    }
  }, children, /*#__PURE__*/React__default.createElement("div", {
    className: "verbum-editor-container"
  }, autoFocusEnabled && /*#__PURE__*/React__default.createElement(AutoFocusPlugin, null), /*#__PURE__*/React__default.createElement(ClearEditorPlugin, null), hashtagsEnabled && /*#__PURE__*/React__default.createElement(HashtagPlugin, null), /*#__PURE__*/React__default.createElement(KeywordsPlugin, null), speechToTextEnabled && /*#__PURE__*/React__default.createElement(SpeechToTextPlugin$1, null), /*#__PURE__*/React__default.createElement(DragDropPaste, null), autoLinkEnabled && /*#__PURE__*/React__default.createElement(LexicalAutoLinkPlugin, null), /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(RichTextPlugin, {
    contentEditable: /*#__PURE__*/React__default.createElement(LexicalContentEditable, null),
    placeholder: placeholderComponent,
    ErrorBoundary: LexicalErrorBoundary
  }), /*#__PURE__*/React__default.createElement(OnChangePlugin, {
    onChange: editorState => {
      _onChange == null ? void 0 : _onChange(JSON.stringify(editorState), activeEditor);
      return editorStateRef.current = editorState;
    }
  }), /*#__PURE__*/React__default.createElement(MarkdownPlugin, null), /*#__PURE__*/React__default.createElement(CodeHighlightPlugin, null), /*#__PURE__*/React__default.createElement(ListPlugin, null), /*#__PURE__*/React__default.createElement(CheckListPlugin, null), /*#__PURE__*/React__default.createElement(ListMaxIndentLevelPlugin, {
    maxDepth: listMaxIndent
  }), /*#__PURE__*/React__default.createElement(LinkPlugin, null), /*#__PURE__*/React__default.createElement(ClickableLinkPlugin, null), /*#__PURE__*/React__default.createElement(CharacterStylesPopupPlugin, null), /*#__PURE__*/React__default.createElement(TabFocusPlugin, null)), /*#__PURE__*/React__default.createElement(HistoryPlugin, {
    externalHistoryState: historyState
  }), actionsEnabled && /*#__PURE__*/React__default.createElement(ActionsPlugin, {
    isRichText: isRichText
  })));
};

function getSelectedNode$1(selection) {
  var anchor = selection.anchor;
  var focus = selection.focus;
  var anchorNode = selection.anchor.getNode();
  var focusNode = selection.focus.getNode();

  if (anchorNode === focusNode) {
    return anchorNode;
  }

  var isBackward = selection.isBackward();

  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

var ToolbarContext = /*#__PURE__*/createContext(null);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function DropDown(_ref) {
  var {
    buttonLabel,
    buttonAriaLabel,
    buttonClassName,
    buttonIconClassName,
    children,
    stopCloseOnClickSelf
  } = _ref;
  var dropDownRef = useRef(null);
  var buttonRef = useRef(null);
  var [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    var button = buttonRef.current;
    var dropDown = dropDownRef.current;

    if (showDropDown && button !== null && dropDown !== null) {
      var {
        top,
        left
      } = button.getBoundingClientRect();
      dropDown.style.top = top + 40 + "px";
      dropDown.style.left = Math.min(left, window.innerWidth - dropDown.offsetWidth - 20) + "px";
    }
  }, [dropDownRef, buttonRef, showDropDown]);
  useEffect(() => {
    var button = buttonRef.current;

    if (button !== null && showDropDown) {
      var handle = event => {
        var target = event.target;

        if (stopCloseOnClickSelf) {
          if (dropDownRef.current.contains(target)) return;
        }

        if (!button.contains(target)) {
          setShowDropDown(false);
        }
      };

      document.addEventListener('click', handle);
      return () => {
        document.removeEventListener('click', handle);
      };
    }
  }, [dropDownRef, buttonRef, showDropDown, stopCloseOnClickSelf]);
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("button", {
    "aria-label": buttonAriaLabel || buttonLabel,
    className: buttonClassName,
    onClick: () => setShowDropDown(!showDropDown),
    ref: buttonRef,
    type: "button"
  }, buttonIconClassName && /*#__PURE__*/createElement("span", {
    className: buttonIconClassName
  }), buttonLabel && /*#__PURE__*/createElement("span", {
    className: "verbum-text verbum-dropdown-button-text"
  }, buttonLabel), /*#__PURE__*/createElement("i", {
    className: "verbum-chevron-down"
  })), showDropDown && /*#__PURE__*/createPortal( /*#__PURE__*/createElement("div", {
    className: "verbum-dropdown",
    ref: dropDownRef
  }, children), document.body));
}

function Divider() {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "verbum-divider"
  });
}

var AlignDropdown = () => {
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    isRTL
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement(DropDown, {
    buttonLabel: t('toolbar:alignDropdown.Title'),
    buttonAriaLabel: t('toolbar:alignDropdown.Description'),
    buttonClassName: "verbum-toolbar-item spaced alignment",
    buttonIconClassName: "verbum-icon verbum-left-align"
  }, /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-left-align"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.LeftAlign'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-center-align"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.CenterAlign'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-right-align"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.RightAlign'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-justify-align"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.JustifyAlign'))), /*#__PURE__*/React__default.createElement(Divider, null), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: 'icon ' + (isRTL ? 'indent' : 'outdent')
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.Outdent'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: 'icon ' + (isRTL ? 'outdent' : 'indent')
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.Indent'))));
};

var css_248z$d = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n.ToolbarPlugin__dialogActions {\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n  margin-top: 20px;\n}\n\n.ToolbarPlugin__dialogButtonsList {\n  display: flex;\n  flex-direction: column;\n  justify-content: right;\n  margin-top: 20px;\n}\n\n.ToolbarPlugin__dialogButtonsList button {\n  margin-bottom: 20px;\n}\n";
styleInject(css_248z$d);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */
var IS_APPLE = CAN_USE_DOM && /*#__PURE__*/ /Mac|iPod|iPhone|iPad/.test(navigator.platform);
// export const IS_WINDOWS: boolean = CAN_USE_DOM && /Win/.test(navigator.platform);
// export const IS_CHROME: boolean = CAN_USE_DOM && /^(?=.*Chrome).*/i.test(navigator.userAgent);
// export const canUseTextInputEvent: boolean = CAN_USE_DOM && 'TextEvent' in window && !documentMode;

var UndoButton = () => {
  var {
    canUndo
  } = useContext(ToolbarContext);
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    t
  } = useTranslation('toolbar');
  return /*#__PURE__*/createElement("button", {
    disabled: !canUndo,
    onClick: () => {
      activeEditor.dispatchCommand(UNDO_COMMAND, undefined);
    },
    title: IS_APPLE ? t('toolbar:undoButton.Title') + " (\u2318Z)" : t('toolbar:undoButton.Title') + " (Ctrl+Z)",
    className: "verbum-toolbar-item spaced",
    "aria-label": t('toolbar:undoButton.Description'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-undo"
  }));
};

var RedoButton = () => {
  var {
    canRedo
  } = useContext(ToolbarContext);
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    t
  } = useTranslation('toolbar');
  return /*#__PURE__*/createElement("button", {
    disabled: !canRedo,
    onClick: () => {
      activeEditor.dispatchCommand(REDO_COMMAND, undefined);
    },
    title: IS_APPLE ? t('toolbar:redoButton.Title') + " (\u2318Y)" : t('toolbar:redoButton.Title') + " (Ctrl+Y)",
    className: "verbum-toolbar-item",
    "aria-label": t('toolbar:redoButton.Description'),
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-format verbum-redo"
  }));
};

var Select = _ref => {
  var {
    onChange,
    className,
    options,
    value
  } = _ref;
  return /*#__PURE__*/React__default.createElement("select", {
    className: className,
    onChange: onChange,
    value: value
  }, options.map(_ref2 => {
    var [option, text] = _ref2;
    return /*#__PURE__*/React__default.createElement("option", {
      key: option,
      value: option
    }, text);
  }));
};

var CODE_LANGUAGE_OPTIONS = [['', '- Select language -'], ['c', 'C'], ['clike', 'C-like'], ['css', 'CSS'], ['html', 'HTML'], ['js', 'JavaScript'], ['markdown', 'Markdown'], ['objc', 'Objective-C'], ['plain', 'Plain Text'], ['py', 'Python'], ['rust', 'Rust'], ['sql', 'SQL'], ['swift', 'Swift'], ['xml', 'XML']];

var CodeLanguageDropdown = () => {
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    selectedElementKey,
    codeLanguage
  } = useContext(ToolbarContext);
  var onCodeLanguageSelect = useCallback(e => {
    activeEditor.update(() => {
      if (selectedElementKey !== null) {
        var node = $getNodeByKey(selectedElementKey);

        if ($isCodeNode(node)) {
          console.log(e.target.value);
          node.setLanguage(e.target.value);
        }
      }
    });
  }, [activeEditor, selectedElementKey]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Select, {
    className: "verbum-toolbar-item code-language",
    onChange: onCodeLanguageSelect,
    options: CODE_LANGUAGE_OPTIONS,
    value: codeLanguage
  }), /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-chevron-down inside"
  }));
};

var BlockFormatDropdown = () => {
  var {
    initialEditor
  } = useContext(EditorContext);
  var {
    blockType
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');

  var formatParagraph = () => {
    if (blockType !== 'paragraph') {
      initialEditor.update(() => {
        var selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createParagraphNode());
        }
      });
    }
  };

  var formatHeading = headingSize => {
    if (blockType !== headingSize) {
      initialEditor.update(() => {
        var selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode(headingSize));
        }
      });
    }
  };

  var formatBulletList = () => {
    if (blockType !== 'bullet') {
      initialEditor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      initialEditor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  var formatCheckList = () => {
    if (blockType !== 'check') {
      initialEditor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
    } else {
      initialEditor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  var formatNumberedList = () => {
    if (blockType !== 'number') {
      initialEditor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      initialEditor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  var formatQuote = () => {
    if (blockType !== 'quote') {
      initialEditor.update(() => {
        var selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createQuoteNode());
        }
      });
    }
  };

  var formatCode = () => {
    if (blockType !== 'code') {
      initialEditor.update(() => {
        var selection = $getSelection();

        if ($isRangeSelection(selection)) {
          if (selection.isCollapsed()) {
            $wrapNodes(selection, () => $createCodeNode());
          } else {
            var textContent = selection.getTextContent();
            var codeNode = $createCodeNode();
            selection.removeText();
            selection.insertNodes([codeNode]);
            selection.insertRawText(textContent);
          }
        }
      });
    }
  };

  return /*#__PURE__*/React__default.createElement(DropDown, {
    buttonLabel: t("blockFormatDropdown." + blockType),
    buttonAriaLabel: t('toolbar:blockFormatDropdown.Description'),
    buttonClassName: "verbum-toolbar-item verbum-block-controls",
    buttonIconClassName: 'icon block-type ' + blockType
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "verbum-item",
    onClick: formatParagraph,
    type: "button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-icon verbum-paragraph"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:blockFormatDropdown.paragraph')), blockType === 'paragraph' && /*#__PURE__*/React__default.createElement("span", {
    className: "active"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "verbum-item",
    onClick: () => formatHeading('h1'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-icon verbum-h1"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:blockFormatDropdown.h1')), blockType === 'h1' && /*#__PURE__*/React__default.createElement("span", {
    className: "active"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "verbum-item",
    onClick: () => formatHeading('h2'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-icon verbum-h2"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:blockFormatDropdown.h2')), blockType === 'h2' && /*#__PURE__*/React__default.createElement("span", {
    className: "active"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "verbum-item",
    onClick: () => formatHeading('h3'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-icon verbum-h3"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:blockFormatDropdown.h3')), blockType === 'h3' && /*#__PURE__*/React__default.createElement("span", {
    className: "active"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "verbum-item",
    onClick: formatBulletList,
    type: "button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-icon verbum-bullet-list"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:blockFormatDropdown.bullet')), blockType === 'bullet' && /*#__PURE__*/React__default.createElement("span", {
    className: "active"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "verbum-item",
    onClick: formatNumberedList,
    type: "button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-icon verbum-numbered-list"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:blockFormatDropdown.number')), blockType === 'number' && /*#__PURE__*/React__default.createElement("span", {
    className: "active"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "verbum-item",
    onClick: formatCheckList,
    type: "button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-icon verbum-check-list"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:blockFormatDropdown.check')), blockType === 'check' && /*#__PURE__*/React__default.createElement("span", {
    className: "active"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "verbum-item",
    onClick: formatQuote,
    type: "button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-icon verbum-quote"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:blockFormatDropdown.quote')), blockType === 'quote' && /*#__PURE__*/React__default.createElement("span", {
    className: "active"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "verbum-item",
    onClick: formatCode,
    type: "button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-icon verbum-code"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:blockFormatDropdown.code')), blockType === 'code' && /*#__PURE__*/React__default.createElement("span", {
    className: "active"
  })));
};

function Divider$1() {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "divider"
  });
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var supportedBlockTypes = /*#__PURE__*/new Set(['paragraph', 'quote', 'code', 'h1', 'h2', 'h3', 'bullet', 'number', 'check']);
var CODE_LANGUAGE_MAP = {
  javascript: 'js',
  md: 'markdown',
  plaintext: 'plain',
  python: 'py',
  text: 'plain'
};

var ToolbarPlugin = _ref => {
  var {
    children,
    defaultFontSize = '15px',
    defaultFontColor = '#000',
    defaultBgColor = '#fff',
    defaultFontFamily = 'Arial',
    disableBlockTypeSelect,
    disableUndoRedo
  } = _ref;
  var [alignExists, AlignComponent] = useChild(children, AlignDropdown);
  var {
    initialEditor,
    activeEditor,
    setActiveEditor
  } = useContext(EditorContext);
  var [blockType, setBlockType] = useState('paragraph');
  var [selectedElementKey, setSelectedElementKey] = useState(null);
  var [fontSize, setFontSize] = useState(defaultFontSize);
  var [fontColor, setFontColor] = useState(defaultFontColor);
  var [bgColor, setBgColor] = useState(defaultBgColor);
  var [fontFamily, setFontFamily] = useState(defaultFontFamily);
  var [isLink, setIsLink] = useState(false);
  var [isBold, setIsBold] = useState(false);
  var [isItalic, setIsItalic] = useState(false);
  var [isUnderline, setIsUnderline] = useState(false);
  var [isStrikethrough, setIsStrikethrough] = useState(false);
  var [isSubscript, setIsSubscript] = useState(false);
  var [isSuperscript, setIsSuperscript] = useState(false);
  var [isCode, setIsCode] = useState(false);
  var [canUndo, setCanUndo] = useState(false);
  var [canRedo, setCanRedo] = useState(false);
  var [isRTL, setIsRTL] = useState(false);
  var [codeLanguage, setCodeLanguage] = useState('');
  var updateToolbar = useCallback(() => {
    var selection = $getSelection();

    if ($isRangeSelection(selection)) {
      var anchorNode = selection.anchor.getNode();
      var element = anchorNode.getKey() === 'root' ? anchorNode : anchorNode.getTopLevelElementOrThrow();
      var elementKey = element.getKey();
      var elementDOM = activeEditor.getElementByKey(elementKey); // Update text format

      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsSubscript(selection.hasFormat('subscript'));
      setIsSuperscript(selection.hasFormat('superscript'));
      setIsCode(selection.hasFormat('code'));
      setIsRTL($isParentElementRTL(selection)); // Update links

      var node = getSelectedNode$1(selection);
      var parent = node.getParent();

      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }

      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);

        if ($isListNode(element)) {
          var parentList = $getNearestNodeOfType(anchorNode, ListNode);
          var type = parentList ? parentList.getListType() : element.getListType();
          setBlockType(type);
        } else {
          var _type = $isHeadingNode(element) ? element.getTag() : element.getType();

          setBlockType(_type);

          if ($isCodeNode(element)) {
            var language = element.getLanguage();
            setCodeLanguage(language ? CODE_LANGUAGE_MAP[language] || language : '');
            return;
          }
        }
      } // Hande buttons


      setFontSize($getSelectionStyleValueForProperty(selection, 'font-size', defaultFontSize));
      setFontColor($getSelectionStyleValueForProperty(selection, 'color', defaultFontColor));
      setBgColor($getSelectionStyleValueForProperty(selection, 'background-color', defaultBgColor));
      var font = $getSelectionStyleValueForProperty(selection, 'font-family');
      if (font) setFontFamily(font);
    }
  }, [activeEditor]);
  useEffect(() => {
    return initialEditor.registerCommand(SELECTION_CHANGE_COMMAND, (_payload, newEditor) => {
      updateToolbar();
      setActiveEditor(newEditor);
      return false;
    }, COMMAND_PRIORITY_CRITICAL);
  }, [initialEditor, updateToolbar]);
  useEffect(() => {
    return mergeRegister(activeEditor.registerUpdateListener(_ref2 => {
      var {
        editorState
      } = _ref2;
      editorState.read(() => {
        updateToolbar();
      });
    }), activeEditor.registerCommand(CAN_UNDO_COMMAND, payload => {
      setCanUndo(payload);
      return false;
    }, COMMAND_PRIORITY_CRITICAL), activeEditor.registerCommand(CAN_REDO_COMMAND, payload => {
      setCanRedo(payload);
      return false;
    }, COMMAND_PRIORITY_CRITICAL));
  }, [activeEditor, updateToolbar]);
  var applyStyleText = useCallback(styles => {
    Object.entries(styles).forEach(_ref3 => {
      var [key, value] = _ref3;

      switch (key) {
        case "font-family":
          setFontFamily(value);
          break;

        case "font-size":
          setFontSize(value);
          break;

        case "background-color":
          setBgColor(value);
          break;

        case "color":
          setFontColor(value);
          break;
      }
    });
    activeEditor.update(() => {
      var selection = $getSelection();

      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, styles);
      }
    });
  }, [activeEditor]);
  var insertLink = useCallback(() => {
    if (!isLink) {
      initialEditor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
    } else {
      initialEditor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [initialEditor, isLink]);
  return /*#__PURE__*/createElement(ToolbarContext.Provider, {
    value: {
      isRTL,
      canUndo,
      canRedo,
      fontFamily,
      fontSize,
      fontColor,
      bgColor,
      isBold,
      isItalic,
      isUnderline,
      isCode,
      isLink,
      applyStyleText,
      insertLink,
      isStrikethrough,
      isSubscript,
      isSuperscript,
      selectedElementKey,
      codeLanguage,
      blockType
    }
  }, /*#__PURE__*/createElement("div", {
    className: "verbum-toolbar"
  }, !disableUndoRedo && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(UndoButton, null), /*#__PURE__*/createElement(RedoButton, null), /*#__PURE__*/createElement(Divider$1, null)), !disableBlockTypeSelect && supportedBlockTypes.has(blockType) && activeEditor === initialEditor && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(BlockFormatDropdown, null), /*#__PURE__*/createElement(Divider$1, null)), blockType === 'code' ? /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(CodeLanguageDropdown, null), /*#__PURE__*/createElement(Divider$1, null), alignExists && AlignComponent) : /*#__PURE__*/createElement(Fragment, null, children)));
};

var css_248z$e = ".verbum-dropdown .verbum-item .verbum-icon {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  user-select: none;\n  margin-right: 12px;\n  line-height: 16px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.verbum-mentions-menu {\n  width: 10rem;\n}\n\n.verbum-mention:focus {\n  box-shadow: rgb(180 213 255) 0px 0px 0px 2px;\n  outline: none;\n}\n\n.verbum-typeahead-popover {\n  background: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  margin-top: 1.25rem;\n}\n\n.verbum-typeahead-popover ul {\n  padding: 0;\n  list-style: none;\n  margin: 0;\n  border-radius: 8px;\n  max-height: 200px;\n  overflow-y: scroll;\n}\n\n.verbum-typeahead-popover ul::-webkit-scrollbar {\n  display: none;\n}\n\n.verbum-typeahead-popover ul {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.verbum-typeahead-popover ul li {\n  margin: 0;\n  min-width: 180px;\n  font-size: 14px;\n  outline: none;\n  cursor: pointer;\n  border-radius: 8px;\n}\n\n.verbum-typeahead-popover ul li.selected {\n  background: #eee;\n}\n\n.verbum-typeahead-popover li {\n  margin: 0 8px 0 8px;\n  padding: 8px;\n  color: #050505;\n  cursor: pointer;\n  line-height: 16px;\n  font-size: 15px;\n  display: flex;\n  align-content: center;\n  flex-direction: row;\n  flex-shrink: 0;\n  background-color: #fff;\n  border-radius: 8px;\n  border: 0;\n}\n\n.verbum-typeahead-popover li.active {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  background-size: contain;\n}\n\n.verbum-typeahead-popover li:first-child {\n  border-radius: 8px 8px 0px 0px;\n}\n\n.verbum-typeahead-popover li:last-child {\n  border-radius: 0px 0px 8px 8px;\n}\n\n.verbum-typeahead-popover li:hover {\n  background-color: #eee;\n}\n\n.verbum-typeahead-popover li .verbum-text {\n  display: flex;\n  line-height: 20px;\n  flex-grow: 1;\n  min-width: 150px;\n}";
styleInject(css_248z$e);

var PUNCTUATION = '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';
var NAME = '\\b[A-Z][^\\s' + PUNCTUATION + ']';
var DocumentMentionsRegex = {
  NAME,
  PUNCTUATION
};
var CapitalizedNameMentionsRegex = /*#__PURE__*/new RegExp('(^|[^#])((?:' + DocumentMentionsRegex.NAME + '{' + 1 + ',})$)');
var PUNC = DocumentMentionsRegex.PUNCTUATION;
var TRIGGERS = /*#__PURE__*/['@'].join(''); // Chars we expect to see in a mention (non-space, non-punctuation).

var VALID_CHARS = '[^' + TRIGGERS + PUNC + '\\s]'; // Non-standard series of chars. Each series must be preceded and followed by
// a valid char.

var VALID_JOINS = '(?:' + '\\.[ |$]|' + // E.g. "r. " in "Mr. Smith"
' |' + // E.g. " " in "Josh Duck"
'[' + PUNC + ']|' + // E.g. "-' in "Salier-Hellendag"
')';
var LENGTH_LIMIT = 75;
var AtSignMentionsRegex = /*#__PURE__*/new RegExp('(^|\\s|\\()(' + '[' + TRIGGERS + ']' + '((?:' + VALID_CHARS + VALID_JOINS + '){0,' + LENGTH_LIMIT + '})' + ')$'); // 50 is the longest alias length limit.

var ALIAS_LENGTH_LIMIT = 50; // Regex used to match alias.

var AtSignMentionsRegexAliasRegex = /*#__PURE__*/new RegExp('(^|\\s|\\()(' + '[' + TRIGGERS + ']' + '((?:' + VALID_CHARS + '){0,' + ALIAS_LENGTH_LIMIT + '})' + ')$'); // At most, 5 suggestions are shown in the popup.

var SUGGESTION_LIST_LENGTH_LIMIT = 5;
var mentionsCache = /*#__PURE__*/new Map();

function useMentionLookupService(mentionString, mentionData) {
  var [results, setResults] = useState([]);
  useEffect(() => {
    var cachedResults = mentionsCache.get(mentionString);

    if (mentionString == null) {
      setResults([]);
      return;
    }

    if (cachedResults === null) {
      return;
    } else if (cachedResults !== undefined) {
      setResults(cachedResults);
      return;
    }

    mentionsCache.set(mentionString, null);
    mentionData(mentionString).then(results => {
      mentionsCache.set(mentionString, results);
      setResults(results);
    });
  }, [mentionString]);
  return results;
}

function checkForCapitalizedNameMentions(text, minMatchLength) {
  var match = CapitalizedNameMentionsRegex.exec(text);

  if (match !== null) {
    // The strategy ignores leading whitespace but we need to know it's
    // length to add it to the leadOffset
    var maybeLeadingWhitespace = match[1];
    var matchingString = match[2];

    if (matchingString != null && matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString,
        replaceableString: matchingString
      };
    }
  }

  return null;
}

function checkForAtSignMentions(text, minMatchLength) {
  var match = AtSignMentionsRegex.exec(text);

  if (match === null) {
    match = AtSignMentionsRegexAliasRegex.exec(text);
  }

  if (match !== null) {
    // The strategy ignores leading whitespace but we need to know it's
    // length to add it to the leadOffset
    var maybeLeadingWhitespace = match[1];
    var matchingString = match[3];

    if (matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString,
        replaceableString: match[2]
      };
    }
  }

  return null;
}

function getPossibleQueryMatch(text) {
  var match = checkForAtSignMentions(text, 1);
  return match === null ? checkForCapitalizedNameMentions(text, 3) : match;
}

class MentionTypeaheadOption extends TypeaheadOption {
  constructor(name, picture, url) {
    super(name);
    this.name = name;
    this.picture = picture;
    this.url = url;
  }

}

function MentionsTypeaheadMenuItem(_ref) {
  var {
    index,
    isSelected,
    onClick,
    onMouseEnter,
    option
  } = _ref;
  var className = 'item';

  if (isSelected) {
    className += ' selected';
  }

  return /*#__PURE__*/createElement("li", {
    key: option.key,
    tabIndex: -1,
    className: className,
    ref: option.setRefElement,
    role: "option",
    "aria-selected": isSelected,
    id: 'typeahead-item-' + index,
    onMouseEnter: onMouseEnter,
    onClick: onClick
  }, option.picture, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, option.name));
}

function MentionsPlugin(props) {
  var {
    searchData,
    getTypeaheadValues
  } = props;
  var [editor] = useLexicalComposerContext();
  var [queryString, setQueryString] = useState(null);
  var results = useMentionLookupService(queryString, searchData);
  var checkForSlashTriggerMatch = useBasicTypeaheadTriggerMatch('/', {
    minLength: 0
  });
  var options = useMemo(() => results.map(result => new MentionTypeaheadOption(getTypeaheadValues(result).value, getTypeaheadValues(result).picture, getTypeaheadValues(result).url)).slice(0, SUGGESTION_LIST_LENGTH_LIMIT), [results]);
  var onSelectOption = useCallback((selectedOption, nodeToReplace, closeMenu) => {
    editor.update(() => {
      if (nodeToReplace) {
        var mentionNode = $createMentionNode("@" + selectedOption.name);
        var linkNode = $createAutoLinkNode(selectedOption.url);
        linkNode.append(mentionNode);
        nodeToReplace.replace(linkNode);
        linkNode.select();
      }

      closeMenu();
    });
  }, [editor]);
  var checkForMentionMatch = useCallback(text => {
    var mentionMatch = getPossibleQueryMatch(text);
    var slashMatch = checkForSlashTriggerMatch(text, editor);
    return !slashMatch && mentionMatch ? mentionMatch : null;
  }, [checkForSlashTriggerMatch, editor]);
  return /*#__PURE__*/createElement(LexicalTypeaheadMenuPlugin, {
    onQueryChange: setQueryString,
    onSelectOption: onSelectOption,
    triggerFn: checkForMentionMatch,
    options: options,
    menuRenderFn: (anchorElementRef, _ref2) => {
      var {
        selectedIndex,
        selectOptionAndCleanUp,
        setHighlightedIndex
      } = _ref2;
      return anchorElementRef && results.length ? /*#__PURE__*/createPortal( /*#__PURE__*/createElement("div", {
        className: "verbum-typeahead-popover verbum-mentions-menu"
      }, /*#__PURE__*/createElement("ul", null, options.map((option, i) => /*#__PURE__*/createElement(MentionsTypeaheadMenuItem, {
        index: i,
        isSelected: selectedIndex === i,
        onClick: () => {
          setHighlightedIndex(i);
          selectOptionAndCleanUp(option);
        },
        onMouseEnter: () => {
          setHighlightedIndex(i);
        },
        key: option.key,
        option: option
      })))), anchorElementRef.current) : null;
    }
  });
}

var css_248z$f = ".verbum-color-picker-wrapper {\n  padding: 20px;\n}\n\n.verbum-color-picker-basic-color {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n}\n\n.verbum-color-picker-basic-color button {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  height: 16px;\n  width: 16px;\n  cursor: pointer;\n  list-style-type: none;\n}\n\n.verbum-color-picker-basic-color button.active {\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.verbum-color-picker-saturation {\n  width: 100%;\n  position: relative;\n  margin-top: 15px;\n  height: 150px;\n  background-image: linear-gradient(transparent, black),\n    linear-gradient(to right, white, transparent);\n  user-select: none;\n}\n.verbum-color-picker-saturation_cursor {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 0 15px #00000026;\n  box-sizing: border-box;\n  transform: translate(-10px, -10px);\n}\n.verbum-color-picker-hue {\n  width: 100%;\n  position: relative;\n  margin-top: 15px;\n  height: 12px;\n  background-image: linear-gradient(\n    to right,\n    rgb(255, 0, 0),\n    rgb(255, 255, 0),\n    rgb(0, 255, 0),\n    rgb(0, 255, 255),\n    rgb(0, 0, 255),\n    rgb(255, 0, 255),\n    rgb(255, 0, 0)\n  );\n  user-select: none;\n  border-radius: 12px;\n}\n\n.verbum-color-picker-hue_cursor {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n  box-shadow: #0003 0 0 0 0.5px;\n  box-sizing: border-box;\n  transform: translate(-10px, -4px);\n}\n\n.verbum-color-picker-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 20px;\n  margin-top: 15px;\n  font-size: 13px;\n}\n\n.verbum-color-picker-info .verbum-color-picker-color {\n  border: 1px solid #ccc;\n  width: 80px;\n  height: 100%;\n}\n";
styleInject(css_248z$f);

var _excluded = ["color", "children", "onChange"];
var basicColors = ['#d0021b', '#f5a623', '#f8e71c', '#8b572a', '#7ed321', '#417505', '#bd10e0', '#9013fe', '#4a90e2', '#50e3c2', '#b8e986', '#000000', '#4a4a4a', '#9b9b9b', '#ffffff'];
var WIDTH = 214;
var HEIGHT = 150;
function ColorPicker(_ref) {
  var {
    color,
    children,
    onChange
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var [selfColor, setSelfColor] = useState(transformColor('hex', color));
  var saturationPosition = useMemo(() => ({
    x: selfColor.hsv.s / 100 * WIDTH,
    y: (100 - selfColor.hsv.v) / 100 * HEIGHT
  }), [selfColor.hsv.s, selfColor.hsv.v]);
  var huePosition = useMemo(() => ({
    x: selfColor.hsv.h / 360 * WIDTH
  }), [selfColor.hsv]);

  var onMoveSaturation = _ref2 => {
    var {
      x,
      y
    } = _ref2;

    var newHsv = _extends({}, selfColor.hsv, {
      s: x / WIDTH * 100,
      v: 100 - y / HEIGHT * 100
    });

    var newColor = transformColor('hsv', newHsv);
    setSelfColor(newColor);
  };

  var onMoveHue = _ref3 => {
    var {
      x
    } = _ref3;

    var newHsv = _extends({}, selfColor.hsv, {
      h: x / WIDTH * 360
    });

    var newColor = transformColor('hsv', newHsv);
    setSelfColor(newColor);
  };

  useEffect(() => {
    onChange(selfColor.hex);
  }, [selfColor, onChange]);
  useEffect(() => {
    if (color === undefined) return;
    setSelfColor(transformColor('hex', color));
  }, [color]);
  return /*#__PURE__*/createElement(DropDown, Object.assign({}, rest, {
    stopCloseOnClickSelf: true
  }), /*#__PURE__*/createElement("div", {
    className: "verbum-color-picker-wrapper",
    style: {
      width: WIDTH
    }
  }, /*#__PURE__*/createElement("div", {
    className: "verbum-color-picker-basic-color"
  }, basicColors.map(basicColor => /*#__PURE__*/createElement("button", {
    className: basicColor === selfColor.hex ? ' active' : '',
    key: basicColor,
    style: {
      backgroundColor: basicColor
    },
    onClick: () => setSelfColor(transformColor('hex', basicColor)),
    type: "button"
  }))), /*#__PURE__*/createElement(MoveWrapper, {
    className: "verbum-color-picker-saturation",
    style: {
      backgroundColor: "hsl(" + selfColor.hsv.h + ", 100%, 50%)"
    },
    onChange: onMoveSaturation
  }, /*#__PURE__*/createElement("div", {
    className: "verbum-color-picker-saturation_cursor",
    style: {
      backgroundColor: selfColor.hex,
      left: saturationPosition.x,
      top: saturationPosition.y
    }
  })), /*#__PURE__*/createElement(MoveWrapper, {
    className: "verbum-color-picker-hue",
    onChange: onMoveHue
  }, /*#__PURE__*/createElement("div", {
    className: "verbum-color-picker-hue_cursor",
    style: {
      backgroundColor: "hsl(" + selfColor.hsv.h + ", 100%, 50%)",
      left: huePosition.x
    }
  })), /*#__PURE__*/createElement("div", {
    className: "verbum-color-picker-info"
  }, /*#__PURE__*/createElement("span", null, selfColor.hex), /*#__PURE__*/createElement("div", {
    className: "verbum-color-picker-color",
    style: {
      backgroundColor: selfColor.hex
    }
  }))), children);
}

function MoveWrapper(_ref4) {
  var {
    className,
    style,
    onChange,
    children
  } = _ref4;
  var divRef = useRef(null);

  var move = e => {
    if (divRef.current) {
      var {
        current: div
      } = divRef;
      var {
        width,
        height,
        left,
        top
      } = div.getBoundingClientRect();
      var x = clamp(e.clientX - left, width, 0);
      var y = clamp(e.clientY - top, height, 0);
      onChange({
        x,
        y
      });
    }
  };

  var onMouseDown = e => {
    if (e.button !== 0) return;
    move(e);

    var onMouseMove = _e => {
      move(_e);
    };

    var onMouseUp = _e => {
      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);
      move(_e);
    };

    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mouseup', onMouseUp, false);
  };

  return /*#__PURE__*/createElement("div", {
    ref: divRef,
    className: className,
    style: style,
    onMouseDown: onMouseDown
  }, children);
}

function clamp(value, max, min) {
  return value > max ? max : value < min ? min : value;
}

function toHex(value) {
  if (!value.startsWith('#')) {
    var ctx = document.createElement('canvas').getContext('2d');

    if (!ctx) {
      throw new Error('2d context not supported or canvas already initialized');
    }

    ctx.fillStyle = value;
    return ctx.fillStyle;
  } else if (value.length === 4 || value.length === 5) {
    value = value.split('').map((v, i) => i ? v + v : '#').join('');
    return value;
  } else if (value.length === 7 || value.length === 9) {
    return value;
  }

  return '#000000';
}

function hex2rgb(hex) {
  var rbgArr = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
  return {
    b: rbgArr[2],
    g: rbgArr[1],
    r: rbgArr[0]
  };
}

function rgb2hsv(_ref5) {
  var {
    r,
    g,
    b
  } = _ref5;
  r /= 255;
  g /= 255;
  b /= 255;
  var max = Math.max(r, g, b);
  var d = max - Math.min(r, g, b);
  var h = d ? (max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? 2 + (b - r) / d : 4 + (r - g) / d) * 60 : 0;
  var s = max ? d / max * 100 : 0;
  var v = max * 100;
  return {
    h,
    s,
    v
  };
}

function hsv2rgb(_ref6) {
  var {
    h,
    s,
    v
  } = _ref6;
  s /= 100;
  v /= 100;
  var i = ~~(h / 60);
  var f = h / 60 - i;
  var p = v * (1 - s);
  var q = v * (1 - s * f);
  var t = v * (1 - s * (1 - f));
  var index = i % 6;
  var r = Math.round([v, q, p, p, t, v][index] * 255);
  var g = Math.round([t, v, v, q, p, p][index] * 255);
  var b = Math.round([p, p, t, v, v, q][index] * 255);
  return {
    b,
    g,
    r
  };
}

function rgb2hex(_ref7) {
  var {
    b,
    g,
    r
  } = _ref7;
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

function transformColor(format, color) {
  var hex = toHex('#121212');
  var rgb = hex2rgb(hex);
  var hsv = rgb2hsv(rgb);

  if (format === 'hex') {
    var value = color;
    hex = toHex(value);
    rgb = hex2rgb(hex);
    hsv = rgb2hsv(rgb);
  } else if (format === 'rgb') {
    var _value = color;
    rgb = _value;
    hex = rgb2hex(rgb);
    hsv = rgb2hsv(rgb);
  } else if (format === 'hsv') {
    var _value2 = color;
    hsv = _value2;
    rgb = hsv2rgb(hsv);
    hex = rgb2hex(rgb);
  }

  return {
    hex,
    hsv,
    rgb
  };
}

var BackgroundColorPicker = () => {
  var {
    bgColor,
    applyStyleText
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');
  var onBgColorSelect = useCallback(value => {
    applyStyleText({
      'background-color': value
    });
  }, [applyStyleText]);
  return /*#__PURE__*/React__default.createElement(ColorPicker, {
    buttonClassName: "verbum-toolbar-item verbum-color-picker",
    buttonAriaLabel: t('toolbar:backgroundColorPicker.Description'),
    buttonIconClassName: "verbum-icon verbum-bg-color",
    color: bgColor,
    onChange: onBgColorSelect,
    title: "bg color"
  });
};

var BoldButton = () => {
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    isBold
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
    },
    className: 'verbum-toolbar-item spaced ' + (isBold ? 'active' : ''),
    title: IS_APPLE ? t('toolbar:boldButton.Title') + " (\u2318B)" : t('toolbar:boldButton.Title') + " (Ctrl + B)",
    "aria-label": t('toolbar:boldButton.Description') + " " + (IS_APPLE ? '⌘B' : 'Ctrl+B'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-format verbum-bold"
  }));
};

var CodeFormatButton = () => {
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    isCode
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code');
    },
    className: 'verbum-toolbar-item spaced ' + (isCode ? 'active' : ''),
    title: t('toolbar:codeFormatButton.Description'),
    "aria-label": t('toolbar:codeFormatButton.Description'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-format verbum-code"
  }));
};

var css_248z$g = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n@keyframes glimmer-animation {\n  0% {\n    background: #f9f9f9;\n  }\n  .50% {\n    background: #eeeeee;\n  }\n  .100% {\n    background: #f9f9f9;\n  }\n}\n\n.LinkPreview__container {\n  padding-bottom: 12px;\n}\n\n.LinkPreview__imageWrapper {\n  text-align: center;\n}\n\n.LinkPreview__image {\n  max-width: 100%;\n  max-height: 250px;\n  margin: auto;\n}\n\n.LinkPreview__title {\n  margin-left: 12px;\n  margin-right: 12px;\n  margin-top: 4px;\n}\n\n.LinkPreview__description {\n  color: #999;\n  font-size: 90%;\n  margin-left: 12px;\n  margin-right: 12px;\n  margin-top: 4px;\n}\n\n.LinkPreview__domain {\n  color: #999;\n  font-size: 90%;\n  margin-left: 12px;\n  margin-right: 12px;\n  margin-top: 4px;\n}\n\n.LinkPreview__glimmer {\n  background: #f9f9f9;\n  border-radius: 8px;\n  height: 18px;\n  margin-bottom: 8px;\n  margin-left: 12px;\n  margin-right: 12px;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-name: glimmer-animation;\n}\n";
styleInject(css_248z$g);

var PREVIEW_CACHE = {};
var URL_MATCHER$1 = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

function useSuspenseRequest(url) {
  var cached = PREVIEW_CACHE[url];

  if (!url.match(URL_MATCHER$1)) {
    return {
      preview: null
    };
  }

  if (!cached) {
    cached = PREVIEW_CACHE[url] = fetch("/api/link-preview?url=" + encodeURI(url)).then(response => response.json()).then(preview => {
      PREVIEW_CACHE[url] = preview;
      return preview;
    }).catch(() => {
      PREVIEW_CACHE[url] = {
        preview: null
      };
    });
  }

  if (cached instanceof Promise) {
    throw cached;
  }

  return cached;
}

function LinkPreviewContent(_ref) {
  var {
    url
  } = _ref;
  var {
    preview
  } = useSuspenseRequest(url);

  if (preview === null) {
    return null;
  }

  return /*#__PURE__*/createElement("div", {
    className: "LinkPreview__container"
  }, preview.img && /*#__PURE__*/createElement("div", {
    className: "LinkPreview__imageWrapper"
  }, /*#__PURE__*/createElement("img", {
    src: preview.img,
    alt: preview.title,
    className: "LinkPreview__image"
  })), preview.domain && /*#__PURE__*/createElement("div", {
    className: "LinkPreview__domain"
  }, preview.domain), preview.title && /*#__PURE__*/createElement("div", {
    className: "LinkPreview__title"
  }, preview.title), preview.description && /*#__PURE__*/createElement("div", {
    className: "LinkPreview__description"
  }, preview.description));
}

function Glimmer(props) {
  return /*#__PURE__*/createElement("div", Object.assign({
    className: "LinkPreview__glimmer"
  }, props, {
    style: _extends({
      animationDelay: (props.index || 0) * 300
    }, props.style || {})
  }));
}

function LinkPreview(_ref2) {
  var {
    url
  } = _ref2;
  return /*#__PURE__*/createElement(Suspense, {
    fallback: /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Glimmer, {
      style: {
        height: '80px'
      },
      index: 0
    }), /*#__PURE__*/createElement(Glimmer, {
      style: {
        width: '60%'
      },
      index: 1
    }), /*#__PURE__*/createElement(Glimmer, {
      style: {
        width: '80%'
      },
      index: 2
    }))
  }, /*#__PURE__*/createElement(LinkPreviewContent, {
    url: url
  }));
}

function positionEditorElement(editor, rect) {
  if (rect === null) {
    editor.style.opacity = '0';
    editor.style.top = '-1000px';
    editor.style.left = '-1000px';
  } else {
    editor.style.opacity = '1';
    editor.style.top = rect.top + rect.height + window.pageYOffset + 10 + "px";
    editor.style.left = rect.left + window.pageXOffset - editor.offsetWidth / 2 + rect.width / 2 + "px";
  }
}

function FloatingLinkEditor(_ref) {
  var {
    editor
  } = _ref;
  var editorRef = useRef(null);
  var inputRef = useRef(null);
  var [linkUrl, setLinkUrl] = useState('');
  var [isEditMode, setEditMode] = useState(false);
  var [lastSelection, setLastSelection] = useState(null);
  var updateLinkEditor = useCallback(() => {
    var selection = $getSelection();

    if ($isRangeSelection(selection)) {
      var node = getSelectedNode$1(selection);
      var parent = node.getParent();

      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl('');
      }
    }

    var editorElem = editorRef.current;
    var nativeSelection = window.getSelection();
    var activeElement = document.activeElement;

    if (editorElem === null) {
      return;
    }

    var rootElement = editor.getRootElement();

    if (selection !== null && !nativeSelection.isCollapsed && rootElement !== null && rootElement.contains(nativeSelection.anchorNode)) {
      var domRange = nativeSelection.getRangeAt(0);
      var rect;

      if (nativeSelection.anchorNode === rootElement) {
        var inner = rootElement;

        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild;
        }

        rect = inner.getBoundingClientRect();
      } else {
        rect = domRange.getBoundingClientRect();
      }

      positionEditorElement(editorElem, rect);
      setLastSelection(selection);
    } else if (!activeElement || activeElement.className !== 'link-input') {
      positionEditorElement(editorElem, null);
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl('');
    }

    return true;
  }, [editor]);
  useEffect(() => {
    var onResize = () => {
      editor.getEditorState().read(() => {
        updateLinkEditor();
      });
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [editor, updateLinkEditor]);
  useEffect(() => {
    return mergeRegister(editor.registerUpdateListener(_ref2 => {
      var {
        editorState
      } = _ref2;
      editorState.read(() => {
        updateLinkEditor();
      });
    }), editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {
      updateLinkEditor();
      return true;
    }, COMMAND_PRIORITY_LOW$1));
  }, [editor, updateLinkEditor]);
  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);
  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);
  return /*#__PURE__*/React__default.createElement("div", {
    ref: editorRef,
    className: "verbum-link-editor"
  }, isEditMode ? /*#__PURE__*/React__default.createElement("input", {
    ref: inputRef,
    className: "link-input",
    value: linkUrl,
    onChange: event => {
      setLinkUrl(event.target.value);
    },
    onKeyDown: event => {
      if (event.key === 'Enter') {
        event.preventDefault();

        if (lastSelection !== null) {
          if (linkUrl !== '') {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
          }

          setEditMode(false);
        }
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setEditMode(false);
      }
    }
  }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "link-input"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: linkUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, linkUrl), /*#__PURE__*/React__default.createElement("div", {
    className: "link-edit",
    role: "button",
    tabIndex: 0,
    onMouseDown: event => event.preventDefault(),
    onClick: () => {
      setEditMode(true);
    }
  })), /*#__PURE__*/React__default.createElement(LinkPreview, {
    url: linkUrl
  })));
}

var defaultFontFamilyOptions = [['Arial', 'Arial'], ['Courier New', 'Courier New'], ['Georgia', 'Georgia'], ['Times New Roman', 'Times New Roman'], ['Trebuchet MS', 'Trebuchet MS'], ['Verdana', 'Verdana']];

var FontFamilyDropdown = _ref => {
  var {
    fontOptions = defaultFontFamilyOptions
  } = _ref;
  var {
    fontFamily,
    applyStyleText
  } = useContext(ToolbarContext);
  var onFontFamilySelect = useCallback(e => {
    applyStyleText({
      'font-family': e.target.value
    });
  }, [applyStyleText]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Select, {
    className: "verbum-toolbar-item verbum-font-family",
    onChange: onFontFamilySelect,
    options: fontOptions,
    value: fontFamily
  }), /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-chevron-down inside"
  }));
};

var defaultFontSizeOptions = [['10px', '10px'], ['11px', '11px'], ['12px', '12px'], ['13px', '13px'], ['14px', '14px'], ['15px', '15px'], ['16px', '16px'], ['17px', '17px'], ['18px', '18px'], ['19px', '19px'], ['20px', '20px']];

var FontSizeDropdown = _ref => {
  var {
    fontSizeOptions = defaultFontSizeOptions
  } = _ref;
  var {
    fontSize,
    applyStyleText
  } = useContext(ToolbarContext);
  var onFontSizeSelect = useCallback(e => {
    applyStyleText({
      'font-size': e.target.value
    });
  }, [applyStyleText]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Select, {
    className: "verbum-toolbar-item verbum-font-size",
    onChange: onFontSizeSelect,
    options: fontSizeOptions,
    value: fontSize
  }), /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-chevron-down inside"
  }));
};

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var INSERT_POLL_COMMAND = /*#__PURE__*/createCommand();
function PollPlugin() {
  var [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!editor.hasNodes([PollNode])) {
      throw new Error('PollPlugin: PollNode not registered on editor');
    }

    return editor.registerCommand(INSERT_POLL_COMMAND, payload => {
      var selection = $getSelection();

      if ($isRangeSelection(selection)) {
        var question = payload;
        var pollNode = $createPollNode(question);

        if ($isRootNode(selection.anchor.getNode())) {
          selection.insertParagraph();
        }

        selection.insertNodes([pollNode]);
      }

      return true;
    }, COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var INSERT_YOUTUBE_COMMAND = /*#__PURE__*/createCommand();
function YouTubePlugin() {
  var [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!editor.hasNodes([YouTubeNode])) {
      throw new Error('YouTubePlugin: YouTubeNode not registered on editor');
    }

    return editor.registerCommand(INSERT_YOUTUBE_COMMAND, payload => {
      var selection = $getSelection();

      if ($isRangeSelection(selection)) {
        var focusNode = selection.focus.getNode();

        if (focusNode !== null) {
          var youTubeNode = $createYouTubeNode(payload);
          selection.focus.getNode().getTopLevelElementOrThrow().insertAfter(youTubeNode);
          var paragraphNode = $createParagraphNode();
          youTubeNode.insertAfter(paragraphNode);
          paragraphNode.select();
        }
      }

      return true;
    }, COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

var css_248z$h = "/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n *\n */\n\n.TableCellResizer__resizer {\n  position: absolute;\n}\n";
styleInject(css_248z$h);

var MIN_ROW_HEIGHT = 33;
var MIN_COLUMN_WIDTH = 50;

function TableCellResizer(_ref) {
  var {
    editor
  } = _ref;
  var targetRef = useRef(null);
  var resizerRef = useRef(null);
  var tableRectRef = useRef(null);
  var mouseStartPosRef = useRef(null);
  var [mouseCurrentPos, updateMouseCurrentPos] = useState(null);
  var [activeCell, updateActiveCell] = useState(null);
  var [isSelectingGrid, updateIsSelectingGrid] = useState(false);
  var [draggingDirection, updateDraggingDirection] = useState(null);
  useEffect(() => {
    return editor.registerCommand(SELECTION_CHANGE_COMMAND, payload => {
      var selection = $getSelection();
      var isGridSelection = DEPRECATED_$isGridSelection(selection);

      if (isSelectingGrid !== isGridSelection) {
        updateIsSelectingGrid(isGridSelection);
      }

      return false;
    }, COMMAND_PRIORITY_HIGH);
  });
  var resetState = useCallback(() => {
    updateActiveCell(null);
    targetRef.current = null;
    updateDraggingDirection(null);
    mouseStartPosRef.current = null;
    tableRectRef.current = null;
  }, []);
  useEffect(() => {
    var onMouseMove = event => {
      setTimeout(() => {
        var target = event.target;

        if (draggingDirection) {
          updateMouseCurrentPos({
            x: event.clientX,
            y: event.clientY
          });
          return;
        }

        if (resizerRef.current && resizerRef.current.contains(target)) {
          return;
        }

        if (targetRef.current !== target) {
          targetRef.current = target;
          var cell = getCellFromTarget(target);

          if (cell && activeCell !== cell) {
            editor.update(() => {
              var tableCellNode = $getNearestNodeFromDOMNode(cell.elem);

              if (!tableCellNode) {
                throw new Error('TableCellResizer: Table cell node not found.');
              }

              var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
              var tableElement = editor.getElementByKey(tableNode.getKey());

              if (!tableElement) {
                throw new Error('TableCellResizer: Table element not found.');
              }

              targetRef.current = target;
              tableRectRef.current = tableElement.getBoundingClientRect();
              updateActiveCell(cell);
            });
          } else if (cell == null) {
            resetState();
          }
        }
      }, 0);
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [activeCell, draggingDirection, editor, resetState]);

  var isHeightChanging = direction => {
    if (direction === 'bottom') return true;
    return false;
  };

  var updateRowHeight = useCallback(newHeight => {
    if (!activeCell) {
      throw new Error('TableCellResizer: Expected active cell.');
    }

    editor.update(() => {
      var tableCellNode = $getNearestNodeFromDOMNode(activeCell.elem);

      if (!$isTableCellNode(tableCellNode)) {
        throw new Error('TableCellResizer: Table cell node not found.');
      }

      var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex = $getTableRowIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();

      if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
        throw new Error('Expected table cell to be inside of table row.');
      }

      var tableRow = tableRows[tableRowIndex];

      if (!$isTableRowNode(tableRow)) {
        throw new Error('Expected table row');
      }

      tableRow.setHeight(newHeight);
    });
  }, [activeCell, editor]);
  var updateColumnWidth = useCallback(newWidth => {
    if (!activeCell) {
      throw new Error('TableCellResizer: Expected active cell.');
    }

    editor.update(() => {
      var tableCellNode = $getNearestNodeFromDOMNode(activeCell.elem);

      if (!$isTableCellNode(tableCellNode)) {
        throw new Error('TableCellResizer: Table cell node not found.');
      }

      var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex = $getTableColumnIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();

      for (var r = 0; r < tableRows.length; r++) {
        var tableRow = tableRows[r];

        if (!$isTableRowNode(tableRow)) {
          throw new Error('Expected table row');
        }

        var tableCells = tableRow.getChildren();

        if (tableColumnIndex >= tableCells.length || tableColumnIndex < 0) {
          throw new Error('Expected table cell to be inside of table row.');
        }

        var tableCell = tableCells[tableColumnIndex];

        if (!$isTableCellNode(tableCell)) {
          throw new Error('Expected table cell');
        }

        tableCell.setWidth(newWidth);
      }
    });
  }, [activeCell, editor]);
  var toggleResize = useCallback(direction => event => {
    event.preventDefault();
    event.stopPropagation();

    if (!activeCell) {
      throw new Error('TableCellResizer: Expected active cell.');
    }

    if (draggingDirection === direction && mouseStartPosRef.current) {
      var {
        x,
        y
      } = mouseStartPosRef.current;

      if (!activeCell) {
        return;
      }

      var {
        height,
        width
      } = activeCell.elem.getBoundingClientRect();

      if (isHeightChanging(direction)) {
        var heightChange = Math.abs(event.clientY - y);
        var isShrinking = direction === 'bottom' && y > event.clientY;
        updateRowHeight(Math.max(isShrinking ? height - heightChange : heightChange + height, MIN_ROW_HEIGHT));
      } else {
        var widthChange = Math.abs(event.clientX - x);

        var _isShrinking = direction === 'right' && x > event.clientX;

        updateColumnWidth(Math.max(_isShrinking ? width - widthChange : widthChange + width, MIN_COLUMN_WIDTH));
      }

      resetState();
    } else {
      mouseStartPosRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      updateMouseCurrentPos(mouseStartPosRef.current);
      updateDraggingDirection(direction);
    }
  }, [activeCell, draggingDirection, resetState, updateColumnWidth, updateRowHeight]);
  var getResizers = useCallback(() => {
    if (activeCell) {
      var {
        height,
        width,
        top,
        left
      } = activeCell.elem.getBoundingClientRect();
      var styles = {
        bottom: {
          backgroundColor: 'none',
          cursor: 'row-resize',
          height: '10px',
          left: window.pageXOffset + left + "px",
          top: window.pageYOffset + top + height + "px",
          width: width + "px"
        },
        right: {
          backgroundColor: 'none',
          cursor: 'col-resize',
          height: height + "px",
          left: window.pageXOffset + left + width + "px",
          top: window.pageYOffset + top + "px",
          width: '10px'
        }
      };
      var tableRect = tableRectRef.current;

      if (draggingDirection && mouseCurrentPos && tableRect) {
        if (isHeightChanging(draggingDirection)) {
          styles[draggingDirection].left = window.pageXOffset + tableRect.left + "px";
          styles[draggingDirection].top = window.pageYOffset + mouseCurrentPos.y + "px";
          styles[draggingDirection].height = '3px';
          styles[draggingDirection].width = tableRect.width + "px";
        } else {
          styles[draggingDirection].top = window.pageYOffset + tableRect.top + "px";
          styles[draggingDirection].left = window.pageXOffset + mouseCurrentPos.x + "px";
          styles[draggingDirection].width = '3px';
          styles[draggingDirection].height = tableRect.height + "px";
        }

        styles[draggingDirection].backgroundColor = '#adf';
      }

      return styles;
    }

    return {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
  }, [activeCell, draggingDirection, mouseCurrentPos]);
  var resizerStyles = getResizers();
  return /*#__PURE__*/createElement("div", {
    ref: resizerRef
  }, activeCell != null && !isSelectingGrid && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: "TableCellResizer__resizer TableCellResizer__ui",
    style: resizerStyles.right,
    onMouseDown: toggleResize('right'),
    onMouseUp: toggleResize('right')
  }), /*#__PURE__*/createElement("div", {
    className: "TableCellResizer__resizer TableCellResizer__ui",
    style: resizerStyles.bottom,
    onMouseDown: toggleResize('bottom'),
    onMouseUp: toggleResize('bottom')
  })));
}

function TableCellResizerPlugin() {
  var [editor] = useLexicalComposerContext();
  return useMemo(() => /*#__PURE__*/createPortal( /*#__PURE__*/createElement(TableCellResizer, {
    editor: editor
  }), document.body), [editor]);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function TableActionMenu(_ref) {
  var {
    onClose,
    tableCellNode: _tableCellNode,
    setIsMenuOpen,
    contextRef,
    t
  } = _ref;
  var [editor] = useLexicalComposerContext();
  var dropDownRef = useRef(null);
  var [tableCellNode, updateTableCellNode] = useState(_tableCellNode);
  var [selectionCounts, updateSelectionCounts] = useState({
    columns: 1,
    rows: 1
  });
  useEffect(() => {
    return editor.registerMutationListener(TableCellNode, nodeMutations => {
      var nodeUpdated = nodeMutations.get(tableCellNode.getKey()) === 'updated';

      if (nodeUpdated) {
        editor.getEditorState().read(() => {
          updateTableCellNode(tableCellNode.getLatest());
        });
      }
    });
  }, [editor, tableCellNode]);
  useEffect(() => {
    editor.getEditorState().read(() => {
      var selection = $getSelection();

      if (DEPRECATED_$isGridSelection(selection)) {
        var selectionShape = selection.getShape();
        updateSelectionCounts({
          columns: selectionShape.toX - selectionShape.fromX + 1,
          rows: selectionShape.toY - selectionShape.fromY + 1
        });
      }
    });
  }, [editor]);
  useEffect(() => {
    var menuButtonElement = contextRef.current;
    var dropDownElement = dropDownRef.current;

    if (menuButtonElement != null && dropDownElement != null) {
      var menuButtonRect = menuButtonElement.getBoundingClientRect();
      dropDownElement.style.opacity = '1';
      dropDownElement.style.left = menuButtonRect.left + menuButtonRect.width + window.pageXOffset + 5 + "px";
      dropDownElement.style.top = menuButtonRect.top + window.pageYOffset + "px";
    }
  }, [contextRef, dropDownRef]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current != null && contextRef.current != null && !dropDownRef.current.contains(event.target) && !contextRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [setIsMenuOpen, contextRef]);
  var clearTableSelection = useCallback(() => {
    editor.update(() => {
      if (tableCellNode.isAttached()) {
        var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
        var tableElement = editor.getElementByKey(tableNode.getKey());

        if (!tableElement) {
          throw new Error('Expected to find tableElement in DOM');
        }

        var tableSelection = getTableSelectionFromTableElement(tableElement);

        if (tableSelection !== null) {
          tableSelection.clearHighlight();
        }

        tableNode.markDirty();
        updateTableCellNode(tableCellNode.getLatest());
      }

      $setSelection(null);
    });
  }, [editor, tableCellNode]);
  var insertTableRowAtSelection = useCallback(shouldInsertAfter => {
    editor.update(() => {
      var selection = $getSelection();
      var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex;

      if (DEPRECATED_$isGridSelection(selection)) {
        var selectionShape = selection.getShape();
        tableRowIndex = shouldInsertAfter ? selectionShape.toY : selectionShape.fromY;
      } else {
        tableRowIndex = $getTableRowIndexFromTableCellNode(tableCellNode);
      }

      var grid = $getElementGridForTableNode(editor, tableNode);
      $insertTableRow(tableNode, tableRowIndex, shouldInsertAfter, selectionCounts.rows, grid);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, selectionCounts.rows, clearTableSelection, onClose]);
  var insertTableColumnAtSelection = useCallback(shouldInsertAfter => {
    editor.update(() => {
      var selection = $getSelection();
      var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex;

      if (DEPRECATED_$isGridSelection(selection)) {
        var selectionShape = selection.getShape();
        tableColumnIndex = shouldInsertAfter ? selectionShape.toX : selectionShape.fromX;
      } else {
        tableColumnIndex = $getTableColumnIndexFromTableCellNode(tableCellNode);
      }

      var grid = $getElementGridForTableNode(editor, tableNode);
      $insertTableColumn(tableNode, tableColumnIndex, shouldInsertAfter, selectionCounts.columns, grid);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, selectionCounts.columns, clearTableSelection, onClose]);
  var deleteTableRowAtSelection = useCallback(() => {
    editor.update(() => {
      var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex = $getTableRowIndexFromTableCellNode(tableCellNode);
      $removeTableRowAtIndex(tableNode, tableRowIndex);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var deleteTableAtSelection = useCallback(() => {
    editor.update(() => {
      var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      tableNode.remove();
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var deleteTableColumnAtSelection = useCallback(() => {
    editor.update(() => {
      var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex = $getTableColumnIndexFromTableCellNode(tableCellNode);
      $deleteTableColumn(tableNode, tableColumnIndex);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var toggleTableRowIsHeader = useCallback(() => {
    editor.update(() => {
      var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex = $getTableRowIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();

      if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
        throw new Error('Expected table cell to be inside of table row.');
      }

      var tableRow = tableRows[tableRowIndex];

      if (!$isTableRowNode(tableRow)) {
        throw new Error('Expected table row');
      }

      tableRow.getChildren().forEach(tableCell => {
        if (!$isTableCellNode(tableCell)) {
          throw new Error('Expected table cell');
        }

        tableCell.toggleHeaderStyle(TableCellHeaderStates.ROW);
      });
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var toggleTableColumnIsHeader = useCallback(() => {
    editor.update(() => {
      var tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex = $getTableColumnIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();

      for (var r = 0; r < tableRows.length; r++) {
        var tableRow = tableRows[r];

        if (!$isTableRowNode(tableRow)) {
          throw new Error('Expected table row');
        }

        var tableCells = tableRow.getChildren();

        if (tableColumnIndex >= tableCells.length || tableColumnIndex < 0) {
          throw new Error('Expected table cell to be inside of table row.');
        }

        var tableCell = tableCells[tableColumnIndex];

        if (!$isTableCellNode(tableCell)) {
          throw new Error('Expected table cell');
        }

        tableCell.toggleHeaderStyle(TableCellHeaderStates.COLUMN);
      }

      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  return /*#__PURE__*/createPortal(
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  createElement("div", {
    className: "verbum-dropdown",
    ref: dropDownRef,
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/createElement("button", {
    className: "verbum-item",
    onClick: () => insertTableRowAtSelection(false),
    type: "button"
  }, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Insert'), ' ', selectionCounts.rows === 1 ? t('toolbar:tableActionMenuPlugin.row') : selectionCounts.rows + " " + t('toolbar:tableActionMenuPlugin.rows'), ' ', t('toolbar:tableActionMenuPlugin.above'))), /*#__PURE__*/createElement("button", {
    className: "verbum-item",
    onClick: () => insertTableRowAtSelection(true),
    type: "button"
  }, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Insert'), ' ', selectionCounts.rows === 1 ? t('toolbar:tableActionMenuPlugin.row') : selectionCounts.rows + " " + t('toolbar:tableActionMenuPlugin.rows'), ' ', t('toolbar:tableActionMenuPlugin.below'))), /*#__PURE__*/createElement("hr", null), /*#__PURE__*/createElement("button", {
    className: "verbum-item",
    onClick: () => insertTableColumnAtSelection(false),
    type: "button"
  }, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Insert'), ' ', selectionCounts.columns === 1 ? t('toolbar:tableActionMenuPlugin.column') : selectionCounts.columns + " " + t('toolbar:tableActionMenuPlugin.columns'), ' ', t('toolbar:tableActionMenuPlugin.left'))), /*#__PURE__*/createElement("button", {
    className: "verbum-item",
    onClick: () => insertTableColumnAtSelection(true),
    type: "button"
  }, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Insert'), ' ', selectionCounts.columns === 1 ? t('toolbar:tableActionMenuPlugin.column') : selectionCounts.columns + " " + t('toolbar:tableActionMenuPlugin.columns'), ' ', t('toolbar:tableActionMenuPlugin.right'))), /*#__PURE__*/createElement("hr", null), /*#__PURE__*/createElement("button", {
    className: "verbum-item",
    onClick: () => deleteTableColumnAtSelection(),
    type: "button"
  }, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Delete_column'))), /*#__PURE__*/createElement("button", {
    className: "verbum-item",
    onClick: () => deleteTableRowAtSelection(),
    type: "button"
  }, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Delete_row'))), /*#__PURE__*/createElement("button", {
    className: "verbum-item",
    onClick: () => deleteTableAtSelection(),
    type: "button"
  }, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Delete_table'))), /*#__PURE__*/createElement("hr", null), /*#__PURE__*/createElement("button", {
    className: "verbum-item",
    onClick: () => toggleTableRowIsHeader(),
    type: "button"
  }, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, (tableCellNode.__headerState & TableCellHeaderStates.ROW) === TableCellHeaderStates.ROW ? t('action:Remove') : t('action:Add'), ' ', t('toolbar:tableActionMenuPlugin.row_header'))), /*#__PURE__*/createElement("button", {
    className: "verbum-item",
    onClick: () => toggleTableColumnIsHeader(),
    type: "button"
  }, /*#__PURE__*/createElement("span", {
    className: "verbum-text"
  }, (tableCellNode.__headerState & TableCellHeaderStates.COLUMN) === TableCellHeaderStates.COLUMN ? t('action:Remove') : t('action:Add '), ' ', t('toolbar:tableActionMenuPlugin.column_header')))), document.body);
}

function TableCellActionMenuContainer() {
  var [editor] = useLexicalComposerContext();
  var menuButtonRef = useRef(null);
  var menuRootRef = useRef(null);
  var [isMenuOpen, setIsMenuOpen] = useState(false);
  var [tableCellNode, setTableMenuCellNode] = useState(null);
  var {
    t
  } = useTranslation(['toolbar', 'action']);
  var moveMenu = useCallback(() => {
    var menu = menuButtonRef.current;
    var selection = $getSelection();
    var nativeSelection = window.getSelection();
    var activeElement = document.activeElement;

    if (selection == null || menu == null) {
      setTableMenuCellNode(null);
      return;
    }

    var rootElement = editor.getRootElement();

    if ($isRangeSelection(selection) && rootElement !== null && nativeSelection !== null && rootElement.contains(nativeSelection.anchorNode)) {
      var tableCellNodeFromSelection = $getTableCellNodeFromLexicalNode(selection.anchor.getNode());

      if (tableCellNodeFromSelection == null) {
        setTableMenuCellNode(null);
        return;
      }

      var tableCellParentNodeDOM = editor.getElementByKey(tableCellNodeFromSelection.getKey());

      if (tableCellParentNodeDOM == null) {
        setTableMenuCellNode(null);
        return;
      }

      setTableMenuCellNode(tableCellNodeFromSelection);
    } else if (!activeElement) {
      setTableMenuCellNode(null);
    }
  }, [editor]);
  useEffect(() => {
    return editor.registerUpdateListener(() => {
      editor.getEditorState().read(() => {
        moveMenu();
      });
    });
  });
  useEffect(() => {
    var menuButtonDOM = menuButtonRef.current;

    if (menuButtonDOM != null && tableCellNode != null) {
      var tableCellNodeDOM = editor.getElementByKey(tableCellNode.getKey());

      if (tableCellNodeDOM != null) {
        var tableCellRect = tableCellNodeDOM.getBoundingClientRect();
        var menuRect = menuButtonDOM.getBoundingClientRect();
        menuButtonDOM.style.opacity = '1';
        menuButtonDOM.style.left = tableCellRect.left + window.pageXOffset - menuRect.width + tableCellRect.width - 10 + "px";
        menuButtonDOM.style.top = tableCellRect.top + window.pageYOffset + 5 + "px";
      } else {
        menuButtonDOM.style.opacity = '0';
      }
    }
  }, [menuButtonRef, tableCellNode, editor]);
  var prevTableCellDOM = useRef(tableCellNode);
  useEffect(() => {
    if (prevTableCellDOM.current !== tableCellNode) {
      setIsMenuOpen(false);
    }

    prevTableCellDOM.current = tableCellNode;
  }, [prevTableCellDOM, tableCellNode]);
  return /*#__PURE__*/createElement("div", {
    className: "verbum-table-cell-action-button-container",
    ref: menuButtonRef
  }, tableCellNode != null && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("button", {
    className: "verbum-table-cell-action-button chevron-down",
    onClick: e => {
      e.stopPropagation();
      setIsMenuOpen(!isMenuOpen);
    },
    ref: menuRootRef,
    type: "button"
  }, /*#__PURE__*/createElement("i", {
    className: "verbum-chevron-down"
  })), isMenuOpen && /*#__PURE__*/createElement(TableActionMenu, {
    contextRef: menuRootRef,
    setIsMenuOpen: setIsMenuOpen,
    onClose: () => setIsMenuOpen(false),
    tableCellNode: tableCellNode,
    t: t
  })));
}

function TableActionMenuPlugin() {
  return /*#__PURE__*/createPortal( /*#__PURE__*/createElement(TableCellActionMenuContainer, null), document.body);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function HorizontalRulePlugin() {
  var [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerCommand(INSERT_HORIZONTAL_RULE_COMMAND, type => {
      var selection = $getSelection();

      if (!$isRangeSelection(selection)) {
        return false;
      }

      var focusNode = selection.focus.getNode();

      if (focusNode !== null) {
        var horizontalRuleNode = $createHorizontalRuleNode();
        selection.insertParagraph();
        selection.focus.getNode().getTopLevelElementOrThrow().insertBefore(horizontalRuleNode);
      }

      return true;
    }, COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

var YOUTUBE_ID_PARSER = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

var parseYouTubeVideoID = url => {
  var urlMatches = url.match(YOUTUBE_ID_PARSER);
  return (urlMatches == null ? void 0 : urlMatches[2].length) === 11 ? urlMatches[2] : null;
}; //#region Inserting different modules


function InsertImageDialog$1(_ref) {
  var {
    activeEditor,
    onClose
  } = _ref;
  var [mode, setMode] = useState(null);

  var onClick = payload => {
    activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
    onClose();
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !mode && /*#__PURE__*/React__default.createElement("div", {
    className: "ToolbarPlugin__dialogButtonsList"
  }, /*#__PURE__*/React__default.createElement(Button, {
    "data-test-id": "image-modal-option-url",
    onClick: () => setMode('url')
  }, "URL"), /*#__PURE__*/React__default.createElement(Button, {
    "data-test-id": "image-modal-option-file",
    onClick: () => setMode('file')
  }, "File")), mode === 'url' && /*#__PURE__*/React__default.createElement(InsertImageUriDialogBody$1, {
    onClick: onClick
  }), mode === 'file' && /*#__PURE__*/React__default.createElement(InsertImageUploadedDialogBody$1, {
    onClick: onClick
  }));
}

function InsertTableDialog(_ref2) {
  var {
    activeEditor,
    onClose
  } = _ref2;
  var [rows, setRows] = useState('5');
  var [columns, setColumns] = useState('5');

  var onClick = () => {
    activeEditor.dispatchCommand(INSERT_TABLE_COMMAND, {
      columns,
      rows
    });
    onClose();
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TextInput, {
    label: "No of rows",
    onChange: setRows,
    value: rows
  }), /*#__PURE__*/React__default.createElement(TextInput, {
    label: "No of columns",
    onChange: setColumns,
    value: columns
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "ToolbarPlugin__dialogActions",
    "data-test-id": "table-model-confirm-insert"
  }, /*#__PURE__*/React__default.createElement(Button, {
    onClick: onClick
  }, "Confirm")));
}

function InsertPollDialog(_ref3) {
  var {
    activeEditor,
    onClose
  } = _ref3;
  var [question, setQuestion] = useState('');

  var onClick = () => {
    activeEditor.dispatchCommand(INSERT_POLL_COMMAND, question);
    onClose();
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TextInput, {
    label: "Question",
    onChange: setQuestion,
    value: question
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "ToolbarPlugin__dialogActions"
  }, /*#__PURE__*/React__default.createElement(Button, {
    disabled: question.trim() === '',
    onClick: onClick
  }, "Confirm")));
}

function InsertImageUriDialogBody$1(_ref4) {
  var {
    onClick: _onClick
  } = _ref4;
  var [src, setSrc] = useState('');
  var [altText, setAltText] = useState('');
  var isDisabled = src === '';
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TextInput, {
    label: "Image URL",
    placeholder: "i.e. https://source.unsplash.com/random",
    onChange: setSrc,
    value: src,
    "data-test-id": "image-modal-url-input"
  }), /*#__PURE__*/React__default.createElement(TextInput, {
    label: "Alt Text",
    placeholder: "Random unsplash image",
    onChange: setAltText,
    value: altText,
    "data-test-id": "image-modal-alt-text-input"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "ToolbarPlugin__dialogActions"
  }, /*#__PURE__*/React__default.createElement(Button, {
    "data-test-id": "image-modal-confirm-btn",
    disabled: isDisabled,
    onClick: () => _onClick({
      altText,
      src
    })
  }, "Confirm")));
}

function InsertImageUploadedDialogBody$1(_ref5) {
  var {
    onClick: _onClick2
  } = _ref5;
  var [src, setSrc] = useState('');
  var [altText, setAltText] = useState('');
  var isDisabled = src === '';

  var loadImage = files => {
    var reader = new FileReader();

    reader.onload = function () {
      if (typeof reader.result === 'string') {
        setSrc(reader.result);
      }

      return '';
    };

    reader.readAsDataURL(files[0]);
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(FileInput, {
    label: "Image Upload",
    onChange: loadImage,
    accept: "image/*",
    "data-test-id": "image-modal-file-upload"
  }), /*#__PURE__*/React__default.createElement(TextInput, {
    label: "Alt Text",
    placeholder: "Descriptive alternative text",
    onChange: setAltText,
    value: altText,
    "data-test-id": "image-modal-alt-text-input"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "ToolbarPlugin__dialogActions"
  }, /*#__PURE__*/React__default.createElement(Button, {
    "data-test-id": "image-modal-file-upload-btn",
    disabled: isDisabled,
    onClick: () => _onClick2({
      altText,
      src
    })
  }, "Confirm")));
}

function InsertYouTubeDialog(_ref6) {
  var {
    activeEditor,
    onClose
  } = _ref6;
  var [text, setText] = useState('');

  var onClick = () => {
    var videoID = parseYouTubeVideoID(text);

    if (videoID) {
      activeEditor.dispatchCommand(INSERT_YOUTUBE_COMMAND, videoID);
    }

    onClose();
  };

  var isDisabled = text === '' || !parseYouTubeVideoID(text);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TextInput, {
    "data-test-id": "youtube-embed-modal-url",
    label: "YouTube URL",
    placeholder: "i.e. https://www.youtube.com/watch?v=jNQXAC9IVRw",
    onChange: setText,
    value: text
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "ToolbarPlugin__dialogActions"
  }, /*#__PURE__*/React__default.createElement(Button, {
    "data-test-id": "youtube-embed-modal-submit-btn",
    disabled: isDisabled,
    onClick: onClick
  }, "Confirm")));
}

var InsertDropdown = _ref7 => {
  var {
    enableTable = true,
    enableImage = {
      enable: true,
      maxWidth: 1000
    },
    enableYoutube = false,
    enablePoll = false,
    enableHorizontalRule = false,
    enableStickyNote = false
  } = _ref7;
  var {
    initialEditor,
    activeEditor
  } = useContext(EditorContext);
  var [modal, showModal] = useModal();
  return /*#__PURE__*/React__default.createElement("div", null, enableTable && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TablePlugin, null), /*#__PURE__*/React__default.createElement(TableActionMenuPlugin, null), /*#__PURE__*/React__default.createElement(TableCellResizerPlugin, null)), enableYoutube && /*#__PURE__*/React__default.createElement(YouTubePlugin, null), enablePoll && /*#__PURE__*/React__default.createElement(PollPlugin, null), enableImage.enable && /*#__PURE__*/React__default.createElement(ImagesPlugin, {
    maxWidth: enableImage.maxWidth
  }), enableHorizontalRule && /*#__PURE__*/React__default.createElement(HorizontalRulePlugin, null), /*#__PURE__*/React__default.createElement(DropDown, {
    buttonClassName: "verbum-toolbar-item spaced",
    buttonLabel: "Insert",
    buttonAriaLabel: "Insert specialized editor node",
    buttonIconClassName: "verbum-icon verbum-plus"
  }, enableHorizontalRule && /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-horizontal-rule"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, "Horizontal Rule")), enableImage.enable && /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      showModal('Insert Image', onClose => /*#__PURE__*/React__default.createElement(InsertImageDialog$1, {
        activeEditor: activeEditor,
        onClose: onClose
      }));
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-image"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, "Image")), enableTable && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      showModal('Insert Table', onClose => /*#__PURE__*/React__default.createElement(InsertTableDialog, {
        activeEditor: activeEditor,
        onClose: onClose
      }));
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-table"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, "Table"))), enablePoll && /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      showModal('Insert Poll', onClose => /*#__PURE__*/React__default.createElement(InsertPollDialog, {
        activeEditor: activeEditor,
        onClose: onClose
      }));
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-poll"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, "Poll")), enableYoutube && /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      showModal('Insert YouTube Video', onClose => /*#__PURE__*/React__default.createElement(InsertYouTubeDialog, {
        activeEditor: activeEditor,
        onClose: onClose
      }));
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-youtube"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, "YouTube Video")), enableStickyNote && /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      initialEditor.update(() => {
        var root = $getRoot();
        var stickyNode = $createStickyNode(0, 0);
        root.append(stickyNode);
      });
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-sticky"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, "Sticky Note"))), modal);
};

var InsertLinkButton = () => {
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    isLink,
    insertLink
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("button", {
    onClick: insertLink,
    className: 'verbum-toolbar-item spaced ' + (isLink ? 'active' : ''),
    "aria-label": t('toolbar:insertLinkButton.Description'),
    title: t('toolbar:insertLinkButton.Description'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-format verbum-link"
  })), isLink && /*#__PURE__*/createPortal( /*#__PURE__*/React__default.createElement(FloatingLinkEditor, {
    editor: activeEditor
  }), document.body));
};

var ItalicButton = () => {
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    isItalic
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
    },
    className: 'verbum-toolbar-item spaced ' + (isItalic ? 'active' : ''),
    title: IS_APPLE ? t('toolbar:italicButton.Title') + " (\u2318I)" : t('toolbar:italicButton.Title') + " (Ctrl+I)",
    "aria-label": t('toolbar:italicButton.Description') + " " + (IS_APPLE ? '⌘I' : 'Ctrl+I'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-format verbum-italic"
  }));
};

var TextColorPicker = () => {
  var {
    fontColor,
    applyStyleText
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');
  var onFontColorSelect = useCallback(value => {
    applyStyleText({
      color: value
    });
  }, [applyStyleText]);
  return /*#__PURE__*/React__default.createElement(ColorPicker, {
    buttonClassName: "verbum-toolbar-item verbum-color-picker",
    buttonAriaLabel: t('toolbar:textColorPicker.Description'),
    buttonIconClassName: "verbum-icon verbum-font-color",
    color: fontColor,
    onChange: onFontColorSelect,
    title: "text color"
  });
};

var TextFormatDropdown = () => {
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    isStrikethrough,
    isSubscript,
    isSuperscript
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement(DropDown, {
    buttonClassName: "verbum-toolbar-item spaced",
    buttonLabel: "",
    buttonAriaLabel: t('toolbar:textFormatDropdown.Description'),
    buttonIconClassName: "verbum-icon verbum-dropdown-more"
  }, /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
    },
    className: 'item ' + (isStrikethrough ? 'active dropdown-item-active' : ''),
    title: t('toolbar:textFormatDropdown.Options.Strikethrough.Label'),
    "aria-label": t('toolbar:textFormatDropdown.Options.Strikethrough.Description'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-strikethrough"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:textFormatDropdown.Options.Strikethrough.Label'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript');
    },
    className: 'item ' + (isSubscript ? 'active dropdown-item-active' : ''),
    title: t('toolbar:textFormatDropdown.Options.Subscript.Label'),
    "aria-label": t('toolbar:textFormatDropdown.Options.Subscript.Description'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-subscript"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:textFormatDropdown.Options.Subscript.Label'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript');
    },
    className: 'item ' + (isSuperscript ? 'active dropdown-item-active' : ''),
    title: t('toolbar:textFormatDropdown.Options.Superscript.Label'),
    "aria-label": t('toolbar:textFormatDropdown.Options.Superscript.Description'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-superscript"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:textFormatDropdown.Options.Superscript.Label'))));
};

var UnderlineButton = () => {
  var {
    activeEditor
  } = useContext(EditorContext);
  var {
    isUnderline
  } = useContext(ToolbarContext);
  var {
    t
  } = useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
    },
    className: 'verbum-toolbar-item spaced ' + (isUnderline ? 'active' : ''),
    title: IS_APPLE ? t('toolbar:underlineButton.Title') + " (\u2318U)" : t('toolbar:underlineButton.Title') + " (Ctrl+U)",
    "aria-label": t('toolbar:underlineButton.Description') + " " + (IS_APPLE ? '⌘U' : 'Ctrl+U'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-format verbum-underline"
  }));
};



var index = {
  __proto__: null
};

var imageCache = /*#__PURE__*/new Set();

function useSuspenseImage(src) {
  if (!imageCache.has(src)) {
    throw new Promise(resolve => {
      var img = new Image();
      img.src = src;

      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
    });
  }
}

function LazyImage(_ref) {
  var {
    altText,
    className,
    imageRef,
    src,
    width,
    height,
    maxWidth
  } = _ref;
  useSuspenseImage(src);
  return /*#__PURE__*/createElement("img", {
    className: className || undefined,
    src: src,
    alt: altText,
    ref: imageRef,
    style: {
      height,
      maxWidth,
      width
    }
  });
}

function ImageComponent$1(_ref2) {
  var {
    src,
    altText,
    width,
    height,
    maxWidth
  } = _ref2;
  var imageRef = useRef(null);
  return /*#__PURE__*/createElement(Suspense, {
    fallback: null
  }, /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(LazyImage, {
    className: "",
    src: src,
    altText: altText,
    imageRef: imageRef,
    width: width,
    height: height,
    maxWidth: maxWidth
  }))));
}

var ImageComponent$2 = {
  __proto__: null,
  'default': ImageComponent$1
};

export { $createEmojiNode, $createImageNode, $createKeywordNode, $createMentionNode, $createPollNode, $createTypeaheadNode, $createYouTubeNode, $isEmojiNode, $isImageNode, $isKeywordNode, $isMentionNode, $isPollNode, $isYouTubeNode, AlignDropdown, BackgroundColorPicker, BoldButton, CAN_USE_DOM$1 as CAN_USE_DOM, CodeFormatButton, Divider$1 as Divider, Editor, EditorComposer, EditorContext, EmojiNode, FloatingLinkEditor, FontFamilyDropdown, FontSizeDropdown, INSERT_IMAGE_COMMAND, ImageNode, ImagesPlugin, InsertDropdown, InsertImageDialog, InsertImageUploadedDialogBody, InsertImageUriDialogBody, InsertLinkButton, ItalicButton, KeywordNode, MentionNode, MentionsPlugin, PollNode, TextColorPicker, TextFormatDropdown, ToolbarContext, ToolbarPlugin, index as ToolbarTypes, TypeaheadNode, UnderlineButton, YouTubeNode };
//# sourceMappingURL=verbum.esm.js.map
