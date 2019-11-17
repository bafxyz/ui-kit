"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const addon_knobs_1 = require("@storybook/addon-knobs");
const index_1 = __importDefault(require("./index"));
const readme_raw_md_1 = __importDefault(require("./readme.raw.md"));
const Button = ({ innerText = addon_knobs_1.text('text', 'tap me'), size = addon_knobs_1.select('size', index_1.default.SIZE, index_1.default.SIZE.NORMAL), fit = addon_knobs_1.boolean('fit', false), round = addon_knobs_1.boolean('round', false), radius = addon_knobs_1.select('radius', index_1.default.RADIUS, index_1.default.RADIUS.NONE), state = addon_knobs_1.select('state', Object.assign(Object.assign({}, index_1.default.STATE), { undefined }), undefined), scheme = addon_knobs_1.select('scheme', index_1.default.SCHEME, index_1.default.SCHEME.PRIMARY), variant = addon_knobs_1.select('variant', index_1.default.VARIANT, index_1.default.VARIANT.FILL) }) => (<index_1.default round={round} size={size} state={state} scheme={scheme} variant={variant} radius={radius} fit={fit}>
        {innerText}
    </index_1.default>);
const opts = {
    notes: { markdown: readme_raw_md_1.default }
};
react_2.storiesOf('UI Components|UiButton', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Complex example', () => <Button />, opts);
//# sourceMappingURL=story.jsx.map