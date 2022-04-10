import { NPC, NPCDelay } from "@dcl/npc-scene-utils";

/*const baseScene = new Entity()
baseScene.addComponent(new GLTFShape("models/baseScene.glb"))
baseScene.addComponent(new Transform({
    position: new Vector3(30, 0, 30),
    scale: new Vector3(3, 1, 3)
}))
engine.addEntity(baseScene)
*/
export const alice = new NPC(
  {
    position: new Vector3(61.5, 2, 62),
    rotation: Quaternion.Euler(0, 180, 0),
  },
  "models/alice.glb",
  () => {
    // animations
    alice.playAnimation("Hello", true, 2);

    const dummyent = new Entity();
    dummyent.addComponent(
      new NPCDelay(2, () => {
        alice.playAnimation("Talk");
      })
    );
    engine.addEntity(dummyent);

    // sound
    //alice.addComponentOrReplace(new AudioSource(resources.sounds.alice))
    //alice.getComponent(AudioSource).playOnce()

    // dialog UI
    //alice.talk(AliceDialog)
  },
  {
    faceUser: true,
    portrait: {
      path: "models/alice.png",
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512,
      },
    },
    onWalkAway: () => {
      alice.playAnimation("Goodbye", true, 2);
    },
  }
);

const ringShape = new GLTFShape("models/rings.glb");

const aliceRings = new Entity();
aliceRings.addComponent(ringShape);
aliceRings.addComponent(
  new Transform({
    position: new Vector3(0, -0.65, 0),
  })
);
aliceRings.setParent(alice);
