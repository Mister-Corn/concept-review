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