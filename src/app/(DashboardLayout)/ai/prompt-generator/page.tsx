'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Plus, 
  Copy, 
  Edit, 
  Trash2, 
  Star, 
  Facebook, 
  Twitter,
  Filter
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';

// Types
interface Prompt {
  id: string;
  title: string;
  content: string;
  category: 'google' | 'facebook' | 'tiktok' | 'twitter' | 'threads' | 'instagram' | 'linkedin' | 'general';
  type: 'system' | 'user';
  tags: string[];
  createdAt: string;
  createdBy: string;
  usageCount: number;
  isFavorite: boolean;
}

// Mock data - System and user prompts
const mockPrompts: Prompt[] = [
  // Google Ads Prompts
  {
    id: '1',
    title: 'Google Ads - Headline Generator',
    content: 'Create 5 compelling Google Ads headlines for product [PRODUCT_NAME] targeting [TARGET_AUDIENCE]. Each headline must be maximum 30 characters, include main keyword and strong call-to-action.',
    category: 'google',
    type: 'system',
    tags: ['headline', 'copywriting', 'ctr'],
    createdAt: '2026-01-15',
    createdBy: 'Admin',
    usageCount: 245,
    isFavorite: true
  },
  {
    id: '2',
    title: 'Google Search Ads - Description',
    content: 'Write 3 Google Search ad descriptions (max 90 characters each) for [SERVICE/PRODUCT]. Focus on unique benefits, address customer pain points and include clear CTA.',
    category: 'google',
    type: 'system',
    tags: ['description', 'search ads', 'benefits'],
    createdAt: '2026-01-16',
    createdBy: 'Admin',
    usageCount: 189,
    isFavorite: true
  },
  {
    id: '3',
    title: 'Google Display Ads - Banner Copy',
    content: 'Create content for 300x250 Google Display ad about [TOPIC]. Include: concise headline, body text (2-3 sentences), and CTA button text. Optimize for mobile.',
    category: 'google',
    type: 'system',
    tags: ['display', 'banner', 'visual'],
    createdAt: '2026-01-17',
    createdBy: 'Admin',
    usageCount: 156,
    isFavorite: false
  },
  {
    id: '4',
    title: 'Google Ads - Negative Keywords',
    content: 'Suggest 20 negative keywords for Google Ads campaign about [PRODUCT/SERVICE] to eliminate irrelevant traffic and optimize budget.',
    category: 'google',
    type: 'user',
    tags: ['keywords', 'optimization', 'budget'],
    createdAt: '2026-01-18',
    createdBy: 'John Smith',
    usageCount: 98,
    isFavorite: false
  },

  // Facebook Ads Prompts
  {
    id: '5',
    title: 'Facebook Ads - Carousel Ad Copy',
    content: 'Write content for Facebook carousel ad with 5 slides about [PRODUCT/SERVICE]. Each slide needs: headline (40 characters), short description (125 characters). Create a story throughout 5 slides.',
    category: 'facebook',
    type: 'system',
    tags: ['carousel', 'storytelling', 'engagement'],
    createdAt: '2026-01-14',
    createdBy: 'Admin',
    usageCount: 312,
    isFavorite: true
  },
  {
    id: '6',
    title: 'Facebook Video Ads - Script',
    content: 'Create script for 30-second Facebook video ad about [PRODUCT]. Include: first 3-second hook, problem introduction, solution, and strong CTA. Format: [TIME] - [ACTION] - [CONTENT].',
    category: 'facebook',
    type: 'system',
    tags: ['video', 'script', 'engagement'],
    createdAt: '2026-01-13',
    createdBy: 'Admin',
    usageCount: 278,
    isFavorite: true
  },
  {
    id: '7',
    title: 'Facebook Lead Ads - Form Questions',
    content: 'Suggest 5 effective questions for Facebook Lead Ads form for [SERVICE/PRODUCT]. Questions must balance between collecting important information and not annoying users.',
    category: 'facebook',
    type: 'system',
    tags: ['lead generation', 'form', 'conversion'],
    createdAt: '2026-01-12',
    createdBy: 'Admin',
    usageCount: 203,
    isFavorite: false
  },
  {
    id: '8',
    title: 'Facebook Retargeting - Audience Segments',
    content: 'Create 5 Facebook retargeting audience segments for [INDUSTRY]. Each segment includes: criteria, appropriate message, and optimal retargeting duration.',
    category: 'facebook',
    type: 'user',
    tags: ['retargeting', 'audience', 'strategy'],
    createdAt: '2026-01-20',
    createdBy: 'Sarah Johnson',
    usageCount: 167,
    isFavorite: true
  },

  // TikTok Ads Prompts
  {
    id: '9',
    title: 'TikTok Ads - Viral Video Concept',
    content: 'Create 3 viral TikTok Ads video ideas for [PRODUCT] targeting Gen Z. Each idea includes: concept, hook, trend to apply, hashtags, and reason why it will go viral.',
    category: 'tiktok',
    type: 'system',
    tags: ['viral', 'genz', 'creative'],
    createdAt: '2026-01-10',
    createdBy: 'Admin',
    usageCount: 445,
    isFavorite: true
  },
  {
    id: '10',
    title: 'TikTok UGC Style - Script Template',
    content: 'Write UGC (User Generated Content) style script for TikTok Ad about [PRODUCT]. Style: natural, authentic, like real user review. Length 15-20 seconds. Include: problem, discovery, result.',
    category: 'tiktok',
    type: 'system',
    tags: ['ugc', 'authentic', 'conversion'],
    createdAt: '2026-01-11',
    createdBy: 'Admin',
    usageCount: 389,
    isFavorite: true
  },
  {
    id: '11',
    title: 'TikTok Hashtag Strategy',
    content: 'Suggest hashtag strategy for TikTok Ads about [TOPIC]. Include: 3 currently trending hashtags, 3 niche hashtags, 2 branded hashtags. Explain why each hashtag was chosen.',
    category: 'tiktok',
    type: 'user',
    tags: ['hashtag', 'reach', 'trending'],
    createdAt: '2026-01-19',
    createdBy: 'Mike Chen',
    usageCount: 234,
    isFavorite: false
  },

  // Twitter/X Ads Prompts
  {
    id: '12',
    title: 'Twitter/X - Thread Campaign',
    content: 'Create a Twitter thread (8-10 tweets) promoting [PRODUCT/SERVICE]. First tweet must have strong hook, middle tweets provide value, last tweet has clear CTA. Each tweet max 280 characters.',
    category: 'twitter',
    type: 'system',
    tags: ['thread', 'storytelling', 'engagement'],
    createdAt: '2026-01-09',
    createdBy: 'Admin',
    usageCount: 178,
    isFavorite: false
  },
  {
    id: '13',
    title: 'X Ads - Promoted Post',
    content: 'Write 5 promoted post variations for X (Twitter) about [TOPIC] (280 characters per post). Each variation tests different angle: benefits, FOMO, social proof, question, statistics.',
    category: 'twitter',
    type: 'system',
    tags: ['promoted', 'copywriting', 'ab-test'],
    createdAt: '2026-01-08',
    createdBy: 'Admin',
    usageCount: 145,
    isFavorite: false
  },

  // Threads Ads Prompts
  {
    id: '14',
    title: 'Threads - Conversational Ad',
    content: 'Create Threads ad content in natural conversational style about [PRODUCT]. Max 500 characters. Use appropriate emojis, friendly tone, end with question to encourage interaction.',
    category: 'threads',
    type: 'system',
    tags: ['conversational', 'community', 'engagement'],
    createdAt: '2026-01-07',
    createdBy: 'Admin',
    usageCount: 156,
    isFavorite: false
  },
  {
    id: '15',
    title: 'Threads Community Building',
    content: 'Suggest 10 Threads posts to build community around [BRAND/TOPIC]. Each post focuses on one aspect: behind-the-scenes, questions, poll, tips, story, etc.',
    category: 'threads',
    type: 'user',
    tags: ['community', 'brand building', 'content series'],
    createdAt: '2026-01-21',
    createdBy: 'Emma Davis',
    usageCount: 89,
    isFavorite: false
  },

  // Instagram Ads Prompts
  {
    id: '16',
    title: 'Instagram Reels Ads - Hook Ideas',
    content: 'Create 10 powerful hooks for Instagram Reels Ads about [INDUSTRY]. Each hook must grab attention in the first second. Include both visual hooks and text hooks.',
    category: 'instagram',
    type: 'system',
    tags: ['reels', 'hooks', 'attention'],
    createdAt: '2026-01-06',
    createdBy: 'Admin',
    usageCount: 298,
    isFavorite: true
  },
  {
    id: '17',
    title: 'Instagram Stories Ads - Interactive',
    content: 'Design concept for 5 Instagram Stories Ads series about [PRODUCT] using interactive stickers (polls, questions, quizzes). Create journey from awareness to conversion.',
    category: 'instagram',
    type: 'system',
    tags: ['stories', 'interactive', 'journey'],
    createdAt: '2026-01-05',
    createdBy: 'Admin',
    usageCount: 267,
    isFavorite: false
  },

  // LinkedIn Ads Prompts
  {
    id: '18',
    title: 'LinkedIn Ads - B2B Value Proposition',
    content: 'Write value proposition for B2B LinkedIn Ads about [SOLUTION/SERVICE]. Focus on ROI, solving enterprise pain points, and specific metrics. Professional tone but not stiff.',
    category: 'linkedin',
    type: 'system',
    tags: ['b2b', 'value proposition', 'professional'],
    createdAt: '2026-01-04',
    createdBy: 'Admin',
    usageCount: 201,
    isFavorite: true
  },
  {
    id: '19',
    title: 'LinkedIn Sponsored Content - Thought Leadership',
    content: 'Create 3 LinkedIn Sponsored Content posts positioning [BRAND] as thought leader in [FIELD]. Each post: unique insight, data/research, actionable takeaways. Length 150-200 words.',
    category: 'linkedin',
    type: 'user',
    tags: ['thought leadership', 'authority', 'content marketing'],
    createdAt: '2026-01-22',
    createdBy: 'Robert Brown',
    usageCount: 134,
    isFavorite: false
  },

  // General/Multi-platform Prompts
  {
    id: '20',
    title: 'Multi-Platform Campaign Theme',
    content: 'Create an overall advertising campaign theme for [SERVICE/PRODUCT] that can be adapted for all platforms (Facebook, Google, TikTok, Twitter, Instagram). Include: big idea, key message, visual direction, tone of voice.',
    category: 'general',
    type: 'system',
    tags: ['campaign', 'strategy', 'multi-platform'],
    createdAt: '2026-01-03',
    createdBy: 'Admin',
    usageCount: 423,
    isFavorite: true
  },
  {
    id: '21',
    title: 'A/B Testing Variations Generator',
    content: 'Create 5 variations for A/B testing [AD_TYPE] about [PRODUCT]. Each variation tests different element: headline, CTA, benefit statement, social proof, pricing angle.',
    category: 'general',
    type: 'system',
    tags: ['ab-testing', 'optimization', 'data-driven'],
    createdAt: '2026-01-02',
    createdBy: 'Admin',
    usageCount: 356,
    isFavorite: true
  }
];

const PromptGeneratorPage = () => {
  const [prompts, setPrompts] = useState<Prompt[]>(mockPrompts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  const [newPrompt, setNewPrompt] = useState({
    title: '',
    content: '',
    category: 'general' as Prompt['category'],
    tags: ''
  });

  // Filter prompts
  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory;
    const matchesType = selectedType === 'all' || prompt.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  // Group prompts by type
  const systemPrompts = filteredPrompts.filter(p => p.type === 'system');
  const userPrompts = filteredPrompts.filter(p => p.type === 'user');

  // Category icons
  const categoryIcons: Record<string, React.ReactNode> = {
    google: '🔍',
    facebook: '👤',
    tiktok: '🎵',
    twitter: '🐦',
    threads: '🧵',
    instagram: '📸',
    linkedin: '💼',
    general: '⭐'
  };

  const categoryLabels: Record<string, string> = {
    google: 'Google Ads',
    facebook: 'Facebook Ads',
    tiktok: 'TikTok Ads',
    twitter: 'X (Twitter)',
    threads: 'Threads',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
    general: 'Multi-Platform'
  };

  const handleCopyPrompt = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success('Prompt copied to clipboard!', {
      description: 'You can now paste it in your AI tool',
    });
  };

  const handleToggleFavorite = (id: string) => {
    setPrompts(prompts.map(p => 
      p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
    ));
    const prompt = prompts.find(p => p.id === id);
    if (prompt) {
      toast.success(
        prompt.isFavorite ? 'Removed from favorites' : 'Added to favorites'
      );
    }
  };

  const handleCreatePrompt = () => {
    if (!newPrompt.title || !newPrompt.content) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    const prompt: Prompt = {
      id: String(prompts.length + 1),
      title: newPrompt.title,
      content: newPrompt.content,
      category: newPrompt.category,
      type: 'user',
      tags: newPrompt.tags.split(',').map(t => t.trim()).filter(t => t),
      createdAt: new Date().toISOString().split('T')[0],
      createdBy: 'Current User',
      usageCount: 0,
      isFavorite: false
    };
    setPrompts([...prompts, prompt]);
    setIsCreateDialogOpen(false);
    setNewPrompt({ title: '', content: '', category: 'general', tags: '' });
    toast.success('Prompt created successfully!');
  };

  const handleEditPrompt = (prompt: Prompt) => {
    setCurrentPrompt(prompt);
    setNewPrompt({
      title: prompt.title,
      content: prompt.content,
      category: prompt.category,
      tags: prompt.tags.join(', ')
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdatePrompt = () => {
    if (!currentPrompt || !newPrompt.title || !newPrompt.content) {
      toast.error('Please fill in all required fields');
      return;
    }

    setPrompts(prompts.map(p => 
      p.id === currentPrompt.id 
        ? {
            ...p,
            title: newPrompt.title,
            content: newPrompt.content,
            category: newPrompt.category,
            tags: newPrompt.tags.split(',').map(t => t.trim()).filter(t => t)
          }
        : p
    ));
    setIsEditDialogOpen(false);
    setCurrentPrompt(null);
    setNewPrompt({ title: '', content: '', category: 'general', tags: '' });
    toast.success('Prompt updated successfully!');
  };

  const handleDeletePrompt = (prompt: Prompt) => {
    setCurrentPrompt(prompt);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeletePrompt = () => {
    if (!currentPrompt) return;
    
    setPrompts(prompts.filter(p => p.id !== currentPrompt.id));
    setIsDeleteDialogOpen(false);
    setCurrentPrompt(null);
    toast.success('Prompt deleted successfully!');
  };

  const PromptCard = ({ prompt }: { prompt: Prompt }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{categoryIcons[prompt.category]}</span>
              <Badge variant={prompt.type === 'system' ? 'default' : 'secondary'}>
                {prompt.type === 'system' ? 'System' : 'User'}
              </Badge>
              <Badge variant="outline">{categoryLabels[prompt.category]}</Badge>
            </div>
            <CardTitle className="text-lg">{prompt.title}</CardTitle>
            <CardDescription className="mt-1">
              By {prompt.createdBy} • {prompt.createdAt} • Used {prompt.usageCount} times
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleToggleFavorite(prompt.id)}
          >
            <Star className={`h-4 w-4 ${prompt.isFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-4 rounded-md mb-3 max-h-32 overflow-y-auto">
          <p className="text-sm whitespace-pre-wrap">{prompt.content}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {prompt.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            onClick={() => handleCopyPrompt(prompt.content)}
            className="flex-1"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          {prompt.type === 'user' && (
            <>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleEditPrompt(prompt)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleDeletePrompt(prompt)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Advertising Prompt Library</h1>
          <p className="text-muted-foreground mt-1">
            Collection of prompts for all social media and advertising platforms
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New Prompt
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Prompt</DialogTitle>
              <DialogDescription>
                Create your own prompt for reuse
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newPrompt.title}
                  onChange={(e) => setNewPrompt({ ...newPrompt, title: e.target.value })}
                  placeholder="e.g., Facebook Ads - Summer Campaign"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newPrompt.category}
                  onValueChange={(value: Prompt['category']) => 
                    setNewPrompt({ ...newPrompt, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(categoryLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {categoryIcons[value]} {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="content">Prompt Content</Label>
                <Textarea
                  id="content"
                  value={newPrompt.content}
                  onChange={(e) => setNewPrompt({ ...newPrompt, content: e.target.value })}
                  placeholder="Enter your prompt content..."
                  rows={8}
                />
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={newPrompt.tags}
                  onChange={(e) => setNewPrompt({ ...newPrompt, tags: e.target.value })}
                  placeholder="e.g., copywriting, cta, conversion"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreatePrompt}>
                Create Prompt
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{prompts.length}</div>
            <p className="text-sm text-muted-foreground">Total Prompts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{systemPrompts.length}</div>
            <p className="text-sm text-muted-foreground">System Prompts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{userPrompts.length}</div>
            <p className="text-sm text-muted-foreground">User Prompts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">
              {prompts.filter(p => p.isFavorite).length}
            </div>
            <p className="text-sm text-muted-foreground">Favorites</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search prompts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                {Object.entries(categoryLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {categoryIcons[value]} {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Prompt type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="system">System Prompts</SelectItem>
                <SelectItem value="user">User Prompts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Prompts Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">
            All ({filteredPrompts.length})
          </TabsTrigger>
          <TabsTrigger value="system">
            System ({systemPrompts.length})
          </TabsTrigger>
          <TabsTrigger value="user">
            User ({userPrompts.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
          {filteredPrompts.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No prompts found</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {systemPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
          {systemPrompts.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No system prompts available</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="user" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
          {userPrompts.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No user prompts yet</p>
                <Button 
                  className="mt-4" 
                  onClick={() => setIsCreateDialogOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Prompt
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Prompt</DialogTitle>
            <DialogDescription>
              Update your prompt
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-title">Title</Label>
              <Input
                id="edit-title"
                value={newPrompt.title}
                onChange={(e) => setNewPrompt({ ...newPrompt, title: e.target.value })}
                placeholder="e.g., Facebook Ads - Summer Campaign"
              />
            </div>
            <div>
              <Label htmlFor="edit-category">Category</Label>
              <Select
                value={newPrompt.category}
                onValueChange={(value: Prompt['category']) => 
                  setNewPrompt({ ...newPrompt, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categoryLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {categoryIcons[value]} {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="edit-content">Prompt Content</Label>
              <Textarea
                id="edit-content"
                value={newPrompt.content}
                onChange={(e) => setNewPrompt({ ...newPrompt, content: e.target.value })}
                placeholder="Enter your prompt content..."
                rows={8}
              />
            </div>
            <div>
              <Label htmlFor="edit-tags">Tags (comma separated)</Label>
              <Input
                id="edit-tags"
                value={newPrompt.tags}
                onChange={(e) => setNewPrompt({ ...newPrompt, tags: e.target.value })}
                placeholder="e.g., copywriting, cta, conversion"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsEditDialogOpen(false);
              setNewPrompt({ title: '', content: '', category: 'general', tags: '' });
            }}>
              Cancel
            </Button>
            <Button onClick={handleUpdatePrompt}>
              Update Prompt
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the prompt "{currentPrompt?.title}". This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setCurrentPrompt(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeletePrompt} className="bg-destructive hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PromptGeneratorPage;
