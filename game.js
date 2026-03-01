const MenuScene = {
    key: 'MenuScene',
    create: function () {
        const W = this.scale.width;
        const H = this.scale.height;

        
        this.cameras.main.setBackgroundColor('#0b0b14');

        
        this.add.text(W / 2, H / 2 - 100, 'VoidFall', {
            fontFamily: 'Arial',
            fontSize: '64px',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        
        const btn = this.add.text(W / 2, H / 2 + 10, 'Start', {
            fontFamily: 'Arial',
            fontSize: '36px',
            color: '#ffffff',
            backgroundColor: '#1e90ff',
            padding: { x: 24, y: 12 }
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        btn.on('pointerover', () => btn.setStyle({ backgroundColor: '#3cb0ff' }));
        btn.on('pointerout', () => btn.setStyle({ backgroundColor: '#1e90ff' }));
        btn.on('pointerdown', () => {
            this.scene.start('GameScene');
        });

        const howBtn = this.add.text(W / 2, H / 2 + 70, 'How to play', {
            fontFamily: 'Arial',
            fontSize: '28px',
            color: '#ffffff',
            backgroundColor: '#444444',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        howBtn.on('pointerover', () => howBtn.setStyle({ backgroundColor: '#666666' }));
        howBtn.on('pointerout', () => howBtn.setStyle({ backgroundColor: '#444444' }));
        howBtn.on('pointerdown', () => this.scene.start('HowToScene'));

        const tipY = H / 2 + 214;
        const iconY = tipY - 58;
        const glow = this.add.rectangle(W / 2, tipY + 20, 760, 56, 0x4ef5ff, 0.07).setOrigin(0.5);
        glow.setStrokeStyle(1, 0x4ef5ff, 0.2);

        const headsetShadow = this.add.graphics();
        headsetShadow.lineStyle(7, 0x4ef5ff, 0.14);
        headsetShadow.beginPath();
        headsetShadow.arc(W / 2, iconY, 38, Phaser.Math.DegToRad(202), Phaser.Math.DegToRad(338), false);
        headsetShadow.strokePath();

        const headset = this.add.graphics();
        headset.lineStyle(4, 0xf6fdff, 1);
        headset.beginPath();
        headset.arc(W / 2, iconY, 38, Phaser.Math.DegToRad(202), Phaser.Math.DegToRad(338), false);
        headset.strokePath();
        headset.beginPath();
        headset.arc(W / 2, iconY, 31, Phaser.Math.DegToRad(205), Phaser.Math.DegToRad(335), false);
        headset.strokePath();

        headset.lineStyle(3, 0xf6fdff, 1);
        headset.strokeLineShape(new Phaser.Geom.Line(W / 2 - 30, iconY + 12, W / 2 - 33, iconY + 18));
        headset.strokeLineShape(new Phaser.Geom.Line(W / 2 + 30, iconY + 12, W / 2 + 33, iconY + 18));

        headset.fillStyle(0x07111a, 1);
        headset.fillRoundedRect(W / 2 - 47, iconY + 14, 15, 28, 7);
        headset.fillRoundedRect(W / 2 + 32, iconY + 14, 15, 28, 7);
        headset.lineStyle(3, 0xf6fdff, 1);
        headset.strokeRoundedRect(W / 2 - 47, iconY + 14, 15, 28, 7);
        headset.strokeRoundedRect(W / 2 + 32, iconY + 14, 15, 28, 7);

        headset.lineStyle(2, 0xf6fdff, 0.9);
        headset.strokeRoundedRect(W / 2 - 44, iconY + 18, 9, 19, 5);
        headset.strokeRoundedRect(W / 2 + 35, iconY + 18, 9, 19, 5);

        const tipStyle = { fontFamily: 'Arial', fontSize: '34px', fontStyle: 'bold' };
        const t1 = this.add.text(0, tipY, 'USE ', { ...tipStyle, color: '#f3f3f3' }).setOrigin(0, 0.5);
        const t2 = this.add.text(0, tipY, 'HEADPHONES', { ...tipStyle, color: '#4ef5ff' }).setOrigin(0, 0.5);
        const t3 = this.add.text(0, tipY, ' FOR BETTER ', { ...tipStyle, color: '#f3f3f3' }).setOrigin(0, 0.5);
        const t4 = this.add.text(0, tipY, 'EXPERIENCE', { ...tipStyle, color: '#4ef5ff' }).setOrigin(0, 0.5);
        const totalW = t1.width + t2.width + t3.width + t4.width;
        let x = (W - totalW) / 2;
        t1.setX(x); x += t1.width;
        t2.setX(x); x += t2.width;
        t3.setX(x); x += t3.width;
        t4.setX(x);
    }
};


const GameScene = {
    key: 'GameScene',
    preload,
    create,
    update
};

const HowToScene = {
    key: 'HowToScene',
    create: function(){
        const W = this.scale.width;
        const H = this.scale.height;
        this.cameras.main.setBackgroundColor('#0b0b14');
        this.add.text(W/2, 80, 'How to play', { fontFamily: 'Arial', fontSize: '48px', color: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5);
        const panelW = Math.min(700, W - 80);
        const panelH = Math.min(360, H - 200);
        const panelX = (W - panelW) / 2;
        const panelY = (H - panelH) / 2 - 20;
        const dim = this.add.rectangle(panelX, panelY, panelW, panelH, 0xffffff, 0.06).setOrigin(0,0);
        dim.setStrokeStyle(2, 0xffffff, 0.15);
        const lines = [
            'Player 1: Arrow keys; Up = Jump',
            'Player 2: A/D; W = Jump',
            'Goal: Collect all stars. Then jump into the portal to enter Nether.',
            'Nether Trial: Collect all dark stars with that same player.',
            'Door: When unlocked, stand near to open. Touch the doorway to advance.'
        ];
        this.add.text(W/2, panelY + 28, lines.join('\n\n'), { fontFamily: 'Arial', fontSize: '20px', color: '#dddddd', align: 'center', wordWrap: { width: panelW - 40 } }).setOrigin(0.5, 0);
        this.add.text(W/2, H - 190, 'WARNING', {
            fontFamily: 'Arial',
            fontSize: '44px',
            color: '#ff2b2b',
            fontStyle: 'bold'
        }).setOrigin(0.5);
        this.add.text(W/2, H - 145,
            'This game includes jump scares and intense moments.\nRecommended for ages 8+ and for players comfortable with spooky content.',
            {
                fontFamily: 'Arial',
                fontSize: '20px',
                color: '#ff6a6a',
                align: 'center',
                wordWrap: { width: Math.min(760, W - 80) }
            }
        ).setOrigin(0.5, 0);
        const back = this.add.text(W/2, H - 74, 'Back', { fontFamily: 'Arial', fontSize: '28px', color: '#ffffff', backgroundColor: '#444444', padding: { x: 20, y: 10 } })
            .setOrigin(0.5).setInteractive({ useHandCursor: true });
        back.on('pointerover', () => back.setStyle({ backgroundColor: '#666666' }));
        back.on('pointerout', () => back.setStyle({ backgroundColor: '#444444' }));
        back.on('pointerdown', () => this.scene.start('MenuScene'));
        this.input.keyboard.once('keydown-ESC', () => this.scene.start('MenuScene'));
        this.add.text(W/2, H - 44, 'Press ESC to return', { fontFamily: 'Arial', fontSize: '16px', color: '#bbbbbb' }).setOrigin(0.5);
    }
};

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [MenuScene, HowToScene, GameScene]
};

const game = new Phaser.Game(config);

let player1, player2;
let cursors, wasd;
let platforms, gems, door, spikes;
let netherPlatforms = null, netherSpikes = null, netherMapBackdrop = null;
let scoreText1, scoreText2, teamScoreText, doorLockedText;
let teamLives = 3;
let heartSprites = [];
let highScore1 = 0, highScore2 = 0, highTeamScore = 0;
let levelsCleared = 0;
let gameOver = false;
let restartOverlay = null;
let player1Score = 0;
let player2Score = 0;
let remainingGems = 0;
let netherCompleted = false;
let inNether = false;
let netherPlayer = null;
let netherStars = null;
let remainingDarkStars = 0;
let netherTotalStars = 0;
let netherOverlay = null;
let netherStatusText = null;
let netherTimerText = null;
let netherTimeLeft = 0;
let netherTimeLimit = 0;
let netherCaughtOverlay = null;
let netherCaveSound = null;
let netherCaveStopEvent = null;
let doorUnlocked = false;
let doorFrameSprite = null;
let doorPanelSprite = null;
let doorGoalZone = null;
let doorOpen = false;
let doorOpening = false;
let doorMaskGraphic = null;
let levelTransitioning = false;
let sacrificialZone, sacrificialGlow;
let sacrificialAuraRect;
let sacrificialPortalFrame = null;
let sacrificialPortalParticles = null;
let uiBackdrop = null;
let uiSafeRect = null;
let uiBlocker = null;
const JUMP_VELOCITY = -447;

function drawUiBackdrop(scene, w, h){
    if (!uiBackdrop || !uiBackdrop.clear){
        uiBackdrop = scene.add.graphics().setDepth(5).setScrollFactor(0);
    }
    uiBackdrop.clear();
    uiBackdrop.fillStyle(0xffffff, 0.75);
    if (uiBackdrop.fillRoundedRect) {
        uiBackdrop.fillRoundedRect(0, 0, w, h, 10);
    } else {
        uiBackdrop.fillRect(0, 0, w, h);
    }
}

function preload() {
    if (this.load) {
        this.load.crossOrigin = 'anonymous';
        this.load.image('netherCaughtImage1', 'Sources/js[5].png');
        this.load.image('netherCaughtImage2', 'Sources/js[2].png');
        this.load.image('netherCaughtImage3', 'Sources/js[3].png');
        this.load.image('netherCaughtImage4', 'Sources/js[4].png');
        this.load.audio('jumpScareSfx1', 'Sources/js sound[1].mp3');
        this.load.audio('jumpScareSfx2', 'Sources/js sound[2].mp3');
        this.load.audio('levelCompleteSfx', 'Sources/Complete.wav');
        this.load.audio('netherCaveSfx', 'Sources/Cave.mp3');
        this.load.audio('coinSfx', 'Sources/Coin.mp3');
    }
}

function playCoinCollectSound(scene){
    if (!scene || !scene.sound) return;
    scene.sound.play('coinSfx', { volume: 0.55 });
}

function stopNetherCavePreview(scene){
    if (netherCaveStopEvent && netherCaveStopEvent.remove){
        netherCaveStopEvent.remove(false);
    }
    netherCaveStopEvent = null;
    if (netherCaveSound && netherCaveSound.stop){
        netherCaveSound.stop();
        netherCaveSound.destroy();
    }
    netherCaveSound = null;
}

function playNetherCavePreview(scene){
    if (!scene || !scene.sound) return;
    stopNetherCavePreview(scene);
    netherCaveSound = scene.sound.add('netherCaveSfx', { volume: 0.6, loop: false });
    netherCaveSound.play({ seek: 0 });
    netherCaveStopEvent = scene.time.delayedCall(20000, () => {
        if (netherCaveSound && netherCaveSound.isPlaying) netherCaveSound.stop();
    });
}

function showNetherCaughtGameOver(scene){
    if (netherCaughtOverlay && netherCaughtOverlay.destroy) {
        netherCaughtOverlay.destroy(true);
    }
    const W = scene.scale.width;
    const H = scene.scale.height;
    const dim = scene.add.rectangle(0, 0, W, H, 0x000000, 0.4).setOrigin(0).setDepth(50).setScrollFactor(0);
    let img = null;
    const choices = ['netherCaughtImage1', 'netherCaughtImage2', 'netherCaughtImage3', 'netherCaughtImage4']
        .filter(k => scene.textures.exists(k));
    if (choices.length > 0) {
        const pick = choices[Phaser.Math.Between(0, choices.length - 1)];
        img = scene.add.image(W / 2, H / 2, pick).setDepth(51).setScrollFactor(0);
        const tex = scene.textures.get(pick);
        const src = tex && tex.getSourceImage ? tex.getSourceImage() : null;
        if (src && src.width && src.height) {
            const scale = Math.max(W / src.width, H / src.height);
            img.setDisplaySize(src.width * scale, src.height * scale);
        } else {
            img.setDisplaySize(W, H);
        }
    }
    const txt = scene.add.text(W / 2, H - 120, 'The Nether caught you', {
        fontFamily: 'Arial',
        fontSize: '52px',
        color: '#ff2b2b',
        fontStyle: 'bold',
        stroke: '#3a0000',
        strokeThickness: 6,
        align: 'center'
    }).setOrigin(0.5).setDepth(52).setScrollFactor(0);
    const sub = scene.add.text(W / 2, H - 86, 'Press R to restart', {
        fontFamily: 'Arial',
        fontSize: '22px',
        color: '#ffd6d6'
    }).setOrigin(0.5).setDepth(52).setScrollFactor(0);
    const children = img ? [dim, img, txt, sub] : [dim, txt, sub];
    netherCaughtOverlay = scene.add.container(0, 0, children).setDepth(50);
    if (scene.sound) {
        const soundChoices = ['jumpScareSfx1', 'jumpScareSfx2']
            .filter(k => scene.cache && scene.cache.audio && scene.cache.audio.has(k));
        if (soundChoices.length > 0){
            const pickSfx = soundChoices[Phaser.Math.Between(0, soundChoices.length - 1)];
            scene.sound.play(pickSfx, { volume: 1 });
        }
    }
    scene.input.keyboard.once('keydown-R', () => {
        if (!gameOver) return;
        resetAll(scene);
    });
}

function create() {
    gameOver = false;
    doorOpen = false;
    doorOpening = false;
    levelTransitioning = false;
    doorFrameSprite = null;
    doorPanelSprite = null;
    doorGoalZone = null;
    doorMaskGraphic = null;
    sacrificialPortalFrame = null;
    sacrificialPortalParticles = null;
    netherCompleted = false;
    inNether = false;
    netherPlayer = null;
    netherStars = null;
    remainingDarkStars = 0;
    netherTotalStars = 0;
    netherOverlay = null;
    netherStatusText = null;
    netherTimerText = null;
    netherTimeLeft = 0;
    netherTimeLimit = 0;
    if (netherCaughtOverlay && netherCaughtOverlay.destroy) netherCaughtOverlay.destroy(true);
    netherCaughtOverlay = null;
    const UI_W = 230, UI_H = 170;
    uiSafeRect = new Phaser.Geom.Rectangle(0, 0, UI_W, UI_H);
    if (uiBackdrop && uiBackdrop.destroy) uiBackdrop.destroy();
    uiBackdrop = null;
    drawUiBackdrop(this, UI_W, UI_H);
    if (uiBlocker && uiBlocker.destroy) uiBlocker.destroy();
    uiBlocker = this.add.rectangle(UI_W / 2, UI_H / 2, UI_W, UI_H, 0x000000, 0)
        .setOrigin(0.5, 0.5)
        .setDepth(5);
    this.physics.add.existing(uiBlocker, true);
    const homeBtn = this.add.text(6, 6, 'Home', {
        fontFamily: 'Arial',
        fontSize: '16px',
        color: '#ffffff',
        backgroundColor: '#1e90ff',
        padding: { x: 10, y: 6 }
    }).setOrigin(0, 0).setInteractive({ useHandCursor: true }).setDepth(7).setScrollFactor(0);
    homeBtn.on('pointerover', () => homeBtn.setStyle({ backgroundColor: '#3cb0ff' }));
    homeBtn.on('pointerout', () => homeBtn.setStyle({ backgroundColor: '#1e90ff' }));
    homeBtn.on('pointerdown', () => this.scene.start('MenuScene'));
    const hudTopY = homeBtn.getBounds().bottom + 8;
    platforms = this.physics.add.staticGroup();
    ensurePlatformTexture(this);
    ensureNetherPlatformTexture(this);
    generatePlatforms(platforms);
    generateCeilingPlatforms(platforms, this);

    createCharacterTextures(this);
    createStarTexture(this, 'goldStar', 0xFFD700);
    createStarTexture(this, 'darkStar', 0x5b3b85, 0xb89bff);
    createDoorTexture(this);

    player1 = this.physics.add.sprite(100, 600, 'player1Char');
    player2 = this.physics.add.sprite(200, 600, 'player2Char');

    [player1, player2].forEach(player => {
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, platforms);
        if (uiBlocker) this.physics.add.collider(player, uiBlocker);
        player.body.setSize(20, 34);
        player.body.setOffset(10, 7);
        player.setBounce(0.05);
    });

    cursors = this.input.keyboard.createCursorKeys();
    wasd = this.input.keyboard.addKeys('W,A,S,D');

    createSpikeTexture(this);
    spikes = this.physics.add.staticGroup();
    generateSpikes(spikes, platforms, this);
    this.physics.add.overlap(player1, spikes, () => onSpikeHit(player1, this), null, this);
    this.physics.add.overlap(player2, spikes, () => onSpikeHit(player2, this), null, this);

    gems = this.physics.add.group();
    remainingGems = generateGems(gems, platforms);

    this.physics.add.overlap(player1, gems, collectGem1, null, this);
    this.physics.add.overlap(player2, gems, collectGem2, null, this);

    door = this.physics.add.sprite(900, 100, 'doorRect');
    door.body.setAllowGravity(false);
    door.setImmovable(true);
    door.setVisible(false);
    const doorW = 40, doorH = 80;
    doorFrameSprite = this.add.image(door.x, door.y, 'doorFrame').setOrigin(0.5);
    doorPanelSprite = this.add.image(door.x, door.y, 'doorPanel').setOrigin(0.5);
    doorMaskGraphic = this.add.graphics({ x: 0, y: 0 });
    doorMaskGraphic.fillStyle(0xffffff, 1);
    doorMaskGraphic.fillRect(door.x - doorW / 2, door.y - doorH / 2, doorW, doorH);
    doorMaskGraphic.setVisible(false);
    const doorMask = doorMaskGraphic.createGeometryMask();
    doorPanelSprite.setMask(doorMask);
    this.physics.add.collider(player1, door, reachDoor1, null, this);
    this.physics.add.collider(player2, door, reachDoor2, null, this);
    this.physics.add.overlap(player1, door, reachDoor1, null, this);
    this.physics.add.overlap(player2, door, reachDoor2, null, this);
    doorGoalZone = this.add.zone(door.x, door.y, doorW, doorH);
    this.physics.add.existing(doorGoalZone, true);
    if (doorGoalZone.body && doorGoalZone.body.setSize) {
        doorGoalZone.body.setSize(doorW, doorH);
    }
    this.physics.add.overlap(player1, doorGoalZone, reachDoor1, null, this);
    this.physics.add.overlap(player2, doorGoalZone, reachDoor2, null, this);

    const W = this.scale.width;
    const H = this.scale.height;
    sacrificialZone = this.add.zone(W - 64, H - 64, 128, 128);
    this.physics.world.enable(sacrificialZone);
    sacrificialZone.body.setAllowGravity(false);
    sacrificialZone.body.setImmovable(true);
    createSacrificialPortalVisual(this, W - 64, H - 64);
    sacrificialAuraRect = new Phaser.Geom.Rectangle(W - 160, H - 160, 160, 160);
    this.physics.add.overlap(player1, sacrificialZone, () => enterNetherFromZone(player1, this), null, this);
    this.physics.add.overlap(player2, sacrificialZone, () => enterNetherFromZone(player2, this), null, this);


    let top = hudTopY;
    scoreText1 = this.add.text(16, top, 'Player1: 0', { fontSize: '20px', fill: '#ff0000' }).setDepth(6).setScrollFactor(0);
    top = scoreText1.getBounds().bottom + 4;
    scoreText2 = this.add.text(16, top, 'Player2: 0', { fontSize: '20px', fill: '#0000ff' }).setDepth(6).setScrollFactor(0);
    top = scoreText2.getBounds().bottom + 4;
    teamScoreText = this.add.text(16, top, 'Team: 0', { fontSize: '20px', fill: '#00ff00' }).setDepth(6).setScrollFactor(0);
    top = teamScoreText.getBounds().bottom + 6;
    doorLockedText = this.add.text(800, 16, 'Door: Locked', { fontSize: '20px', fill: '#8B4513' });

    createHeartTextures(this);
    initHeartsUI(this);
    updateHeartsUI();
}

function update() {
    if (gameOver) return;
    player1.setVelocityX(0);
    if(cursors.left.isDown) player1.setVelocityX(-200);
    if(cursors.right.isDown) player1.setVelocityX(200);
    if(Phaser.Input.Keyboard.JustDown(cursors.up)) jump(player1);

    player2.setVelocityX(0);
    if(wasd.A.isDown) player2.setVelocityX(-200);
    if(wasd.D.isDown) player2.setVelocityX(200);
    if(Phaser.Input.Keyboard.JustDown(wasd.W)) jump(player2);

    applySacrificialProximityEffect();
    updateNetherTimer(this);

    if (player1.body.velocity.x > 10) player1.setFlipX(false);
    else if (player1.body.velocity.x < -10) player1.setFlipX(true);
    if (player2.body.velocity.x > 10) player2.setFlipX(false);
    else if (player2.body.velocity.x < -10) player2.setFlipX(true);


    if (doorUnlocked && !doorOpening && !doorOpen && door) {
        const near = (p) => {
            if (!p || !p.body || !p.active) return false;
            const dx = Math.abs(p.x - door.x);
            const dy = Math.abs(p.y - door.y);
            return dx < 32 && dy < 60; 
        };
        if (near(player1) || near(player2)) {
            openDoorAnimation(this);
        }
    }
}

function updateNetherTimer(scene){
    if (!inNether) return;
    const dt = (scene && scene.game && scene.game.loop) ? (scene.game.loop.delta / 1000) : 0.016;
    netherTimeLeft = Math.max(0, netherTimeLeft - dt);
    if (netherTimerText){
        netherTimerText.setText(`Time left: ${Math.ceil(netherTimeLeft)}s`);
    }
    if (netherTimeLeft <= 0){
        failNetherTrial(scene);
    }
}

function getPlatformSize(scene){
    const tex = scene.textures.get('platformProc');
    if (tex && tex.getSourceImage()){
        return { w: tex.getSourceImage().width, h: tex.getSourceImage().height };
    }
    return { w: 120, h: 24 };
}

function rectsOverlap(a, b, padX = 0, padY = 0){
    return !(a.x + a.w + padX <= b.x ||
             b.x + b.w + padX <= a.x ||
             a.y + a.h + padY <= b.y ||
             b.y + b.h + padY <= a.y);
}

function collectExistingPlatformRects(platforms, scene){
    const { w, h } = getPlatformSize(scene);
    const rects = [];
    platforms.getChildren().forEach(s => {
        rects.push({ x: s.x - w/2, y: s.y - h/2, w, h });
    });
    return rects;
}

function pointInsideAnyPlatform(x, y, scene, margin = 6){
    const all = [];
    const { w, h } = getPlatformSize(scene);
    scene.children.list.forEach(obj => {
        if (obj.texture && obj.texture.key === 'platformProc'){
            all.push({ x: obj.x - w/2, y: obj.y - h/2, w, h });
        }
    });
    for (const r of all){
        if (x >= r.x - margin && x <= r.x + r.w + margin && y >= r.y - margin && y <= r.y + r.h + margin){
            return true;
        }
    }
    return false;
}

function circleTouchesAnyPlatform(x, y, radius, scene, margin = 2){
    const rects = [];
    const { w, h } = getPlatformSize(scene);
    scene.children.list.forEach(obj => {
        if (
            obj.texture &&
            (obj.texture.key === 'platformProc' || obj.texture.key === 'platformNether') &&
            obj.visible !== false &&
            (!obj.body || obj.body.enable !== false)
        ){
            rects.push({ x: obj.x - w/2, y: obj.y - h/2, w, h });
        }
    });
    for (const r of rects){
        const cx = Math.max(r.x - margin, Math.min(x, r.x + r.w + margin));
        const cy = Math.max(r.y - margin, Math.min(y, r.y + r.h + margin));
        const dx = x - cx;
        const dy = y - cy;
        if (dx*dx + dy*dy <= (radius + margin) * (radius + margin)) return true;
    }
    return false;
}

function canReachByJump(fromX, fromY, toX, toY){
    const dx = Math.abs(toX - fromX);
    const rise = fromY - toY;
    const drop = toY - fromY;
    const maxRise = 105;
    const maxDrop = 260;
    const maxRun = 225;
    if (dx > maxRun) return false;
    if (rise > maxRise) return false;
    if (drop > maxDrop) return false;
    return true;
}

function addPlatformRectIfValid(scene, placedRects, x, y, options = {}){
    const { w: PW, h: PH } = getPlatformSize(scene);
    const padX = options.padX ?? 8;
    const padY = options.padY ?? 8;
    const rect = { x: x - PW/2, y: y - PH/2, w: PW, h: PH };
    const uiArea = uiSafeRect ? { x: uiSafeRect.x, y: uiSafeRect.y, w: uiSafeRect.width, h: uiSafeRect.height } : null;
    if (uiArea && rectsOverlap(rect, uiArea, 0, 0)) return false;
    for (const r of placedRects){
        if (rectsOverlap(rect, r, padX, padY)) return false;
    }
    placedRects.push(rect);
    const p = platforms.create(x, y, 'platformProc');
    p.setScale(1).refreshBody();
    return true;
}

function generatePlatforms(platforms) {
    const scene = platforms.scene;
    const placedRects = collectExistingPlatformRects(platforms, scene);
    const yDrop = 45;

    const basePath = [
        { x: 300, y: 610 },
        { x: 470, y: 535 },
        { x: 640, y: 455 },
        { x: 810, y: 375 },
        { x: 910, y: 300 }
    ];
    const path = basePath.map(p => ({ x: p.x, y: p.y + yDrop }));

    const anchors = [{ x: 100, y: 600 }, { x: 200, y: 600 }];
    path.forEach((pt, idx) => {
        const from = idx === 0 ? anchors[1] : path[idx - 1];
        if (canReachByJump(from.x, from.y, pt.x, pt.y)){
            addPlatformRectIfValid(scene, placedRects, pt.x, pt.y);
        }
    });

    const baseBranches = [
        { x: 235, y: 525, parent: 0 },
        { x: 545, y: 610, parent: 1 },
        { x: 725, y: 540, parent: 2 },
        { x: 390, y: 445, parent: 1 },
        { x: 575, y: 365, parent: 2 }
    ];
    const branches = baseBranches.map(b => ({ x: b.x, y: b.y + yDrop, parent: b.parent }));

    branches.forEach(b => {
        const from = path[b.parent] || anchors[1];
        if (canReachByJump(from.x, from.y, b.x, b.y)){
            addPlatformRectIfValid(scene, placedRects, b.x, b.y);
        }
    });
}

function generateCeilingPlatforms(platforms, scene){
    const placedRects = collectExistingPlatformRects(platforms, scene);
    const yDrop = 45;
    const baseTopChain = [
        { x: 760, y: 295 },
        { x: 600, y: 220 },
        { x: 430, y: 150 },
        { x: 270, y: 110 }
    ];
    const topChain = baseTopChain.map(p => ({ x: p.x, y: p.y + yDrop }));

    const start = { x: 910, y: 300 + yDrop };

    const doorApproach = [
        { x: 835, y: 285 },
        { x: 880, y: 225 },
        { x: 915, y: 170 }
    ];
    doorApproach.forEach((pt, idx) => {
        const from = idx === 0 ? start : doorApproach[idx - 1];
        if (canReachByJump(from.x, from.y, pt.x, pt.y)){
            addPlatformRectIfValid(scene, placedRects, pt.x, pt.y);
        }
    });

    topChain.forEach((pt, idx) => {
        const from = idx === 0 ? start : topChain[idx - 1];
        if (canReachByJump(from.x, from.y, pt.x, pt.y)){
            addPlatformRectIfValid(scene, placedRects, pt.x, pt.y);
        }
    });
}

function createSpikeTexture(scene){
    const w = 24, h = 18;
    const g = scene.add.graphics();
    g.clear();
    g.fillStyle(0xcc3333, 1);
    const tri = new Phaser.Geom.Triangle(0, h, w/2, 0, w, h);
    g.fillTriangleShape(tri);
    g.lineStyle(2, 0x660000, 0.9);
    g.strokeTriangleShape(tri);
    g.generateTexture('spikeTri', w, h);
    g.destroy();
}

function ensurePlatformTexture(scene){
    const key = 'platformProc';
    if (scene.textures.exists(key)) return;
    const w = 120, h = 24, r = 6;
    const g = scene.add.graphics({ x: 0, y: 0 });
    g.fillStyle(0x2e4a6b, 1);
    if (g.fillRoundedRect) g.fillRoundedRect(0, 0, w, h, r); else g.fillRect(0, 0, w, h);
    g.fillStyle(0x4f79a3, 0.95);
    g.fillRect(2, 2, w - 4, Math.max(5, h * 0.28));
    g.fillStyle(0x1f3349, 0.95);
    g.fillRect(2, h - 6, w - 4, 4);
    g.lineStyle(2, 0x162536, 0.9);
    if (g.strokeRoundedRect) g.strokeRoundedRect(0, 0, w, h, r); else g.strokeRect(0, 0, w, h);
    g.lineStyle(1, 0x8fb4da, 0.35);
    for (let i = 10; i < w; i += 22){
        const len = Phaser.Math.Between(5, 10);
        g.beginPath();
        g.moveTo(i, 8);
        g.lineTo(i + len, 8);
        g.strokePath();
    }
    g.generateTexture(key, w, h);
    g.destroy();
}

function ensureNetherPlatformTexture(scene){
    const key = 'platformNether';
    if (scene.textures.exists(key)) return;
    const w = 120, h = 24, r = 6;
    const g = scene.add.graphics({ x: 0, y: 0 });
    g.fillStyle(0x261038, 1);
    if (g.fillRoundedRect) g.fillRoundedRect(0, 0, w, h, r); else g.fillRect(0, 0, w, h);
    g.fillStyle(0x6b43a3, 0.95);
    g.fillRect(2, 2, w - 4, Math.max(5, h * 0.28));
    g.fillStyle(0x170926, 0.95);
    g.fillRect(2, h - 6, w - 4, 4);
    g.lineStyle(2, 0x0e0618, 0.95);
    if (g.strokeRoundedRect) g.strokeRoundedRect(0, 0, w, h, r); else g.strokeRect(0, 0, w, h);
    g.lineStyle(1, 0xb68dff, 0.45);
    for (let i = 10; i < w; i += 20){
        g.beginPath();
        g.moveTo(i, 8);
        g.lineTo(i + 8, 8);
        g.strokePath();
    }
    g.generateTexture(key, w, h);
    g.destroy();
}

function clearSpikesNear(spikesGroup, points, radius = 96){
    if (!spikesGroup || !spikesGroup.getChildren) return;
    const r2 = radius * radius;
    spikesGroup.getChildren().forEach(s => {
        if (!s || !s.active) return;
        const hit = points.some(p => {
            const dx = (s.x || 0) - p.x;
            const dy = (s.y || 0) - p.y;
            return (dx * dx + dy * dy) <= r2;
        });
        if (hit) s.destroy();
    });
}

function generateSpikes(spikesGroup, platforms, scene){
    const W = scene.scale.width;
    const H = scene.scale.height;
    const spawn1 = { x: 100, y: 600 };
    const spawn2 = { x: 200, y: 600 };
    const returnSpawn = { x: W - 180, y: H - 190 };
    const avoidRadius = 140;
    platforms.getChildren().forEach(p => {
        if (Phaser.Math.FloatBetween(0,1) < 0.35) {
            if (Phaser.Math.Distance.Between(p.x, p.y, spawn1.x, spawn1.y) < avoidRadius) return;
            if (Phaser.Math.Distance.Between(p.x, p.y, spawn2.x, spawn2.y) < avoidRadius) return;
            if (Phaser.Math.Distance.Between(p.x, p.y, returnSpawn.x, returnSpawn.y) < avoidRadius) return;
            if (p.x > 800 && p.y < 320) return;
            const s = spikesGroup.create(p.x, p.y - 18, 'spikeTri');
            s.setOrigin(0.5, 1);
            s.refreshBody();
        }
    });
    const startX = 320;
    const endX = W - 180;
    const y = H - 2;
    for (let x = startX; x < endX; x += 64){
        if (Phaser.Math.Between(0,1)){
            if (Math.abs(x - spawn1.x) < avoidRadius) continue;
            if (Math.abs(x - spawn2.x) < avoidRadius) continue;
            if (Math.abs(x - returnSpawn.x) < avoidRadius) continue;
            const s = spikesGroup.create(x, y, 'spikeTri');
            s.setOrigin(0.5, 1);
            s.refreshBody();
        }
    }

    clearSpikesNear(spikesGroup, [spawn1, spawn2, returnSpawn], 100);
}

function generateGems(group, platforms){
    let count = 0;
    const scene = platforms.scene;
    const maxGems = 10;
    const spawnChance = 0.55;
    const doorSafeRect = { x: 820, y: 20, w: 180, h: 220 };
    platforms.getChildren().forEach(p => {
        if (count >= maxGems) return;
        if(Math.random() < spawnChance) {
            let baseX = p.x;
            let baseY = p.y - 50;
            const minDist = 48;
            let pos = { x: baseX, y: baseY };
            const candidates = [
                { x: baseX + 32, y: baseY },
                { x: baseX - 32, y: baseY },
                { x: baseX, y: baseY - 24 },
                { x: baseX, y: baseY + 24 }
            ];
            const insideUiArea = (x, y) => uiSafeRect && Phaser.Geom.Rectangle.Contains(uiSafeRect, x, y);
            const nearDoor = (x, y) => (
                x >= doorSafeRect.x &&
                x <= doorSafeRect.x + doorSafeRect.w &&
                y >= doorSafeRect.y &&
                y <= doorSafeRect.y + doorSafeRect.h
            );
            const nearSpike = (x, y) => {
                if (!spikes) return false;
                let tooClose = false;
                spikes.getChildren().forEach(s => {
                    if (tooClose) return;
                    const dx = (s.x || 0) - x;
                    const dy = (s.y || 0) - y;
                    if (Math.hypot(dx, dy) < minDist) tooClose = true;
                });
                return tooClose;
            };
            const starRadius = 12;
            const badPlacement = (x, y) => insideUiArea(x, y) || nearDoor(x, y) || nearSpike(x, y) || circleTouchesAnyPlatform(x, y, starRadius, p.scene, 4);
            if (badPlacement(pos.x, pos.y)){
                let placed = false;
                for (let c of candidates){
                    if (!badPlacement(c.x, c.y)){
                        pos = c;
                        placed = true;
                        break;
                    }
                }
                if (!placed) return;
            }
            let gem = group.create(pos.x, pos.y, 'goldStar');
            gem.body.setAllowGravity(false);
            gem.setScale(0.9);
            gem.setAngle(Phaser.Math.Between(0, 360));
            gem.scene.tweens.add({
                targets: gem,
                scale: { from: 0.85, to: 1.05 },
                angle: "+=30",
                yoyo: true,
                repeat: -1,
                duration: 600,
                ease: 'Sine.easeInOut'
            });
            count++;
        }
    });
    return count;
}

function createPlayerTextures(scene){
    const size = 36;
    const radius = size / 2;
    const g = scene.add.graphics({ x: 0, y: 0 });
    g.clear();
    g.fillStyle(0xff3030, 1);
    g.fillCircle(radius, radius, radius);
    g.lineStyle(2, 0xffffff, 0.6);
    g.strokeCircle(radius, radius, radius - 1);
    g.generateTexture('player1Shape', size, size);
    g.clear();
    g.fillStyle(0x2f7bff, 1);
    g.fillCircle(radius, radius, radius);
    g.lineStyle(2, 0xffffff, 0.6);
    g.strokeCircle(radius, radius, radius - 1);
    g.generateTexture('player2Shape', size, size);
    g.destroy();
}

function createCharacterTextures(scene){
    createCharacterTexture(scene, 'player1Char', { primary: 0xff3030, secondary: 0x7a0f0f, eye: 0xffffff, pupil: 0x1a1a1a, accent: 0xffff66, outline: 0x000000 });
    createCharacterTexture(scene, 'player2Char', { primary: 0x2f7bff, secondary: 0x0f2b7a, eye: 0xffffff, pupil: 0x1a1a1a, accent: 0x66ffff, outline: 0x000000 });
}

function createCharacterTexture(scene, key, palette){
    const w = 40, h = 48;
    const g = scene.add.graphics({ x: 0, y: 0 });
    g.clear();
    g.fillStyle(palette.primary, 1);
    if (g.fillRoundedRect) g.fillRoundedRect(12, 18, 16, 22, 6); else g.fillRect(12, 18, 16, 22);
    g.fillStyle(palette.primary, 1);
    g.fillCircle(20, 12, 9);
    g.fillStyle(palette.eye, 1);
    g.fillCircle(16, 11, 3);
    g.fillCircle(24, 11, 3);
    g.fillStyle(palette.pupil, 1);
    g.fillCircle(16, 11, 1.5);
    g.fillCircle(24, 11, 1.5);
    g.fillStyle(palette.secondary, 1);
    g.fillRect(8, 22, 6, 6);
    g.fillRect(26, 22, 6, 6);
    g.fillStyle(palette.secondary, 1);
    g.fillRect(14, 38, 4, 8);
    g.fillRect(22, 38, 4, 8);
    g.fillStyle(palette.accent, 1);
    g.fillRect(12, 29, 16, 3);
    g.lineStyle(2, palette.outline, 0.8);
    if (g.strokeRoundedRect) g.strokeRoundedRect(12, 18, 16, 22, 6); else g.strokeRect(12, 18, 16, 22);
    g.strokeCircle(20, 12, 9);
    g.generateTexture(key, w, h);
    g.destroy();
}

function collectGem1(player, gem){
    if (!gem || !gem.active) return;
    playCoinCollectSound(gem.scene || (player && player.scene));
    gem.destroy();
    player1Score += 1;
    remainingGems = Math.max(0, remainingGems - 1);
    updateScore();
    checkUnlock();
}

function collectGem2(player, gem){
    if (!gem || !gem.active) return;
    playCoinCollectSound(gem.scene || (player && player.scene));
    gem.destroy();
    player2Score += 1;
    remainingGems = Math.max(0, remainingGems - 1);
    updateScore();
    checkUnlock();
}

function updateScore(){
    scoreText1.setText('Player1: ' + player1Score);
    scoreText2.setText('Player2: ' + player2Score);
    teamScoreText.setText('Team: ' + (player1Score + player2Score));
}

function reachDoor1(player, door){
    if (!doorUnlocked || !doorOpen || levelTransitioning) return;
    levelTransitioning = true;
    const scene = (player && player.scene) || (door && door.scene) || this;
    nextLevel(scene);
}

function reachDoor2(player, door){
    if (!doorUnlocked || !doorOpen || levelTransitioning) return;
    levelTransitioning = true;
    const scene = (player && player.scene) || (door && door.scene) || this;
    nextLevel(scene);
}

function setGroupEnabled(group, enabled){
    if (!group || !group.getChildren) return;
    group.getChildren().forEach(obj => {
        if (!obj) return;
        if (obj.setVisible) obj.setVisible(enabled);
        obj.active = enabled;
        if (obj.body) obj.body.enable = enabled;
    });
}

function setNormalMapEnabled(enabled){
    setGroupEnabled(platforms, enabled);
    setGroupEnabled(gems, enabled);
    setGroupEnabled(spikes, enabled);

    if (door){
        door.setVisible(enabled);
        door.active = enabled;
        if (door.body){
            door.body.enable = enabled;
            door.body.checkCollision.none = enabled ? !!doorOpen : true;
        }
    }
    if (doorFrameSprite) doorFrameSprite.setVisible(enabled);
    if (doorPanelSprite) doorPanelSprite.setVisible(enabled);
    if (doorMaskGraphic) doorMaskGraphic.setVisible(false);
    if (doorGoalZone && doorGoalZone.body) doorGoalZone.body.enable = enabled;

    if (sacrificialZone && sacrificialZone.body) sacrificialZone.body.enable = enabled;
    if (sacrificialPortalFrame) sacrificialPortalFrame.setVisible(enabled);
    if (sacrificialGlow) sacrificialGlow.setVisible(enabled);
    if (sacrificialPortalParticles) sacrificialPortalParticles.setVisible(enabled);
}

function createNetherMap(scene){
    const W = scene.scale.width;
    const H = scene.scale.height;
    clearNetherMap();

    netherMapBackdrop = scene.add.graphics().setDepth(0);
    netherMapBackdrop.fillStyle(0x090012, 1);
    netherMapBackdrop.fillRect(0, 0, W, H);
    netherMapBackdrop.fillStyle(0x1d0932, 0.45);
    for (let i = 0; i < 8; i++){
        const y = 90 + i * 85;
        netherMapBackdrop.fillRect(0, y, W, 10);
    }

    netherPlatforms = scene.physics.add.staticGroup();
    const layout = [
        [430, 620], [590, 550], [740, 480], [870, 410],
        [730, 340], [570, 270], [420, 205], [280, 150],
        [160, 210], [320, 280], [470, 350], [620, 420], [280, 510]
    ];
    layout.forEach(([x, y]) => {
        const p = netherPlatforms.create(x, y, 'platformNether');
        p.setDepth(2);
        p.refreshBody();
    });

    netherSpikes = scene.physics.add.staticGroup();
    for (let x = 56; x <= W - 56; x += 56){
        const s = netherSpikes.create(x, 4, 'spikeTri');
        s.setOrigin(0.5, 0);
        s.setFlipY(true);
        s.setDepth(3);
        s.refreshBody();
    }
    netherPlatforms.getChildren().forEach(p => {
        if (Phaser.Math.FloatBetween(0, 1) < 0.55){
            const s = netherSpikes.create(p.x, p.y + 16, 'spikeTri');
            s.setOrigin(0.5, 0);
            s.setFlipY(true);
            s.setDepth(3);
            s.refreshBody();
        }
    });

    [player1, player2].forEach(pl => {
        if (!pl) return;
        scene.physics.add.collider(pl, netherPlatforms);
        scene.physics.add.overlap(pl, netherSpikes, () => onSpikeHit(pl, scene), null, scene);
    });
}

function clearNetherMap(){
    if (netherPlatforms && netherPlatforms.clear) netherPlatforms.clear(true, true);
    if (netherSpikes && netherSpikes.clear) netherSpikes.clear(true, true);
    if (netherMapBackdrop && netherMapBackdrop.destroy) netherMapBackdrop.destroy();
    netherPlatforms = null;
    netherSpikes = null;
    netherMapBackdrop = null;
}

function enterNetherFromZone(player, scene){
    if (!player || !player.active || inNether || netherCompleted) return;
    if (!player.body || Math.abs(player.body.velocity.y) < 120) return;
    startNetherTrial(player, scene);
}

function startNetherTrial(player, scene){
    inNether = true;
    netherPlayer = player;
    playNetherCavePreview(scene);
    const other = (player === player1) ? player2 : player1;
    setNormalMapEnabled(false);
    createNetherMap(scene);

    if (other && other.active) {
        other.disableBody(true, true);
    }

    if (netherPlayer && netherPlayer.body){
        netherPlayer.enableBody(true, scene.scale.width / 2, scene.scale.height - 120, true, true);
        netherPlayer.setVelocity(0, 0);
        netherPlayer.setDepth(3);
        netherPlayer.clearTint();
        netherPlayer.setScale(1);
        netherPlayer.body.setGravityY(-2 * scene.physics.world.gravity.y);
        netherPlayer.setAngle(180);
        netherPlayer.setFlipY(false);
        netherPlayer.setBounce(0);
    }

    if (netherOverlay && netherOverlay.destroy) netherOverlay.destroy();
    netherOverlay = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x10001a, 0.35)
        .setOrigin(0)
        .setDepth(1)
        .setScrollFactor(0);
    if (netherStatusText && netherStatusText.destroy) netherStatusText.destroy();
    netherStatusText = scene.add.text(scene.scale.width / 2, 16, 'Nether: Collect dark stars (0/0)', {
        fontFamily: 'Arial',
        fontSize: '20px',
        color: '#d8b8ff',
        fontStyle: 'bold'
    }).setOrigin(0.5, 0).setDepth(8).setScrollFactor(0);
    netherTimeLimit = 20;
    netherTimeLeft = netherTimeLimit;
    if (netherTimerText && netherTimerText.destroy) netherTimerText.destroy();
    netherTimerText = scene.add.text(scene.scale.width / 2, 44, `Time left: ${netherTimeLimit}s`, {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#ffb3c7',
        fontStyle: 'bold'
    }).setOrigin(0.5, 0).setDepth(8).setScrollFactor(0);

    spawnNetherStars(scene, 5);
    updateNetherStatusText();
    if (doorLockedText) {
        doorLockedText.setText('Door: Nether Trial Active');
        doorLockedText.setStyle({ fill: '#b784ff' });
    }
}

function spawnNetherStars(scene, count){
    if (netherStars && netherStars.clear) netherStars.clear(true, true);
    netherStars = scene.physics.add.group();
    remainingDarkStars = 0;
    netherTotalStars = 0;
    const minDist = 54;
    const safeStarSpikeDist = 92;
    const placements = [];
    const nearSpike = (x, y, dist = minDist) => {
        if (!netherSpikes) return false;
        let tooClose = false;
        netherSpikes.getChildren().forEach(s => {
            if (tooClose) return;
            if (Math.hypot((s.x || 0) - x, (s.y || 0) - y) < dist) tooClose = true;
        });
        return tooClose;
    };

    const canPlaceAt = (x, y, options = {}) => {
        const ignoreSpike = !!options.ignoreSpike;
        if (uiSafeRect && Phaser.Geom.Rectangle.Contains(uiSafeRect, x, y)) return false;
        if (!ignoreSpike && nearSpike(x, y, safeStarSpikeDist)) return false;
        if (circleTouchesAnyPlatform(x, y, 12, scene, 2)) return false;
        for (const p of placements){
            if (Math.hypot(p.x - x, p.y - y) < 52) return false;
        }
        return true;
    };

    const addStarAt = (x, y, options = {}) => {
        placements.push({ x, y });
        const star = netherStars.create(x, y, 'darkStar');
        star.body.setAllowGravity(false);
        star.setScale(0.95);
        star.setDepth(3);
        star.isRiskyStar = !!options.risky;
        star.setTint(0xd8b8ff);
        star.scene.tweens.add({
            targets: star,
            scale: { from: 0.9, to: 1.1 },
            angle: '+=35',
            yoyo: true,
            repeat: -1,
            duration: 620,
            ease: 'Sine.easeInOut'
        });
        remainingDarkStars++;
    };

    const platformsList = (netherPlatforms && netherPlatforms.getChildren)
        ? Phaser.Utils.Array.Shuffle(netherPlatforms.getChildren().slice())
        : [];

    const targetAbove = Math.max(0, count - 1);
    for (let i = 0; i < platformsList.length && remainingDarkStars < targetAbove; i++){
        const p = platformsList[i];
        const x = p.x + Phaser.Math.Between(-32, 32);
        const y = p.y + Phaser.Math.Between(74, 98);
        if (canPlaceAt(x, y)) addStarAt(x, y);
    }

    let riskyPlaced = false;
    if (remainingDarkStars < count && netherSpikes && netherSpikes.getChildren){
        const hazardSpikes = Phaser.Utils.Array.Shuffle(netherSpikes.getChildren().slice())
            .filter(s => s && s.active && s.y > 30);
        for (let i = 0; i < hazardSpikes.length && !riskyPlaced; i++){
            const s = hazardSpikes[i];
            const x = s.x + Phaser.Math.Between(-8, 8);
            const y = s.y + Phaser.Math.Between(28, 40);
            if (!canPlaceAt(x, y, { ignoreSpike: true })) continue;
            addStarAt(x, y, { risky: true });
            riskyPlaced = true;
        }
    }

    if (!riskyPlaced && remainingDarkStars < count && netherSpikes && netherSpikes.getChildren){
        const hazardSpikes = Phaser.Utils.Array.Shuffle(netherSpikes.getChildren().slice())
            .filter(s => s && s.active);
        for (let i = 0; i < hazardSpikes.length && !riskyPlaced; i++){
            const s = hazardSpikes[i];
            const x = s.x + Phaser.Math.Between(-14, 14);
            const y = s.y + Phaser.Math.Between(40, 54);
            if (!canPlaceAt(x, y, { ignoreSpike: true })) continue;
            addStarAt(x, y, { risky: true });
            riskyPlaced = true;
        }
    }

    let attempts = 0;
    while (remainingDarkStars < count && attempts < count * 80){
        attempts++;
        if (platformsList.length === 0) break;
        const p = platformsList[Phaser.Math.Between(0, platformsList.length - 1)];
        const x = p.x + Phaser.Math.Between(-38, 38);
        const y = p.y + Phaser.Math.Between(70, 104);
        if (!canPlaceAt(x, y)) continue;
        addStarAt(x, y);
    }

    netherTotalStars = remainingDarkStars;

    if (netherPlayer && netherPlayer.active){
        scene.physics.add.overlap(netherPlayer, netherStars, collectDarkStar, null, scene);
    }
}

function updateNetherStatusText(){
    if (!netherStatusText) return;
    const total = Math.max(0, netherTotalStars || remainingDarkStars);
    const collected = Math.max(0, total - remainingDarkStars);
    netherStatusText.setText(`Nether: Collect dark stars (${collected}/${total})`);
}

function collectDarkStar(player, star){
    if (!inNether || !netherPlayer || player !== netherPlayer) return;
    if (!star || !star.active) return;
    const riskyStarCollectedEarly = !!star.isRiskyStar && remainingDarkStars > 1;
    playCoinCollectSound((player && player.scene) || (star && star.scene));
    star.destroy();
    remainingDarkStars = Math.max(0, remainingDarkStars - 1);
    if (player === player1) player1Score += 1;
    else if (player === player2) player2Score += 1;
    updateScore();
    updateNetherStatusText();
    if (riskyStarCollectedEarly){
        onSpikeHit(player, player.scene || this);
    }
    if (remainingDarkStars === 0){
        completeNetherTrial(player.scene || this);
    }
}

function completeNetherTrial(scene){
    inNether = false;
    netherCompleted = true;
    stopNetherCavePreview(scene);
    const other = (netherPlayer === player1) ? player2 : player1;

    if (netherStars && netherStars.clear){
        netherStars.clear(true, true);
    }
    netherStars = null;
    remainingDarkStars = 0;
    netherTotalStars = 0;

    if (netherOverlay && netherOverlay.destroy){
        netherOverlay.destroy();
    }
    netherOverlay = null;
    if (netherTimerText && netherTimerText.destroy){
        netherTimerText.destroy();
    }
    netherTimerText = null;
    netherTimeLeft = 0;
    netherTimeLimit = 0;
    clearNetherMap();
    setNormalMapEnabled(true);

    if (netherStatusText){
        netherStatusText.setText('Nether complete!');
        scene.time.delayedCall(900, () => {
            if (netherStatusText && netherStatusText.destroy) netherStatusText.destroy();
            netherStatusText = null;
        });
    }

    const returnSpawn = { x: scene.scale.width - 180, y: scene.scale.height - 190 };
    const otherSpawn = (other === player1) ? { x: 100, y: 600 } : { x: 200, y: 600 };
    clearSpikesNear(spikes, [returnSpawn, otherSpawn], 100);

    if (netherPlayer && netherPlayer.active){
        netherPlayer.enableBody(true, returnSpawn.x, returnSpawn.y, true, true);
        netherPlayer.setVelocity(0, 0);
        netherPlayer.body.setGravityY(0);
        netherPlayer.setBounce(0.05);
        netherPlayer.setAngle(0);
        netherPlayer.setFlipY(false);
        netherPlayer.setAlpha(1);
    }

    if (other && !other.active){
        other.enableBody(true, otherSpawn.x, otherSpawn.y, true, true);
        other.setVelocity(0, 0);
        other.body.setGravityY(0);
        other.setBounce(0.05);
        other.setAngle(0);
        other.setFlipY(false);
        other.setAlpha(1);
    }
    netherPlayer = null;
    if (doorLockedText && !doorUnlocked){
        doorLockedText.setText('Door: Locked');
        doorLockedText.setStyle({ fill: '#8B4513' });
    }
    checkUnlock();
}

function failNetherTrial(scene){
    if (!inNether) return;
    inNether = false;
    netherCompleted = false;
    stopNetherCavePreview(scene);

    if (netherStars && netherStars.clear) netherStars.clear(true, true);
    netherStars = null;
    remainingDarkStars = 0;
    netherTotalStars = 0;

    if (netherOverlay && netherOverlay.destroy) netherOverlay.destroy();
    netherOverlay = null;
    if (netherStatusText && netherStatusText.destroy) netherStatusText.destroy();
    netherStatusText = null;
    if (netherTimerText && netherTimerText.destroy) netherTimerText.destroy();
    netherTimerText = null;
    netherTimeLeft = 0;
    netherTimeLimit = 0;

    clearNetherMap();
    setNormalMapEnabled(false);
    netherPlayer = null;
    highScore1 = Math.max(highScore1, player1Score);
    highScore2 = Math.max(highScore2, player2Score);
    highTeamScore = Math.max(highTeamScore, player1Score + player2Score);
    gameOver = true;
    scene.physics.world.pause();
    showNetherCaughtGameOver(scene);
}

function checkUnlock(){
    if (netherCompleted && remainingGems === 0 && !doorUnlocked){
        unlockDoor();
    }
}

function unlockDoor(){
    doorUnlocked = true;
    levelsCleared += 1;
    const scene = (door && door.scene) || (doorFrameSprite && doorFrameSprite.scene) || null;
    if (scene) {
        
        const targets = doorFrameSprite && doorPanelSprite ? [doorFrameSprite, doorPanelSprite] : [door];
        scene.tweens.add({
            targets,
            scaleY: { from: 1, to: 1.05 },
            yoyo: true,
            repeat: 4,
            duration: 140,
            ease: 'Sine.easeInOut'
        });
    }
    if (doorLockedText){
        doorLockedText.setText('Door: Unlocked');
        doorLockedText.setStyle({ fill: '#DAA520' });
    }
}

function openDoorAnimation(scene){
    if (!doorPanelSprite || doorOpening || doorOpen) return;
    doorOpening = true;
    const doorH = 80;
    scene.tweens.add({
        targets: doorPanelSprite,
        y: doorPanelSprite.y - doorH,
        duration: 1000,
        ease: 'Sine.easeInOut',
        onComplete: () => {
            doorOpen = true;
            doorOpening = false;
            if (door && door.body) {
                
                door.body.checkCollision.none = true;
            }
            if (doorLockedText){
                doorLockedText.setText('Door: Open');
                doorLockedText.setStyle({ fill: '#7CFC00' });
            }
            
            const playerInDoor = () => {
                const within = (p) => p && p.active && Math.abs(p.x - doorFrameSprite.x) < 22 && Math.abs(p.y - doorFrameSprite.y) < 40;
                return within(player1) || within(player2);
            };
            if (playerInDoor() && !levelTransitioning) {
                levelTransitioning = true;
                nextLevel(scene);
            }
        }
    });
}

function nextLevel(scene){
    stopNetherCavePreview(scene);
    if (scene && scene.sound) {
        scene.sound.play('levelCompleteSfx', { volume: 0.9 });
    }
    scene.physics.world.colliders.destroy();
    scene.children.removeAll();
    clearNetherMap();
    netherCompleted = false;
    inNether = false;
    netherPlayer = null;
    netherStars = null;
    remainingDarkStars = 0;
    netherTotalStars = 0;
    netherOverlay = null;
    netherStatusText = null;
    netherTimerText = null;
    netherTimeLeft = 0;
    netherTimeLimit = 0;
    if (netherCaughtOverlay && netherCaughtOverlay.destroy) netherCaughtOverlay.destroy(true);
    netherCaughtOverlay = null;
    doorUnlocked = false;
    player1Score = player1Score;
    player2Score = player2Score;
    create.call(scene);
}

function applySacrificialProximityEffect(){
    if (inNether) return;
    if (!sacrificialAuraRect) return;
    const highlight = (player) => {
        if (!player || !player.active) return;
        const bounds = player.getBounds();
        if (Phaser.Geom.Intersects.RectangleToRectangle(bounds, sacrificialAuraRect)){
            player.setTint(0xfff27a);
            player.setScale(1.05);
        } else {
            player.clearTint();
            player.setScale(1);
        }
    };
    highlight(player1);
    highlight(player2);
}

function createPortalSparkTexture(scene){
    if (scene.textures.exists('portalSpark')) return;
    const g = scene.add.graphics();
    g.fillStyle(0xff77ff, 1);
    g.fillCircle(3, 3, 3);
    g.generateTexture('portalSpark', 6, 6);
    g.destroy();
}

function createSacrificialPortalVisual(scene, cx, cy){
    const frameW = 92;
    const frameH = 124;
    const inset = 12;
    const innerW = frameW - inset * 2;
    const innerH = frameH - inset * 2;

    sacrificialPortalFrame = scene.add.graphics().setDepth(2);
    sacrificialPortalFrame.fillStyle(0x1a1528, 1);
    sacrificialPortalFrame.fillRoundedRect(cx - frameW / 2, cy - frameH / 2, frameW, frameH, 4);
    sacrificialPortalFrame.fillStyle(0x2a213b, 1);
    sacrificialPortalFrame.fillRoundedRect(cx - frameW / 2 + 4, cy - frameH / 2 + 4, frameW - 8, frameH - 8, 4);
    sacrificialPortalFrame.fillStyle(0x100d18, 1);
    sacrificialPortalFrame.fillRect(cx - innerW / 2, cy - innerH / 2, innerW, innerH);
    sacrificialPortalFrame.lineStyle(2, 0x8f5bff, 0.65);
    sacrificialPortalFrame.strokeRect(cx - innerW / 2, cy - innerH / 2, innerW, innerH);

    sacrificialGlow = scene.add.graphics().setDepth(3);
    sacrificialGlow.fillStyle(0xd390ff, 0.52);
    sacrificialGlow.fillRect(cx - innerW / 2 + 1, cy - innerH / 2 + 1, innerW - 2, innerH - 2);
    sacrificialGlow.fillStyle(0xa14fff, 0.38);
    sacrificialGlow.fillRect(cx - innerW / 2 + 6, cy - innerH / 2 + 4, innerW - 12, innerH - 8);

    scene.tweens.add({
        targets: sacrificialGlow,
        alpha: { from: 0.42, to: 0.9 },
        yoyo: true,
        repeat: -1,
        duration: 650
    });

    createPortalSparkTexture(scene);
    sacrificialPortalParticles = scene.add.particles('portalSpark');
    sacrificialPortalParticles.setDepth(4);
    sacrificialPortalParticles.createEmitter({
        x: { min: cx - innerW / 2 + 4, max: cx + innerW / 2 - 4 },
        y: { min: cy - innerH / 2 + 4, max: cy + innerH / 2 - 4 },
        lifespan: { min: 400, max: 900 },
        speedY: { min: -50, max: -12 },
        speedX: { min: -10, max: 10 },
        scale: { start: 0.6, end: 0 },
        alpha: { start: 0.8, end: 0 },
        quantity: 1,
        frequency: 70,
        blendMode: 'ADD'
    });
}

function jump(player){
    if (!player || !player.body) return;
    if (isOnGround(player)){
        const netherInverted = inNether && netherPlayer === player;
        player.setVelocityY(netherInverted ? Math.abs(JUMP_VELOCITY) : -Math.abs(JUMP_VELOCITY));
    }
}

function isOnGround(player){
    const b = player.body;
    if (!b) return false;
    const blocked = b.blocked || { up:false, down:false };
    const touching = b.touching || { up:false, down:false };
    const netherInverted = inNether && netherPlayer === player;
    return netherInverted ? (blocked.up || touching.up) : (blocked.down || touching.down);
}

function createStarTexture(scene, key = 'goldStar', color = 0xFFD700, strokeColor = 0xFFF6A9){
    const size = 32;
    const cx = size/2, cy = size/2;
    const outerR = 14, innerR = 6;
    const points = buildStarPoints(cx, cy, 5, outerR, innerR);
    const g = scene.add.graphics({ x: 0, y: 0 });
    g.clear();
    g.fillStyle(color, 1);
    g.fillPoints(points, true);
    g.lineStyle(2, strokeColor, 0.9);
    g.strokePoints(points, true);
    g.generateTexture(key, size, size);
    g.destroy();
}

function buildStarPoints(cx, cy, spikes, outerRadius, innerRadius){
    const pts = [];
    let rot = Math.PI / 2 * 3;
    const step = Math.PI / spikes;
    for (let i = 0; i < spikes; i++){
        let x = cx + Math.cos(rot) * outerRadius;
        let y = cy + Math.sin(rot) * outerRadius;
        pts.push(new Phaser.Geom.Point(x, y));
        rot += step;
        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        pts.push(new Phaser.Geom.Point(x, y));
        rot += step;
    }
    return pts;
}

function createDoorTexture(scene){
    const w = 40, h = 80, r = 8;
    
    let g = scene.add.graphics({ x: 0, y: 0 });
    g.clear();
    const frameCol = 0x4e2a0b; 
    const innerCol = 0x8B4513; 
    const strokeCol = 0x2d1706;
    
    if (g.fillRoundedRect) {
        g.fillStyle(frameCol, 1);
        g.fillRoundedRect(0, 0, w + 6, h + 6, r + 2);
        
        g.fillStyle(0x000000, 0.0);
        g.lineStyle(4, strokeCol, 0.9);
        g.strokeRoundedRect(3, 3, w, h, r);
    } else {
        g.fillStyle(frameCol, 1);
        g.fillRect(0, 0, w + 6, h + 6);
        g.lineStyle(4, strokeCol, 0.9);
        g.strokeRect(3, 3, w, h);
    }
    g.generateTexture('doorFrame', w + 6, h + 6);
    g.destroy();

    
    g = scene.add.graphics({ x: 0, y: 0 });
    g.clear();
    g.fillStyle(innerCol, 1);
    if (g.fillRoundedRect) {
        g.fillRoundedRect(0, 0, w, h, r);
        g.lineStyle(2, strokeCol, 0.6);
        g.strokeRoundedRect(0, 0, w, h, r);
    } else {
        g.fillRect(0, 0, w, h);
        g.lineStyle(2, strokeCol, 0.6);
        g.strokeRect(0, 0, w, h);
    }
    g.generateTexture('doorPanel', w, h);
    g.destroy();
    g = scene.add.graphics({ x: 0, y: 0 });
    g.clear();
    g.fillStyle(innerCol, 1);
    if (g.fillRoundedRect) g.fillRoundedRect(0, 0, w, h, r); else g.fillRect(0, 0, w, h);
    g.generateTexture('doorRect', w, h);
    g.destroy();
}

function createHeartTextures(scene){
    const pixel = 2;
    const rows = [
        '...KKK...KKK...',
        '..KWWRK.KRRRK..',
        '.KWRRRK.KRRRRK.',
        'KRRRRRRKRRRRRRK',
        'KRRRRRRRRRRRRRK',
        'KRRRRRRRRRRRRRK',
        '.KRRRRRRRRRRRK.',
        '..KRRRRRRRRRK..',
        '...KRRRRRRRK...',
        '....KRRRRRK....',
        '.....KRRRK.....',
        '......KRK......',
        '.......K.......'
    ];
    const texW = rows[0].length * pixel;
    const texH = rows.length * pixel;
    const g = scene.add.graphics();

    const drawHeart = (fillCol, highlightCol, key) => {
        g.clear();
        for (let y = 0; y < rows.length; y++){
            const row = rows[y];
            for (let x = 0; x < row.length; x++){
                const ch = row[x];
                if (ch === '.') continue;
                let col = 0x1a1a1a;
                if (ch === 'R') col = fillCol;
                if (ch === 'W') col = highlightCol;
                g.fillStyle(col, 1);
                g.fillRect(x * pixel, y * pixel, pixel, pixel);
            }
        }
        g.generateTexture(key, texW, texH);
    };

    drawHeart(0xff2b2b, 0xffffff, 'heartFull');
    drawHeart(0x6f6f6f, 0xc8c8c8, 'heartEmpty');
    g.destroy();
}

function initHeartsUI(scene){
    const baseX = 16;
    const heartTex = scene.textures.get('heartFull').getSourceImage();
    const heartW = heartTex ? heartTex.width : 30;
    const heartH = heartTex ? heartTex.height : 26;
    let proposedY = (typeof teamScoreText !== 'undefined' && teamScoreText)
        ? (teamScoreText.getBounds().bottom + 8)
        : (uiSafeRect ? uiSafeRect.height - 28 : 136);
    let y = proposedY;
    const neededHeight = y + heartH + 6;
    if (uiSafeRect && neededHeight > uiSafeRect.height){
        uiSafeRect.height = neededHeight;
        drawUiBackdrop(scene, uiSafeRect.width, uiSafeRect.height);
        if (uiBlocker && uiBlocker.body){
            uiBlocker.height = uiSafeRect.height;
            uiBlocker.y = uiSafeRect.height / 2;
            if (uiBlocker.body.setSize) uiBlocker.body.setSize(uiSafeRect.width, uiSafeRect.height, true);
        }
    }
    heartSprites = [];
    const spacing = heartW + 4;
    for (let i = 0; i < 3; i++){
        const img = scene.add.image(baseX + i * spacing, y, 'heartFull').setOrigin(0,0).setDepth(6).setScrollFactor(0);
        img.setTint(0xffffff);
        heartSprites.push(img);
    }
}

function updateHeartsUI(){
    for (let i = 0; i < heartSprites.length; i++){
        const tex = (i < teamLives) ? 'heartFull' : 'heartEmpty';
        if (heartSprites[i] && heartSprites[i].texture.key !== tex){
            heartSprites[i].setTexture(tex);
        } else if (heartSprites[i]){
            heartSprites[i].setTexture(tex);
        }
    }
}

function onSpikeHit(player, scene){
    if (!player || !player.active) return;
    const now = scene.time.now;
    if (!player.nextDamageTime) player.nextDamageTime = 0;
    if (now < player.nextDamageTime) return;
    player.nextDamageTime = now + 900;
    if (teamLives <= 0) return;
    teamLives = Math.max(0, teamLives - 1);
    updateHeartsUI();
    scene.tweens.add({ targets: player, alpha: 0.2, yoyo: true, repeat: 3, duration: 80 });
    if (teamLives === 0){
        highScore1 = Math.max(highScore1, player1Score);
        highScore2 = Math.max(highScore2, player2Score);
        highTeamScore = Math.max(highTeamScore, player1Score + player2Score);
        scene.physics.world.pause();
        gameOver = true;
        showRestartScreen(scene);
        return;
    }
    respawnPlayer(player, scene);
}

function respawnPlayer(p, scene){
    const isP1 = (p === player1);
    const spawn = (inNether && p === netherPlayer)
        ? { x: scene.scale.width / 2, y: scene.scale.height - 140 }
        : (isP1 ? { x: 100, y: 600 } : { x: 200, y: 600 });
    p.enableBody(true, spawn.x, spawn.y, true, true);
    p.setVelocity(0, 0);
    const netherInverted = inNether && p === netherPlayer;
    p.body.setGravityY(netherInverted ? -2 * scene.physics.world.gravity.y : 0);
    p.setBounce(netherInverted ? 0 : 0.05);
    p.setAngle(netherInverted ? 180 : 0);
    p.setFlipY(false);
    p.setAlpha(1);
}

function showRestartScreen(scene){
    const W = scene.scale.width;
    const H = scene.scale.height;
    restartOverlay = scene.add.container(0, 0);
    const dim = scene.add.rectangle(0, 0, W, H, 0x000000, 0.6).setOrigin(0);
    restartOverlay.add(dim);
    const panelW = Math.min(560, W - 80);
    const panelH = 380;
    const panelX = (W - panelW) / 2;
    const panelY = (H - panelH) / 2;
    const panel = scene.add.rectangle(panelX, panelY, panelW, panelH, 0x1e1e1e, 0.95).setOrigin(0);
    panel.setStrokeStyle(3, 0xffffff, 0.2);
    restartOverlay.add(panel);
    const title = scene.add.text(W/2, panelY + 28, 'Run Over', { fontSize: '32px', color: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5, 0.5);
    restartOverlay.add(title);
    const lineY = panelY + 70;
    const textStyle = { fontSize: '22px', color: '#ffffff' };
    const p1Text = scene.add.text(panelX + 24, lineY, `Player 1 High Score: ${highScore1}`, textStyle);
    const p2Text = scene.add.text(panelX + 24, lineY + 36, `Player 2 High Score: ${highScore2}`, textStyle);
    const teamNow = player1Score + player2Score;
    const teamNowText = scene.add.text(panelX + 24, lineY + 72, `Team Score (this run): ${teamNow}`, textStyle);
    const teamHighText = scene.add.text(panelX + 24, lineY + 108, `Team High Score: ${highTeamScore}`, textStyle);
    const levelsText = scene.add.text(panelX + 24, lineY + 144, `Levels Cleared: ${levelsCleared}`, textStyle);
    restartOverlay.add([p1Text, p2Text, teamNowText, teamHighText, levelsText]);
    const btnW = 180, btnH = 48;
    const btnX = W/2 - btnW/2;
    const btnY = panelY + panelH - 72;
    const btn = scene.add.rectangle(btnX, btnY, btnW, btnH, 0x2e7d32, 1).setOrigin(0);
    btn.setStrokeStyle(2, 0xffffff, 0.6);
    btn.setInteractive({ useHandCursor: true });
    const btnLabel = scene.add.text(W/2, btnY + btnH/2, 'Restart', { fontSize: '22px', color: '#ffffff' }).setOrigin(0.5);
    restartOverlay.add([btn, btnLabel]);
    btn.on('pointerover', () => btn.setFillStyle(0x388e3c, 1));
    btn.on('pointerout', () => btn.setFillStyle(0x2e7d32, 1));
    btn.on('pointerdown', () => { resetAll(scene); });
}

function resetAll(scene){
    stopNetherCavePreview(scene);
    player1Score = 0;
    player2Score = 0;
    teamLives = 3;
    levelsCleared = 0;
    highScore1 = 0;
    highScore2 = 0;
    highTeamScore = 0;
    netherCompleted = false;
    inNether = false;
    netherPlayer = null;
    netherStars = null;
    remainingDarkStars = 0;
    netherTotalStars = 0;
    netherOverlay = null;
    netherStatusText = null;
    netherTimerText = null;
    netherTimeLeft = 0;
    netherTimeLimit = 0;
    if (netherCaughtOverlay && netherCaughtOverlay.destroy) netherCaughtOverlay.destroy(true);
    netherCaughtOverlay = null;
    clearNetherMap();
    doorUnlocked = false;
    gameOver = false;
    if (restartOverlay){
        restartOverlay.destroy(true);
        restartOverlay = null;
    }
    scene.physics.world.resume();
    scene.scene.restart();
}

