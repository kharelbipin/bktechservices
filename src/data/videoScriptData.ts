export interface VideoScene {
  id: number;
  timecode: string;
  durationSeconds: number;
  sceneTitle: string;
  visualDirection: string;
  voiceover: string;
  onScreenGraphics: string[];
  soundDesign: string;
  keyBenefit: string;
}

export const EXPLAINER_VIDEO_METADATA = {
  title: 'Engineering Resilience: BK Tech & Solutions Explainer',
  targetDuration: '90 Seconds (1.5 Minutes)',
  tone: 'Authoritative, calm, technically precise, forward-looking (no hype or empty buzzwords)',
  voiceoverStyle: 'Professional deep baritone or measured tech lead persona; confident, articulate, pacing at ~130–140 words per minute',
  musicBed: 'Low-tempo electronic ambient synth with driving heartbeat pulse; minimalist, evolving with subtle technological swells',
  colorPalette: 'Deep Slate (#020617), Charcoal (#0F172A), Electric Cyan (#22D3EE), Crisp White (#FFFFFF)'
};

export const EXPLAINER_VIDEO_SCENES: VideoScene[] = [
  {
    id: 1,
    timecode: '0:00 – 0:15',
    durationSeconds: 15,
    sceneTitle: 'The Scalability Wall & Fragile Foundations',
    visualDirection:
      'Dark ambient background. A single glowing monolithic server cube begins pulsing with warning amber hues. Rapid network latency graphs spike from 25ms to 650ms. Alert notifications cascade across a simulated engineer dashboard: "Connection Timeout", "AZ Egress Spike", "Database Locks Detected". Camera slowly dollies in as the monolith fractures under load.',
    voiceover:
      'When your business scales, your engineering foundation is put to the test. Monolithic legacy systems choke during traffic spikes. Cloud bills quietly spiral out of control. And brittle deployments turn Friday releases into late-night outage firefighting. Sound familiar?',
    onScreenGraphics: [
      'LATENCY CRITICAL: 650ms',
      'MONOLITH CONCURRENCY BOTTLENECK',
      'UNCONTROLLED CLOUD TCO'
    ],
    soundDesign:
      'Muffled server room hum. Rising subtle tension drone. Soft alert chime that cuts abruptly into silence as the screen transitions.',
    keyBenefit: 'Identifies the core pain points: system fragility, latency degradation, and runaway cloud costs.'
  },
  {
    id: 2,
    timecode: '0:15 – 0:38',
    durationSeconds: 23,
    sceneTitle: 'BK Tech Custom Software Engineering',
    visualDirection:
      'Smooth cut to obsidian dark canvas. Crisp cyan geometric lines sweep across the screen, assembling a decoupled, modern architecture: hexagonal Go and Rust microservices communicating through a low-latency Kafka event mesh. Real-time telemetry nodes light up green as throughput accelerates smoothly to 120,000 events per second.',
    voiceover:
      'At BK Tech and Solutions, we re-engineer software systems for high-scale reality. We build deterministic backends, low-latency gRPC APIs, and event-driven data streaming pipelines designed to process millions of transactions with sub-fifteen-millisecond predictability. No bloated abstractions. Just clean, resilient software built for sustained performance.',
    onScreenGraphics: [
      'CUSTOM SOFTWARE & DISTRIBUTED SYSTEMS',
      'Go · Rust · TypeScript · Kafka Mesh',
      'p99 LATENCY: <12ms DETERMINISTIC'
    ],
    soundDesign:
      'Crisp digital connection clicks. Deep warm sub-bass swell as the distributed mesh locks together into rhythm.',
    keyBenefit: 'Deterministic, high-throughput distributed software custom-crafted for enterprise specifications.'
  },
  {
    id: 3,
    timecode: '0:38 – 1:00',
    durationSeconds: 22,
    sceneTitle: 'Cloud Infrastructure & Kubernetes Consulting',
    visualDirection:
      'Camera lifts into an isometric multi-region cloud map. Two interconnected cloud clusters (us-east and us-west) expand dynamically. Code snippet ribbons ("terraform apply -auto-approve") transform into self-healing Kubernetes pods managed by Karpenter. Istio mutual TLS shields glow with zero-trust perimeter rings.',
    voiceover:
      'Our cloud infrastructure consulting turns fragile setups into self-healing, automated foundations. We codify your entire AWS and Google Cloud topology in one hundred percent declarative Terraform. Multi-region Kubernetes, automated Karpenter autoscaling, GitOps continuous delivery, and zero-trust security perimeters—reproducible in minutes, with zero manual console drift.',
    onScreenGraphics: [
      'CLOUD INFRASTRUCTURE & KUBERNETES',
      '100% Terraform / OpenTofu GitOps',
      'Multi-Region Active-Active Failover',
      'SOC 2 Type II & HIPAA Automated Guards'
    ],
    soundDesign:
      'Modern modular synth arpeggio. Soft mechanical lock-in sound as the multi-region clusters synchronize.',
    keyBenefit: 'Immutable, self-healing cloud infrastructure codified 100% in version-controlled IaC.'
  },
  {
    id: 4,
    timecode: '1:00 – 1:18',
    durationSeconds: 18,
    sceneTitle: 'Quantified Outcomes & Proven Track Record',
    visualDirection:
      'Fast-paced, bold kinetic typography screen with split-column proof layout. Client names (FinTech, HealthTech, Global Logistics) flash cleanly alongside verified operational numbers. Counters rapidly tick up and lock into sharp tabular figures.',
    voiceover:
      'The outcome? Five-nines target availability. An average of forty percent reduction in cloud spend through deep FinOps right-sizing. And deployments that drop from four hours of manual anxiety down to six minutes of automated certainty.',
    onScreenGraphics: [
      '99.999% TARGET AVAILABILITY',
      '40%+ CLOUD SPEND REDUCED (FinOps)',
      'DEPLOYMENTS: 4 HOURS ➔ 6 MINUTES',
      'VERIFIED CLIENT SUCCESS'
    ],
    soundDesign:
      'Clean rhythmic acoustic claps overlaid with modern electronic kick. Upbeat, reassuring audio momentum.',
    keyBenefit: 'Tangible, audited ROI: five-nines uptime, dramatic cloud bill reductions, and rapid release velocity.'
  },
  {
    id: 5,
    timecode: '1:18 – 1:30',
    durationSeconds: 12,
    sceneTitle: 'Call to Action & Discovery Scheduling',
    visualDirection:
      'Clean visual resolve. The glowing cyan "BK" monogram and "BK Tech & Solutions" wordmark anchor the center screen. A sleek interactive calendar scheduling card floats below: "Direct 30-Min Technical Discovery Call with Principal Architect". Contact URL and email illuminate clearly.',
    voiceover:
      'Ready to scale with confidence? Schedule your technical discovery call today with our principal architects. Visit bktechandsolutions.com.',
    onScreenGraphics: [
      'BK TECH & SOLUTIONS',
      'Schedule Your Technical Discovery Call',
      'bktechandsolutions.com · bipinkharel52@gmail.com'
    ],
    soundDesign:
      'Warm resolving synth chord. Gentle digital chime on the final logo resolve, fading smoothly into silence.',
    keyBenefit: 'Frictionless conversion directly to technical consultation with principal architects.'
  }
];
