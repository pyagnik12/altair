import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';

import {
  LucideAngularModule,
  AlertTriangle,
  AlertCircle,
  Archive,
  ArrowLeft,
  Book,
  Box,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Circle,
  Clock,
  Cloud,
  Code,
  Copy,
  Cpu,
  Camera,
  Disc,
  Download,
  Edit,
  Eye,
  EyeOff,
  File,
  FilePlus,
  Folder,
  FolderMinus,
  FolderPlus,
  Github,
  Grid,
  HardDrive,
  Heart,
  Home,
  Info,
  MoreVertical,
  MoreHorizontal,
  Paperclip,
  RefreshCcw,
  Settings,
  Save,
  Trash2,
  Loader,
  LogIn,
  Minimize2,
  PlusSquare,
  PlusCircle,
  Repeat,
  Sidebar,
  Sun,
  Terminal,
  Tag,
  User,
  UserCheck,
  Watch,
  X,
  XCircle,
  XSquare,
  Zap,
} from 'lucide-angular';

const icons = {
  AlertTriangle,
  AlertCircle,
  Archive,
  ArrowLeft,
  Book,
  Box,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Circle,
  Clock,
  Cloud,
  Code,
  Copy,
  Cpu,
  Camera,
  Disc,
  Download,
  Edit,
  Eye,
  EyeOff,
  File,
  FilePlus,
  Folder,
  FolderMinus,
  FolderPlus,
  Github,
  Grid,
  HardDrive,
  Heart,
  Home,
  Info,
  MoreVertical,
  MoreHorizontal,
  Paperclip,
  RefreshCcw,
  Settings,
  Save,
  Trash2,
  Loader,
  LogIn,
  Minimize2,
  PlusSquare,
  PlusCircle,
  Repeat,
  Sidebar,
  Sun,
  Terminal,
  Tag,
  User,
  UserCheck,
  Watch,
  X,
  XCircle,
  XSquare,
  Zap,
};

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, LucideAngularModule.pick(icons)],
  exports: [IconComponent, LucideAngularModule],
})
export class IconsModule {}
