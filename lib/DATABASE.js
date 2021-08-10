var database1 = {
  Introduction:{
    Introduction_to_TAAGC:{
      type:"",
      unit:"",
      min:"",
      max:"",
      info:"",
      note:"",
      warn:"",
      sgst:"",
      img:""
    }
  }
};

var database2 = {
  System:{
    Resolution:{
      type:"Number",
      unit:"Pixels",
      min:"800 &times; 600",
      max:"1920 &times; 1080",
      info:"Sets the resolution of the game in X pixels by Y pixels.",
      note:"",
      warn:"Setting this to non supported resolutions (> 1920 &times; 1080) could result in the game refusing to start.",
      sgst:"Match this to your monitor's native resolution for a balance of performance and quality.",
      img:""
    },
    Fullscreen:{
      type:"Checkbox",
      unit:"",
      min:"Windowed",
      max:"Fullscreen",
      info:"Defines whether the game runs in a fullscreen or windowed view.",
      note:"",
      warn:"",
      sgst:"",
      img:""
    },
    Borderless:{
      type:"Checkbox",
      unit:"",
      min:"Windowed",
      max:"Borderless-Windowed",
      info:"When on, the game remains in a windowed state but appears like fullscreen.",
      note:"Option is not available when Fullscreen is enabled.",
      warn:"",
      sgst:"",
      img:""
    },
    "V-Sync":{
      type:"Checkbox",
      unit:"",
      min:"V-Sync Off",
      max:"V-Sync On",
      info:"Vertical Syncronization keeps your Frames Per Second in tune with your monitor's refresh rate, preventing artifacts such as Screen Tearing.",
      note:"Disable for better performance. Enable if you notice tearing.",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    Allow_Direct3D_10:{
      type:"Checkbox",
      unit:"",
      min:"Off",
      max:"On",
      info:"Forces the game to run under the DirectX 10 API.",
      note:"This setting is only applicable if you are running Windows Vista or Windows 7 and a DirectX 10 graphics card.",
      warn:"In some cases unpredictable results will happen.",
      sgst:"",
      img:""
    },
    Allow_Direct3D_11:{
      type:"Checkbox",
      unit:"",
      min:"Off",
      max:"On",
      info:"Forces the game to run under the DirectX 11 API.",
      note:"This setting is only applicable if you are running Windows Vista or Windows 7 and a DirectX 11 graphics card.",
      warn:"In some cases unpredictable results will happen.",
      sgst:"",
      img:""
    },
    Allow_Nvidia_Stereo3D:{
      type:"Checkbox",
      unit:"",
      min:"Off",
      max:"On",
      info:"Enables Nvidia Stereoscopic 3D for use with a Virtual-Reality headset.",
      note:"",
      warn:"This feature is currently untested.",
      sgst:"",
      img:""
    },
    Frame_Smoothing:{
      type:"Checkbox&Number",
      unit:"&FPS",
      min:"Off&0",
      max:"On&999",
      info:"Caps the framerate of the game. Potentially useful when optimising flag capture routes as the phisics engine is somewhat tied to the framerate, with a lower value potentially netting the player a greater maximum movement speed.",
      note:"When this setting is disabled, the default frame cap is 90FPS.",
      warn:"",
      sgst:"Enabled at 60FPS or below",
      img:""
    },
    Disable_ATI_Texture_Filter_Optimisation_Checks:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"This setting is an ATI/AMD-specific optimization and does not affect Nvidia graphics cards.",
      note:"Try disabling this if you are having issues running the game on your ATI/AMD graphics card.",
      warn:"",
      sgst:"",
      img:""
    },
    Use_Minimal_Nvidia_Shader_Optimisation:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"This setting can reduce stuttering and hitching on older (GeForce 6-8) Nvidia cards and should only be disabled if you are having these issues.",
      note:"",
      warn:"",
      sgst:"",
      img:""
    },
    Initialize_shaders_on_demand:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Enable this if you are experiencing crashes when running the game on an older (GeForce 6-8) Nvidia graphics card. Otherwise, leave this disabled.",
      note:"",
      warn:"",
      sgst:"",
      img:""
    },
    Pump_window_messages_when_render_thread_stalled:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"This setting was designed to help prevent certain UnrealEngine 3 based game crashes and should only be enabled if you are experiencing regular crashes.",
      note:"",
      warn:"",
      sgst:"",
      img:""
    }
  },
  Details:{
    Culling_Distance:{
      type:"Slider",
      unit:"",
      min:"0",
      max:"1",
      info:"This determines the distance at which decals start disappearing from your view. Set this lower to make them disappear sooner.",
      note:"",
      warn:"",
      sgst:"0.250",
      img:""
    },
    Dynamic_Decals:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"This enables dynamic sprites to appear on the map. For example, bullet holes, charred black spots on the ground, jet trails, etc.",
      note:"",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    Static_Decals:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"This enables static sprites to appear on the map. For example, decorations, pre-existing bullet holes, text, etc.",
      note:"",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    Unbatched_Decals:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Adds static decals to skeletal meshes or terrain. This is a low performance impact setting with a high reward in clarity.",
      note:"",
      warn:"",
      sgst:"Enabled",
      img:""
    },
    Fog_Volume:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Adds volumetric fog from air-strikes and large explosions. Disable to remove big smoke clouds.",
      note:"",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    Force_Static_Terrain:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Sets the game terrain to be drawn statically without change and may increase performance if set true.",
      note:"",
      warn:"",
      sgst:"Enabled",
      img:""
    },
    Speed_Tree_Leaves:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Adds or removes leaves from trees. Enabled gives trees with leaves, whereas disabled shows trees with branches only.",
      note:"",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    Speed_Tree_Fronds:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Adds or removes minor branches from trees. Enabled gives trees more branches, whereas disabled shows the trunks only.",
      note:"",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    Skeletal_Mesh_LOD:{
      type:"Slider",
      unit:"",
      min:"4",
      max:"-1",
      info:"Sets the in-game character model quality.",
      note:"This slider has reversed values.",
      warn:"",
      sgst:"2",
      img:""
    },
    Particle_LOD:{
      type:"Slider",
      unit:"",
      min:"10",
      max:"-1",
      info:"Sets the particle detail and compensates stutters caused by LOD rendering of minor objects like trails.",
      note:"This slider has reversed values.",
      warn:"",
      sgst:"-1 (Max)",
      img:""
    },
    Detail_Update_Speed:{
      type:"Slider",
      unit:"",
      min:"0",
      max:"4",
      info:"Determines the quality and quantity of how quickly map details should be updated.",
      note:"Set to 0 to completely disable detail updates.",
      warn:"",
      sgst:"2",
      img:""
    },
    Combine_Similar_Mappings:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Adds the option to combine both hard and soft texture meshes into a single stream, thus smoothing vertexes. If enabled, lightmap shadows and and textures will be streamed together - reducing jitter, but also reducing performance.",
      note:"This option is not included in the tribes.ini by default.",
      warn:"",
      sgst:"Enabled",
      img:""
    },
    High_Poly_Characters:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Adds the option to increase polygon complexity in characters. Keep this disabled for better performance.",
      note:"This option is not included in the tribes.ini by default.",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    Floating_Point_Render_Targets:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Adds certain post-processing effects, such as the ability to enable High Dynamic Range and Anti-Aliasing simultaneously. Setting this to disabled removes certain explosions.",
      note:"This option is not included in the tribes.ini by default.",
      warn:"",
      sgst:"Enabled",
      img:""
    },
    Foreground_Shadows_on_World:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Allows foreground Depth Priority Group objects to cast shadows on the world. Keep this disabled for better performance.",
      note:"This option is not included in the tribes.ini by default.",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    Foreground_Self_Shadowing:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Allows foreground Depth Priority Group objects to cast shadows on themselves. Setting this to disabled removes some shadows, but not player shadows.",
      note:"This option is not included in the tribes.ini by default.",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    Only_Stream_in_Textures:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"If enabled, textures will only be streamed in, not out, increasing performance. Keep this disabled for better textures in terrain and grass.",
      note:"This option is not included in the tribes.ini by default.",
      warn:"",
      sgst:"Enabled",
      img:""
    },
    Trilinear:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Adds trilinear filtering, which can improve the appearance of textures. Keep this setting disabled to use bi-linear filtering for better performance.",
      note:"This option is not included in the tribes.ini by default.",
      warn:"",
      sgst:"Disabled",
      img:""
    },
    One_Frame_Thread_Lag:{
      type:"Checkbox",
      unit:"",
      min:"",
      max:"",
      info:"Adds dynamic light buffering. If enabled, it is quicker to calculate and prerender frames. Disabling gives higher quality at the cost of performance.",
      note:"This option is not included in the tribes.ini by default.",
      warn:"",
      sgst:"Enabled",
      img:""
    }
  },
  Textures:{
    
  },
  Lighting:{
    Dynamic_Lights:{
      
    },
    Allow_Subsurface_Scattering:{
      
    },
    Allow_Light_Shafts:{
      
    },
    Composite_Dynamic_Lights:{
      
    }
  },
  Effects:{
    Motion_Blur:{
      
    },
    Motion_Blur_Pause:{
      
    },
    Motion_Blur_Skinning:{
      
    },
    Allow_Radial_Blur:{
      
    },
    Allow_Downsampled_Translucency:{
      
    },
    Lens_Flares:{
      
    },
    Distortion:{
      
    },
    Filtered_Distortion:{
      
    },
    Depth_of_Field:{
      
    },
    Bloom:{
      
    },
    Drop_Particle_Distortion:{
      
    }
  },
  Shadowing:{
    Dynamic_Shadows:{
      
    },
    Ambient_Occlusion:{
      
    },
    Allow_Whole_Screen_Dominant_Shadows:{
      
    },
    Allow_Better_Modulated_Shadows:{
      
    }
  },
  Profiles_and_Settings:{
    Load_Profile:{
      
    },
    Save_Profile:{
      
    }
  }
}

var database3 = {
};