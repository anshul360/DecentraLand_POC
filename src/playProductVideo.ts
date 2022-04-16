import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions"

let vidTexture: VideoTexture
export function createScreen(videoUrl: string) {
    let prodVidClip = new VideoClip(videoUrl)
    
    vidTexture = new VideoTexture(prodVidClip)

    let vidMaterial = new Material()
    vidMaterial.albedoTexture = vidTexture
    vidMaterial.roughness = 1
    vidMaterial.specularIntensity = 0
    vidMaterial.metallic = 0

    let screen = new Entity();
    screen.addComponent(new PlaneShape());
    screen.addComponent(
    new Transform({
        position: new Vector3(67, 3.5, 40),
        scale: new Vector3(10, 7, 100 ),
        rotation: Quaternion.Euler(0, 245, 0),
    })
    );
    screen.addComponent(vidMaterial);
    screen.addComponent(
    new OnPointerDown(() => {
            vidTexture.playing = !vidTexture.playing;
            if(!vidTexture.playing)
                triggerEmote({ predefined: PredefinedEmote.HEAD_EXPLODDE })
            else
                triggerEmote({ predefined: PredefinedEmote.HANDS_AIR})
        },
        { hoverText: "Watch Video" }
    )
    );

    engine.addEntity(screen)
}

export function prodVidPlay() {
    vidTexture.play()
}
export function prodVidPause() {
    vidTexture.pause()
}

