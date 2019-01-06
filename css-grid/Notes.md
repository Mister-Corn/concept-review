## Some CSS Highlights

* The CSS defines a couple of variables. You can use `--var(variableName)` to access them.
* Look into `box-sizing: border-box;`

## CSS Grid

Slice up a `div` to columns and rows, called _tracks_, to put items into!

---

Emmet Tip

Use `{$}` to do numerical sequences

So, `.item{$}*10` will create 10 divs with the class `item`, and inside each, will be a number 1 to 10.

---

To get started, put `display: grid` on a parent/wrapper container. This is similar to Flexbox containers and flex items.

First define your columns with `grid-template-columns`. 

```css
  .container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
  }
```

To define the columns, just write out the size of each column. You can use `auto` as a size, and it will make that column responsiveAt this point, _we actually have a grid_, as the rows are implicit! We will talk more about this later. Same deal with `grid-template-rows`.

Use `grid-gap` to put space between your rows/columns, henceforth known as tracks.

## CSS Grid Dev Tools

Inspect element with Firefox, and you have grid specific tools to examine the grid and its items.

Look into `Line Meanings.png` to see terminology of the grid.

Key point: There is a distinction between explicit and implicit tracks

## CSS Grid Implicit vs Explicit

You can use `grid-auto-rows` to size rows implicitly made. Same thing with `grid-auto-columns`, which you'd think when would that happen, but we shall soon see we can change the flow.

## CSS `grid-auto-flow` Explained

`grid-auto-flow` changes how extra items are treated (as either extra rows or extra columns)

## Sizing tracks in CSS Grid

Using percentages to go up to 100% may lead to problems if you also have grid gap.

To address this, try using `fr` units, fractional units.

You can use `fr` to allocate and size free remaining space after fixed size elements and gaps.

---

Remember, relative widths are based off of the viewport, but relative heights are based on the size of the content. To circumvent this, explicitly declare a height.

---

## CSS Grid `repeat` function

You can use `repeat` to quickly create rows and columns. first argument is how many times to repeat, the second argument is what to repeat. That second argument could be multiple rows/columns. Further more, the repeat function can be surrounded by fixed tracks. In short, it's pretty gosh darn flexible.

## Placing Grid Items

If you change the size of any item in the grid, it will change the size of the track accordingly. For example, you make a grid item 500px, the width of the track will be set to 500px to accomodate for that.

If this is undesired behavior, you can use `span` to explicitly define sizes of specific items.

```
grid-column: span 2;
```

The item will now span over two columns without changing the widths of the other items.

If the span exceeds the number of columns, it will be shunted to the next row, leaving an empty space. This _doesn't_ happen if this makes the item span the entire width of the grid. If it spans the entire width, it will instead keep that item in the same row, but add implicit columns.

You can use `grid-row` for rows.

---

Be aware that `grid-column` and `grid-row` are _shorthands_.

In other words, `grid-column` can be specified with `grid-column-start` and `grid-column-end`.

```
grid-column-start: 2;
grid-column-end: 5;
```

Alternatively:

```
grid-column: 2 / 5;
```

If you want to span or end at the end of the row, but don't know what track number that is, use:

```
grid-column: 1 / -1;
```

This is similar to python list slicers. This is doesn't work for `grid-row` unless the number of rows is explicitly stated. (i.e. Doesn't work on implicit trackss)

# 12: `auto-fit` and `auto-fill`

`auto-fill`: Instead of describing how many rows/columns, have it make as many tracks it can fit within the container. If there's not enough items to fill, the grid will have empty spots

`auto-fit`: Similar to `auto-fill`, but the grid will be sized to the number of items available.

# 13: Using `minmax()` for Responsive Grids