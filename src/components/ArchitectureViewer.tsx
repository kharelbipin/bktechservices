import React, { useState } from 'react';
import {
  Server,
  Database,
  Lock,
  Globe,
  CheckCircle2,
  Sparkles,
  Code,
  Shield,
  Layers,
  Info,
  Copy,
  Check
} from 'lucide-react';

export const ArchitectureViewer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'frontend' | 'gateway' | 'services' | 'database'>('frontend');
  const [showAdvancedCode, setShowAdvancedCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const layers = {
    frontend: {
      title: 'Frontend & Client Applications',
      subtitle: 'Modern Web, Single-Page Apps & Responsive Portals',
      simpleBenefits: {
        security: 'Strict client-side token management (HttpOnly cookies, CSP headers) that protects user sessions.',
        scalability: 'Static asset caching over global edge CDN networks ensuring near-instant page rendering worldwide.',
        maintainability: 'Reusable component libraries and strong TypeScript typing preventing interface regressions.'
      },
      description:
        'Client-side applications built with React, Next.js, and Angular deliver fluid, responsive user experiences. We implement clean state management, modular component architecture, and responsive designs that run seamlessly across mobile phones, tablets, and desktop workstations.',
      techBadges: ['React', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      components: ['Responsive Customer Portals', 'Operational Single-Page Apps (SPA)', 'Retail Point-of-Sale Interfaces', 'Offline-First Client Caching'],
      codeSample: `// Modern TypeScript API client with resilient retry logic
export async function executeApiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(\`/api/v1/\${endpoint}\`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options
  });
  
  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || \`Request failed with status \${res.status}\`);
  }
  
  return res.json() as Promise<T>;
}`
    },
    gateway: {
      title: 'API Gateway & Security Layer',
      subtitle: 'Traffic Routing, Rate Limiting & Authentication',
      simpleBenefits: {
        security: 'Centralized firewall, TLS 1.3 encryption, and OAuth2/JWT verification before any request touches backend logic.',
        scalability: 'Intelligent load distribution that routes incoming traffic to healthy service instances automatically.',
        maintainability: 'Single place to manage API versioning, CORS policies, and rate limits without touching individual services.'
      },
      description:
        'The API Gateway acts as the secure front door to your business applications. It validates credentials, monitors for malicious request patterns, manages rate limiting, and routes clean requests directly to the responsible backend services.',
      techBadges: ['Azure API Management', 'OAuth2 / JWT', 'TLS 1.3', 'Reverse Proxy', 'OpenAPI Specs'],
      components: ['Token Authentication & Validation', 'Rate Limiting & Traffic Throttling', 'Cross-Origin Resource Sharing (CORS)', 'Centralized Request Logging'],
      codeSample: `// Gateway routing and rate limit configuration (Illustrative Reference)
{
  "apiGateway": {
    "version": "v1",
    "cors": { "allowedOrigins": ["https://app.yourdomain.com"] },
    "security": { "authScheme": "BearerJWT", "validateIssuer": true },
    "routes": [
      { "path": "/api/orders/*", "upstream": "order-service", "rateLimitPerMin": 150 },
      { "path": "/api/inventory/*", "upstream": "inventory-service", "rateLimitPerMin": 300 }
    ]
  }
}`
    },
    services: {
      title: 'Application Services & Business Logic',
      subtitle: 'High-Throughput .NET Core & C# APIs in Containers',
      simpleBenefits: {
        security: 'Role-based access controls (RBAC) enforced directly at the service boundary with clean parameter validation.',
        scalability: 'Independent containerized pods that scale dynamically based on CPU and memory demands.',
        maintainability: 'Domain-Driven Design (DDD) with clear separation between business logic, data access, and controllers.'
      },
      description:
        'Our backend services are built predominantly with .NET Core and C#, offering industry-leading execution speed and rock-solid memory management. We package services into Docker containers deployed onto Microsoft Azure or AWS, ensuring smooth deployments without service interruptions.',
      techBadges: ['.NET Core', 'C#', 'Docker', 'Kubernetes (AKS / EKS)', 'Azure App Services'],
      components: ['RESTful & gRPC Endpoints', 'Asynchronous Background Workers', 'Domain-Driven Business Logic', 'Automated Health Check Probes'],
      codeSample: `// Clean ASP.NET Core service endpoint with dependency injection
public class OrderEndpoint : IEndpoint
{
    public void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapPost("/api/orders", async (CreateOrderCommand cmd, IOrderService service) =>
        {
            var result = await service.CreateOrderAsync(cmd);
            return result.IsSuccess 
                ? Results.Created($"/api/orders/{result.Value.Id}", result.Value)
                : Results.BadRequest(result.Error);
        });
    }
}`
    },
    database: {
      title: 'Database Persistence & Caching Tier',
      subtitle: 'Relational SQL Server, PostgreSQL & Redis Cache',
      simpleBenefits: {
        security: 'Transparent data encryption (TDE) at rest, parameterized queries preventing SQL injection, and automated encrypted backups.',
        scalability: 'Read replicas and in-memory Redis caching that offload database strain during high-traffic intervals.',
        maintainability: 'Versioned database migrations (Entity Framework / Flyway) ensuring predictable schema rollouts.'
      },
      description:
        'Data integrity is paramount for any business application. We utilize enterprise relational databases like Microsoft SQL Server and PostgreSQL with strict ACID transactional guarantees, coupled with Redis in-memory caching to deliver rapid query speeds while maintaining reliable backups.',
      techBadges: ['SQL Server', 'PostgreSQL', 'Redis Cache', 'Entity Framework', 'Automated Backups'],
      components: ['ACID-Compliant Relational Storage', 'In-Memory Key-Value Caching', 'Automated Daily Encrypted Backups', 'Connection Pooling & Index Tuning'],
      codeSample: `-- Illustrative schema design with integrity constraints
CREATE TABLE Orders (
    OrderId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWSEQUENTIALID(),
    CustomerId INT NOT NULL,
    TotalAmount DECIMAL(18, 2) NOT NULL CHECK (TotalAmount >= 0),
    OrderStatus VARCHAR(32) NOT NULL DEFAULT 'Pending',
    CreatedAt DATETIMEOFFSET NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    CONSTRAINT FK_Orders_Customer FOREIGN KEY (CustomerId) REFERENCES Customers(Id)
);
CREATE INDEX IX_Orders_Customer_Date ON Orders (CustomerId, CreatedAt DESC);`
    }
  };

  const currentLayer = layers[activeLayer];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentLayer.codeSample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-20 lg:py-28 border-b border-slate-800 bg-[#060b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* US-05: Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
            How We Design Modern Systems.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We architect robust, multi-tiered software applications engineered for longevity. Select a tier below to explore how we structure client apps, security gateways, backend logic, and persistent databases.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Note: The diagrams and architectural patterns below represent illustrative reference designs. Every production deployment is tailored to your business scale.</span>
          </div>
        </div>

        {/* 4 Tier Navigation Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { id: 'frontend', label: '1. Frontend & Client Apps', icon: <Globe className="w-4 h-4" /> },
            { id: 'gateway', label: '2. API Gateway & Security', icon: <Lock className="w-4 h-4" /> },
            { id: 'services', label: '3. Application Services', icon: <Server className="w-4 h-4" /> },
            { id: 'database', label: '4. Database & Storage', icon: <Database className="w-4 h-4" /> }
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveLayer(item.id as any)}
              className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                activeLayer === item.id
                  ? 'bg-amber-500/10 border-amber-500/80 text-white shadow-lg'
                  : 'bg-[#0a1226] border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className={activeLayer === item.id ? 'text-amber-400' : 'text-slate-500'}>
                {item.icon}
              </div>
              <div className="text-xs sm:text-sm font-bold truncate">{item.label}</div>
            </button>
          ))}
        </div>

        {/* Interactive Architecture Card (US-05) */}
        <div className="rounded-2xl border border-slate-800 bg-[#0a1226] p-6 sm:p-8 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Clear Non-Jargon Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                  <span>{currentLayer.subtitle}</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-cyan-400">Illustrative Design</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentLayer.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentLayer.description}
              </p>

              {/* Three Core Benefits in Plain English (US-05) */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Architectural Principles:
                </h4>
                
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="p-3 rounded-xl bg-[#060b18] border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Security</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentLayer.simpleBenefits.security}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#060b18] border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-1">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Scalability</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentLayer.simpleBenefits.scalability}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#060b18] border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Maintainability</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentLayer.simpleBenefits.maintainability}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {currentLayer.techBadges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#060b18] text-amber-300 border border-slate-800"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code Toggle */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAdvancedCode(!showAdvancedCode)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <Code className="w-4 h-4" />
                  <span>{showAdvancedCode ? 'Hide Illustrative Code Example' : 'View Code & Implementation Details'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Blueprint or Code Viewer */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              {showAdvancedCode ? (
                <div className="rounded-xl border border-slate-800 bg-[#060b18] p-4 font-mono text-xs text-slate-300 overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                    <span>Illustrative Code Pattern</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="overflow-x-auto text-[11px] leading-relaxed max-h-80">
                    <code>{currentLayer.codeSample}</code>
                  </pre>
                </div>
              ) : (
                <div className="p-6 sm:p-8 rounded-xl border border-slate-800 bg-[#060b18] flex flex-col justify-center items-center text-center space-y-4 shadow-inner">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                    <Layers className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <div className="text-base font-bold text-white mb-1.5">
                      Decoupled Tier Architecture
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                      Each layer operates independently. Updating user interfaces or adding third-party integrations will never disrupt backend stability or corrupt database records.
                    </p>
                  </div>

                  <div className="w-full pt-4 border-t border-slate-800/80 space-y-2 text-left">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Included Components:
                    </div>
                    {currentLayer.components.map((comp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono text-amber-400/90 bg-amber-950/30 px-3 py-1 rounded-full border border-amber-800/40 mt-2">
                    Custom Engineered for Every Client
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
