<!doctype html>
<html lang=en-us>
<head>
<title>SVG Path Editor</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="./css/style.css" rel=stylesheet>
</head>
<body>
<main class="container">
  <div id="overlay" class="overlay trans">
    <div id="divimport" class="panel">
      <h4>Import SVG Path</h4>
      <span class="red">Enter only one svg's path-d value</span><br>
      <textarea id="input" class="svgtext border">M356.5 16.375l-174.906 255.22 1.53 1.06 31.97 22.314 175.062-255.5L356.5 16.374zm90.063 62.22c-20.16 29.418-44.122 23.1-68.25 8.905l-48.688 72.875c21.278 16.55 36.46 35.645 18.594 61.72l42.967 29.468 28.907-42.157-14.72-9.156c-3.167 1.844-6.85 2.906-10.78 2.906-11.85 0-21.47-9.62-21.47-21.47 0-11.847 9.62-21.436 21.47-21.436s21.437 9.59 21.437 21.438c0 .195-.025.4-.03.593l15.906 9.907 17.938-26.218-37.688-23.5 11.03-17.72 14.94 9.313 10.093-16.188 24.25 15.094 17.092-24.94-43-29.436zM141.22 268.624c-.31.01-.628.023-.94.063-.827.104-1.652.284-2.53.562-3.51 1.11-7.4 4.066-10.125 7.938-2.724 3.87-4.16 8.487-4 12.125.16 3.637 1.257 6.338 5.25 9.125l76.594 53.468c3.283 2.293 5.727 2.35 9.124 1.156 3.396-1.192 7.323-4.26 10.125-8.218 2.8-3.96 4.352-8.66 4.31-12.188-.04-3.53-.89-5.787-4.374-8.22L148.03 270.97c-2.546-1.78-4.657-2.42-6.81-2.345zM84.28 312.78c-24.354.41-45.504 9.52-57.655 27.25-16.95 24.737-11.868 59.753 9.625 90.283-1.838 4.72-2.875 9.84-2.875 15.187 0 23.243 19.07 42.313 42.313 42.313 8.635 0 16.692-2.625 23.406-7.125 43.208 18.488 88.07 12.714 108.28-16.782 18.695-27.28 10.884-66.912-16.374-99.312l-63.094-44.03c-14.016-5.107-28.07-7.7-41.25-7.783-.792-.004-1.59-.012-2.375 0zm-8.593 109.126c13.143 0 23.594 10.45 23.594 23.594 0 13.143-10.45 23.625-23.593 23.625-13.142 0-23.624-10.482-23.624-23.625s10.482-23.594 23.624-23.594z</textarea>
      <br>
      <span>Input Size: <span id="isize1">0</span></span><br>
      <button id="btndoimport">Import SVG Path</button>
      <button id="btncloseimport">Close</button>
    </div>
    <div id="divexport" class="panel">
      <h4>Export SVG Path</h4>
      <textarea id="output" class="svgtext border" readonly></textarea>
      <br>
      <span>Output (Path) Size: <span id="osize1">0</span></span><br>
      <select id="brk">
        <option value="0">Only one path
        <option value="1">Break with MZ
        <option value="2">Break with MZZ
      </select>
      <select id="fmt">
        <option value="0">None
        <option value="1">JS Array
        <option value="2">Paths
        <option value="3">Paths + SVG Header
        <option value="4">Symbol
        <option value="5">Symbol + SVG Header
      </select>
      <select id="att">
        <option value="0">None
        <option value="1">Id/Class
        <option value="2">Id/Class + ViewBox
        <option value="3">ViewBox
      </select>
      <br>
      <button id="btndownload">Download</button>
      <button id="btncloseexport">Close</button>
    </div>
    <div id="divoptions" class="panel">
      <h4>Scale</h4>
      Enter "unit from" and "unit to"<br>
      If you want to convert viewbox from "0 0 20 20" to "0 0 128 128" enter 20 and 128<br>
      If you want to double the viewbox enter 1 and 2<br>
      If you want half of the viewbox enter 1 and 0.5 (or 2 and 1)<br>
      <div class="flex wrap center">
        <div class="ri v50">
          <input class=ce id=unitfr value=1>
        </div>
        <div class="le v50">
          <input class=ce id=unitto value=2>
        </div>
        <button id="btnscale">Scale</button>
      </div>
      <button id="btncenter">Move to Center</button>
      <h4>Options</h4>
      <div class="flex wrap center">
        <div class="ri v50">viewbox</div>
        <div class="le v50">
          <input id="viewbox" value="0 0 512 512">
          <select id="setviewbox">
            <option value="24">0 24
            <option value="36">0 36
            <option value="48">0 48
            <option value="100">0 100
            <option value="128">0 128
            <option value="256">0 256
            <option value="512" selected>0 512
            <option value="600">0 600
          </select>
        </div>
        <div class="ri v50">move factor</div>
        <div class="le v50">
          <input id=movefactor value=1>
        </div>
        <div class="ri v50">round digits</div>
        <div class="le v50">
          <input id=rounddigit value=3>
        </div>
        <div class="ri v50">analyse distance</div>
        <div class="le v50">
          <input id=adistance value=5>
        </div>
        <button id="btncloseoptions">Close</button>
      </div>
    </div>
  </div>
  <div class="appbody flex wrap center">
    <div class="buttons v25 ce">
      <button id="btnimport">Import SVG Path</button>
      <button id="btnabsolute">Make Absolute</button>
      <button id="btnrelative">Make Relative</button>
      <button id="btninteger">Round to Integers</button>
      <button id="btnflipver" class="small" title="Flip Vertical">FV</button>
      <button id="btnfliphor" class="small" title="Flip Horizontal">FH</button>
      <button id="btnrotatecw" class="small" title="Rotate Clockwise 5 degrees">CW</button>
      <button id="btnrotatecc" class="small" title="Rotate Counterclockwise 5 degrees">CC</button>
      <button id="btnoptions">Options</button>
      <button id="btnexport">Export SVG Path</button>
      <span>Input Size: <span id="isize2">0</span></span><br>
      <span>Output Size: <span id="osize2">0</span></span><br>
      <br>
      <span id="coors"></span><br>
      <span id="info"></span></div>
    <div class="border fit">
      <svg id="svg" width="512" height="512">
        <path id="path"/>
        <g id="g"/>
      </svg>
    </div>
    <div class="buttons ce v25">
      <button id="btnanalyse">Analyse</button>
      <button id="btnimportlist">Import Text</button>
    </div>
    <textarea id="list" class="svgtext nowrap border"></textarea>
  </div>
  <div class="appinfo">
    <p>SVG Path Editor lets you edit and optimize SVG's path element. It takes only one path element. You can edit viewport, scale, flip, rotate and edit path segments. With analyse button you can find unnecessary segments and delete them.
    <p>You can optimize the default image from 1356 bytes to 610~ bytes.
    <h2>How to Use?</h2>
    <h4>Import</h4>
    <p>Firstly import a path string. Its is the "d" attribute of the path.
    <h4>Make Absolute, Relative</h4>
    <p>You can make all segments absolute or relative. Lessen used characters is good for zip algorithm.
    <h4>Round to Integers</h4>
    <p>You can round all numbers to integer. Or use "round digit" on Options menu to round to suitable decimal point.
    <h4>Flip Vertical, Flip horizontal</h4>
    <p>With buttons <strong>FV</strong> and <strong>FH</strong> you can flip vertically and horizontally
    <h4>Rotate clockwise, counterclockwise</h4>
    <p>With buttons <strong>CW</strong> and <strong>CC</strong> you can rotate 5 degrees in clockwise or counterclockwise directions.
    <h4>ViewBox</h4>
    <p>You need to enter a suitable viewbox setting in the Options menu. Default value is "0 0 512 512". If you dont see your SVG, set this value to an appropriate one (see Centralize also).
    <h4>Centralize</h4>
    <p>You can centralize the path within the visible viewBox. You can click <strong>Move to Center</strong> button in the Options menu or press <strong>Shift + C</strong>.
    <h4>Scale</h4>
    <p>You can change scale of the path. For example, you have a SVG in "0 0 24 24" and you need to scale it to "0 0 512 512", then enter 24 and 512 in the boxes on Options menu. You can use <strong>Shift + Z</strong>, <strong>Shift + W</strong>, <strong>Shift + Q</strong>, <strong>Shift + W</strong> keys also.
    <h4>Move</h4>
    <p>You can move the path with mouse or <strong>Ctrl+Arrows</strong>. If you use keyboard "move factor" setting is used for each stroke.
    <h4>Zoom</h4>
    <p>You can zoom in with <strong>Shift + Numpad+</strong> and zoom out with <strong>Shift + Numpad-</strong>. Zooming changes the viewBox, not the path. You can also move the viewBox with <strong>Shift + Arrows</strong>
    <h4>Export</h4>
    <p>Get your final optimized path string with <strong>Export SVG Path</strong> button. There are some export options, for break apart see below <strong>Break Apart</strong> section.
    <p>You can download the result with <strong>Save SVG File</strong> button.
    <h4>Fill vs Stroke View</h4>
    <p>You can show SVG with Fill mode or Sroke mode via <strong>Shift + F</strong>.
    <h4>Segments Coordinate View</h4>
    <p>You can show segments coordinates via <strong>Shift + S</strong>. There are four modes: (1) No segments shown (2) Segments coordinates shown (default mode) (3) Segments and their curve coordinates shown, (4) Only M segments shown. When you mouse over these segments (small rectangles), segment indice will shown below coordinates. If segment is a M segment, the order is shown also, this will help on break apart segments (see Export).
    <h2>Analyse</h2>
    <p>You can perform some analysis via <strong>Analyse</strong> button, mostly line analysis.
    <p>Some removable segments will be removed.
    <p>And program will detect segments which are too close (closer than <strong>analyse distance</strong> on Options menu) to each other. These segments marked with <strong># D</strong> in the text area. You can check and make required changes or delete segments in the text area. Then, click <strong>Import Text</strong> button to accept these changes.
    <h4>Import Text</h4>
    <p>In the text area you can edit the path, you can add segments also. Clicking <strong>Import Text</strong> button will import these changes. Comments idenfied by <strong>#</strong> character.
    <p>In some cases you may need Import Text after Analyse.
    <h4>Line Numbers</h4>
    <p>You can on/off showing line numbers in text area via <strong>Shift + N</strong>. You can click <strong>Import Text</strong> in both cases. Line numbers shows the segment indice, and when you mouse over segments (small rectangles on SVG), segment indice will shown below coordinates. So you can learn which segment is on which line.
    <h4>Break Apart</h4>
    <p>On the Export menu you can break apart the path into paths begining with <strong>M</strong> and ending with <strong>Z</strong> segments. Some times you want to control where to break. In those cases you can use the <strong>Break with MZZ</strong> option. To do so you need two consequtive Z segments. In the text area and the second Z segment and press Import Text.
    <p>You may need change the M segment from absolute to relative or vice versa. On M segments line both coordinates shown, one in comment. You can alter the line and press Import Text.
    <h2>Keyboard Shortcuts</h2>
    <ul>
      <li><strong>Ctrl + Arrows</strong>: Move SVG
      <li><strong>Shift + S</strong>: Change segment show mode
      <li><strong>Shift + F</strong>: Change SVG fill mode
      <li><strong>Shift + C</strong>: Center SVG into current viewbox
      <li><strong>Shift + Z</strong>: Scale SVG with 0.90 ratio (smaller svg)
      <li><strong>Shift + Q</strong>: Scale SVG with 0.99 ratio (smaller svg)
      <li><strong>Shift + X</strong>: Scale SVG with 1.10 ratio (larger svg)
      <li><strong>Shift + W</strong>: Scale SVG with 1.01 ratio (larger svg)
      <li><strong>Shift + Arrows</strong>: Move viewbox
      <li><strong>Shift + Numpad+</strong>: Zoom in viewbox (smaller viewbox)
      <li><strong>Shift + Numpad-</strong>: Zoom out viewbox (larger viewbox)
      <li><strong>Shift + N</strong>: Show line numbers in text area
    </ul>
    <h3>Cautions</h3>
    <ul>
      <li>Always be aware viewbox setting in the options menu. Don't forget: viewBox = min-x min-y width height
      <li>There is no UNDO. Take backups.
      <li>Do analysis with all absolute segments.
    </ul>
    <h3>Thanks</h3>
    <p>The default path taken from <a href=http://game-icons.net target=_blank>game-icons.net</a> 
  </div>
</main>
<footer>
  <div class="ce icons"><a href="https://play.google.com/store/apps/developer?id=aydos">
    <svg>
      <use xlink:href="./img/icons.svg#icon-android"/>
    </svg>
    </a><a href=https://github.com/aydos/>
    <svg>
      <use xlink:href="./img/icons.svg#icon-github"/>
    </svg>
    </a><a href=https://twitter.com/aydos>
    <svg>
      <use xlink:href="./img/icons.svg#icon-twitter"/>
    </svg>
    </a><a href=https://tr.linkedin.com/in/fahriaydos>
    <svg>
      <use xlink:href="./img/icons.svg#icon-linkedin"/>
    </svg>
    </a></div>
  <div class=ce>&copy;
    <?= date('Y'); ?>
    peter schlosser</div>
</footer>
<script src="./js/svgpath.js"></script>
<script src="./js/svgedit.js"></script>
</body>
</html>
