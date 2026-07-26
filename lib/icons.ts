
import {
  ShieldCheck,
  Database,
  Server,
  Cpu,
  Cloud,
  Network,
  Router,
  Globe,
  Wifi,
  Lock,
  Eye,
  FileCheck,
  Briefcase,
  Users,
  BarChart,
  BookOpen,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  database: Database,
  server: Server,
  cpu: Cpu,
  cloud: Cloud,
  network: Network,
  router: Router,
  globe: Globe,
  wifi: Wifi,
  lock: Lock,
  eye: Eye,
  fileCheck: FileCheck,
  briefcase: Briefcase,
  users: Users,
  barChart: BarChart,
  bookOpen: BookOpen,
};

export function getIcon(iconName: string) {
  return iconMap[iconName] || null;
}