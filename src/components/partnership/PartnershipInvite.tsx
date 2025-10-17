import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

const PartnershipInvite = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleInvite = async () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to send invitations",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Burada partnership servisini kullanacağız
      const { error } = await supabase
        .from('partnership_invites')
        .insert({
          inviter_id: user.id,
          invitee_email: email,
          status: 'pending'
         } as any);

      if (error) throw error;

      toast({
        title: "Invitation Sent",
        description: `Invitation sent to ${email}`,
      });

      setEmail("");
    } catch (error: any) {
      console.error('Error sending invitation:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send invitation",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter partner's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button 
          onClick={handleInvite}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Invite"}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Invite a partner to share mood insights and support each other.
      </p>
    </div>
  );
};

export default PartnershipInvite;