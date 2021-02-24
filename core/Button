import { createElement } from 'react';

/**
 * 사용자 입력을 위한, Button 입니다.
 *
 * - **필수** `onClick` 리스너를 지원합니다.
 */
var Button = function Button(_ref) {
  var children = _ref.children,
      size = _ref.size,
      onClick = _ref.onClick;
  alert('Button');

  if (size === 'lg') {
    return /*#__PURE__*/createElement("button", {
      onClick: onClick,
      style: {
        width: '100px',
        height: '100px'
      }
    }, children);
  }

  return /*#__PURE__*/createElement("button", {
    onClick: onClick
  }, children);
};

export default Button;
