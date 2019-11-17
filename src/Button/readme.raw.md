# UiButton

## Sizes `UiButton.SIZE`

-   SMALL
-   NORMAL
-   LARGE

## Scheme `UiButton.SCHEME`

-   PRIMARY
-   SECONDARY

## State `UiButton.STATE`

-   DEFAULT
-   HOVER
-   DISABLED

## Radius `UiButton.RADIUS`

-   NONE
-   DEFAULT
-   ROUND

## Radius `UiButton.TEXT_TRANSFORM`

-   NONE
-   UPPERCASE

## Props

| Property    | Description                          | Type                      | Default                        |
| ----------- | ------------------------------------ | ------------------------- | ------------------------------ |
| `as`        | Defines which tag to use for button. | `string`                  | `'button'`                     |
| `fit`       | Should button fit parents block.     | `boolean`                 | `false`                        |
| `nowrap`    | Should it keep text in one line?     | `boolean`                 | `false`                        |
| `radius`    | Set the border-radius property       | `UiButton.RADIUS`         | `UiButton.RADIUS.DEFAULT`      |
| `scheme`    | Button scheme.                       | `UiButton.SCHEME`         | `UiButton.SCHEME.PRIMARY`      |
| `size`      | Sizes for button.                    | `UiButton.SIZE`           | `UiButton.SIZE.NORMAL`         |
| `state`     | States for button.                   | `UiButton.STATE`          | `UiButton.STATE.DEFAULT`       |
| `transform` | text-transform property.             | `UiButton.TEXT_TRANSFORM` | `UiButton.TEXT_TRANSFORM.NONE` |
