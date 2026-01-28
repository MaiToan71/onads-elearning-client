'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Comment {
  id: string;
  ticketId: string;
  author: string;
  role: 'user' | 'admin';
  message: string;
  timestamp: string;
}

interface Ticket {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  createdAt: string;
  comments?: Comment[];
}

const TicketSupport = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 'TKT-001',
      title: 'Unable to create new campaign',
      description: 'I am getting an error when trying to create a new ad campaign.',
      category: 'Technical',
      priority: 'High',
      status: 'Open',
      createdAt: '2026-01-25',
      comments: [
        {
          id: 'CMT-001',
          ticketId: 'TKT-001',
          author: 'John Doe',
          role: 'user',
          message: 'I have tried refreshing the page but the error persists.',
          timestamp: '2026-01-25 10:30 AM',
        },
        {
          id: 'CMT-002',
          ticketId: 'TKT-001',
          author: 'Support Team',
          role: 'admin',
          message: 'Thank you for reporting this issue. We are investigating and will get back to you shortly.',
          timestamp: '2026-01-25 11:15 AM',
        },
        {
          id: 'CMT-003',
          ticketId: 'TKT-001',
          author: 'Support Team',
          role: 'admin',
          message: 'We have identified the issue. Please clear your browser cache and try again. Let us know if the problem persists.',
          timestamp: '2026-01-25 02:45 PM',
        },
      ],
    },
    {
      id: 'TKT-002',
      title: 'Billing question',
      description: 'I need help understanding my recent invoice.',
      category: 'Billing',
      priority: 'Medium',
      status: 'In Progress',
      createdAt: '2026-01-26',
      comments: [
        {
          id: 'CMT-004',
          ticketId: 'TKT-002',
          author: 'Jane Smith',
          role: 'user',
          message: 'Can you explain the additional charges on my invoice?',
          timestamp: '2026-01-26 09:00 AM',
        },
        {
          id: 'CMT-005',
          ticketId: 'TKT-002',
          author: 'Billing Team',
          role: 'admin',
          message: 'The additional charges are for the premium features you activated. I will send you a detailed breakdown via email.',
          timestamp: '2026-01-26 10:30 AM',
        },
      ],
    },
  ]);

  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [newComment, setNewComment] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket: Ticket = {
      id: `TKT-${String(tickets.length + 1).padStart(3, '0')}`,
      ...formData,
      status: 'Open',
      createdAt: new Date().toISOString().split('T')[0],
      comments: [],
    };
    setTickets([newTicket, ...tickets]);
    setFormData({ title: '', description: '', category: '', priority: '' });
  };

  const handleAddComment = () => {
    if (!newComment.trim() || !selectedTicket) return;

    const comment: Comment = {
      id: `CMT-${Date.now()}`,
      ticketId: selectedTicket.id,
      author: 'John Doe',
      role: 'user',
      message: newComment,
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
    };

    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id === selectedTicket.id) {
        return {
          ...ticket,
          comments: [...(ticket.comments || []), comment],
        };
      }
      return ticket;
    });

    setTickets(updatedTickets);
    setSelectedTicket({
      ...selectedTicket,
      comments: [...(selectedTicket.comments || []), comment],
    });
    setNewComment('');
  };

  const handleViewTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsDialogOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'Closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-orange-100 text-orange-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground mt-2">
          Submit a ticket and our team will get back to you as soon as possible
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Create New Ticket Form */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Create New Ticket</CardTitle>
            <CardDescription>Fill out the form to submit a support request</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Brief description of your issue"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technical">Technical Issue</SelectItem>
                    <SelectItem value="Billing">Billing</SelectItem>
                    <SelectItem value="Account">Account</SelectItem>
                    <SelectItem value="Feature Request">Feature Request</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value) => setFormData({ ...formData, priority: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide detailed information about your issue..."
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Ticket
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tickets List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Your Tickets</CardTitle>
            <CardDescription>View and track your support tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tickets.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No tickets yet. Submit your first support request!</p>
                </div>
              ) : (
                tickets.map((ticket) => (
                  <div key={ticket.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-sm text-muted-foreground">{ticket.id}</span>
                          <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                          <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                        </div>
                        <h3 className="font-semibold text-lg">{ticket.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{ticket.description}</p>
                    <Separator className="my-3" />
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground">
                          <span className="font-medium">Category:</span> {ticket.category}
                        </span>
                        <span className="text-muted-foreground">
                          <span className="font-medium">Created:</span> {ticket.createdAt}
                        </span>
                        <span className="text-muted-foreground">
                          <span className="font-medium">Comments:</span> {ticket.comments?.length || 0}
                        </span>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleViewTicket(ticket)}>
                        View Details
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ticket Details Dialog with Comment History */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Ticket Details - {selectedTicket?.id}</DialogTitle>
            <DialogDescription>View ticket information and conversation history</DialogDescription>
          </DialogHeader>

          {selectedTicket && (
            <div className="space-y-4">
              {/* Ticket Info */}
              <div className="border rounded-lg p-4 bg-muted/50">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getStatusColor(selectedTicket.status)}>{selectedTicket.status}</Badge>
                  <Badge className={getPriorityColor(selectedTicket.priority)}>{selectedTicket.priority}</Badge>
                  <span className="text-sm text-muted-foreground">Category: {selectedTicket.category}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{selectedTicket.title}</h3>
                <p className="text-sm text-muted-foreground">{selectedTicket.description}</p>
                <p className="text-xs text-muted-foreground mt-2">Created: {selectedTicket.createdAt}</p>
              </div>

              {/* Comment History */}
              <div>
                <h4 className="font-semibold mb-3">Conversation History</h4>
                <ScrollArea className="h-[300px] border rounded-lg p-4">
                  <div className="space-y-4">
                    {selectedTicket.comments && selectedTicket.comments.length > 0 ? (
                      selectedTicket.comments.map((comment) => (
                        <div
                          key={comment.id}
                          className={`flex gap-3 ${
                            comment.role === 'admin' ? 'flex-row-reverse' : 'flex-row'
                          }`}
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className={comment.role === 'admin' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}>
                              {comment.role === 'admin' ? 'A' : 'U'}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`flex-1 ${
                              comment.role === 'admin' ? 'text-right' : 'text-left'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {comment.role === 'admin' && <Badge variant="outline" className="text-xs">Admin</Badge>}
                              <span className="text-sm font-medium">{comment.author}</span>
                              {comment.role === 'user' && <Badge variant="outline" className="text-xs">User</Badge>}
                            </div>
                            <div
                              className={`inline-block rounded-lg p-3 max-w-[80%] ${
                                comment.role === 'admin'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted'
                              }`}
                            >
                              <p className="text-sm">{comment.message}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{comment.timestamp}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground py-8">No comments yet. Start the conversation!</p>
                    )}
                  </div>
                </ScrollArea>
              </div>

              {/* Add Comment */}
              <div className="space-y-2">
                <Label htmlFor="new-comment">Add Comment</Label>
                <div className="flex gap-2">
                  <Textarea
                    id="new-comment"
                    placeholder="Type your message..."
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Help Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Browse our comprehensive documentation and guides
            </p>
            <Button variant="outline" className="w-full">
              View Docs
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Find answers to frequently asked questions
            </p>
            <Button variant="outline" className="w-full">
              View FAQs
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Get in touch with our support team directly
            </p>
            <Button variant="outline" className="w-full">
              Contact
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TicketSupport;
