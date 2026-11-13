/**
 * Single source of truth for the marketing page.
 *
 * Copy lives here, not in JSX. Components stay layout-only, which keeps the
 * page easy to review against the grant application and easy to translate
 * later. Every claim below is taken from the FlowFi BTC grant documents.
 */

const GITHUB = "https://github.com/FlowFi-BTC/FlowFi-BTC";
const EXPLORER = "https://explorer.hiro.so/address";

const REGISTRY_ID =
  "ST1WNVWY7WCJESTHM050RAMRRE44KJTKZKJCSRFCQ.flowfi-registry";
const ESCROW_ID =
  "ST1WNVWY7WCJESTHM050RAMRRE44KJTKZKJCSRFCQ.flowfi-escrow";
const MOCK_SBTC_ID =
  "ST1WNVWY7WCJESTHM050RAMRRE44KJTKZKJCSRFCQ.mock-sbtc-token";

export type FeatureIconName =
  | "bitcoin"
  | "shield"
  | "identity"
  | "privacy"
  | "clock"
  | "lifecycle";

export type MarketingLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type LifecycleStep = {
  id: string;
  label: string;
  detail: string;
  status: string;
  contract: string;
};

export type Feature = {
  id: string;
  icon: FeatureIconName;
  tag: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  tag: string;
  title: string;
  description: string;
  points: readonly string[];
  contract: string;
};

export type ProtocolContract = {
  id: string;
  index: string;
  name: string;
  icon: FeatureIconName;
  kind: string;
  description: string;
  points: readonly string[];
  href: string;
};

export type FooterColumn = {
  title: string;
  links: readonly MarketingLink[];
};

export const site = {
  name: "FlovFi",
  product: "FlowFi BTC",
  copyrightYear: 2026,
  tagline: "Bitcoin-native receivables financing",
  description:
    "FlowFi BTC lets a verified business register a real trade receivable and receive sBTC financing from a capital provider through two non-custodial Clarity contracts on Stacks.",
  disclaimer:
    "FlowFi BTC is a testnet pilot. Contracts are unaudited. Nothing on this page is investment advice.",
  links: {
    app: "https://flowfi-btc.vercel.app/",
    github: GITHUB,
    grant: `${GITHUB}/tree/main/grant-application`,
    architecture: `${GITHUB}/blob/main/grant-application/TECHNICAL_ARCHITECTURE.md`,
    security: `${GITHUB}/blob/main/grant-application/SECURITY_REVIEW.md`,
    risk: `${GITHUB}/blob/main/grant-application/RISK_DISCLOSURE.md`,
    roadmap: `${GITHUB}/blob/main/grant-application/ROADMAP.md`,
    registry: `${EXPLORER}/${REGISTRY_ID}?chain=testnet`,
    escrow: `${EXPLORER}/${ESCROW_ID}?chain=testnet`,
    mockSbtc: `${EXPLORER}/${MOCK_SBTC_ID}?chain=testnet`,
  },
  contracts: {
    registry: REGISTRY_ID,
    escrow: ESCROW_ID,
    mockSbtc: MOCK_SBTC_ID,
  },
} as const;

export const navItems: readonly MarketingLink[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Architecture", href: "#architecture" },
  { label: "Why FlowFi", href: "#product" },
  { label: "Security", href: "#security" },
];

export const hero = {
  eyebrow: "Bitcoin-native receivables · Stacks",
  title: ["Bitcoin capital", "for real-world trade."],
  lead: "A verified business registers a real trade receivable. A capital provider funds it with sBTC. Two Clarity contracts hold the boundary — no pooled fund, no marketplace, no private-key custody.",
  primaryCta: {
    label: "Launch the app",
    href: site.links.app,
    external: true,
  },
  secondaryCta: {
    label: "Read the grant",
    href: site.links.grant,
    external: true,
  },
  status: "Live on Stacks testnet",
  note: "Unaudited pilot · non-custodial by design",
} as const;

export const lifecycleSteps: readonly LifecycleStep[] = [
  {
    id: "register",
    label: "Register business",
    detail: "One business per wallet. Verification is recorded as status, method, and level.",
    status: "Verified",
    contract: "flowfi-registry",
  },
  {
    id: "receivable",
    label: "Register receivable",
    detail: "Debtor, invoice hash, face value, funding amount, and a burn-height due date.",
    status: "Open",
    contract: "flowfi-registry",
  },
  {
    id: "fund",
    label: "Fund with sBTC",
    detail: "The provider funds the exact amount stored in the registry. Funds move into escrow.",
    status: "Funded",
    contract: "flowfi-escrow",
  },
  {
    id: "release",
    label: "Release to business",
    detail: "The admin compliance gate releases funds. The recipient is always the stored business.",
    status: "Released",
    contract: "flowfi-escrow",
  },
  {
    id: "settle",
    label: "Repay or default",
    detail: "The business repays on-chain, or a missed due date is recorded as DEFAULTED.",
    status: "Settled",
    contract: "registry + escrow",
  },
];

export const proofStats = [
  {
    value: "46/46",
    label: "tests passing",
    detail: "26 registry · 20 escrow",
  },
  {
    value: "3",
    label: "contracts on testnet",
    detail: "registry · escrow · mock sBTC",
  },
  {
    value: "2",
    label: "contracts, one boundary",
    detail: "state and value never mix",
  },
  {
    value: "1",
    label: "real pilot cycle",
    detail: "one business · one provider",
  },
] as const;

export const stack = [
  { label: "Stacks", detail: "Bitcoin layer" },
  { label: "sBTC", detail: "SIP-010 asset" },
  { label: "Clarity 3", detail: "Smart contracts" },
  { label: "Leather", detail: "Wallet" },
  { label: "Xverse", detail: "Wallet" },
  { label: "Hiro", detail: "Tooling" },
] as const;

export const protocolContracts: readonly ProtocolContract[] = [
  {
    id: "registry",
    index: "01",
    name: "flowfi-registry",
    icon: "identity",
    kind: "Identity & state",
    description:
      "Business verification, receivable metadata, and lifecycle status. It holds no sBTC, ever.",
    points: [
      "One business per wallet",
      "Verification expiry re-derived on read",
      "Burn-block issue and due dates",
    ],
    href: site.links.registry,
  },
  {
    id: "escrow",
    index: "02",
    name: "flowfi-escrow",
    icon: "shield",
    kind: "sBTC custody & settlement",
    description:
      "Funding, release, repayment, and default. The only contract that moves value.",
    points: [
      "Pulls the exact registry amount",
      "Recipient is never redirectable",
      "Repayment settles atomically",
    ],
    href: site.links.escrow,
  },
];

export const processSteps: readonly ProcessStep[] = [
  {
    number: "01",
    tag: "Registry",
    title: "Register once. Get verified.",
    description:
      "A business connects a Stacks wallet, registers, and completes verification. The result is written on-chain as a status, method, and level — never a vague badge.",
    points: [
      "One business per wallet",
      "Manual pilot review today",
      "Evidence hash only, not the document",
    ],
    contract: "flowfi-registry",
  },
  {
    number: "02",
    tag: "Escrow",
    title: "Register and fund the receivable.",
    description:
      "The verified business registers the invoice. A capital provider reviews it and funds the exact amount directly into escrow — not into a platform wallet.",
    points: [
      "Face value and funding amount",
      "SHA-256 invoice hash on-chain",
      "Provider wallet → escrow",
    ],
    contract: "flowfi-registry → flowfi-escrow",
  },
  {
    number: "03",
    tag: "Settlement",
    title: "Release, repay, settle.",
    description:
      "Escrow releases funds to the business. Repayment moves sBTC back to the provider; a missed due date is recorded as DEFAULTED, not hidden.",
    points: [
      "Admin compliance gate",
      "Atomic repayment",
      "No hidden off-chain state",
    ],
    contract: "flowfi-escrow",
  },
];

export const features: readonly Feature[] = [
  {
    id: "sbtc",
    icon: "bitcoin",
    tag: "sBTC",
    title: "Bitcoin, not a stablecoin substitute.",
    description:
      "A Bitcoin holder finances a real receivable without leaving the Bitcoin asset or off-ramping to fiat.",
  },
  {
    id: "custody",
    icon: "shield",
    tag: "Custody",
    title: "Non-custodial by design.",
    description:
      "FlowFi never holds a user's private key. Funds move wallet → escrow → business through Clarity.",
  },
  {
    id: "identity",
    icon: "identity",
    tag: "Identity",
    title: "Verification is on-chain state.",
    description:
      "Status, method, level, and an evidence hash are recorded on-chain. Expiry is re-derived on every read.",
  },
  {
    id: "privacy",
    icon: "privacy",
    tag: "Privacy",
    title: "The invoice stays off-chain.",
    description:
      "Only a SHA-256 invoice hash touches the chain. The underlying document stays where it belongs.",
  },
  {
    id: "time",
    icon: "clock",
    tag: "Settlement",
    title: "Dates anchor to Bitcoin.",
    description:
      "Issue and due dates are burn-block heights, not wall-clock timestamps that a server can drift.",
  },
  {
    id: "lifecycle",
    icon: "lifecycle",
    tag: "Lifecycle",
    title: "Every transition is auditable.",
    description:
      "OPEN → FUNDED → REPAID or DEFAULTED. Each transition is a contract event, not a database update.",
  },
];

export const security = {
  eyebrow: "Status",
  title: "Testnet pilot. Unaudited. Documented.",
  description:
    "FlowFi BTC is a narrow pilot, not a production investment platform. The limits are named up front — manual verification, unaudited contracts, and a repayment path that may depend on the business acquiring sBTC independently.",
  items: [
    {
      title: "46/46 tests passing",
      description: "26 registry · 20 escrow · 2 full integration paths.",
    },
    {
      title: "Internal security review",
      description:
        "Authorization, custody, token conservation, and known limitations.",
    },
    {
      title: "Risks published",
      description:
        "Off-chain boundaries, manual verification, and the no-self-funding fallback.",
    },
  ],
  chips: ["Unaudited", "Testnet only", "No marketplace", "No pooled fund"],
} as const;

export const footerColumns: readonly FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Launch app", href: site.links.app, external: true },
      { label: "How it works", href: "#how-it-works" },
      { label: "Architecture", href: "#architecture" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    title: "Protocol",
    links: [
      { label: "Registry", href: site.links.registry, external: true },
      { label: "Escrow", href: site.links.escrow, external: true },
      { label: "Mock sBTC", href: site.links.mockSbtc, external: true },
      { label: "GitHub", href: site.links.github, external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Grant application", href: site.links.grant, external: true },
      {
        label: "Technical architecture",
        href: site.links.architecture,
        external: true,
      },
      { label: "Security review", href: site.links.security, external: true },
      { label: "Risk disclosure", href: site.links.risk, external: true },
      { label: "Roadmap", href: site.links.roadmap, external: true },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Stacks", href: "https://www.stacks.co/", external: true },
      {
        label: "sBTC",
        href: "https://docs.stacks.co/concepts/sbtc",
        external: true,
      },
      { label: "Clarity", href: "https://clarity-lang.org/", external: true },
      { label: "Leather", href: "https://leather.io/", external: true },
      { label: "Xverse", href: "https://www.xverse.app/", external: true },
      { label: "Hiro", href: "https://www.hiro.so/", external: true },
    ],
  },
];
