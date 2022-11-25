/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './editor.scss'; // Optional, in addition to style.scss only for editor side

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function({ attributes, setAttributes }) {
	const editorScreen = typeof setAttributes !== "undefined";
	const blockProps = editorScreen ? useBlockProps() : useBlockProps.save();

	return (
		<div {...blockProps}>
			{editorScreen ?
				<RichText
					tagName="h2" // The tag here is the element output and editable in the admin
					value={attributes.title} // Any existing content, either from the database or an attribute default
					allowedFormats={['core/bold', 'core/italic']} // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={(val) => setAttributes({ title: val })} // Store updated content as a block attribute
					placeholder='Write a title' // Display this text before any content has been added by the user
				/>
				:
				<RichText.Content tagName="h2" value={attributes.title} />
			}

			<span className="description">
				{editorScreen ?
					<TextControl
						value={ attributes.description }
						onChange={ ( val ) => setAttributes( { description: val } ) }
						placeholder="Write a description"
					/>
					:
					attributes.description
				}
			</span>
		</div>
	);
}
