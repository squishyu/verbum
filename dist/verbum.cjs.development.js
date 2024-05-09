'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var LexicalComposer = require('@lexical/react/LexicalComposer');
var React = require('react');
var React__default = _interopDefault(React);
var code = require('@lexical/code');
var hashtag = require('@lexical/hashtag');
var link = require('@lexical/link');
var list = require('@lexical/list');
var mark = require('@lexical/mark');
var overflow = require('@lexical/overflow');
var LexicalHorizontalRuleNode = require('@lexical/react/LexicalHorizontalRuleNode');
var richText = require('@lexical/rich-text');
var table = require('@lexical/table');
var lexical = require('lexical');
var LexicalCollaborationContext = require('@lexical/react/LexicalCollaborationContext');
var LexicalComposerContext = require('@lexical/react/LexicalComposerContext');
var LexicalCollaborationPlugin = require('@lexical/react/LexicalCollaborationPlugin');
var LexicalHistoryPlugin = require('@lexical/react/LexicalHistoryPlugin');
var LexicalNestedComposer = require('@lexical/react/LexicalNestedComposer');
var LexicalPlainTextPlugin = require('@lexical/react/LexicalPlainTextPlugin');
var LexicalErrorBoundary = _interopDefault(require('@lexical/react/LexicalErrorBoundary'));
var ReactDOM = require('react-dom');
var yWebsocket = require('y-websocket');
var yjs = require('yjs');
var LexicalContentEditable$1 = require('@lexical/react/LexicalContentEditable');
var LexicalBlockWithAlignableContents = require('@lexical/react/LexicalBlockWithAlignableContents');
var LexicalDecoratorBlockNode = require('@lexical/react/LexicalDecoratorBlockNode');
var i18next = require('i18next');
var reactI18next = require('react-i18next');
var LexicalAutoFocusPlugin = require('@lexical/react/LexicalAutoFocusPlugin');
var LexicalCheckListPlugin = require('@lexical/react/LexicalCheckListPlugin');
var LexicalClearEditorPlugin = require('@lexical/react/LexicalClearEditorPlugin');
var LexicalHashtagPlugin = require('@lexical/react/LexicalHashtagPlugin');
var LexicalLinkPlugin = require('@lexical/react/LexicalLinkPlugin');
var LexicalListPlugin = require('@lexical/react/LexicalListPlugin');
var LexicalRichTextPlugin = require('@lexical/react/LexicalRichTextPlugin');
var LexicalOnChangePlugin = require('@lexical/react/LexicalOnChangePlugin');
var file = require('@lexical/file');
var markdown = require('@lexical/markdown');
var utils = require('@lexical/utils');
var yjs$1 = require('@lexical/yjs');
var LexicalAutoLinkPlugin$1 = require('@lexical/react/LexicalAutoLinkPlugin');
var selection = require('@lexical/selection');
require('@lexical/text');
var useLexicalTextEntity = require('@lexical/react/useLexicalTextEntity');
var LexicalMarkdownShortcutPlugin = require('@lexical/react/LexicalMarkdownShortcutPlugin');
var useChild = _interopDefault(require('use-child'));
var LexicalTablePlugin = require('@lexical/react/LexicalTablePlugin');
var LexicalTypeaheadMenuPlugin = require('@lexical/react/LexicalTypeaheadMenuPlugin');

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
class EmojiNode extends lexical.TextNode {
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
var ImageComponent = /*#__PURE__*/React.lazy( // @ts-ignore
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

class ImageNode extends lexical.DecoratorNode {
  constructor(src, altText, maxWidth, width, height, showCaption, caption, captionsEnabled, key) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__maxWidth = maxWidth;
    this.__width = width || 'inherit';
    this.__height = height || 'inherit';
    this.__showCaption = showCaption || false;
    this.__caption = caption || lexical.createEditor();
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
    return /*#__PURE__*/React.createElement(React.Suspense, {
      fallback: null
    }, /*#__PURE__*/React.createElement(ImageComponent, {
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
  return lexical.$applyNodeReplacement(new ImageNode(src, altText, maxWidth, width, height, showCaption, caption, captionsEnabled, key));
}
function $isImageNode(node) {
  return node instanceof ImageNode;
}

class KeywordNode extends lexical.TextNode {
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
class MentionNode extends lexical.TextNode {
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
  return /*#__PURE__*/React.createElement("button", Object.assign({
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
  } = LexicalCollaborationContext.useCollaborationContext();
  var checkboxRef = React.useRef(null);
  var votesArray = option.votes;
  var checkedIndex = votesArray.indexOf(clientID);
  var checked = checkedIndex !== -1;
  var votes = votesArray.length;
  var text = option.text;
  return /*#__PURE__*/React.createElement("div", {
    className: "PollNode__optionContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: joinClasses('PollNode__optionCheckboxWrapper', checked && 'PollNode__optionCheckboxChecked')
  }, /*#__PURE__*/React.createElement("input", {
    ref: checkboxRef,
    className: "PollNode__optionCheckbox",
    type: "checkbox",
    onChange: e => {
      withPollNode(node => {
        node.toggleVote(option, clientID);
      });
    },
    checked: checked
  })), /*#__PURE__*/React.createElement("div", {
    className: "PollNode__optionInputWrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "PollNode__optionInputVotes",
    style: {
      width: (votes === 0 ? 0 : votes / totalVotes * 100) + "%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "PollNode__optionInputVotesCount"
  }, votes > 0 && (votes === 1 ? '1 vote' : votes + " votes")), /*#__PURE__*/React.createElement("input", {
    className: "PollNode__optionInput",
    type: "text",
    value: text,
    onChange: e => {
      withPollNode(node => {
        node.setOptionText(option, e.target.value);
      });
    },
    placeholder: "Option " + (index + 1)
  })), /*#__PURE__*/React.createElement("button", {
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  var totalVotes = React.useMemo(() => getTotalVotes(options), [options]);

  var withPollNode = cb => {
    editor.update(() => {
      var node = lexical.$getNodeByKey(nodeKey);

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

  return /*#__PURE__*/React.createElement("div", {
    className: "PollNode__container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "PollNode__heading"
  }, question), options.map((option, index) => {
    var key = option.uid;
    return /*#__PURE__*/React.createElement(PollOptionComponent, {
      key: key,
      withPollNode: withPollNode,
      option: option,
      index: index,
      options: options,
      totalVotes: totalVotes
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: "PollNode__footer"
  }, /*#__PURE__*/React.createElement(Button, {
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

class PollNode extends lexical.DecoratorNode {
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
    return /*#__PURE__*/React.createElement(PollComponent, {
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
var useLayoutEffectImpl = CAN_USE_DOM ? React.useLayoutEffect : React.useEffect;

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
    doc = new yjs.Doc();
    yjsDocMap.set(id, doc);
  } else {
    doc.load();
  } // @ts-ignore


  return new yWebsocket.WebsocketProvider(WEBSOCKET_ENDPOINT, WEBSOCKET_SLUG + '/' + WEBSOCKET_ID + '/' + id, doc, {
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
var Context = /*#__PURE__*/React.createContext({
  historyState: {
    current: null,
    redoStack: [],
    undoStack: []
  }
});
var useSharedHistoryContext = () => {
  return React.useContext(Context);
};

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
  return /*#__PURE__*/React.createElement(LexicalContentEditable$1.ContentEditable, {
    className: className || 'ContentEditable__root'
  });
}

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
  return /*#__PURE__*/React.createElement("div", {
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  var stickyContainerRef = React.useRef(null);
  var positioningRef = React.useRef({
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  var {
    yjsDocMap
  } = LexicalCollaborationContext.useCollaborationContext();
  var isCollab = yjsDocMap.get('main') !== undefined;
  React.useEffect(() => {
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
  React.useEffect(() => {
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
        var node = lexical.$getNodeByKey(nodeKey);

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
      var node = lexical.$getNodeByKey(nodeKey);

      if ($isStickyNode(node)) {
        node.remove();
      }
    });
  };

  var handleColorChange = () => {
    editor.update(() => {
      var node = lexical.$getNodeByKey(nodeKey);

      if ($isStickyNode(node)) {
        node.toggleColor();
      }
    });
  };

  var {
    historyState
  } = useSharedHistoryContext();
  return /*#__PURE__*/React.createElement("div", {
    ref: stickyContainerRef,
    className: "sticky-note-container"
  }, /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleDelete,
    className: "delete",
    "aria-label": "Delete sticky note",
    title: "Delete"
  }, "X"), /*#__PURE__*/React.createElement("button", {
    onClick: handleColorChange,
    className: "color",
    "aria-label": "Change sticky note color",
    title: "Color"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bucket"
  })), /*#__PURE__*/React.createElement(LexicalNestedComposer.LexicalNestedComposer, {
    initialEditor: caption,
    initialTheme: theme$1
  }, isCollab ? /*#__PURE__*/React.createElement(LexicalCollaborationPlugin.CollaborationPlugin, {
    id: caption.getKey(),
    providerFactory: createWebsocketProvider,
    shouldBootstrap: true
  }) : /*#__PURE__*/React.createElement(LexicalHistoryPlugin.HistoryPlugin, {
    externalHistoryState: historyState
  }), /*#__PURE__*/React.createElement(LexicalPlainTextPlugin.PlainTextPlugin, {
    contentEditable: /*#__PURE__*/React.createElement(LexicalContentEditable, {
      className: "StickyNode__contentEditable"
    }),
    placeholder: /*#__PURE__*/React.createElement(Placeholder, {
      className: "StickyNode__placeholder"
    }, "What's up?"),
    ErrorBoundary: LexicalErrorBoundary
  }))));
}

class StickyNode extends lexical.DecoratorNode {
  constructor(x, y, color, caption, key) {
    super(key);
    this.__x = x;
    this.__y = y;
    this.__caption = caption || lexical.createEditor();
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
    lexical.$setSelection(null);
  }

  toggleColor() {
    var writable = this.getWritable();
    writable.__color = writable.__color === 'pink' ? 'yellow' : 'pink';
  }

  decorate(editor) {
    return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(StickyComponent, {
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

class TypeaheadNode extends lexical.TextNode {
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
  return /*#__PURE__*/React.createElement(LexicalBlockWithAlignableContents.BlockWithAlignableContents, {
    className: className,
    format: format,
    nodeKey: nodeKey
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/" + videoID,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: "YouTube video"
  }));
}

class YouTubeNode extends LexicalDecoratorBlockNode.DecoratorBlockNode {
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
    return /*#__PURE__*/React.createElement(YouTubeComponent, {
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
var PlaygroundNodes = [richText.HeadingNode, list.ListNode, list.ListItemNode, richText.QuoteNode, code.CodeNode, table.TableNode, table.TableCellNode, table.TableRowNode, hashtag.HashtagNode, code.CodeHighlightNode, link.AutoLinkNode, link.LinkNode, overflow.OverflowNode, PollNode, StickyNode, ImageNode, MentionNode, EmojiNode, TypeaheadNode, KeywordNode, LexicalHorizontalRuleNode.HorizontalRuleNode, YouTubeNode, mark.MarkNode];

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
var i18n = /*#__PURE__*/i18next.createInstance({
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
  return /*#__PURE__*/React__default.createElement(LexicalComposer.LexicalComposer, {
    initialConfig: initialConfig
  }, /*#__PURE__*/React__default.createElement(reactI18next.I18nextProvider, {
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

var Context$1 = /*#__PURE__*/React.createContext({
  setOption: (name, value) => {
    return;
  },
  settings: DEFAULT_SETTINGS
});
var useSettings = () => {
  return React.useContext(Context$1);
};

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
  var modalRef = React.useRef();
  React.useEffect(() => {
    if (modalRef.current !== null) {
      modalRef.current.focus();
    }
  }, []);
  React.useEffect(() => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "Modal__overlay",
    role: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Modal__modal",
    tabIndex: -1,
    ref: modalRef
  }, /*#__PURE__*/React.createElement("h2", {
    className: "Modal__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "Modal__closeButton",
    "aria-label": "Close modal",
    type: "button",
    onClick: onClose
  }, "X"), /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(PortalImpl, {
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
  var [modalContent, setModalContent] = React.useState(null);
  var onClose = React.useCallback(() => {
    setModalContent(null);
  }, []);
  var modal = React.useMemo(() => {
    if (modalContent === null) {
      return null;
    }

    var {
      title,
      content,
      closeOnClickOutside
    } = modalContent;
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: onClose,
      title: title,
      closeOnClickOutside: closeOnClickOutside
    }, content);
  }, [modalContent, onClose]);
  var showModal = React.useCallback(function (title, // eslint-disable-next-line no-shadow
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
  dependencies: [LexicalHorizontalRuleNode.HorizontalRuleNode],
  export: node => {
    return LexicalHorizontalRuleNode.$isHorizontalRuleNode(node) ? '***' : null;
  },
  regExp: /^(---|\*\*\*|___)\s?$/,
  replace: (parentNode, _1, _2, isImport) => {
    var line = LexicalHorizontalRuleNode.$createHorizontalRuleNode(); // TODO: Get rid of isImport flag

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
  dependencies: [table.TableNode, table.TableRowNode, table.TableCellNode],
  export: (node, exportChildren) => {
    if (!table.$isTableNode(node)) {
      return null;
    }

    var output = [];

    for (var row of node.getChildren()) {
      var rowOutput = [];

      if (table.$isTableRowNode(row)) {
        for (var cell of row.getChildren()) {
          // It's TableCellNode (hence ElementNode) so it's just to make flow happy
          if (lexical.$isElementNode(cell)) {
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
      if (!lexical.$isParagraphNode(sibling)) {
        break;
      }

      if (sibling.getChildrenSize() !== 1) {
        break;
      }

      var firstChild = sibling.getFirstChild();

      if (!lexical.$isTextNode(firstChild)) {
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

    var table$1 = table.$createTableNode();

    for (var _cells of rows) {
      var tableRow = table.$createTableRowNode();
      table$1.append(tableRow);

      for (var i = 0; i < maxCells; i++) {
        tableRow.append(i < _cells.length ? _cells[i] : createTableCell(null));
      }
    }

    var previousSibling = parentNode.getPreviousSibling();

    if (table.$isTableNode(previousSibling) && getTableColumnsSize(previousSibling) === maxCells) {
      previousSibling.append(...table$1.getChildren());
      parentNode.remove();
    } else {
      parentNode.replace(table$1);
    }

    table$1.selectEnd();
  },
  type: 'element'
};

function getTableColumnsSize(table$1) {
  var row = table$1.getFirstChild();
  return table.$isTableRowNode(row) ? row.getChildrenSize() : 0;
}

var createTableCell = textContent => {
  var cell = table.$createTableCellNode(table.TableCellHeaderStates.NO_STATUS);
  var paragraph = lexical.$createParagraphNode();

  if (textContent != null) {
    paragraph.append(lexical.$createTextNode(textContent.trim()));
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

var PLAYGROUND_TRANSFORMERS = [TABLE, HR, IMAGE, markdown.CHECK_LIST, ...markdown.ELEMENT_TRANSFORMERS, ...markdown.TEXT_FORMAT_TRANSFORMERS, ...markdown.TEXT_MATCH_TRANSFORMERS];

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
  var timer = React.useRef(null);
  var cleanup = React.useCallback(() => {
    clearTimeout(timer.current);

    if (document.body) {
      document.body.removeChild(getElement());
    }
  }, []);
  React.useEffect(() => {
    return cleanup;
  }, [cleanup]);
  return React.useCallback(content => {
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
var SPEECH_TO_TEXT_COMMAND = /*#__PURE__*/lexical.createCommand();
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
    editor.dispatchCommand(lexical.REDO_COMMAND, undefined);
  },
  undo: _ref3 => {
    var {
      editor
    } = _ref3;
    editor.dispatchCommand(lexical.UNDO_COMMAND, undefined);
  }
};
var SUPPORT_SPEECH_RECOGNITION = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;

function SpeechToTextPlugin() {
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  var [isEnabled, setIsEnabled] = React.useState(false);
  var SpeechRecognition = // @ts-ignore
  window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = React.useRef(null);
  var report = useReport();
  React.useEffect(() => {
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
          var selection = lexical.$getSelection();

          if (lexical.$isRangeSelection(selection)) {
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
  React.useEffect(() => {
    return editor.registerCommand(SPEECH_TO_TEXT_COMMAND, _isEnabled => {
      setIsEnabled(_isEnabled);
      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  var [isEditable, setIsEditable] = React.useState(() => editor.isEditable());
  var [isSpeechToText, setIsSpeechToText] = React.useState(false);
  var [connected, setConnected] = React.useState(false);
  var [isEditorEmpty, setIsEditorEmpty] = React.useState(true);
  var [modal, showModal] = useModal();
  var {
    yjsDocMap
  } = LexicalCollaborationContext.useCollaborationContext();
  var isCollab = yjsDocMap.get('main') !== undefined;
  var {
    t
  } = reactI18next.useTranslation(['action']);
  React.useEffect(() => {
    return utils.mergeRegister(editor.registerEditableListener(editable => {
      setIsEditable(editable);
    }), editor.registerCommand(yjs$1.CONNECTED_COMMAND, payload => {
      var isConnected = payload;
      setConnected(isConnected);
      return false;
    }, lexical.COMMAND_PRIORITY_EDITOR));
  }, [editor]);
  React.useEffect(() => {
    return editor.registerUpdateListener(() => {
      editor.getEditorState().read(() => {
        var root = lexical.$getRoot();
        var children = root.getChildren();

        if (children.length > 1) {
          setIsEditorEmpty(false);
        } else {
          if (lexical.$isParagraphNode(children[0])) {
            var paragraphChildren = children[0].getChildren();
            setIsEditorEmpty(paragraphChildren.length === 0);
          } else {
            setIsEditorEmpty(false);
          }
        }
      });
    });
  }, [editor]);
  var handleMarkdownToggle = React.useCallback(() => {
    editor.update(() => {
      var root = lexical.$getRoot();
      var firstChild = root.getFirstChild();

      if (code.$isCodeNode(firstChild) && firstChild.getLanguage() === 'markdown') {
        markdown.$convertFromMarkdownString(firstChild.getTextContent(), PLAYGROUND_TRANSFORMERS);
      } else {
        var markdown$1 = markdown.$convertToMarkdownString(PLAYGROUND_TRANSFORMERS);
        root.clear().append(code.$createCodeNode('markdown').append(lexical.$createTextNode(markdown$1)));
      }

      root.selectEnd();
    });
  }, [editor]);
  return /*#__PURE__*/React.createElement("div", {
    className: "verbum-actions"
  }, SUPPORT_SPEECH_RECOGNITION && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      editor.dispatchCommand(SPEECH_TO_TEXT_COMMAND, !isSpeechToText);
      setIsSpeechToText(!isSpeechToText);
    },
    className: 'action-button action-button-mic ' + (isSpeechToText ? 'active' : ''),
    title: t('action:Speech_To_Text'),
    "aria-label": (isSpeechToText ? t('action:Enable') : t('action:Disable')) + " " + t('action:speech_To_Text'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-mic"
  })), /*#__PURE__*/React.createElement("button", {
    className: "verbum-action-button import",
    onClick: () => file.importFile(editor),
    title: t('action:Import'),
    "aria-label": t('action:Import_Description'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-import"
  })), /*#__PURE__*/React.createElement("button", {
    className: "verbum-action-button export",
    onClick: () => file.exportFile(editor, {
      fileName: "Playground " + new Date().toISOString(),
      source: 'Playground'
    }),
    title: t('action:Export'),
    "aria-label": t('action:Export_Description'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-export"
  })), /*#__PURE__*/React.createElement("button", {
    className: "verbum-action-button clear",
    disabled: isEditorEmpty,
    onClick: () => {
      showModal(t('action:Clear_Editor'), onClose => /*#__PURE__*/React.createElement(ShowClearDialog, {
        editor: editor,
        onClose: onClose,
        t: t
      }));
    },
    title: t('action:Clear'),
    "aria-label": t('action:Clear_Description'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "clear"
  })), /*#__PURE__*/React.createElement("button", {
    className: "verbum-action-button " + (isEditable ? 'unlock' : 'lock'),
    onClick: () => {
      editor.setEditable(!editor.isEditable());
    },
    title: t('action:Read-Only_Mode'),
    "aria-label": (isEditable ? t('action:Unlock') : t('action:Lock')) + " " + t('action:Read-Only_Mode'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: isEditable ? 'unlock' : 'lock'
  })), /*#__PURE__*/React.createElement("button", {
    className: "verbum-action-button",
    onClick: handleMarkdownToggle,
    title: t('action:Convert_From_Markdown'),
    "aria-label": t('action:Convert_From_Markdown_Description'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-markdown"
  })), isCollab && /*#__PURE__*/React.createElement("button", {
    className: "verbum-action-button connect",
    onClick: () => {
      editor.dispatchCommand(yjs$1.TOGGLE_CONNECT_COMMAND, !connected);
    },
    title: (connected ? t('action:Disconnect') : t('action:Connect')) + " " + t('action:Collaborative'),
    "aria-label": (connected ? t('action:Disconnect_From') : t('action:Connect_To')) + " " + t('action:Server'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: connected ? t('action:disconnect') : t('action:connect')
  })), modal);
}

function ShowClearDialog(_ref2) {
  var {
    editor,
    onClose,
    t
  } = _ref2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, t('action:Confirm_Clear'), /*#__PURE__*/React.createElement("div", {
    className: "Modal__content"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => {
      editor.dispatchCommand(lexical.CLEAR_EDITOR_COMMAND, undefined);
      editor.focus();
      onClose();
    }
  }, t('action:Clear')), ' ', /*#__PURE__*/React.createElement(Button, {
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
  return /*#__PURE__*/React.createElement(LexicalAutoLinkPlugin$1.AutoLinkPlugin, {
    matchers: MATCHERS
  });
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var INSERT_INLINE_COMMAND = /*#__PURE__*/lexical.createCommand();

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
  var popupCharStylesEditorRef = React.useRef(null);
  var mouseDownRef = React.useRef(false);
  var insertLink = React.useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, 'https://');
    } else {
      editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  var insertComment = () => {
    editor.dispatchCommand(INSERT_INLINE_COMMAND, null);
  };

  var updateCharacterStylesEditor = React.useCallback(() => {
    var selection = lexical.$getSelection();
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
  React.useEffect(() => {
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
  React.useEffect(() => {
    editor.getEditorState().read(() => {
      updateCharacterStylesEditor();
    });
    return utils.mergeRegister(editor.registerUpdateListener(_ref2 => {
      var {
        editorState
      } = _ref2;
      editorState.read(() => {
        updateCharacterStylesEditor();
      });
    }), editor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, () => {
      updateCharacterStylesEditor();
      return false;
    }, lexical.COMMAND_PRIORITY_LOW));
  }, [editor, updateCharacterStylesEditor]);
  return /*#__PURE__*/React.createElement("div", {
    ref: popupCharStylesEditorRef,
    className: "verbum-character-style-popup"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'bold');
    },
    className: 'verbum-popup-item spaced ' + (isBold ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_text_as_bold'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-bold"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'italic');
    },
    className: 'verbum-popup-item spaced ' + (isItalic ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_text_as_italics'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-italic"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'underline');
    },
    className: 'verbum-popup-item spaced ' + (isUnderline ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_text_to_underlined'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-underline"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'strikethrough');
    },
    className: 'verbum-popup-item spaced ' + (isStrikethrough ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_text_with_a_strikethrough'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-strikethrough"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'subscript');
    },
    className: 'verbum-popup-item spaced ' + (isSubscript ? 'active' : ''),
    title: "Subscript",
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_Subscript'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-subscript"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'superscript');
    },
    className: 'verbum-popup-item spaced ' + (isSuperscript ? 'active' : ''),
    title: "Superscript",
    "aria-label": t('toolbar:characterStylesPopupPlugin.Format_Superscript'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-superscript"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'code');
    },
    className: 'verbum-popup-item spaced ' + (isCode ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Insert_code_block'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-code"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: insertLink,
    className: 'verbum-popup-item spaced ' + (isLink ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Insert_link'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-link"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: insertComment,
    className: 'verbum-popup-item spaced ' + (isLink ? 'active' : ''),
    "aria-label": t('toolbar:characterStylesPopupPlugin.Add_comment'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-add-comment"
  })));
}

function getSelectedNode(selection$1) {
  var anchor = selection$1.anchor;
  var focus = selection$1.focus;
  var anchorNode = selection$1.anchor.getNode();
  var focusNode = selection$1.focus.getNode();

  if (anchorNode === focusNode) {
    return anchorNode;
  }

  var isBackward = selection$1.isBackward();

  if (isBackward) {
    return selection.$isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return selection.$isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

function useCharacterStylesPopup(editor) {
  var [isText, setIsText] = React.useState(false);
  var [isLink, setIsLink] = React.useState(false);
  var [isBold, setIsBold] = React.useState(false);
  var [isItalic, setIsItalic] = React.useState(false);
  var [isUnderline, setIsUnderline] = React.useState(false);
  var [isStrikethrough, setIsStrikethrough] = React.useState(false);
  var [isSubscript, setIsSubscript] = React.useState(false);
  var [isSuperscript, setIsSuperscript] = React.useState(false);
  var [isCode, setIsCode] = React.useState(false);
  var {
    t
  } = reactI18next.useTranslation(['toolbar']);
  var updatePopup = React.useCallback(() => {
    editor.getEditorState().read(() => {
      var selection = lexical.$getSelection();
      var nativeSelection = window.getSelection();
      var rootElement = editor.getRootElement();

      if (nativeSelection !== null && (!lexical.$isRangeSelection(selection) || rootElement === null || !rootElement.contains(nativeSelection.anchorNode))) {
        setIsText(false);
        return;
      }

      if (!lexical.$isRangeSelection(selection)) {
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

      if (link.$isLinkNode(parent) || link.$isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }

      if (!code.$isCodeHighlightNode(selection.anchor.getNode()) && selection.getTextContent() !== '') {
        setIsText(lexical.$isTextNode(node));
      } else {
        setIsText(false);
      }
    });
  }, [editor]);
  React.useEffect(() => {
    document.addEventListener('selectionchange', updatePopup);
    return () => {
      document.removeEventListener('selectionchange', updatePopup);
    };
  }, [updatePopup]);
  React.useEffect(() => {
    return editor.registerUpdateListener(() => {
      updatePopup();
    });
  }, [editor, updatePopup]);

  if (!isText || isLink) {
    return null;
  }

  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(FloatingCharacterStylesEditor, {
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  var hasMoved = React.useRef(false);
  React.useEffect(() => {
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
        var maybeLinkNode = lexical.$getNearestNodeFromDOMNode(linkDomNode);

        if (link.$isLinkNode(maybeLinkNode)) {
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    return code.registerCodeHighlighting(editor);
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!editor.hasNodes([KeywordNode])) {
      throw new Error('KeywordsPlugin: KeywordNode not registered on editor');
    }
  }, [editor]);
  var createKeywordNode = React.useCallback(textNode => {
    return $createKeywordNode(textNode.getTextContent());
  }, []);
  var getKeywordMatch = React.useCallback(text => {
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
  useLexicalTextEntity.useLexicalTextEntity(getKeywordMatch, KeywordNode, createKeywordNode);
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

  return new Set(nodesInSelection.map(n => lexical.$isElementNode(n) ? n : n.getParentOrThrow()));
}

function isIndentPermitted(maxDepth) {
  var selection = lexical.$getSelection();

  if (!lexical.$isRangeSelection(selection)) {
    return false;
  }

  var elementNodesInSelection = getElementNodesInSelection(selection);
  var totalDepth = 0;

  for (var elementNode of elementNodesInSelection) {
    if (list.$isListNode(elementNode)) {
      totalDepth = Math.max(list.$getListDepth(elementNode) + 1, totalDepth);
    } else if (list.$isListItemNode(elementNode)) {
      var parent = elementNode.getParent();

      if (!list.$isListNode(parent)) {
        throw new Error('ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent.');
      }

      totalDepth = Math.max(list.$getListDepth(parent) + 1, totalDepth);
    }
  }

  return totalDepth <= maxDepth;
}

function ListMaxIndentLevelPlugin(_ref) {
  var {
    maxDepth
  } = _ref;
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    return editor.registerCommand(lexical.INDENT_CONTENT_COMMAND, () => !isIndentPermitted(maxDepth != null ? maxDepth : 7), lexical.COMMAND_PRIORITY_CRITICAL);
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
  return /*#__PURE__*/React.createElement(LexicalMarkdownShortcutPlugin.MarkdownShortcutPlugin, {
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!hasRegisteredKeyDownListener) {
      registerKeyTimeStampTracker();
      hasRegisteredKeyDownListener = true;
    }

    return editor.registerCommand(lexical.FOCUS_COMMAND, event => {
      var selection = lexical.$getSelection();

      if (lexical.$isRangeSelection(selection)) {
        if (lastTabKeyDownTimestamp + TAB_TO_FOCUS_INTERVAL > event.timeStamp) {
          lexical.$setSelection(selection.clone());
        }
      }

      return false;
    }, COMMAND_PRIORITY_LOW);
  }, [editor]);
  return null;
}

var EditorContext = /*#__PURE__*/React.createContext(null);

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
  return /*#__PURE__*/React.createElement("div", {
    className: "DialogButtonsList"
  }, children);
}
function DialogActions(_ref2) {
  var {
    'data-test-id': dataTestId,
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement("div", {
    className: "DialogActions",
    "data-test-id": dataTestId
  }, children);
}

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
  return /*#__PURE__*/React.createElement("div", {
    className: "Input__wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    className: "Input__label"
  }, label), /*#__PURE__*/React.createElement("input", {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "Input__wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    className: "Input__label"
  }, label), /*#__PURE__*/React.createElement("input", {
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

var INSERT_IMAGE_COMMAND = /*#__PURE__*/lexical.createCommand('INSERT_IMAGE_COMMAND');
function InsertImageUriDialogBody(_ref) {
  var {
    onClick: _onClick
  } = _ref;
  var [src, setSrc] = React.useState('');
  var [altText, setAltText] = React.useState('');
  var isDisabled = src === '';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextInput, {
    label: "Image URL",
    placeholder: "i.e. https://source.unsplash.com/random",
    onChange: setSrc,
    value: src,
    "data-test-id": "image-modal-url-input"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Alt Text",
    placeholder: "Random unsplash image",
    onChange: setAltText,
    value: altText,
    "data-test-id": "image-modal-alt-text-input"
  }), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
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
  var [src, setSrc] = React.useState('');
  var [altText, setAltText] = React.useState('');
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FileInput, {
    label: "Image Upload",
    onChange: loadImage,
    accept: "image/*",
    "data-test-id": "image-modal-file-upload"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Alt Text",
    placeholder: "Descriptive alternative text",
    onChange: setAltText,
    value: altText,
    "data-test-id": "image-modal-alt-text-input"
  }), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
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
  var [mode, setMode] = React.useState(null);
  var hasModifier = React.useRef(false);
  React.useEffect(() => {
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, !mode && /*#__PURE__*/React.createElement(DialogButtonsList, null, /*#__PURE__*/React.createElement(Button, {
    "data-test-id": "image-modal-option-url",
    onClick: () => setMode('url')
  }, "URL"), /*#__PURE__*/React.createElement(Button, {
    "data-test-id": "image-modal-option-file",
    onClick: () => setMode('file')
  }, "File")), mode === 'url' && /*#__PURE__*/React.createElement(InsertImageUriDialogBody, {
    onClick: onClick
  }), mode === 'file' && /*#__PURE__*/React.createElement(InsertImageUploadedDialogBody, {
    onClick: onClick
  }));
};
function ImagesPlugin(_ref4) {
  var {
    captionsEnabled,
    maxWidth
  } = _ref4;
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!editor.hasNodes([ImageNode])) {
      throw new Error('ImagesPlugin: ImageNode not registered on editor');
    }

    return utils.mergeRegister(editor.registerCommand(INSERT_IMAGE_COMMAND, payload => {
      var imageNode = $createImageNode(_extends({}, payload, {
        maxWidth: maxWidth
      }));
      lexical.$insertNodes([imageNode]);

      if (lexical.$isRootOrShadowRoot(imageNode.getParentOrThrow())) {
        utils.$wrapNodeInElement(imageNode, lexical.$createParagraphNode).selectEnd();
      }

      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.DRAGSTART_COMMAND, event => {
      return onDragStart(event);
    }, lexical.COMMAND_PRIORITY_HIGH), editor.registerCommand(lexical.DRAGOVER_COMMAND, event => {
      return onDragover(event);
    }, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.DROP_COMMAND, event => {
      return onDrop(event, editor);
    }, lexical.COMMAND_PRIORITY_HIGH));
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
    var rangeSelection = lexical.$createRangeSelection();

    if (range !== null && range !== undefined) {
      rangeSelection.applyDOMRange(range);
    }

    lexical.$setSelection(rangeSelection);
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, data);
  }

  return true;
}

function getImageNodeInSelection() {
  var selection = lexical.$getSelection();

  if (!lexical.$isNodeSelection(selection)) {
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    return editor.registerCommand(richText.DRAG_DROP_PASTE, files => {
      _asyncToGenerator(function* () {
        var filesResult = yield utils.mediaFileReader(files, [ACCEPTABLE_IMAGE_TYPES].flatMap(x => x));

        for (var {
          file,
          result
        } of filesResult) {
          if (utils.isMimeType(file, ACCEPTABLE_IMAGE_TYPES)) {
            editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
              altText: file.name,
              src: result
            });
          }
        }
      })();

      return true;
    }, lexical.COMMAND_PRIORITY_LOW);
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  var [activeEditor, setActiveEditor] = React.useState(editor);
  var editorStateRef = React.useRef(null);
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
  } = reactI18next.useTranslation();
  React.useEffect(() => {
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
  }, autoFocusEnabled && /*#__PURE__*/React__default.createElement(LexicalAutoFocusPlugin.AutoFocusPlugin, null), /*#__PURE__*/React__default.createElement(LexicalClearEditorPlugin.ClearEditorPlugin, null), hashtagsEnabled && /*#__PURE__*/React__default.createElement(LexicalHashtagPlugin.HashtagPlugin, null), /*#__PURE__*/React__default.createElement(KeywordsPlugin, null), speechToTextEnabled && /*#__PURE__*/React__default.createElement(SpeechToTextPlugin$1, null), /*#__PURE__*/React__default.createElement(DragDropPaste, null), autoLinkEnabled && /*#__PURE__*/React__default.createElement(LexicalAutoLinkPlugin, null), /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LexicalRichTextPlugin.RichTextPlugin, {
    contentEditable: /*#__PURE__*/React__default.createElement(LexicalContentEditable, null),
    placeholder: placeholderComponent,
    ErrorBoundary: LexicalErrorBoundary
  }), /*#__PURE__*/React__default.createElement(LexicalOnChangePlugin.OnChangePlugin, {
    onChange: editorState => {
      _onChange == null ? void 0 : _onChange(JSON.stringify(editorState), activeEditor);
      return editorStateRef.current = editorState;
    }
  }), /*#__PURE__*/React__default.createElement(MarkdownPlugin, null), /*#__PURE__*/React__default.createElement(CodeHighlightPlugin, null), /*#__PURE__*/React__default.createElement(LexicalListPlugin.ListPlugin, null), /*#__PURE__*/React__default.createElement(LexicalCheckListPlugin.CheckListPlugin, null), /*#__PURE__*/React__default.createElement(ListMaxIndentLevelPlugin, {
    maxDepth: listMaxIndent
  }), /*#__PURE__*/React__default.createElement(LexicalLinkPlugin.LinkPlugin, null), /*#__PURE__*/React__default.createElement(ClickableLinkPlugin, null), /*#__PURE__*/React__default.createElement(CharacterStylesPopupPlugin, null), /*#__PURE__*/React__default.createElement(TabFocusPlugin, null)), /*#__PURE__*/React__default.createElement(LexicalHistoryPlugin.HistoryPlugin, {
    externalHistoryState: historyState
  }), actionsEnabled && /*#__PURE__*/React__default.createElement(ActionsPlugin, {
    isRichText: isRichText
  })));
};

function getSelectedNode$1(selection$1) {
  var anchor = selection$1.anchor;
  var focus = selection$1.focus;
  var anchorNode = selection$1.anchor.getNode();
  var focusNode = selection$1.focus.getNode();

  if (anchorNode === focusNode) {
    return anchorNode;
  }

  var isBackward = selection$1.isBackward();

  if (isBackward) {
    return selection.$isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return selection.$isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

var ToolbarContext = /*#__PURE__*/React.createContext(null);

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
  var dropDownRef = React.useRef(null);
  var buttonRef = React.useRef(null);
  var [showDropDown, setShowDropDown] = React.useState(false);
  React.useEffect(() => {
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
  React.useEffect(() => {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    "aria-label": buttonAriaLabel || buttonLabel,
    className: buttonClassName,
    onClick: () => setShowDropDown(!showDropDown),
    ref: buttonRef,
    type: "button"
  }, buttonIconClassName && /*#__PURE__*/React.createElement("span", {
    className: buttonIconClassName
  }), buttonLabel && /*#__PURE__*/React.createElement("span", {
    className: "verbum-text verbum-dropdown-button-text"
  }, buttonLabel), /*#__PURE__*/React.createElement("i", {
    className: "verbum-chevron-down"
  })), showDropDown && /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
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
  } = React.useContext(EditorContext);
  var {
    isRTL
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement(DropDown, {
    buttonLabel: t('toolbar:alignDropdown.Title'),
    buttonAriaLabel: t('toolbar:alignDropdown.Description'),
    buttonClassName: "verbum-toolbar-item spaced alignment",
    buttonIconClassName: "verbum-icon verbum-left-align"
  }, /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, 'left');
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-left-align"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.LeftAlign'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, 'center');
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-center-align"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.CenterAlign'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, 'right');
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-right-align"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.RightAlign'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, 'justify');
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-icon verbum-justify-align"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.JustifyAlign'))), /*#__PURE__*/React__default.createElement(Divider, null), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.OUTDENT_CONTENT_COMMAND, undefined);
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: 'icon ' + (isRTL ? 'indent' : 'outdent')
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.Outdent'))), /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.INDENT_CONTENT_COMMAND, undefined);
    },
    className: "verbum-item",
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: 'icon ' + (isRTL ? 'outdent' : 'indent')
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:alignDropdown.Indent'))));
};

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var INSERT_POLL_COMMAND = /*#__PURE__*/lexical.createCommand();
function PollPlugin() {
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!editor.hasNodes([PollNode])) {
      throw new Error('PollPlugin: PollNode not registered on editor');
    }

    return editor.registerCommand(INSERT_POLL_COMMAND, payload => {
      var selection = lexical.$getSelection();

      if (lexical.$isRangeSelection(selection)) {
        var question = payload;
        var pollNode = $createPollNode(question);

        if (lexical.$isRootNode(selection.anchor.getNode())) {
          selection.insertParagraph();
        }

        selection.insertNodes([pollNode]);
      }

      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
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
var INSERT_YOUTUBE_COMMAND = /*#__PURE__*/lexical.createCommand();
function YouTubePlugin() {
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!editor.hasNodes([YouTubeNode])) {
      throw new Error('YouTubePlugin: YouTubeNode not registered on editor');
    }

    return editor.registerCommand(INSERT_YOUTUBE_COMMAND, payload => {
      var selection = lexical.$getSelection();

      if (lexical.$isRangeSelection(selection)) {
        var focusNode = selection.focus.getNode();

        if (focusNode !== null) {
          var youTubeNode = $createYouTubeNode(payload);
          selection.focus.getNode().getTopLevelElementOrThrow().insertAfter(youTubeNode);
          var paragraphNode = lexical.$createParagraphNode();
          youTubeNode.insertAfter(paragraphNode);
          paragraphNode.select();
        }
      }

      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

var MIN_ROW_HEIGHT = 33;
var MIN_COLUMN_WIDTH = 50;

function TableCellResizer(_ref) {
  var {
    editor
  } = _ref;
  var targetRef = React.useRef(null);
  var resizerRef = React.useRef(null);
  var tableRectRef = React.useRef(null);
  var mouseStartPosRef = React.useRef(null);
  var [mouseCurrentPos, updateMouseCurrentPos] = React.useState(null);
  var [activeCell, updateActiveCell] = React.useState(null);
  var [isSelectingGrid, updateIsSelectingGrid] = React.useState(false);
  var [draggingDirection, updateDraggingDirection] = React.useState(null);
  React.useEffect(() => {
    return editor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, payload => {
      var selection = lexical.$getSelection();
      var isGridSelection = lexical.DEPRECATED_$isGridSelection(selection);

      if (isSelectingGrid !== isGridSelection) {
        updateIsSelectingGrid(isGridSelection);
      }

      return false;
    }, lexical.COMMAND_PRIORITY_HIGH);
  });
  var resetState = React.useCallback(() => {
    updateActiveCell(null);
    targetRef.current = null;
    updateDraggingDirection(null);
    mouseStartPosRef.current = null;
    tableRectRef.current = null;
  }, []);
  React.useEffect(() => {
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
          var cell = table.getCellFromTarget(target);

          if (cell && activeCell !== cell) {
            editor.update(() => {
              var tableCellNode = lexical.$getNearestNodeFromDOMNode(cell.elem);

              if (!tableCellNode) {
                throw new Error('TableCellResizer: Table cell node not found.');
              }

              var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
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

  var updateRowHeight = React.useCallback(newHeight => {
    if (!activeCell) {
      throw new Error('TableCellResizer: Expected active cell.');
    }

    editor.update(() => {
      var tableCellNode = lexical.$getNearestNodeFromDOMNode(activeCell.elem);

      if (!table.$isTableCellNode(tableCellNode)) {
        throw new Error('TableCellResizer: Table cell node not found.');
      }

      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex = table.$getTableRowIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();

      if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
        throw new Error('Expected table cell to be inside of table row.');
      }

      var tableRow = tableRows[tableRowIndex];

      if (!table.$isTableRowNode(tableRow)) {
        throw new Error('Expected table row');
      }

      tableRow.setHeight(newHeight);
    });
  }, [activeCell, editor]);
  var updateColumnWidth = React.useCallback(newWidth => {
    if (!activeCell) {
      throw new Error('TableCellResizer: Expected active cell.');
    }

    editor.update(() => {
      var tableCellNode = lexical.$getNearestNodeFromDOMNode(activeCell.elem);

      if (!table.$isTableCellNode(tableCellNode)) {
        throw new Error('TableCellResizer: Table cell node not found.');
      }

      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex = table.$getTableColumnIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();

      for (var r = 0; r < tableRows.length; r++) {
        var tableRow = tableRows[r];

        if (!table.$isTableRowNode(tableRow)) {
          throw new Error('Expected table row');
        }

        var tableCells = tableRow.getChildren();

        if (tableColumnIndex >= tableCells.length || tableColumnIndex < 0) {
          throw new Error('Expected table cell to be inside of table row.');
        }

        var tableCell = tableCells[tableColumnIndex];

        if (!table.$isTableCellNode(tableCell)) {
          throw new Error('Expected table cell');
        }

        tableCell.setWidth(newWidth);
      }
    });
  }, [activeCell, editor]);
  var toggleResize = React.useCallback(direction => event => {
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
  var getResizers = React.useCallback(() => {
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
  return /*#__PURE__*/React.createElement("div", {
    ref: resizerRef
  }, activeCell != null && !isSelectingGrid && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "TableCellResizer__resizer TableCellResizer__ui",
    style: resizerStyles.right,
    onMouseDown: toggleResize('right'),
    onMouseUp: toggleResize('right')
  }), /*#__PURE__*/React.createElement("div", {
    className: "TableCellResizer__resizer TableCellResizer__ui",
    style: resizerStyles.bottom,
    onMouseDown: toggleResize('bottom'),
    onMouseUp: toggleResize('bottom')
  })));
}

function TableCellResizerPlugin() {
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  return React.useMemo(() => /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(TableCellResizer, {
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
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  var dropDownRef = React.useRef(null);
  var [tableCellNode, updateTableCellNode] = React.useState(_tableCellNode);
  var [selectionCounts, updateSelectionCounts] = React.useState({
    columns: 1,
    rows: 1
  });
  React.useEffect(() => {
    return editor.registerMutationListener(table.TableCellNode, nodeMutations => {
      var nodeUpdated = nodeMutations.get(tableCellNode.getKey()) === 'updated';

      if (nodeUpdated) {
        editor.getEditorState().read(() => {
          updateTableCellNode(tableCellNode.getLatest());
        });
      }
    });
  }, [editor, tableCellNode]);
  React.useEffect(() => {
    editor.getEditorState().read(() => {
      var selection = lexical.$getSelection();

      if (lexical.DEPRECATED_$isGridSelection(selection)) {
        var selectionShape = selection.getShape();
        updateSelectionCounts({
          columns: selectionShape.toX - selectionShape.fromX + 1,
          rows: selectionShape.toY - selectionShape.fromY + 1
        });
      }
    });
  }, [editor]);
  React.useEffect(() => {
    var menuButtonElement = contextRef.current;
    var dropDownElement = dropDownRef.current;

    if (menuButtonElement != null && dropDownElement != null) {
      var menuButtonRect = menuButtonElement.getBoundingClientRect();
      dropDownElement.style.opacity = '1';
      dropDownElement.style.left = menuButtonRect.left + menuButtonRect.width + window.pageXOffset + 5 + "px";
      dropDownElement.style.top = menuButtonRect.top + window.pageYOffset + "px";
    }
  }, [contextRef, dropDownRef]);
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current != null && contextRef.current != null && !dropDownRef.current.contains(event.target) && !contextRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [setIsMenuOpen, contextRef]);
  var clearTableSelection = React.useCallback(() => {
    editor.update(() => {
      if (tableCellNode.isAttached()) {
        var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
        var tableElement = editor.getElementByKey(tableNode.getKey());

        if (!tableElement) {
          throw new Error('Expected to find tableElement in DOM');
        }

        var tableSelection = table.getTableSelectionFromTableElement(tableElement);

        if (tableSelection !== null) {
          tableSelection.clearHighlight();
        }

        tableNode.markDirty();
        updateTableCellNode(tableCellNode.getLatest());
      }

      lexical.$setSelection(null);
    });
  }, [editor, tableCellNode]);
  var insertTableRowAtSelection = React.useCallback(shouldInsertAfter => {
    editor.update(() => {
      var selection = lexical.$getSelection();
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex;

      if (lexical.DEPRECATED_$isGridSelection(selection)) {
        var selectionShape = selection.getShape();
        tableRowIndex = shouldInsertAfter ? selectionShape.toY : selectionShape.fromY;
      } else {
        tableRowIndex = table.$getTableRowIndexFromTableCellNode(tableCellNode);
      }

      var grid = table.$getElementGridForTableNode(editor, tableNode);
      table.$insertTableRow(tableNode, tableRowIndex, shouldInsertAfter, selectionCounts.rows, grid);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, selectionCounts.rows, clearTableSelection, onClose]);
  var insertTableColumnAtSelection = React.useCallback(shouldInsertAfter => {
    editor.update(() => {
      var selection = lexical.$getSelection();
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex;

      if (lexical.DEPRECATED_$isGridSelection(selection)) {
        var selectionShape = selection.getShape();
        tableColumnIndex = shouldInsertAfter ? selectionShape.toX : selectionShape.fromX;
      } else {
        tableColumnIndex = table.$getTableColumnIndexFromTableCellNode(tableCellNode);
      }

      var grid = table.$getElementGridForTableNode(editor, tableNode);
      table.$insertTableColumn(tableNode, tableColumnIndex, shouldInsertAfter, selectionCounts.columns, grid);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, selectionCounts.columns, clearTableSelection, onClose]);
  var deleteTableRowAtSelection = React.useCallback(() => {
    editor.update(() => {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex = table.$getTableRowIndexFromTableCellNode(tableCellNode);
      table.$removeTableRowAtIndex(tableNode, tableRowIndex);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var deleteTableAtSelection = React.useCallback(() => {
    editor.update(() => {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      tableNode.remove();
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var deleteTableColumnAtSelection = React.useCallback(() => {
    editor.update(() => {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex = table.$getTableColumnIndexFromTableCellNode(tableCellNode);
      table.$deleteTableColumn(tableNode, tableColumnIndex);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var toggleTableRowIsHeader = React.useCallback(() => {
    editor.update(() => {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex = table.$getTableRowIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();

      if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
        throw new Error('Expected table cell to be inside of table row.');
      }

      var tableRow = tableRows[tableRowIndex];

      if (!table.$isTableRowNode(tableRow)) {
        throw new Error('Expected table row');
      }

      tableRow.getChildren().forEach(tableCell => {
        if (!table.$isTableCellNode(tableCell)) {
          throw new Error('Expected table cell');
        }

        tableCell.toggleHeaderStyle(table.TableCellHeaderStates.ROW);
      });
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var toggleTableColumnIsHeader = React.useCallback(() => {
    editor.update(() => {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex = table.$getTableColumnIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();

      for (var r = 0; r < tableRows.length; r++) {
        var tableRow = tableRows[r];

        if (!table.$isTableRowNode(tableRow)) {
          throw new Error('Expected table row');
        }

        var tableCells = tableRow.getChildren();

        if (tableColumnIndex >= tableCells.length || tableColumnIndex < 0) {
          throw new Error('Expected table cell to be inside of table row.');
        }

        var tableCell = tableCells[tableColumnIndex];

        if (!table.$isTableCellNode(tableCell)) {
          throw new Error('Expected table cell');
        }

        tableCell.toggleHeaderStyle(table.TableCellHeaderStates.COLUMN);
      }

      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  return /*#__PURE__*/ReactDOM.createPortal(
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  React.createElement("div", {
    className: "verbum-dropdown",
    ref: dropDownRef,
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "verbum-item",
    onClick: () => insertTableRowAtSelection(false),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Insert'), ' ', selectionCounts.rows === 1 ? t('toolbar:tableActionMenuPlugin.row') : selectionCounts.rows + " " + t('toolbar:tableActionMenuPlugin.rows'), ' ', t('toolbar:tableActionMenuPlugin.above'))), /*#__PURE__*/React.createElement("button", {
    className: "verbum-item",
    onClick: () => insertTableRowAtSelection(true),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Insert'), ' ', selectionCounts.rows === 1 ? t('toolbar:tableActionMenuPlugin.row') : selectionCounts.rows + " " + t('toolbar:tableActionMenuPlugin.rows'), ' ', t('toolbar:tableActionMenuPlugin.below'))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "verbum-item",
    onClick: () => insertTableColumnAtSelection(false),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Insert'), ' ', selectionCounts.columns === 1 ? t('toolbar:tableActionMenuPlugin.column') : selectionCounts.columns + " " + t('toolbar:tableActionMenuPlugin.columns'), ' ', t('toolbar:tableActionMenuPlugin.left'))), /*#__PURE__*/React.createElement("button", {
    className: "verbum-item",
    onClick: () => insertTableColumnAtSelection(true),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Insert'), ' ', selectionCounts.columns === 1 ? t('toolbar:tableActionMenuPlugin.column') : selectionCounts.columns + " " + t('toolbar:tableActionMenuPlugin.columns'), ' ', t('toolbar:tableActionMenuPlugin.right'))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "verbum-item",
    onClick: () => deleteTableColumnAtSelection(),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Delete_column'))), /*#__PURE__*/React.createElement("button", {
    className: "verbum-item",
    onClick: () => deleteTableRowAtSelection(),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Delete_row'))), /*#__PURE__*/React.createElement("button", {
    className: "verbum-item",
    onClick: () => deleteTableAtSelection(),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, t('toolbar:tableActionMenuPlugin.Delete_table'))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "verbum-item",
    onClick: () => toggleTableRowIsHeader(),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, (tableCellNode.__headerState & table.TableCellHeaderStates.ROW) === table.TableCellHeaderStates.ROW ? t('action:Remove') : t('action:Add'), ' ', t('toolbar:tableActionMenuPlugin.row_header'))), /*#__PURE__*/React.createElement("button", {
    className: "verbum-item",
    onClick: () => toggleTableColumnIsHeader(),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, (tableCellNode.__headerState & table.TableCellHeaderStates.COLUMN) === table.TableCellHeaderStates.COLUMN ? t('action:Remove') : t('action:Add '), ' ', t('toolbar:tableActionMenuPlugin.column_header')))), document.body);
}

function TableCellActionMenuContainer() {
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  var menuButtonRef = React.useRef(null);
  var menuRootRef = React.useRef(null);
  var [isMenuOpen, setIsMenuOpen] = React.useState(false);
  var [tableCellNode, setTableMenuCellNode] = React.useState(null);
  var {
    t
  } = reactI18next.useTranslation(['toolbar', 'action']);
  var moveMenu = React.useCallback(() => {
    var menu = menuButtonRef.current;
    var selection = lexical.$getSelection();
    var nativeSelection = window.getSelection();
    var activeElement = document.activeElement;

    if (selection == null || menu == null) {
      setTableMenuCellNode(null);
      return;
    }

    var rootElement = editor.getRootElement();

    if (lexical.$isRangeSelection(selection) && rootElement !== null && nativeSelection !== null && rootElement.contains(nativeSelection.anchorNode)) {
      var tableCellNodeFromSelection = table.$getTableCellNodeFromLexicalNode(selection.anchor.getNode());

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
  React.useEffect(() => {
    return editor.registerUpdateListener(() => {
      editor.getEditorState().read(() => {
        moveMenu();
      });
    });
  });
  React.useEffect(() => {
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
  var prevTableCellDOM = React.useRef(tableCellNode);
  React.useEffect(() => {
    if (prevTableCellDOM.current !== tableCellNode) {
      setIsMenuOpen(false);
    }

    prevTableCellDOM.current = tableCellNode;
  }, [prevTableCellDOM, tableCellNode]);
  return /*#__PURE__*/React.createElement("div", {
    className: "verbum-table-cell-action-button-container",
    ref: menuButtonRef
  }, tableCellNode != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "verbum-table-cell-action-button chevron-down",
    onClick: e => {
      e.stopPropagation();
      setIsMenuOpen(!isMenuOpen);
    },
    ref: menuRootRef,
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-chevron-down"
  })), isMenuOpen && /*#__PURE__*/React.createElement(TableActionMenu, {
    contextRef: menuRootRef,
    setIsMenuOpen: setIsMenuOpen,
    onClose: () => setIsMenuOpen(false),
    tableCellNode: tableCellNode,
    t: t
  })));
}

function TableActionMenuPlugin() {
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(TableCellActionMenuContainer, null), document.body);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function HorizontalRulePlugin() {
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    return editor.registerCommand(LexicalHorizontalRuleNode.INSERT_HORIZONTAL_RULE_COMMAND, type => {
      var selection = lexical.$getSelection();

      if (!lexical.$isRangeSelection(selection)) {
        return false;
      }

      var focusNode = selection.focus.getNode();

      if (focusNode !== null) {
        var horizontalRuleNode = LexicalHorizontalRuleNode.$createHorizontalRuleNode();
        selection.insertParagraph();
        selection.focus.getNode().getTopLevelElementOrThrow().insertBefore(horizontalRuleNode);
      }

      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
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
  var [mode, setMode] = React.useState(null);

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
  var [rows, setRows] = React.useState('5');
  var [columns, setColumns] = React.useState('5');

  var onClick = () => {
    activeEditor.dispatchCommand(table.INSERT_TABLE_COMMAND, {
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
  var [question, setQuestion] = React.useState('');

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
  var [src, setSrc] = React.useState('');
  var [altText, setAltText] = React.useState('');
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
  var [src, setSrc] = React.useState('');
  var [altText, setAltText] = React.useState('');
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
  var [text, setText] = React.useState('');

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
  } = React.useContext(EditorContext);
  var [modal, showModal] = useModal();
  return /*#__PURE__*/React__default.createElement("div", null, enableTable && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LexicalTablePlugin.TablePlugin, null), /*#__PURE__*/React__default.createElement(TableActionMenuPlugin, null), /*#__PURE__*/React__default.createElement(TableCellResizerPlugin, null)), enableYoutube && /*#__PURE__*/React__default.createElement(YouTubePlugin, null), enablePoll && /*#__PURE__*/React__default.createElement(PollPlugin, null), enableImage.enable && /*#__PURE__*/React__default.createElement(ImagesPlugin, {
    maxWidth: enableImage.maxWidth
  }), enableHorizontalRule && /*#__PURE__*/React__default.createElement(HorizontalRulePlugin, null), /*#__PURE__*/React__default.createElement(DropDown, {
    buttonClassName: "verbum-toolbar-item spaced",
    buttonLabel: "Insert",
    buttonAriaLabel: "Insert specialized editor node",
    buttonIconClassName: "verbum-icon verbum-plus"
  }, enableHorizontalRule && /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(LexicalHorizontalRuleNode.INSERT_HORIZONTAL_RULE_COMMAND, undefined);
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
        var root = lexical.$getRoot();
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
  } = React.useContext(ToolbarContext);
  var {
    activeEditor
  } = React.useContext(EditorContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  return /*#__PURE__*/React.createElement("button", {
    disabled: !canUndo,
    onClick: () => {
      activeEditor.dispatchCommand(lexical.UNDO_COMMAND, undefined);
    },
    title: IS_APPLE ? t('toolbar:undoButton.Title') + " (\u2318Z)" : t('toolbar:undoButton.Title') + " (Ctrl+Z)",
    className: "verbum-toolbar-item spaced",
    "aria-label": t('toolbar:undoButton.Description'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "verbum-format verbum-undo"
  }));
};

var RedoButton = () => {
  var {
    canRedo
  } = React.useContext(ToolbarContext);
  var {
    activeEditor
  } = React.useContext(EditorContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  return /*#__PURE__*/React.createElement("button", {
    disabled: !canRedo,
    onClick: () => {
      activeEditor.dispatchCommand(lexical.REDO_COMMAND, undefined);
    },
    title: IS_APPLE ? t('toolbar:redoButton.Title') + " (\u2318Y)" : t('toolbar:redoButton.Title') + " (Ctrl+Y)",
    className: "verbum-toolbar-item",
    "aria-label": t('toolbar:redoButton.Description'),
    type: "button"
  }, /*#__PURE__*/React.createElement("i", {
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
  } = React.useContext(EditorContext);
  var {
    selectedElementKey,
    codeLanguage
  } = React.useContext(ToolbarContext);
  var onCodeLanguageSelect = React.useCallback(e => {
    activeEditor.update(() => {
      if (selectedElementKey !== null) {
        var node = lexical.$getNodeByKey(selectedElementKey);

        if (code.$isCodeNode(node)) {
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
  } = React.useContext(EditorContext);
  var {
    blockType
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');

  var formatParagraph = () => {
    if (blockType !== 'paragraph') {
      initialEditor.update(() => {
        var selection$1 = lexical.$getSelection();

        if (lexical.$isRangeSelection(selection$1)) {
          selection.$wrapNodes(selection$1, () => lexical.$createParagraphNode());
        }
      });
    }
  };

  var formatHeading = headingSize => {
    if (blockType !== headingSize) {
      initialEditor.update(() => {
        var selection$1 = lexical.$getSelection();

        if (lexical.$isRangeSelection(selection$1)) {
          selection.$wrapNodes(selection$1, () => richText.$createHeadingNode(headingSize));
        }
      });
    }
  };

  var formatBulletList = () => {
    if (blockType !== 'bullet') {
      initialEditor.dispatchCommand(list.INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      initialEditor.dispatchCommand(list.REMOVE_LIST_COMMAND, undefined);
    }
  };

  var formatCheckList = () => {
    if (blockType !== 'check') {
      initialEditor.dispatchCommand(list.INSERT_CHECK_LIST_COMMAND, undefined);
    } else {
      initialEditor.dispatchCommand(list.REMOVE_LIST_COMMAND, undefined);
    }
  };

  var formatNumberedList = () => {
    if (blockType !== 'number') {
      initialEditor.dispatchCommand(list.INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      initialEditor.dispatchCommand(list.REMOVE_LIST_COMMAND, undefined);
    }
  };

  var formatQuote = () => {
    if (blockType !== 'quote') {
      initialEditor.update(() => {
        var selection$1 = lexical.$getSelection();

        if (lexical.$isRangeSelection(selection$1)) {
          selection.$wrapNodes(selection$1, () => richText.$createQuoteNode());
        }
      });
    }
  };

  var formatCode = () => {
    if (blockType !== 'code') {
      initialEditor.update(() => {
        var selection$1 = lexical.$getSelection();

        if (lexical.$isRangeSelection(selection$1)) {
          if (selection$1.isCollapsed()) {
            selection.$wrapNodes(selection$1, () => code.$createCodeNode());
          } else {
            var textContent = selection$1.getTextContent();
            var codeNode = code.$createCodeNode();
            selection$1.removeText();
            selection$1.insertNodes([codeNode]);
            selection$1.insertRawText(textContent);
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
    defaultFontFamily = 'Arial'
  } = _ref;
  var [insertExists, InsertComponent] = useChild(children, InsertDropdown);
  var [alignExists, AlignComponent] = useChild(children, AlignDropdown);
  var {
    initialEditor,
    activeEditor,
    setActiveEditor
  } = React.useContext(EditorContext);
  var [blockType, setBlockType] = React.useState('paragraph');
  var [selectedElementKey, setSelectedElementKey] = React.useState(null);
  var [fontSize, setFontSize] = React.useState(defaultFontSize);
  var [fontColor, setFontColor] = React.useState(defaultFontColor);
  var [bgColor, setBgColor] = React.useState(defaultBgColor);
  var [fontFamily, setFontFamily] = React.useState(defaultFontFamily);
  var [isLink, setIsLink] = React.useState(false);
  var [isBold, setIsBold] = React.useState(false);
  var [isItalic, setIsItalic] = React.useState(false);
  var [isUnderline, setIsUnderline] = React.useState(false);
  var [isStrikethrough, setIsStrikethrough] = React.useState(false);
  var [isSubscript, setIsSubscript] = React.useState(false);
  var [isSuperscript, setIsSuperscript] = React.useState(false);
  var [isCode, setIsCode] = React.useState(false);
  var [canUndo, setCanUndo] = React.useState(false);
  var [canRedo, setCanRedo] = React.useState(false);
  var [isRTL, setIsRTL] = React.useState(false);
  var [codeLanguage, setCodeLanguage] = React.useState('');
  var updateToolbar = React.useCallback(() => {
    var selection$1 = lexical.$getSelection();

    if (lexical.$isRangeSelection(selection$1)) {
      var anchorNode = selection$1.anchor.getNode();
      var element = anchorNode.getKey() === 'root' ? anchorNode : anchorNode.getTopLevelElementOrThrow();
      var elementKey = element.getKey();
      var elementDOM = activeEditor.getElementByKey(elementKey); // Update text format

      setIsBold(selection$1.hasFormat('bold'));
      setIsItalic(selection$1.hasFormat('italic'));
      setIsUnderline(selection$1.hasFormat('underline'));
      setIsStrikethrough(selection$1.hasFormat('strikethrough'));
      setIsSubscript(selection$1.hasFormat('subscript'));
      setIsSuperscript(selection$1.hasFormat('superscript'));
      setIsCode(selection$1.hasFormat('code'));
      setIsRTL(selection.$isParentElementRTL(selection$1)); // Update links

      var node = getSelectedNode$1(selection$1);
      var parent = node.getParent();

      if (link.$isLinkNode(parent) || link.$isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }

      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);

        if (list.$isListNode(element)) {
          var parentList = utils.$getNearestNodeOfType(anchorNode, list.ListNode);
          var type = parentList ? parentList.getListType() : element.getListType();
          setBlockType(type);
        } else {
          var _type = richText.$isHeadingNode(element) ? element.getTag() : element.getType();

          setBlockType(_type);

          if (code.$isCodeNode(element)) {
            var language = element.getLanguage();
            setCodeLanguage(language ? CODE_LANGUAGE_MAP[language] || language : '');
            return;
          }
        }
      } // Hande buttons


      setFontSize(selection.$getSelectionStyleValueForProperty(selection$1, 'font-size', defaultFontSize));
      setFontColor(selection.$getSelectionStyleValueForProperty(selection$1, 'color', defaultFontColor));
      setBgColor(selection.$getSelectionStyleValueForProperty(selection$1, 'background-color', defaultBgColor));
      setFontFamily(selection.$getSelectionStyleValueForProperty(selection$1, 'font-family', defaultFontFamily));
    }
  }, [activeEditor]);
  React.useEffect(() => {
    return initialEditor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, (_payload, newEditor) => {
      updateToolbar();
      setActiveEditor(newEditor);
      return false;
    }, lexical.COMMAND_PRIORITY_CRITICAL);
  }, [initialEditor, updateToolbar]);
  React.useEffect(() => {
    return utils.mergeRegister(activeEditor.registerUpdateListener(_ref2 => {
      var {
        editorState
      } = _ref2;
      editorState.read(() => {
        updateToolbar();
      });
    }), activeEditor.registerCommand(lexical.CAN_UNDO_COMMAND, payload => {
      setCanUndo(payload);
      return false;
    }, lexical.COMMAND_PRIORITY_CRITICAL), activeEditor.registerCommand(lexical.CAN_REDO_COMMAND, payload => {
      setCanRedo(payload);
      return false;
    }, lexical.COMMAND_PRIORITY_CRITICAL));
  }, [activeEditor, updateToolbar]);
  var applyStyleText = React.useCallback(styles => {
    activeEditor.update(() => {
      var selection$1 = lexical.$getSelection();

      if (lexical.$isRangeSelection(selection$1)) {
        selection.$patchStyleText(selection$1, styles);
      }
    });
  }, [activeEditor]);
  var insertLink = React.useCallback(() => {
    if (!isLink) {
      initialEditor.dispatchCommand(link.TOGGLE_LINK_COMMAND, 'https://');
    } else {
      initialEditor.dispatchCommand(link.TOGGLE_LINK_COMMAND, null);
    }
  }, [initialEditor, isLink]);
  return /*#__PURE__*/React.createElement(ToolbarContext.Provider, {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "verbum-toolbar"
  }, /*#__PURE__*/React.createElement(UndoButton, null), /*#__PURE__*/React.createElement(RedoButton, null), /*#__PURE__*/React.createElement(Divider$1, null), supportedBlockTypes.has(blockType) && activeEditor === initialEditor && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BlockFormatDropdown, null), /*#__PURE__*/React.createElement(Divider$1, null)), blockType === 'code' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CodeLanguageDropdown, null), /*#__PURE__*/React.createElement(Divider$1, null), alignExists && AlignComponent) : /*#__PURE__*/React.createElement(React.Fragment, null, children)));
};

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
  var [results, setResults] = React.useState([]);
  React.useEffect(() => {
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

class MentionTypeaheadOption extends LexicalTypeaheadMenuPlugin.TypeaheadOption {
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

  return /*#__PURE__*/React.createElement("li", {
    key: option.key,
    tabIndex: -1,
    className: className,
    ref: option.setRefElement,
    role: "option",
    "aria-selected": isSelected,
    id: 'typeahead-item-' + index,
    onMouseEnter: onMouseEnter,
    onClick: onClick
  }, option.picture, /*#__PURE__*/React.createElement("span", {
    className: "verbum-text"
  }, option.name));
}

function MentionsPlugin(props) {
  var {
    searchData,
    getTypeaheadValues
  } = props;
  var [editor] = LexicalComposerContext.useLexicalComposerContext();
  var [queryString, setQueryString] = React.useState(null);
  var results = useMentionLookupService(queryString, searchData);
  var checkForSlashTriggerMatch = LexicalTypeaheadMenuPlugin.useBasicTypeaheadTriggerMatch('/', {
    minLength: 0
  });
  var options = React.useMemo(() => results.map(result => new MentionTypeaheadOption(getTypeaheadValues(result).value, getTypeaheadValues(result).picture, getTypeaheadValues(result).url)).slice(0, SUGGESTION_LIST_LENGTH_LIMIT), [results]);
  var onSelectOption = React.useCallback((selectedOption, nodeToReplace, closeMenu) => {
    editor.update(() => {
      if (nodeToReplace) {
        var mentionNode = $createMentionNode("@" + selectedOption.name);
        var linkNode = link.$createAutoLinkNode(selectedOption.url);
        linkNode.append(mentionNode);
        nodeToReplace.replace(linkNode);
        linkNode.select();
      }

      closeMenu();
    });
  }, [editor]);
  var checkForMentionMatch = React.useCallback(text => {
    var mentionMatch = getPossibleQueryMatch(text);
    var slashMatch = checkForSlashTriggerMatch(text, editor);
    return !slashMatch && mentionMatch ? mentionMatch : null;
  }, [checkForSlashTriggerMatch, editor]);
  return /*#__PURE__*/React.createElement(LexicalTypeaheadMenuPlugin.LexicalTypeaheadMenuPlugin, {
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
      return anchorElementRef && results.length ? /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
        className: "verbum-typeahead-popover verbum-mentions-menu"
      }, /*#__PURE__*/React.createElement("ul", null, options.map((option, i) => /*#__PURE__*/React.createElement(MentionsTypeaheadMenuItem, {
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

  var [selfColor, setSelfColor] = React.useState(transformColor('hex', color));
  var saturationPosition = React.useMemo(() => ({
    x: selfColor.hsv.s / 100 * WIDTH,
    y: (100 - selfColor.hsv.v) / 100 * HEIGHT
  }), [selfColor.hsv.s, selfColor.hsv.v]);
  var huePosition = React.useMemo(() => ({
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

  React.useEffect(() => {
    onChange(selfColor.hex);
  }, [selfColor, onChange]);
  React.useEffect(() => {
    if (color === undefined) return;
    setSelfColor(transformColor('hex', color));
  }, [color]);
  return /*#__PURE__*/React.createElement(DropDown, Object.assign({}, rest, {
    stopCloseOnClickSelf: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "verbum-color-picker-wrapper",
    style: {
      width: WIDTH
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "verbum-color-picker-basic-color"
  }, basicColors.map(basicColor => /*#__PURE__*/React.createElement("button", {
    className: basicColor === selfColor.hex ? ' active' : '',
    key: basicColor,
    style: {
      backgroundColor: basicColor
    },
    onClick: () => setSelfColor(transformColor('hex', basicColor)),
    type: "button"
  }))), /*#__PURE__*/React.createElement(MoveWrapper, {
    className: "verbum-color-picker-saturation",
    style: {
      backgroundColor: "hsl(" + selfColor.hsv.h + ", 100%, 50%)"
    },
    onChange: onMoveSaturation
  }, /*#__PURE__*/React.createElement("div", {
    className: "verbum-color-picker-saturation_cursor",
    style: {
      backgroundColor: selfColor.hex,
      left: saturationPosition.x,
      top: saturationPosition.y
    }
  })), /*#__PURE__*/React.createElement(MoveWrapper, {
    className: "verbum-color-picker-hue",
    onChange: onMoveHue
  }, /*#__PURE__*/React.createElement("div", {
    className: "verbum-color-picker-hue_cursor",
    style: {
      backgroundColor: "hsl(" + selfColor.hsv.h + ", 100%, 50%)",
      left: huePosition.x
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "verbum-color-picker-info"
  }, /*#__PURE__*/React.createElement("span", null, selfColor.hex), /*#__PURE__*/React.createElement("div", {
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
  var divRef = React.useRef(null);

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

  return /*#__PURE__*/React.createElement("div", {
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
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  var onBgColorSelect = React.useCallback(value => {
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
  } = React.useContext(EditorContext);
  var {
    isBold
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'bold');
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
  } = React.useContext(EditorContext);
  var {
    isCode
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'code');
    },
    className: 'verbum-toolbar-item spaced ' + (isCode ? 'active' : ''),
    title: t('toolbar:codeFormatButton.Description'),
    "aria-label": t('toolbar:codeFormatButton.Description'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-format verbum-code"
  }));
};

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

  return /*#__PURE__*/React.createElement("div", {
    className: "LinkPreview__container"
  }, preview.img && /*#__PURE__*/React.createElement("div", {
    className: "LinkPreview__imageWrapper"
  }, /*#__PURE__*/React.createElement("img", {
    src: preview.img,
    alt: preview.title,
    className: "LinkPreview__image"
  })), preview.domain && /*#__PURE__*/React.createElement("div", {
    className: "LinkPreview__domain"
  }, preview.domain), preview.title && /*#__PURE__*/React.createElement("div", {
    className: "LinkPreview__title"
  }, preview.title), preview.description && /*#__PURE__*/React.createElement("div", {
    className: "LinkPreview__description"
  }, preview.description));
}

function Glimmer(props) {
  return /*#__PURE__*/React.createElement("div", Object.assign({
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
  return /*#__PURE__*/React.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Glimmer, {
      style: {
        height: '80px'
      },
      index: 0
    }), /*#__PURE__*/React.createElement(Glimmer, {
      style: {
        width: '60%'
      },
      index: 1
    }), /*#__PURE__*/React.createElement(Glimmer, {
      style: {
        width: '80%'
      },
      index: 2
    }))
  }, /*#__PURE__*/React.createElement(LinkPreviewContent, {
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
  var editorRef = React.useRef(null);
  var inputRef = React.useRef(null);
  var [linkUrl, setLinkUrl] = React.useState('');
  var [isEditMode, setEditMode] = React.useState(false);
  var [lastSelection, setLastSelection] = React.useState(null);
  var updateLinkEditor = React.useCallback(() => {
    var selection = lexical.$getSelection();

    if (lexical.$isRangeSelection(selection)) {
      var node = getSelectedNode$1(selection);
      var parent = node.getParent();

      if (link.$isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if (link.$isLinkNode(node)) {
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
  React.useEffect(() => {
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
  React.useEffect(() => {
    return utils.mergeRegister(editor.registerUpdateListener(_ref2 => {
      var {
        editorState
      } = _ref2;
      editorState.read(() => {
        updateLinkEditor();
      });
    }), editor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, () => {
      updateLinkEditor();
      return true;
    }, lexical.COMMAND_PRIORITY_LOW));
  }, [editor, updateLinkEditor]);
  React.useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);
  React.useEffect(() => {
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
            editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, linkUrl);
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
  } = React.useContext(ToolbarContext);
  var onFontFamilySelect = React.useCallback(e => {
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
  } = React.useContext(ToolbarContext);
  var onFontSizeSelect = React.useCallback(e => {
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

var InsertLinkButton = () => {
  var {
    activeEditor
  } = React.useContext(EditorContext);
  var {
    isLink,
    insertLink
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("button", {
    onClick: insertLink,
    className: 'verbum-toolbar-item spaced ' + (isLink ? 'active' : ''),
    "aria-label": t('toolbar:insertLinkButton.Description'),
    title: t('toolbar:insertLinkButton.Description'),
    type: "button"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "verbum-format verbum-link"
  })), isLink && /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React__default.createElement(FloatingLinkEditor, {
    editor: activeEditor
  }), document.body));
};

var ItalicButton = () => {
  var {
    activeEditor
  } = React.useContext(EditorContext);
  var {
    isItalic
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'italic');
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
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  var onFontColorSelect = React.useCallback(value => {
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
  } = React.useContext(EditorContext);
  var {
    isStrikethrough,
    isSubscript,
    isSuperscript
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement(DropDown, {
    buttonClassName: "verbum-toolbar-item spaced",
    buttonLabel: "",
    buttonAriaLabel: t('toolbar:textFormatDropdown.Description'),
    buttonIconClassName: "verbum-icon verbum-dropdown-more"
  }, /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'strikethrough');
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
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'subscript');
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
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'superscript');
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
  } = React.useContext(EditorContext);
  var {
    isUnderline
  } = React.useContext(ToolbarContext);
  var {
    t
  } = reactI18next.useTranslation('toolbar');
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: () => {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'underline');
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
  return /*#__PURE__*/React.createElement("img", {
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
  var imageRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(React.Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LazyImage, {
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

exports.$createEmojiNode = $createEmojiNode;
exports.$createImageNode = $createImageNode;
exports.$createKeywordNode = $createKeywordNode;
exports.$createMentionNode = $createMentionNode;
exports.$createPollNode = $createPollNode;
exports.$createTypeaheadNode = $createTypeaheadNode;
exports.$createYouTubeNode = $createYouTubeNode;
exports.$isEmojiNode = $isEmojiNode;
exports.$isImageNode = $isImageNode;
exports.$isKeywordNode = $isKeywordNode;
exports.$isMentionNode = $isMentionNode;
exports.$isPollNode = $isPollNode;
exports.$isYouTubeNode = $isYouTubeNode;
exports.AlignDropdown = AlignDropdown;
exports.BackgroundColorPicker = BackgroundColorPicker;
exports.BoldButton = BoldButton;
exports.CAN_USE_DOM = CAN_USE_DOM$1;
exports.CodeFormatButton = CodeFormatButton;
exports.Divider = Divider$1;
exports.Editor = Editor;
exports.EditorComposer = EditorComposer;
exports.EditorContext = EditorContext;
exports.EmojiNode = EmojiNode;
exports.FloatingLinkEditor = FloatingLinkEditor;
exports.FontFamilyDropdown = FontFamilyDropdown;
exports.FontSizeDropdown = FontSizeDropdown;
exports.INSERT_IMAGE_COMMAND = INSERT_IMAGE_COMMAND;
exports.ImageNode = ImageNode;
exports.ImagesPlugin = ImagesPlugin;
exports.InsertDropdown = InsertDropdown;
exports.InsertImageDialog = InsertImageDialog;
exports.InsertImageUploadedDialogBody = InsertImageUploadedDialogBody;
exports.InsertImageUriDialogBody = InsertImageUriDialogBody;
exports.InsertLinkButton = InsertLinkButton;
exports.ItalicButton = ItalicButton;
exports.KeywordNode = KeywordNode;
exports.MentionNode = MentionNode;
exports.MentionsPlugin = MentionsPlugin;
exports.PollNode = PollNode;
exports.TextColorPicker = TextColorPicker;
exports.TextFormatDropdown = TextFormatDropdown;
exports.ToolbarContext = ToolbarContext;
exports.ToolbarPlugin = ToolbarPlugin;
exports.ToolbarTypes = index;
exports.TypeaheadNode = TypeaheadNode;
exports.UnderlineButton = UnderlineButton;
exports.YouTubeNode = YouTubeNode;
//# sourceMappingURL=verbum.cjs.development.js.map
