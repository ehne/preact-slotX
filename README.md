<p>
  <img alt="logo" src="https://gitcdn.xyz/repo/ehne/preact-slotX/master/github_banner.png" align="center" />
</p>
<h1 align="center">
  Welcome to Preact Slot X 👋
</h1>
<p align="center">
    <a href="#" target="https://npm.im/@ehne/preact-slotx">
        <img alt="Version" src="https://img.shields.io/npm/v/@ehne/preact-slotx" />
    </a>
    <a href="#" target="https://bundlephobia.com/result?p=@ehne/preact-slotx@1.2.0">
        <img alt="Size" src="https://img.shields.io/badge/MINIFIED%20%2B%20GZIPPED-1kB-green" />
    </a>
</p>

basically just reimplements [preact-slots](https://npm.im/preact-slots), for Preact X

```jsx
import { SlotProvider, Slot, SlotContent } from '@ehne/preact-slotx'
 
render(
    <SlotProvider>
        <div>
            <Slot name="foo">
                Some Fallback Content
            </Slot>
            <SlotContent slot="foo">
                Replacement Content
            </SlotContent>
        </div>
    </SlotProvider>
)
```

requires htm and preact

## installing:

through npm:
```
$ npm install @ehne/preact-slotx
```

by copying and pasting:
* just copy the file in src/index.js into your code somewhere.
* remove exports from the functions if you aren't keeping preact slot x as a seperate file.

---
> made by [darcy lugt-falk](https://github.com/ehne)

> logo background image: <a title="galaxy effect png 3" href="https://pngimage.net/galaxy-effect-png-3/">galaxy effect png 3</a>
