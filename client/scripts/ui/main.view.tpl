    <div class="row">
      <div class="column column-10">ROM</div>
      <div class="column column-90">
        <!-- TODO automatic populate -->
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('Hurricane');">Hurricane</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('Terminator 2');">Terminator 2</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('Indiana Jones: The Pinball Adventure');">Indiana Jones</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('FreeWPC T2');">FreeWPC T2</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('Gilligan\'s Island');">Gilligan's Island</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('Fish Tales');">Fish Tales</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('High Speed II: The Getaway');">High Speed II: The Getaway</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('The Addams Family Special');">The Addams Family Special</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('Twilight Zone');">Twilight Zone</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('Hot Shot Basketball');">Hot Shot Basketball</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('The Party Zone');">The Party Zone</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('Dr. Who');">Dr. Who</button>
        <button class="button-black button-small black" onclick="wpcInterface.romSelection('Dirty Harry');">Dirty Harry</button>
    </div>
    </div>
    <div class="row">
      <div class="column column-10">Emulator</div>
      <div class="column column-20">
        <button class="button-black button-small black" onclick="console.log('reset...'); wpcInterface.wpcSystem.reset();">RESET</button>
        <button class="button-black button-outline button-small black" onclick="wpcInterface.pauseEmu();">Pause</button>
        <button class="button-black button-outline button-small black" onclick="wpcInterface.resumeEmu();">Resume</button>
      </div>

      <div class="column column-10">Coindoor</div>
      <div class="column column-60">
        <button class="button-black button-small black" onclick="wpcInterface.wpcSystem.setCabinetInput(1);">Coin#1</button>
        <button class="button-black button-small black" onclick="wpcInterface.wpcSystem.setCabinetInput(2);">Coin#2</button>
        <button class="button-black button-small black" onclick="wpcInterface.wpcSystem.setCabinetInput(4);">Coin#3</button>
        <button class="button-black button-small black" onclick="wpcInterface.wpcSystem.setCabinetInput(16);">Escape</button>
        <button class="button-black button-small black" onclick="wpcInterface.wpcSystem.setCabinetInput(32);">-</button>
        <button class="button-black button-small black" onclick="wpcInterface.wpcSystem.setCabinetInput(64);">+</button>
        <button class="button-black button-small black" onclick="wpcInterface.wpcSystem.setCabinetInput(128);">Enter</button>
      </div>
    </div>

    <div class="row">
      <div class="column column-10">Switch</div>
      <div id="pinball-specfic-switch-input" class="column">
      </div>
    </div>
