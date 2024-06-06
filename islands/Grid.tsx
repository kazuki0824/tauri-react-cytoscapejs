import { IS_BROWSER } from "$fresh/runtime.ts";
import { Grid } from "https://esm.sh/gridjs@6.2.0";


const data = {
    data: [
      ['Mike', 33, 'mike@murphy.com'],
      ['John', 82, 'john@conway.com'],
      ['Sara', 26, 'sara@keegan.com']
    ],
    columns: ['Name', 'Age', 'Email']
  }

export default function GridIsland() {
    if (IS_BROWSER) 
    {
        new Grid(data).render(document.getElementById('wrapper'));
    }

    return (
        <div id='wrapper'></div>
    );
  }

